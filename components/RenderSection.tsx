import Image from 'next/image';
import Link from 'next/link';

// Hero Section
const Hero = ({ heading, tagline, backgroundImage }) => (
  <div className="relative h-screen">
    {backgroundImage && (
      <Image
        src={backgroundImage.asset.url}
        alt={heading}
        layout="fill"
        objectFit="cover"
      />
    )}
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-4">{heading}</h1>
        <p className="text-xl">{tagline}</p>
      </div>
    </div>
  </div>
);

// Text with Image Section
const TextWithImage = ({ heading, text, image, imagePosition }) => (
  <div className={`flex flex-col md:flex-row items-center my-16 ${imagePosition === 'right' ? 'md:flex-row-reverse' : ''}`}>
    <div className="md:w-1/2 p-8">
      <h2 className="text-3xl font-bold mb-4">{heading}</h2>
      <p>{text}</p>
    </div>
    <div className="md:w-1/2">
      {image && (
        <Image
          src={image.asset.url}
          alt={heading}
          width={500}
          height={300}
          objectFit="cover"
        />
      )}
    </div>
  </div>
);

// Call to Action Section
const CallToAction = ({ heading, text, buttonText, buttonLink }) => (
  <div className="bg-blue-100 p-16 my-16 text-center">
    <h2 className="text-3xl font-bold mb-4">{heading}</h2>
    <p className="mb-8">{text}</p>
    <Link href={buttonLink}>
      <a className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300">
        {buttonText}
      </a>
    </Link>
  </div>
);

// Testimonial Section
const Testimonial = ({ quote, author, authorImage }) => (
  <div className="bg-gray-100 p-16 my-16">
    <div className="max-w-2xl mx-auto text-center">
      <p className="text-xl italic mb-4">"{quote}"</p>
      <div className="flex items-center justify-center">
        {authorImage && (
          <Image
            src={authorImage.asset.url}
            alt={author}
            width={50}
            height={50}
            className="rounded-full mr-4"
          />
        )}
        <span className="font-bold">{author}</span>
      </div>
    </div>
  </div>
);

// Featured Products Section
const FeaturedProducts = ({ heading, products }) => (
  <div className="my-16">
    <h2 className="text-3xl font-bold mb-8 text-center">{heading}</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {products.map((product) => (
        <div key={product._id} className="border rounded-lg overflow-hidden">
          {product.image && (
            <Image
              src={product.image.asset.url}
              alt={product.name}
              width={300}
              height={200}
              objectFit="cover"
            />
          )}
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-lg font-bold">${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export function RenderSection({ section }) {
  switch (section._type) {
    case 'hero':
      return <Hero {...section} />;
    case 'textWithImage':
      return <TextWithImage {...section} />;
    case 'callToAction':
      return <CallToAction {...section} />;
    case 'testimonial':
      return <Testimonial {...section} />;
    case 'featuredProducts':
      return <FeaturedProducts {...section} />;
    default:
      return null;
  }
}