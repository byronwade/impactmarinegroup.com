import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import { getStructuredPages } from "@/lib/sanity";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pages = await getStructuredPages();

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <header className="border-b">
              <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">
                  Impact Marine
                </Link>
                <nav>
                  <ul className="flex space-x-4">
                    {pages
                      .sort((a, b) => (a.order || 0) - (b.order || 0))
                      .map((page) => (
                        <li key={page._id}>
                          <Link href={page.path} className="hover:underline">
                            {page.title}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </nav>
                <ModeToggle />
              </div>
            </header>
            <main className="flex-grow">
              {children}
            </main>
            <footer className="border-t">
              <div className="container mx-auto px-4 py-4 text-center">
                © 2024 Impact Marine Group. All rights reserved.
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
