import React from 'react';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';

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
      return (
        <div className="relative h-screen">
          <video autoPlay muted loop playsInline className="absolute top-0 left-0 w-full h-full object-cover">
            <source src="/impactlogo.mp4" type="video/mp4" />
          </video>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="text-white text-center">
              <h1 className="text-4xl font-bold mb-4">{block.heading}</h1>
              <p className="text-xl">{block.tagline}</p>
            </div>
          </div>
        </div>
      );
    default:
      return <PortableText value={block} />;
  }
}
