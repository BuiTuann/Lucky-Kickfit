import Image from "next/image";

const features = [
  {
    number: "01",
    title: "Lớp nhóm",
    description:
      "Các lớp Kickfit, Muay Thai và Kickboxing phù hợp cho nhiều độ tuổi và trình độ, từ trẻ em mới bắt đầu đến người lớn muốn giảm cân, cải thiện thể lực và học kỹ năng vận động trong môi trường năng động.",
    image: "/lop-nhom.jpg",
    imageAlt: "Lớp tập Kickfit nhóm tại Lucky Kickfit",
  },
  {
    number: "02",
    title: "PT 1 : 1",
    description:
      "Chương trình tập luyện được thiết kế riêng theo thể trạng, độ tuổi và mục tiêu của từng học viên. HLV theo sát từng buổi tập để hướng dẫn kỹ thuật, cải thiện thể lực và hỗ trợ bạn tiến bộ đúng cách.",
    image: "/anh1.jpg",
    imageAlt: "Huấn luyện viên đang hướng dẫn học viên",
  }
];

const reasons = [
  {
    number: "01",
    title: "Phù hợp cho trẻ em",
    description:
      "Các bài tập được điều chỉnh phù hợp với độ tuổi và khả năng vận động, giúp trẻ rèn luyện thể lực, sự nhanh nhẹn và tính kỷ luật trong môi trường vui vẻ.",
  },
  {
    number: "02",
    title: "Hỗ trợ giảm cân",
    description:
      "Các bài tập vận động toàn thân giúp tăng cường thể lực, đốt cháy năng lượng và hỗ trợ quá trình cải thiện vóc dáng khi kết hợp với chế độ sinh hoạt phù hợp.",
  },
  {
    number: "03",
    title: "Mọi trình độ",
    description:
      "Dù bạn chưa từng tập võ hay đã có kinh nghiệm, chương trình đều có thể được điều chỉnh theo thể trạng và mục tiêu riêng của bạn.",
  },
  {
    number: "04",
    title: "HLV tận tâm",
    description:
      "Đội ngũ HLV trực tiếp hướng dẫn và theo sát quá trình tập luyện, giúp học viên hiểu đúng kỹ thuật và duy trì động lực trong suốt hành trình.",
  },
];

export default function TrainingFeatures() {
  return (
    <section id="programs" className="bg-[#0A0A0A] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Why Choose Lucky Kickfit */}
        <div className="mb-24 border-y border-zinc-800 py-16 sm:mb-32 sm:py-20">
          <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-16">

            {/* Image */}
            <div className="group relative min-h-[400px] overflow-hidden lg:min-h-[600px]">
              <Image
                src="/lop-nhom-1.jpg"
                alt="Không gian tập luyện tại Lucky Kickfit"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Red Accent */}
              <div className="absolute bottom-0 left-0 h-1 w-1/3 bg-[#DC2626]" />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center">

              {/* Heading */}
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-[#DC2626]">
                  Vì sao Lucky Kickfit?
                </p>

                <h2 className="mt-5 text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl">
                  Không chỉ
                  <br />
                  <span className="text-zinc-500">
                    là nơi tập luyện.
                  </span>
                </h2>

                <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">
                  Từ trẻ em đến người lớn, từ người mới bắt đầu đến người muốn
                  nâng cao thể lực, Lucky Kickfit đồng hành cùng bạn trên hành
                  trình thay đổi bản thân.
                </p>
              </div>

              {/* Reasons */}
              <div className="mt-10 grid gap-px bg-zinc-800 sm:grid-cols-2">
                {reasons.map((reason) => (
                  <div
                    key={reason.number}
                    className="bg-[#0A0A0A] p-6 transition-colors duration-300 hover:bg-zinc-900 sm:p-7"
                  >
                    <span className="text-sm font-black tracking-widest text-[#DC2626]">
                      {reason.number}
                    </span>

                    <h3 className="mt-4 text-lg font-black uppercase tracking-tight text-white sm:text-xl">
                      {reason.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-zinc-400">
                      {reason.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Training Features */}
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
                    Liên hệ để được tư vấn
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