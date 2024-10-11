import Image from 'next/image';
import { PortableText } from '@portabletext/react';

export function RenderBlock({ block }) {
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
    default:
      return <PortableText value={block} />;
  }
}