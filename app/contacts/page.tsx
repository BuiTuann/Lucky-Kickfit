import { MapPin, Phone, Mail } from "lucide-react";

const contactInfo = {
  facebook:
    "https://www.facebook.com/profile.php?id=61553195618118&locale=vi_VN",
  phone: "056 918 1111",
  email: "luckykickfit@gmail.com",
  address: "86 Trần Hữu Tước, Phường Đống Đa, Hà Nội",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">

      {/* Contact */}
      <section className="border-y border-zinc-800">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          {/* Information */}
          <div className="px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24">
            <div className="max-w-xl">
              <h2 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">
                Liên hệ với chúng tôi
              </h2>

              <p className="mt-4 text-base leading-7 text-zinc-400">
                Bạn muốn bắt đầu tập luyện? Hãy gọi điện hoặc nhắn tin cho
                Lucky Kickfit để đăng ký một buổi tập thử miễn phí
              </p>

              <div className="mt-10 divide-y divide-zinc-800 border-y border-zinc-800">
                {/* Facebook */}
                <a
                  href={contactInfo.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 py-6"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-zinc-800 group-hover:border-[#DC2626]">
                    <span className="font-black text-zinc-400 group-hover:text-[#DC2626]">
                      f
                    </span>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                      Facebook
                    </p>
                    <p className="mt-1 font-bold group-hover:text-[#DC2626]">
                      Lucky Kickfit
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="group flex items-center gap-4 py-6"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-zinc-800 group-hover:border-[#DC2626]">
                    <Phone
                      size={17}
                      className="text-zinc-400 group-hover:text-[#DC2626]"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                      Điện thoại
                    </p>
                    <p className="mt-1 font-bold group-hover:text-[#DC2626]">
                      {contactInfo.phone}
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="group flex items-center gap-4 py-6"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-zinc-800 group-hover:border-[#DC2626]">
                    <Mail
                      size={17}
                      className="text-zinc-400 group-hover:text-[#DC2626]"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                      Email
                    </p>
                    <p className="mt-1 font-bold group-hover:text-[#DC2626]">
                      {contactInfo.email}
                    </p>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-4 py-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-zinc-800">
                    <MapPin
                      size={17}
                      className="text-zinc-400"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                      Địa chỉ
                    </p>

                    <p className="mt-1 font-bold leading-7">
                      {contactInfo.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="border-t border-zinc-800 lg:border-l lg:border-t-0">
            <div className="relative h-[400px] lg:h-full lg:min-h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d931.1016246454543!2d105.82977834740882!3d21.016414977070642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab802af9cf5b%3A0x73510f2da5e14f05!2zODYgVHLhuqduIEjhu691IFTGsOG7m2MsIEtpbSBMacOqbiwgSMOgIE7hu5lpLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1787393077906!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Lucky Kickfit location"
                className="absolute inset-0 h-full w-full grayscale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Lucky Kickfit. All rights reserved.
          </p>

          <p>
            Tập luyện. Kỷ luật.{" "}
            <span className="text-[#DC2626]">Thay đổi.</span>
          </p>
        </div>
      </footer>
    </main>
  );
}