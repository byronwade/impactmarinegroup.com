'use client'

import { useState, useEffect } from 'react'
import Head from 'next/head'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Anchor, Waves, Wind, ChevronRight, ChevronLeft, Heart, MessageCircle, Instagram, Star, Award, Wrench, Users, Quote } from "lucide-react"
import Image from 'next/image'

export function ImprovedBoatSales() {
  const [currentBoat, setCurrentBoat] = useState(0)
  const [postStats, setPostStats] = useState([])

  useEffect(() => {
    setPostStats(Array(6).fill(0).map(() => ({
      likes: Math.floor(Math.random() * 200) + 50,
      comments: Math.floor(Math.random() * 30) + 5
    })))
  }, [])

  const boats = [
    { name: "Luxury Yacht 2024", price: "1,200,000", image: "https://placehold.co/800x600" },
    { name: "Speedboat Deluxe", price: "500,000", image: "https://placehold.co/800x600" },
    { name: "Family Cruiser", price: "800,000", image: "https://placehold.co/800x600" },
  ]

  const nextBoat = () => setCurrentBoat((prev) => (prev + 1) % boats.length)
  const prevBoat = () => setCurrentBoat((prev) => (prev - 1 + boats.length) % boats.length)

  const brands = [
    { name: "Godfrey", logo: "https://placehold.co/100x32", width: 100, height: 32 },
    { name: "Tige", logo: "https://placehold.co/100x32", width: 100, height: 32 },
    { name: "Yamaha", logo: "https://placehold.co/100x32", width: 100, height: 32 },
    { name: "Sea Ray", logo: "https://placehold.co/100x32", width: 100, height: 32 },
    { name: "Bayliner", logo: "https://placehold.co/100x32", width: 100, height: 32 },
    { name: "Boston Whaler", logo: "https://placehold.co/100x32", width: 100, height: 32 },
  ]

  const testimonials = [
    { name: "John D.", text: "The team at Ocean Wave Boats made buying my first yacht a breeze. Their expertise and customer service are unmatched!", rating: 5 },
    { name: "Sarah M.", text: "I've been a loyal customer for years. Their maintenance services keep my boat in top shape season after season.", rating: 5 },
    { name: "Mike R.", text: "The selection of boats is impressive. I found exactly what I was looking for at a great price.", rating: 4 },
  ]

  return (
    <>
      <Head>
        <title>Ocean Wave Boats | Premium Boat Sales & Charters in Georgia</title>
        <meta name="description" content="Experience luxury and adventure with Ocean Wave Boats. We offer premium boat sales, charters, and marine services in Georgia. Explore our fleet of yachts, speedboats, and cruisers." />
        <meta name="keywords" content="boat sales, yacht charters, marine services, luxury boats, Georgia" />
        <link rel="canonical" href="https://www.oceanwaveboats.com" />
        <meta property="og:title" content="Ocean Wave Boats | Premium Boat Sales & Charters" />
        <meta property="og:description" content="Discover luxury boating experiences with Ocean Wave Boats. Premium sales, charters, and services in Georgia." />
        <meta property="og:image" content="https://www.oceanwaveboats.com/og-image.jpg" />
        <meta property="og:url" content="https://www.oceanwaveboats.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="min-h-screen">
        <main>

          <section aria-label="Featured Brands" className="bg-gray-900 py-6 w-full">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between space-x-8 overflow-x-auto">
                {brands.map((brand, index) => (
                  <div key={index} className="flex-shrink-0">
                    <Image
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      width={brand.width}
                      height={brand.height}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="fleet" aria-labelledby="fleet-heading" className="py-16 bg-gradient-to-b from-blue-50 to-white w-full">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 id="fleet-heading" className="text-4xl font-bold tracking-tighter text-center mb-8 text-blue-900">Discover Our Premium Fleet</h2>
              <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                <div className="w-full lg:w-3/5 relative">
                  <div className="relative aspect-video overflow-hidden rounded-xl shadow-2xl">
                    <Image
                      alt={`${boats[currentBoat].name} - Luxury boat by Ocean Wave Boats`}
                      src={boats[currentBoat].image}
                      className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                      width={500} // Adjust based on your image size
                      height={300} // Adjust based on your image size
                      layout="responsive"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-2xl font-bold mb-2">{boats[currentBoat].name}</h3>
                      <p className="text-lg font-semibold">${boats[currentBoat].price}</p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white"
                    onClick={prevBoat}
                    aria-label="Previous boat"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white"
                    onClick={nextBoat}
                    aria-label="Next boat"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </div>
                <div className="w-full lg:w-2/5 space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold  text-blue-900 mb-2">{boats[currentBoat].name}</h3>
                    <p className="text-lg text-gray-600 mb-4">
                      Experience unparalleled luxury on the high seas with our latest yacht model.
                    </p>
                    <div className="flex flex-wrap gap-4 mb-6">
                      <Badge variant="secondary" className="text-sm">
                        <Waves className="w-4 h-4 mr-1" />
                        Length: 120 ft
                      </Badge>
                      <Badge variant="secondary" className="text-sm">
                        <Anchor className="w-4 h-4 mr-1" />
                        Capacity: 12 guests
                      </Badge>
                      <Badge variant="secondary" className="text-sm">
                        <Wind className="w-4 h-4 mr-1" />
                        Speed: 25 knots
                      </Badge>
                    </div>
                    <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-3 bg-blue-600  hover:bg-blue-700 transition-colors duration-300">
                      Request a Viewing
                    </Button>
                  </div>
                </div>
              </div>
              <div className="mt-12">
                <h4 className="text-xl font-semibold text-blue-900 mb-4">More from Our Fleet</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {boats.map((boat, index) => (
                    <Card key={index} className={`cursor-pointer transition-all duration-300 ${index === currentBoat ? 'ring-2 ring-blue-500 shadow-lg' : 'shadow  hover:shadow-md'}`}>
                      <CardContent className="p-2">
                        <div className="aspect-video relative overflow-hidden rounded-md">
                          <Image
                            alt={`${boat.name} - Luxury boat by Ocean Wave Boats`}
                            src={boat.image}
                            className="object-cover w-full h-full"
                            width={500} // Adjust based on your image size
                            height={300} // Adjust based on your image size
                            layout="responsive"
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

          <section id="services" aria-labelledby="services-heading" className="py-24 bg-gradient-to-b from-blue-50 to-white w-full">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <Badge variant="secondary" className="mb-4 text-blue-600">
                  <Award className="w-4 h-4 mr-2" />
                  Premier Boat Dealer
                </Badge>
                <h2 id="services-heading" className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Georgia&apos;s Leader in Boat Sales & Marine Service</h2>
                <p className="text-xl text-blue-700 max-w-3xl mx-auto">
                  Offering active boaters the best brands at the best prices, we&apos;re proud to be Lake Lanier&apos;s premier dealer for top boat manufacturers.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
                  <div className="md:flex">
                    <div className="md:w-2/5">
                      <Image
                        alt="Godfrey Pontoon Boat - Luxury pontoon by Ocean Wave Boats"
                        src="https://placehold.co/300x400"
                        width={300}
                        height={400}
                      />
                    </div>
                    <div className="md:w-3/5">
                      <CardHeader className="bg-blue-50">
                        <CardTitle className="text-2xl font-bold text-blue-900 flex items-center">
                          <Anchor className="w-6 h-6 mr-3 text-blue-700" />
                          Godfrey Pontoons
                        </CardTitle>
                        <p className="text-lg text-blue-700">Sweetwater, Aqua Patio, San Pan</p>
                      </CardHeader>
                      <CardContent className="p-6">
                        <p className="text-gray-700 mb-6">
                          For over 60 years, Godfrey has been building quality boats with innovative layouts and top-performing materials. Powered by Yamaha Outboards, we bring performance and features to you at an affordable price.
                        </p>
                        <Button className="w-full sm:w-auto">
                          Learn More About Godfrey
                          <ChevronRight className="ml-2 h-5 w-5" />
                        </Button>
                      </CardContent>
                    </div>
                  </div>
                </Card>
                
                <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
                  <div className="md:flex">
                    <div className="md:w-2/5">
                      <Image
                        alt="Tige Boat - Premium wakesurfing boat by Ocean Wave Boats"
                        src="https://placehold.co/300x400"
                        width={300}
                        height={400}
                      />
                    </div>
                    <div className="md:w-3/5">
                      <CardHeader className="bg-blue-50">
                        <CardTitle className="text-2xl font-bold text-blue-900 flex items-center">
                          <Waves className="w-6 h-6 mr-3 text-blue-700" />
                          Tige Boats
                        </CardTitle>
                        <p className="text-lg text-blue-700">Premium Wakesurfing Experience</p>
                      </CardHeader>
                      <CardContent className="p-6">
                        <p className="text-gray-700 mb-6">
                          We were blown away by the shape and quality of the wave behind a Tige RZ2. The style, quality, and performance of Tige impressed us so much that our Pro Shop business expanded to become a Tige dealer.
                        </p>
                        <Button className="w-full sm:w-auto">
                          Explore Tige Boats
                          <ChevronRight className="ml-2 h-5 w-5" />
                        </Button>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </div>

              <Card className="bg-blue-900 text-white overflow-hidden">
                <CardContent className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-center md:text-left md:w-2/3">
                      <h3 className="text-3xl md:text-4xl font-bold mb-4">We Don&apos;t Just Sell Stuff - We Live It!</h3>
                      <p className="text-xl md:text-2xl text-blue-100">
                        Our passion for boating goes beyond sales. We&apos;re active boaters ourselves, ensuring we provide you with the best advice and service based on real-world experience.
                      </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6 md:w-1/3">
                      <div className="flex flex-col items-center">
                        <div className="bg-blue-800 rounded-full p-4 mb-2">
                          <Users className="w-8 h-8 text-blue-200" />
                        </div>
                        <span className="text-sm font-medium">Expert Team</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="bg-blue-800 rounded-full p-4 mb-2">
                          <Wrench className="w-8 h-8 text-blue-200" />
                        </div>
                        <span className="text-sm font-medium">Quality Service</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="bg-blue-800 rounded-full p-4 mb-2">
                          <Award className="w-8 h-8 text-blue-200" />
                        </div>
                        <span className="text-sm font-medium">Top Brands</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="testimonials" aria-labelledby="testimonials-heading" className="py-24 bg-gradient-to-b from-blue-100 to-white w-full overflow-hidden">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 id="testimonials-heading" className="text-4xl font-bold text-center text-blue-900 mb-16">What Our Customers Say</h2>
              <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center opacity-5">
                  <Quote className="w-96 h-96 text-blue-500" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                        <span className="text-3xl font-bold text-white">{testimonial.name.charAt(0)}</span>
                      </div>
                      <div className="text-center">
                        <p className="text-lg text-gray-700 italic mb-4 relative">
                          <span className="absolute -top-4 -left-2 text-4xl text-blue-300">&quot;</span>
                          {testimonial.text}
                          <span className="absolute -bottom-4 -right-2 text-4xl text-blue-300">&quot;</span>
                        </p>
                        <p className="font-semibold text-blue-900">{testimonial.name}</p>
                        <div className="flex items-center justify-center mt-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-16 text-center">
                <Button variant="outline" size="lg" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                  Read More Reviews
                </Button>
              </div>
            </div>
          </section>

          <section id="social" aria-labelledby="social-heading" className="py-16 bg-gradient-to-b from-blue-50 to-white w-full">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-center mb-12">
                <Anchor className="text-blue-600 w-10 h-10 mr-3" />
                <h2 id="social-heading" className="text-4xl font-bold text-blue-900">Sail Through Our Instagram</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {postStats.map((stats, index) => (
                  <Card key={index} className="overflow-hidden border-2 border-blue-200 hover:border-blue-400 transition-colors duration-300 shadow-lg">
                    <CardContent className="p-4 bg-blue-50">
                      <div className="flex items-center space-x-4">
                        <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                          <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">OW</span>
                        </span>
                        <div>
                          <p className="text-sm font-medium text-blue-900">Ocean Wave Boats</p>
                          <p className="text-xs text-blue-600">@oceanwaveboats</p>
                        </div>
                      </div>
                    </CardContent>
                    <div className="relative group">
                      <Image
                        alt={`Instagram post ${index + 1} by Ocean Wave Boats`}
                        src="https://placehold.co/400x400"
                        width={400}
                        height={400}
                        layout="responsive"
                        className="transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                        <Button variant="secondary" size="sm" className="text-xs bg-white/80 hover:bg-white">
                          <Heart className="h-4 w-4 mr-1 text-red-500" />
                          {stats?.likes ?? 0}
                        </Button>
                        <Button variant="secondary" size="sm" className="text-xs bg-white/80 hover:bg-white">
                          <MessageCircle className="h-4 w-4 mr-1 text-blue-500" />
                          {stats?.comments ?? 0}
                        </Button>
                      </div>
                    </div>
                    <CardContent className="p-4 bg-white">
                      <p className="text-sm">
                        <span className="font-medium text-blue-900">oceanwaveboats</span>{' '}
                        <span className="text-gray-700">
                          {[
                            "Cruising into the weekend with our latest model! 🚤 #BoatLife",
                            "Perfect day for a test drive on the water. Who wants to join? 🌊",
                            "Just arrived: The all-new SpeedMaster 3000. Come see it in person! 😍",
                            "Summer is calling, and so are our boats! ☀️🛥️ #SummerAdventures",
                            "Sunset cruise on our luxury yacht. This could be you! 🌅 #YachtLife",
                            "New fishing boats in stock! Perfect for your next catch 🎣 #FishingLife"
                          ][index]}
                        </span>
                      </p>
                      <Button variant="link" size="sm" className="mt-2 p-0 h-auto text-blue-600 hover:text-blue-800">
                        View all {Math.floor(Math.random() * 20) + 5} comments
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-12">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Instagram className="w-5 h-5 mr-2" />
                  Follow Our Nautical Journey
                </Button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}