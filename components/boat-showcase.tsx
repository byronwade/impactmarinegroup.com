'use client'

import { useState } from "react"
import Image from "next/legacy/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Anchor, Waves, Wind } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const featuredBoats = [
  { 
    id: 1, 
    name: "Luxury Yacht 2024", 
    price: 1200000, 
    image: "/placeholder.svg?height=600&width=800", 
    description: "Experience unparalleled luxury on the high seas with our latest yacht model.",
    specs: { length: "120 ft", capacity: "12 guests", speed: "25 knots" }
  },
  { 
    id: 2, 
    name: "Speedboat Deluxe", 
    price: 85000, 
    image: "/placeholder.svg?height=600&width=800", 
    description: "Feel the thrill of cutting through waves at high speed in this sleek speedboat.",
    specs: { length: "30 ft", capacity: "6 guests", speed: "60 knots" }
  },
  { 
    id: 3, 
    name: "Family Cruiser", 
    price: 150000, 
    image: "/placeholder.svg?height=600&width=800", 
    description: "Perfect for unforgettable family adventures on the water, spacious and comfortable.",
    specs: { length: "45 ft", capacity: "10 guests", speed: "30 knots" }
  },
]

export function BoatShowcase() {
  const [currentBoat, setCurrentBoat] = useState(0)

  const nextBoat = () => setCurrentBoat((prev) => (prev + 1) % featuredBoats.length)
  const prevBoat = () => setCurrentBoat((prev) => (prev - 1 + featuredBoats.length) % featuredBoats.length)

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container px-4 md:px-6">
        <h2 className="text-4xl font-bold tracking-tighter text-center mb-8 text-blue-900">
          Discover Our Premium Fleet
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-3/5 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentBoat}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-video overflow-hidden rounded-xl shadow-2xl"
              >
                <Image
                  src={featuredBoats[currentBoat].image}
                  alt={featuredBoats[currentBoat].name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-2xl font-bold mb-2">{featuredBoats[currentBoat].name}</h3>
                  <p className="text-lg font-semibold">
                    ${featuredBoats[currentBoat].price.toLocaleString()}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevBoat} 
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white"
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous boat</span>
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextBoat} 
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white"
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next boat</span>
            </Button>
          </div>
          <div className="w-full lg:w-2/5 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentBoat}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-3xl font-bold text-blue-900 mb-2">{featuredBoats[currentBoat].name}</h3>
                <p className="text-lg text-gray-600 mb-4">{featuredBoats[currentBoat].description}</p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <Badge variant="secondary" className="text-sm">
                    <Waves className="w-4 h-4 mr-1" />
                    Length: {featuredBoats[currentBoat].specs.length}
                  </Badge>
                  <Badge variant="secondary" className="text-sm">
                    <Anchor className="w-4 h-4 mr-1" />
                    Capacity: {featuredBoats[currentBoat].specs.capacity}
                  </Badge>
                  <Badge variant="secondary" className="text-sm">
                    <Wind className="w-4 h-4 mr-1" />
                    Speed: {featuredBoats[currentBoat].specs.speed}
                  </Badge>
                </div>
                <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
                  Request a Viewing
                </Button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <div className="mt-12">
          <h4 className="text-xl font-semibold text-blue-900 mb-4">More from Our Fleet</h4>
          <div className="grid grid-cols-3 gap-4">
            {featuredBoats.map((boat, index) => (
              <Card
                key={boat.id}
                className={`cursor-pointer transition-all duration-300 ${
                  index === currentBoat ? 'ring-2 ring-blue-500 shadow-lg' : 'opacity-70 hover:opacity-100'
                }`}
                onClick={() => setCurrentBoat(index)}
              >
                <CardContent className="p-2">
                  <div className="aspect-video relative overflow-hidden rounded-md">
                    <Image
                      src={boat.image}
                      alt={boat.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <p className="mt-2 text-sm font-medium text-blue-900 truncate">{boat.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}