import { useEffect, useState } from 'react';
import Image from 'next/legacy/image';
import { getImage } from '@/lib/getImage';

interface Position {
    top: string;
    left: string;
    bottom?: string;
}

interface ImageConfig {
    src: string;
    alt: string;
    animationDelay: number;
    size: { width: number; height: number };
    position: Position;
    boxShadow?: string;
    filter?: string;
    borderRadius?: string;
    className?:string;
}


interface AnimationProps {
    images: ImageConfig[];
}

const Animation = ({ images }: AnimationProps) => {
    const [animations, setAnimations] = useState<boolean[]>([]);

    useEffect(() => {
        images.forEach((image, index) => {
            setTimeout(() => {
                setAnimations((prev) => {
                    const newAnimations = [...prev];
                    newAnimations[index] = true;
                    return newAnimations;
                });
            }, image.animationDelay);
        });
    }, [images]);

    return (
        <div className="relative flex justify-center items-center w-full">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`${animations[index] ? 'animate-fade-in-r-large' : 'hidden'} absolute`}
                    style={{
                        top: image.position.top,
                        left: image.position.left,
                        boxShadow: image.boxShadow || 'none',
                        width: `${image.size.width}px`,
                        height: `${image.size.height}px`,
                        borderRadius: image.borderRadius || '0px',
                        filter: image.filter || 'none',
                    }}
                >
                    <Image
                        loading="eager"
                        src={getImage(image.src, true)} // Assuming getImage handles the src path correctly
                        draggable="false"
                        width={image.size.width}
                        height={image.size.height}
                        alt={image.alt}
                        className={image.className}
                    />
                </div>
            ))}
        </div>
    );
};

export default Animation;
