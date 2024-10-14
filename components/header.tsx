import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, PhoneCall, Ship } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Ship className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-primary">Impact Marine</span>
          </Link>

          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-sm font-medium hover:text-primary">
                Home
              </Link>
              <Link href="/about-us" className="text-sm font-medium hover:text-primary">
                About Us
              </Link>
              <Link href="/boats" className="text-sm font-medium hover:text-primary">
                Boats
              </Link>
              <Link href="/services" className="text-sm font-medium hover:text-primary">
                Services
              </Link>
              <Link href="/financing" className="text-sm font-medium hover:text-primary">
                Financing
              </Link>
              <Link href="/contact" className="text-sm font-medium hover:text-primary">
                Contact
              </Link>
            </nav>

            <Button asChild size="sm" className="hidden md:flex">
              <a href="tel:+17708817808" className="flex items-center">
                <PhoneCall className="h-3 w-3 mr-2" />
                (770) 881-7808
              </a>
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px]">
                <nav className="flex flex-col space-y-4 mt-6">
                  <Link href="/" className="text-lg font-medium">Home</Link>
                  <Link href="/about" className="text-lg font-medium">About Us</Link>
                  <Link href="/boats" className="text-lg font-medium">Boats</Link>
                  <Link href="/services" className="text-lg font-medium">Services</Link>
                  <Link href="/financing" className="text-lg font-medium">Financing</Link>
                  <Link href="/contact" className="text-lg font-medium">Contact</Link>
                </nav>
                <div className="mt-8">
                  <Button asChild className="w-full">
                    <a href="tel:+17708817808" className="flex items-center justify-center">
                      <PhoneCall className="h-4 w-4 mr-2" />
                      (770) 881-7808
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}