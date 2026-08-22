const contactInfo = {
  facebook: "https://www.facebook.com/profile.php?id=61553195618118&locale=vi_VN",
  phone: "056 918 1111",
  email: "luckykickfit@gmail.com",
  address: "86 Trần Hữu Tước, Phường Đống Đa, Hà Nội"
};

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-zinc-800 bg-[#0A0A0A] text-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Contact Information */}
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#DC2626]">
              Liên hệ
            </p>

            <h2 className="mt-4 text-4xl font-black uppercase tracking-tight sm:text-5xl">
              Lucky Kickfit
            </h2>

            <p className="mt-5 max-w-md leading-7 text-zinc-400">
              Sẵn sàng bắt đầu hành trình tập luyện của bạn? Liên hệ với
              Lucky Kickfit để được tư vấn và đăng ký buổi tập thử miễn phí.
            </p>

            {/* Contact Details */}
            <div className="mt-10 space-y-5">
              {/* Facebook */}
              <a
                href={contactInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4"
              >
                <div className="flex h-10 w-10 items-center justify-center border border-zinc-800 text-sm font-black text-zinc-400 transition-colors group-hover:border-[#DC2626] group-hover:text-[#DC2626]">
                  f
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                    Facebook
                  </p>
                  <p className="mt-1 font-bold text-white group-hover:text-[#DC2626]">
                    Lucky Kickfit
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                className="group flex items-center gap-4"
              >
                <div className="flex h-10 w-10 items-center justify-center border border-zinc-800 text-zinc-400 transition-colors group-hover:border-[#DC2626] group-hover:text-[#DC2626]">
                  ☎
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                    Điện thoại
                  </p>
                  <p className="mt-1 font-bold text-white group-hover:text-[#DC2626]">
                    {contactInfo.phone}
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${contactInfo.email}`}
                className="group flex items-center gap-4"
              >
                <div className="flex h-10 w-10 items-center justify-center border border-zinc-800 text-zinc-400 transition-colors group-hover:border-[#DC2626] group-hover:text-[#DC2626]">
                  @
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                    Email
                  </p>
                  <p className="mt-1 font-bold text-white group-hover:text-[#DC2626]">
                    {contactInfo.email}
                  </p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-zinc-800 text-zinc-400">
                  📍
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                    Địa chỉ
                  </p>
                  <p className="mt-1 font-bold text-white">
                    {contactInfo.address}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-zinc-500">
              Vị trí
            </p>

            <div className="relative aspect-[4/3] overflow-hidden border border-zinc-800 bg-zinc-900 lg:aspect-auto lg:h-full lg:min-h-[420px]">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d931.1016246454543!2d105.82977834740882!3d21.016414977070642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab802af9cf5b%3A0x73510f2da5e14f05!2zODYgVHLhuqduIEjhu691IFTGsOG7m2MsIEtpbSBMacOqbiwgSMOgIE7hu5lpLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1787393077906!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Lucky Kickfit location"
                className="absolute inset-0 h-full w-full"
            />

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col gap-4 border-t border-zinc-800 pt-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Lucky Kickfit. All rights reserved.</p>

          <p>
            Tập luyện. Kỷ luật.{" "}
            <span className="text-[#DC2626]">Thay đổi.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}