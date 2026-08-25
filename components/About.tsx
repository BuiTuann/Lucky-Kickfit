import Image from "next/image";

const coaches = [
  {
    id: "coach-01",
    name: "Tên HLV",
    role: "HLV Kickfit / Muay Thai",
    image: "/somebs",
    story:
      "Câu chuyện của HLV sẽ được cập nhật tại đây. Bạn có thể giới thiệu về hành trình tập luyện, kinh nghiệm thi đấu và lý do HLV bắt đầu gắn bó với việc huấn luyện.",
  },
  {
    id: "coach-02",
    name: "Tên HLV",
    role: "HLV Kickfit / PT 1 : 1",
    image: "/images/coach-2.jpg",
    story:
      "Câu chuyện của HLV sẽ được cập nhật tại đây. Chia sẻ về kinh nghiệm, chuyên môn và cách HLV đồng hành cùng học viên trong quá trình tập luyện.",
  },
];

export default function About() {
  return (
    <main className="bg-[#0A0A0A] text-white" id="about">
      {/* Intro */}

      {/* Philosophy */}
      <section className="border-y border-zinc-800">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
            {/* Left */}
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#DC2626]">
                Triết lý tập luyện
              </p>

              <h2 className="mt-5 text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
                Không chỉ
                <br />
                <span className="text-zinc-500">là tập luyện.</span>
              </h2>
            </div>

            {/* Right */}
            <div className="flex items-center">
              <div className="max-w-xl">
                <p className="text-xl font-bold leading-8 text-white sm:text-2xl">
                  "Chúng tôi tin rằng tập luyện không chỉ thay đổi cơ thể,
                  mà còn thay đổi cách bạn đối mặt với cuộc sống."
                </p>

                <div className="my-6 h-px w-16 bg-[#DC2626]" />

                <p className="text-base leading-8 text-zinc-400">
                  Với Lucky Kickfit, mỗi buổi tập là một cơ hội để trở nên tốt
                  hơn một chút. Chúng tôi đề cao sự kỷ luật, kiên trì và tinh
                  thần không bỏ cuộc — từ những người mới bắt đầu cho đến những
                  học viên đã có nhiều năm tập luyện.
                </p>

                <p className="mt-5 text-base leading-8 text-zinc-400">
                  Chúng tôi không tìm kiếm người giỏi nhất. Chúng tôi muốn
                  giúp mỗi học viên trở thành phiên bản tốt hơn của chính mình.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coaches Intro */}
      <section className="px-6 pb-12 pt-20 sm:pb-16 sm:pt-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#DC2626]">
              Đội ngũ HLV
            </p>

            <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
              Những người
              <br />
              <span className="text-zinc-500">
                đồng hành cùng bạn.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
              Đằng sau mỗi buổi tập là những HLV luôn sẵn sàng hướng dẫn,
              chỉnh sửa và thúc đẩy bạn vượt qua giới hạn của chính mình.
            </p>
          </div>
        </div>
      </section>

      {/* Coaches */}
      <section className="border-t border-zinc-800">
        <div className="mx-auto max-w-7xl">
          {coaches.map((coach, index) => {
            const reversed = index % 2 !== 0;

            return (
              <article
                key={coach.id}
                className="grid border-b border-zinc-800 lg:grid-cols-2"
              >
                {/* Image */}
                <div
                  className={`group relative aspect-[4/5] overflow-hidden bg-zinc-900 ${
                    reversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Image
                    src={coach.image}
                    alt={coach.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute bottom-0 left-0 h-1 w-1/3 bg-[#DC2626]" />
                </div>

                {/* Story */}
                <div
                  className={`flex items-center px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20 ${
                    reversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="max-w-xl">
                    <span className="text-5xl font-black text-[#DC2626] sm:text-6xl">
                      0{index + 1}
                    </span>

                    <h3 className="mt-4 text-4xl font-black uppercase leading-none tracking-tight sm:text-5xl">
                      {coach.name}
                    </h3>

                    <p className="mt-4 text-sm font-bold uppercase tracking-[0.15em] text-zinc-500">
                      {coach.role}
                    </p>

                    <div className="my-6 h-px w-16 bg-zinc-700" />

                    <p className="text-base leading-8 text-zinc-400 sm:text-lg">
                      {coach.story}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}