'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { Button } from "@/components/ui/button";
import { Anchor, Volume2, VolumeX } from "lucide-react";

// Define an interface for the block prop
export type Block = {
  _type: string;
  asset: {
    url: string;
    metadata: {
      dimensions: { width: number; height: number };
    };
  };
  alt?: string;
  heading?: string;
  text?: string;
  buttonLink?: string;
  buttonText?: string;
  imagePosition?: string;
  componentName?: string;
  props?: Record<string, unknown>;
  image: {
    asset: {
      url: string;
      metadata: {
        dimensions: { width: number; height: number };
      };
    };
    alt?: string;
  };
};

export function RenderBlock({ block }: { block: Block }) {
  switch (block._type) {
    case 'image':
      return (
        <Image
          src={block.asset.url}
          alt={block.alt || ''}
          width={block.asset.metadata.dimensions.width}
          height={block.asset.metadata.dimensions.height}
          className="my-8"
        />
      );
    case 'callToAction':
      return (
        <div className="bg-blue-100 p-6 my-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">{block.heading}</h2>
          <p className="mb-4">{block.text}</p>
          <a href={block.buttonLink} className="bg-blue-500 text-white px-4 py-2 rounded">
            {block.buttonText}
          </a>
        </div>
      );
    case 'textWithImage':
      return (
        <div className={`flex my-8 ${block.imagePosition === 'left' ? 'flex-row-reverse' : 'flex-row'}`}>
          <div className="w-1/2 p-4">
            <h2 className="text-2xl font-bold mb-4">{block.heading}</h2>
            <p>{block.text}</p>
          </div>
          <div className="w-1/2">
            <Image
              src={block.image.asset.url}
              alt={block.image.alt || ''}
              width={block.image.asset.metadata.dimensions.width}
              height={block.image.asset.metadata.dimensions.height}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      );
    case 'customComponent':
      // You can implement custom rendering logic here based on the component name and props
      return (
        <div>
          <p>Custom Component: {block.componentName}</p>
          <pre>{JSON.stringify(block.props, null, 2)}</pre>
        </div>
      );
    case 'hero':
      return <HeroSection />;
    default:
      return <PortableText value={block} />;
  }
}

function HeroSection() {
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = document.querySelector('video');
    if (video) {
      video.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/impactlogo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/70 to-gray-900/60" />
      
      {/* More apparent wave animation */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-gray-900 to-transparent">
        <svg 
          className="absolute bottom-0 w-full h-full" 
          viewBox="0 0 1440 320" 
          preserveAspectRatio="none"
        >
          <path 
            fill="rgba(255, 255, 255, 0.1)" 
            fillOpacity="1" 
            d="M0,32L48,37.3C96,43,192,53,288,80C384,107,480,149,576,149.3C672,149,768,107,864,101.3C960,96,1056,128,1152,133.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="
                M0,32L48,37.3C96,43,192,53,288,80C384,107,480,149,576,149.3C672,149,768,107,864,101.3C960,96,1056,128,1152,133.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                M0,64L48,74.7C96,85,192,107,288,122.7C384,139,480,149,576,144C672,139,768,117,864,106.7C960,96,1056,96,1152,106.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                M0,32L48,37.3C96,43,192,53,288,80C384,107,480,149,576,149.3C672,149,768,107,864,101.3C960,96,1056,128,1152,133.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </path>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-white px-4 sm:px-6 lg:px-8 flex flex-col items-start max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 leading-tight">
          Sail Beyond <br />
          <span className="text-blue-300">Your Imagination</span>
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl mb-8 max-w-2xl text-gray-300">
          Experience luxury and adventure with our premium boat charters
        </p>
        <Button size="lg" className="text-lg px-8 py-3 bg-blue-500 hover:bg-blue-600 transition-colors duration-300">
          Book Your Journey
        </Button>
      </div>

      {/* Floating element */}
      <div className="absolute bottom-20 right-10 animate-bounce">
        <div className="bg-blue-500 text-white rounded-full p-4 shadow-lg">
          <Anchor size={32} />
        </div>
      </div>

      {/* Mute/Unmute button */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="absolute top-4 right-4 bg-gray-800/50 hover:bg-gray-700/50 text-white rounded-full p-2 transition-colors duration-300"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </button>
    </section>
  );
}
