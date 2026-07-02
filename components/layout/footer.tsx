const STUDIO_LINKS = [
  { href: "#about", label: "Who we are" },
  { href: "#process", label: "Our process" },
  { href: "#trust", label: "Reviews" },
  { href: "mailto:alex@ecello.net?subject=Let's%20talk", label: "Book a call" },
];

const REACH_LINKS = [
  { href: "mailto:alex@ecello.net", label: "alex@ecello.net" },
  { href: "#top", label: "Bremerhaven, Germany" },
  { href: "#top", label: "Remote-first · Europe" },
];

export default function Footer() {
  return (
    <footer className="pt-[70px] pb-10 bg-white border-t border-[rgba(189,209,232,0.14)]">
      <div className="max-w-[1180px] mx-auto px-6.5">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-10 items-start">
          <div>
            <span className="wordmark text-[30px]">ecello</span>
            <p className="text-[--color-muted] text-[15px] mt-4 max-w-[320px]">
              AI automation, assistants, and software that take real work off your team&apos;s
              plate.
            </p>
          </div>
          <div>
            <h4 className="text-xs tracking-[0.14em] uppercase text-[#8b98af] font-bold mb-4">
              Studio
            </h4>
            {STUDIO_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-[#3a4761] text-[15px] mb-2.5 transition-[color,transform] duration-200 hover:text-[--color-blue] hover:translate-x-1"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div>
            <h4 className="text-xs tracking-[0.14em] uppercase text-[#8b98af] font-bold mb-4">
              Reach us
            </h4>
            {REACH_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-[#3a4761] text-[15px] mb-2.5 transition-[color,transform] duration-200 hover:text-[--color-blue] hover:translate-x-1"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center flex-wrap gap-3 mt-13 pt-6.5 border-t border-[rgba(189,209,232,0.24)] text-[#8b98af] text-[13.5px]">
          <span>© 2026 Ecello Labs. All rights reserved.</span>
          <span>Made where the work flows out to sea.</span>
        </div>
      </div>
    </footer>
  );
}
