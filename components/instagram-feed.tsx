'use client'

import { Heart, MessageCircle, Anchor, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"

const instagramPosts = [
  {
    id: 1,
    imageUrl: "/placeholder.svg?height=400&width=400",
    caption: "Cruising into the weekend with our latest model! 🚤 #BoatLife",
    likes: 120,
    comments: 15,
  },
  {
    id: 2,
    imageUrl: "/placeholder.svg?height=400&width=400",
    caption: "Perfect day for a test drive on the water. Who wants to join? 🌊",
    likes: 95,
    comments: 8,
  },
  {
    id: 3,
    imageUrl: "/placeholder.svg?height=400&width=400",
    caption: "Just arrived: The all-new SpeedMaster 3000. Come see it in person! 😍",
    likes: 150,
    comments: 22,
  },
  {
    id: 4,
    imageUrl: "/placeholder.svg?height=400&width=400",
    caption: "Summer is calling, and so are our boats! ☀️🛥️ #SummerAdventures",
    likes: 88,
    comments: 10,
  },
  {
    id: 5,
    imageUrl: "/placeholder.svg?height=400&width=400",
    caption: "Sunset cruise on our luxury yacht. This could be you! 🌅 #YachtLife",
    likes: 200,
    comments: 30,
  },
  {
    id: 6,
    imageUrl: "/placeholder.svg?height=400&width=400",
    caption: "New fishing boats in stock! Perfect for your next catch 🎣 #FishingLife",
    likes: 75,
    comments: 12,
  },
]

export function InstagramFeed() {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <Anchor className="text-blue-600 w-10 h-10 mr-3" />
          <h2 className="text-4xl font-bold text-blue-900">Sail Through Our Instagram</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instagramPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden border-2 border-blue-200 hover:border-blue-400 transition-colors duration-300 shadow-lg">
              <CardHeader className="p-4 bg-blue-50">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@oceanwaveboats" />
                    <AvatarFallback>OW</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium text-blue-900">Ocean Wave Boats</p>
                    <p className="text-xs text-blue-600">@oceanwaveboats</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0 relative group">
                <Image
                  src={post.imageUrl}
                  alt={`Instagram post ${post.id}`}
                  width={400}
                  height={400}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                  <Button variant="secondary" size="sm" className="bg-white/80 hover:bg-white">
                    <Heart className="h-4 w-4 mr-1 text-red-500" />
                    {post.likes}
                  </Button>
                  <Button variant="secondary" size="sm" className="bg-white/80 hover:bg-white">
                    <MessageCircle className="h-4 w-4 mr-1 text-blue-500" />
                    {post.comments}
                  </Button>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col items-start p-4 bg-white">
                <p className="text-sm">
                  <span className="font-medium text-blue-900">oceanwaveboats</span>{" "}
                  <span className="text-gray-700">{post.caption}</span>
                </p>
                <Button variant="link" size="sm" className="mt-2 p-0 h-auto text-blue-600 hover:text-blue-800">
                  View all {post.comments} comments
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="default" size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            <Instagram className="w-5 h-5 mr-2" />
            Follow Our Nautical Journey
          </Button>
        </div>
      </div>
    </section>
  )
}