import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, PhoneCall, Ship } from "lucide-react"

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${className}`}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default function Header() {
  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-end h-16">
          <Link href="/" className="mr-auto flex items-center space-x-2">
            <Ship className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-primary">Impact Marine</span>
          </Link>

          <NavigationMenu className="hidden md:flex mr-4">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Our Boats</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem href="/boats/new" title="New Boats">
                      Explore our collection of brand new boats for sale.
                    </ListItem>
                    <ListItem href="/boats/used" title="Used Boats">
                      Find great deals on our quality pre-owned boats.
                    </ListItem>
                    <ListItem href="/boats/custom" title="Custom Orders">
                      Design your dream boat with our expert team.
                    </ListItem>
                    <ListItem href="/boats/featured" title="Featured Boat">
                      Discover our latest and most popular boat models.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/financing" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Financing
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Service</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem href="/service/maintenance" title="Maintenance">
                      Regular maintenance and tune-ups for your boat.
                    </ListItem>
                    <ListItem href="/service/repairs" title="Repairs">
                      Expert repair services for all boat types.
                    </ListItem>
                    <ListItem href="/service/upgrades" title="Upgrades">
                      Enhance your boat with the latest technologies and features.
                    </ListItem>
                    <ListItem href="/service/winterization" title="Winterization">
                      Prepare your boat for the off-season with our winterization services.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-4">
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
                  <Link href="/boats" className="text-lg font-medium">Our Boats</Link>
                  <Link href="/financing" className="text-lg font-medium">Financing</Link>
                  <Link href="/service" className="text-lg font-medium">Service</Link>
                  <Link href="/about" className="text-lg font-medium">About</Link>
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
