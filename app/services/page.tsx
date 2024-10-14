import Image from 'next/image'
import Link from 'next/link'
import { Anchor, LifeBuoy, Compass, Sailboat, Ship, Zap, Award, PhoneCall } from 'lucide-react'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">Ocean Dreams Boat Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dive into a world of nautical excellence. From sales to maintenance, we're your compass in the vast sea of boating.
          </p>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-blue-700 mb-8 text-center">Our Premium Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Anchor className="w-12 h-12 text-blue-600" />}
              title="Boat Sales"
              description="Discover your dream vessel from our curated selection of top-quality boats and yachts."
              href="/services/boat-sales"
            />
            <ServiceCard
              icon={<LifeBuoy className="w-12 h-12 text-blue-600" />}
              title="Maintenance & Repair"
              description="Keep your boat in pristine condition with our expert maintenance and repair services."
              href="/services/maintenance-repair"
            />
            <ServiceCard
              icon={<Compass className="w-12 h-12 text-blue-600" />}
              title="Boat Financing"
              description="Navigate the waters of boat financing with our tailored solutions and expert guidance."
              href="/services/financing"
            />
            <ServiceCard
              icon={<Sailboat className="w-12 h-12 text-blue-600" />}
              title="Boat Rentals"
              description="Experience the joy of boating without ownership through our flexible rental program."
              href="/services/rentals"
            />
            <ServiceCard
              icon={<Ship className="w-12 h-12 text-blue-600" />}
              title="Trade-Ins"
              description="Upgrade your vessel with our hassle-free trade-in services and fair valuations."
              href="/services/trade-ins"
            />
            <ServiceCard
              icon={<Zap className="w-12 h-12 text-blue-600" />}
              title="Boating Courses"
              description="Master the art of seamanship with our comprehensive boating courses for all skill levels."
              href="/services/courses"
            />
          </div>
        </section>

        <section className="mb-20 bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6">Why Choose Ocean Dreams?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-4">
                <ListItem icon={<Award />} text="Unparalleled expertise in the boating industry" />
                <ListItem icon={<Anchor />} text="Wide selection of premium boats and yachts" />
                <ListItem icon={<PhoneCall />} text="Exceptional customer service and support" />
                <ListItem icon={<Zap />} text="State-of-the-art maintenance facilities" />
                <ListItem icon={<Compass />} text="Flexible financing options to suit your needs" />
              </ul>
            </div>
            <div className="relative h-64 md:h-auto">
              <Image
                src="https://placehold.co/400x600"
                alt="Luxury yacht on the ocean"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-blue-700 mb-8 text-center">Our Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ProcessStep
              number="1"
              title="Consultation"
              description="Meet with our experts to discuss your boating needs and dreams."
            />
            <ProcessStep
              number="2"
              title="Personalized Solution"
              description="We'll craft a tailored plan, whether it's finding your perfect boat or creating a maintenance schedule."
            />
            <ProcessStep
              number="3"
              title="Smooth Sailing"
              description="Enjoy the water with confidence, backed by our ongoing support and services."
            />
          </div>
        </section>

        <section className="bg-blue-600 text-white rounded-lg p-8 mb-20">
          <h2 className="text-3xl font-semibold mb-4">Ready to Set Sail?</h2>
          <p className="text-xl mb-6">
            Embark on your nautical journey with Ocean Dreams. Our team of experienced professionals is ready to assist you in finding the perfect boat or service to match your needs.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 py-3 px-8 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300"
          >
            Contact Us Today
          </Link>
        </section>
      </main>

      {/* Schema markup for rich snippets */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
        {
          "@context": "https://schema.org",
          "@type": "BoatDealership",
          "name": "Ocean Dreams Boat Dealership",
          "description": "Premium boat sales, maintenance, and services for nautical enthusiasts.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Harbor Drive",
            "addressLocality": "Seaside",
            "addressRegion": "CA",
            "postalCode": "12345",
            "addressCountry": "US"
          },
          "telephone": "+1-234-567-8900",
          "openingHours": "Mo-Sa 09:00-17:00",
          "url": "https://www.oceandreamsboats.com",
          "sameAs": [
            "https://www.facebook.com/oceandreamsboats",
            "https://www.instagram.com/oceandreamsboats"
          ]
        }
      `}} />
    </div>
  )
}

function ServiceCard({ icon, title, description, href }) {
  return (
    <Link href={href} className="block">
      <div className="bg-white rounded-lg shadow-lg p-6 transition duration-300 hover:shadow-xl border border-blue-100 h-full">
        <div className="flex items-center mb-4">
          {icon}
          <h3 className="text-xl font-semibold ml-4 text-blue-700">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  )
}

function ListItem({ icon, text }) {
  return (
    <li className="flex items-center space-x-3">
      <div className="flex-shrink-0 w-5 h-5 text-blue-500">
        {icon}
      </div>
      <span>{text}</span>
    </li>
  )
}

function ProcessStep({ number, title, description }) {
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 text-2xl font-bold mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-blue-700">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}