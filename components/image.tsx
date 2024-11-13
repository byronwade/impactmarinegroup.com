import { memo } from "react";
import Image, { ImageProps } from "next/image";

interface OptimizedImageProps extends Omit<ImageProps, "loading"> {
	src: string;
	alt: string;
}

export const OptimizedImage = memo(function OptimizedImage({ src, alt, ...props }: OptimizedImageProps) {
	return <Image src={src} alt={alt} {...props} loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />;
});
