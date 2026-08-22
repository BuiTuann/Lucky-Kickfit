import Image from "next/image";

const features = [
  {
    number: "01",
    title: "Lớp nhóm",
    description:
      "Tập luyện cùng những người có cùng mục tiêu trong một môi trường năng động và đầy năng lượng. Các lớp Kickfit, Muay Thai và Kickboxing được HLV hướng dẫn xuyên suốt buổi tập.",
    image: "/lop-nhom-1.jpg",
    imageAlt: "Lớp tập Kickfit nhóm tại Lucky Kickfit",
  },
  {
    number: "02",
    title: "PT 1 : 1",
    description:
      "Chương trình tập luyện được thiết kế riêng theo thể trạng và mục tiêu của bạn. HLV sẽ theo sát từng buổi tập, từ kỹ thuật đến thể lực và quá trình giảm cân.",
    image: "/pt11.jpg",
    imageAlt: "Huấn luyện viên đang hướng dẫn học viên",
  },
  {
    number: "03",
    title: "Môi trường tập luyện",
    description:
      "Không gian tập luyện năng động, thoải mái và thân thiện. Trang thiết bị đầy đủ cùng một cộng đồng luôn sẵn sàng hỗ trợ bạn trong hành trình thay đổi bản thân.",
    image: "/lop-nhom.jpg",
    imageAlt: "Không gian tập luyện tại Lucky Kickfit",
  },
];

export default function TrainingFeatures() {
  return (
    <section id="programs" className="bg-[#0A0A0A] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-20 max-w-3xl">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#DC2626]">
            Lucky Kickfit
          </p>

          <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl">
            Tập luyện
            <br />
            <span className="text-zinc-500">phù hợp với bạn.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
            Dù bạn muốn giảm cân, cải thiện thể lực hay học các kỹ năng chiến
            đấu, Lucky Kickfit luôn có chương trình phù hợp với mục tiêu của
            bạn.
          </p>
        </div>

        {/* Features */}
        <div className="space-y-20 lg:space-y-28">
          {features.map((feature, index) => {
            const reversed = index % 2 !== 0;

            return (
              <article
                key={feature.number}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                {/* Image */}
                <div
                  className={`group relative overflow-hidden ${
                    reversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
                    <Image
                      src={feature.image}
                      alt={feature.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Red Accent */}
                  <div className="absolute bottom-0 left-0 h-1 w-1/3 bg-[#DC2626]" />
                </div>

                {/* Content */}
                <div
                  className={`${
                    reversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <span className="text-5xl font-black tracking-tight text-[#DC2626] sm:text-6xl">
                    {feature.number}
                  </span>

                  <h3 className="mt-3 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl md:text-5xl">
                    {feature.title}
                  </h3>

                  <div className="mt-6 h-px w-16 bg-zinc-700" />

                  <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
                    {feature.description}
                  </p>

                  <a
                    href="#trial"
                    className="mt-8 inline-flex items-center text-sm font-black uppercase tracking-wide text-white transition-colors hover:text-[#DC2626]"
                  >
                    Tìm hiểu thêm
                    <span className="ml-3 text-[#DC2626]">→</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}