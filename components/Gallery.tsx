import Image from "next/image";

const images = [
  {
    src: "/anh1.jpg",
    alt: "Lucky Kickfit",
  },
  {
    src: "/anh2.jpg",
    alt: "Lucky Kickfit",
  },
  {
    src: "/anh3.jpg",
    alt: "Lucky Kickfit",
  },
  {
    src: "/anh4.jpg",
    alt: "Lucky Kickfit",
  },
  {
    src: "/anh5.jpg",
    alt: "Lucky Kickfit",
  },
  {
    src: "/anh6.jpg",
    alt: "Lucky Kickfit",
  },
  {
    src: "/anh7.jpg",
    alt: "Lucky Kickfit",
  },
  {
    src: "/anh8.jpg",
    alt: "Lucky Kickfit",
  },
  {
    src: "/anh9.jpg",
    alt: "Lucky Kickfit",
  },
  {
    src: "/anh10.jpg",
    alt: "Lucky Kickfit",
  },
  {
    src: "/anh11.jpg",
    alt: "Lucky Kickfit",
  },
  {
    src: "/anh12.jpg",
    alt: "Lucky Kickfit",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-[#0A0A0A] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#DC2626]">
              Lucky Kickfit
            </p>

            <h2 className="mt-4 text-4xl font-black uppercase tracking-tight text-white sm:text-5xl md:text-6xl">
              Không gian
              <br />
              <span className="text-zinc-500">tập luyện.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-zinc-500">
            Khám phá không gian và những khoảnh khắc tập luyện tại Lucky
            Kickfit.
          </p>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {images.map((image, index) => (
            <div
              key={`gallery-${index}`}
              className="group relative aspect-square overflow-hidden bg-zinc-900"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}