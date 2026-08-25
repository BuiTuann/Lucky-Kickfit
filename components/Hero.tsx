export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-[#0A0A0A]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('lop-nhom-1.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-6 py-20 lg:px-8">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="mb-6 flex flex-wrap items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-zinc-300">
            <span>Kickfit</span>
            <span className="text-[#DC2626]">•</span>
            <span>Muay Thai</span>
            <span className="text-[#DC2626]">•</span>
            <span>Kickboxing</span>
          </div>

          {/* Heading */}
          <h1 className="max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Tập mạnh hơn.
            <br />
    
    
            <span className="text-[#DC2626]">khỏe hơn.</span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg">
            Tập luyện Kickfit, Muay Thai và Kickboxing cùng huấn luyện viên
            chuyên nghiệp. Dù mục tiêu của bạn là giảm cân, tăng thể lực hay
            nâng cao kỹ năng chiến đấu, Lucky Kickfit có chương trình phù hợp
            cho bạn.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#trial"
              className="inline-flex items-center justify-center rounded-md bg-[#DC2626] px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition-all hover:bg-[#B91C1C] hover:scale-[1.02]"
            >
              Tập thử miễn phí
            </a>
          </div>

          {/* Programs */}
          <div className="mt-14 flex flex-wrap gap-x-8 gap-y-4 border-t border-zinc-800 pt-6">
            {[
              "KICKFIT",
              "MUAY THAI",
              "KICKBOXING",
              "GIẢM CÂN",
              "TĂNG CƠ",
              "1-ON-1",
            ].map((item) => (
              <span
                key={item}
                className="text-xs font-bold tracking-[0.15em] text-zinc-400"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}