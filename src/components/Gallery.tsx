import Image from 'next/image'

const images = [
  { src: '/image1.jpg', alt: 'Image 1' },
  { src: '/image2.jpg', alt: 'Image 2' },
  { src: '/image3.jpg', alt: 'Image 3' },
  { src: '/image4.jpg', alt: 'Image 4' },
  { src: '/image5.jpg', alt: 'Image 5' },
  { src: '/image6.jpg', alt: 'Image 6' },
]

export default function Gallery() {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 p-4">
      {images.map((image, index) => (
        <div key={index} className="break-inside-avoid">
          <Image
            src={image.src}
            alt={image.alt}
            width={500}
            height={300}
            className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          />
        </div>
      ))}
    </div>
  )
}