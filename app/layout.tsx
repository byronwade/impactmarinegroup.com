import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import { getStructuredPages } from "@/lib/sanity";
import { getMainMenu } from "@/lib/sanity";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menu = await getMainMenu();
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
                  {pages[0]?.title || 'Home'}
                </Link>
                <nav>
                  <ul className="flex space-x-4">
                    {menu?.items?.map((item, index) => (
                      <li key={index}>
                        <Link href={item.url} className="hover:underline">
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
                <ModeToggle />
              </div>
            </header>
            <main className="flex-grow container mx-auto px-4 py-8">
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
