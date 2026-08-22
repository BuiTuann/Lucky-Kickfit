export default function Pricing() {
  const plans = [
    {
      name: "Lớp nhóm",
      price: "1.500.000",
      unit: "/ tháng",
      description:
        "Tập luyện Kickfit, Muay Thai và Kickboxing cùng cộng đồng Lucky Kickfit.",
      features: [
        "Tham gia các lớp nhóm",
        "HLV hướng dẫn xuyên suốt buổi tập",
        "Môi trường tập luyện năng động",
      ],
      featured: true,
    },
    {
      name: "PT 1 : 1",
      price: "350.000",
      unit: "/ buổi",
      description:
        "Buổi tập cá nhân được thiết kế theo mục tiêu và thể trạng của bạn.",
      features: [
        "HLV theo sát 1 : 1",
        "Giáo án cá nhân hóa",
        "Tập trung vào mục tiêu riêng",
      ],
      featured: false,
    },
  ];

  return (
    <section id="pricing" className="bg-[#0A0A0A] px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#DC2626]">
            Bảng giá
          </p>

          <h2 className="mt-4 text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">
            Chọn cách tập
            <br />
            <span className="text-zinc-500">phù hợp với bạn.</span>
          </h2>

          <p className="mt-6 text-base leading-7 text-zinc-400">
            Bắt đầu hành trình thay đổi bản thân cùng Lucky Kickfit.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col border p-8 sm:p-10 ${
                plan.featured
                  ? "border-[#DC2626] bg-zinc-950"
                  : "border-zinc-800 bg-[#111111]"
              }`}
            >
              {/* Featured Label */}
              {plan.featured && (
                <div className="absolute right-6 top-0 -translate-y-1/2 bg-[#DC2626] px-4 py-1.5 text-xs font-black uppercase tracking-wider text-white">
                  Phổ biến
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-xl font-black uppercase tracking-tight text-white">
                {plan.name}
              </h3>

              <p className="mt-4 min-h-[56px] text-sm leading-6 text-zinc-400">
                {plan.description}
              </p>

              {/* Price */}
              <div className="mt-8 flex items-baseline gap-2">
                <span className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                  {plan.price}
                </span>

                <span className="text-sm font-medium text-zinc-500">
                  VNĐ {plan.unit}
                </span>
              </div>

              {/* Divider */}
              <div className="my-8 h-px bg-zinc-800" />

              {/* Features */}
              <ul className="flex flex-1 flex-col gap-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-zinc-300"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#450A0A] text-xs font-bold text-[#DC2626]">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#trial"
                className={`mt-10 flex items-center justify-center px-6 py-4 text-sm font-black uppercase tracking-wide transition-colors ${
                  plan.featured
                    ? "bg-[#DC2626] text-white hover:bg-[#B91C1C]"
                    : "border border-zinc-700 text-white hover:border-white hover:bg-white hover:text-black"
                }`}
              >
                Tập thử miễn phí
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}