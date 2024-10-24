'use client'

import { Anchor, Award, Waves, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/legacy/image"

export function LeaderSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-white min-h-screen flex items-center">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-blue-900 mb-6">Georgia&apos;s Leader in Boat Sales & Marine Service</h2>
          <p className="text-2xl text-blue-700 max-w-4xl mx-auto">
            Offering active boaters the best brands at the best prices, we&apos;re proud to be Lake Lanier&apos;s premier dealer for top boat manufacturers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div className="lg:flex">
              <div className="lg:w-1/2">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Godfrey Pontoon Boat"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="lg:w-1/2">
                <CardHeader className="bg-blue-100">
                  <CardTitle className="text-3xl font-bold text-blue-900 flex items-center">
                    <Anchor className="w-8 h-8 mr-3 text-blue-700" />
                    Godfrey Pontoons
                  </CardTitle>
                  <CardDescription className="text-xl text-blue-700">
                    Sweetwater, Aqua Patio, San Pan
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-gray-700 mb-6 text-lg">
                    For over 60 years, Godfrey has been building quality boats with innovative layouts and top-performing materials. Powered by Yamaha Outboards, we bring performance and features to you at an affordable price.
                  </p>
                  <Button variant="default" className="w-full text-lg" size="lg">
                    Learn More About Godfrey
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </div>
            </div>
          </Card>

          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div className="lg:flex">
              <div className="lg:w-1/2">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Tige Boat"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="lg:w-1/2">
                <CardHeader className="bg-blue-100">
                  <CardTitle className="text-3xl font-bold text-blue-900 flex items-center">
                    <Waves className="w-8 h-8 mr-3 text-blue-700" />
                    Tige Boats
                  </CardTitle>
                  <CardDescription className="text-xl text-blue-700">
                    Premium Wakesurfing Experience
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-gray-700 mb-6 text-lg">
                    We were blown away by the shape and quality of the wave behind a Tige RZ2. The style, quality, and performance of Tige impressed us so much that our Pro Shop business expanded to become a Tige dealer.
                  </p>
                  <Button variant="default" className="w-full text-lg" size="lg">
                    Explore Tige Boats
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>

        <div className="bg-blue-900 text-white p-12 rounded-lg shadow-xl">
          <div className="flex flex-col lg:flex-row items-center justify-center mb-8">
            <Award className="w-20 h-20 mb-6 lg:mb-0 lg:mr-8" />
            <h3 className="text-4xl font-bold text-center lg:text-left">We Don&apos;t Just Sell Stuff - We Live It!</h3>
          </div>
          <p className="text-2xl text-center max-w-4xl mx-auto">
            It&apos;s What We Do! Our passion for boating goes beyond sales. We&apos;re active boaters ourselves, ensuring we provide you with the best advice and service based on real-world experience.
          </p>
        </div>
      </div>
    </section>
  )
}