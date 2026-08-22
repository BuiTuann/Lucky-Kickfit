import Image from "next/image";

const coaches = [
  {
    id: "coach-01",
    name: "Đoàn Văn Quang",
    role: "HLV Kickfit / Muay Thai",
    image: "/hero.jpg",
    story:
      "Câu chuyện của HLV sẽ được cập nhật tại đây. Bạn có thể giới thiệu về hành trình tập luyện, kinh nghiệm và lý do bắt đầu huấn luyện.",
  },
  {
    id: "coach-02",
    name: "Tên HLV",
    role: "HLV Kickfit / PT 1 : 1",
    image: "/images/coach-2.jpg",
    story:
      "Câu chuyện của HLV sẽ được cập nhật tại đây. Chia sẻ về kinh nghiệm, chuyên môn và triết lý tập luyện.",
  },
];

export default function About() {
  return (
    <main className="bg-[#0A0A0A] text-white" id="about">
      {/* Intro */}
      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-black uppercase tracking-tight sm:text-5xl md:text-6xl">
            Về Chúng Tôi
          </h1>
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
                  className={`relative aspect-[4/5] overflow-hidden ${
                    reversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Image
                    src={coach.image}
                    alt={coach.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                {/* Story */}
                <div
                  className={`flex items-center px-6 py-16 sm:px-12 lg:px-16 ${
                    reversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="max-w-xl">
                    <span className="text-5xl font-black text-[#DC2626]">
                      0{index + 1}
                    </span>

                    <h2 className="mt-4 text-4xl font-black uppercase tracking-tight sm:text-5xl">
                      {coach.name}
                    </h2>

                    <p className="mt-3 text-sm font-bold uppercase tracking-wider text-zinc-500">
                      {coach.role}
                    </p>

                    <div className="my-8 h-px w-16 bg-zinc-700" />

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