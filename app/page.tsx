"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Ship from "@/components/ui/ship";

const SERVICES = [
  {
    tag: "AI Automation",
    title: "Automate the busywork",
    desc: "Hand off the repetitive tasks that eat your team's day — data entry, follow-ups, reports — and let them run on their own.",
    icon: (
      <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" />
    ),
  },
  {
    tag: "Chatbots · LLMs · RAG",
    title: "Answers, on demand",
    desc: "An assistant that actually knows your business and answers customers and staff instantly, around the clock.",
    icon: (
      <>
        <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.7A8.5 8.5 0 1 1 21 11.5z" />
        <path d="M9 10h.01M13 10h.01M17 10h.01" />
      </>
    ),
  },
  {
    tag: "Agentic AI · MCP",
    title: "AI that gets things done",
    desc: "Not just chat — AI that takes action and completes multi-step tasks from start to finish, then reports back.",
    icon: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
      </>
    ),
  },
  {
    tag: "Generative AI",
    title: "Create in seconds",
    desc: "Draft copy, images, and content on demand — so your team ships more without the blank-page slog.",
    icon: (
      <>
        <path d="M12 3l1.9 4.6L18.5 9l-4.6 1.9L12 15.5l-1.9-4.6L5.5 9l4.6-1.4L12 3z" />
        <path d="M19 14l.9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14z" />
      </>
    ),
  },
  {
    tag: "Web Development",
    title: "Websites & apps that work",
    desc: "Fast, modern, easy-to-use web products your customers enjoy and your team can actually maintain.",
    icon: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 9h20M6 6.5h.01M9 6.5h.01" />
      </>
    ),
  },
  {
    tag: "DevOps · MLOps",
    title: "Keep it all running",
    desc: "The behind-the-scenes engineering that keeps everything fast, secure, and online — so you never have to think about it.",
    icon: <path d="M4 17l6-6-6-6M12 19h8" />,
  },
];

const STEPS = [
  {
    no: "STEP 01",
    title: "Talk",
    desc: "A quick call to understand what's slowing you down. No cost, no pressure, and a straight answer on whether we can help.",
  },
  {
    no: "STEP 02",
    title: "Build",
    desc: "We design and build the smallest thing that solves it, and keep you in the loop with plain-language updates the whole way.",
  },
  {
    no: "STEP 03",
    title: "Run",
    desc: "We launch it, hand it over cleanly, and stick around to keep it running smoothly as your business grows.",
  },
];

const WHY_ITEMS = [
  "Plain language, always",
  "You own everything we build",
  "Built to run reliably",
  "Fair, upfront pricing",
];

const BUBBLES: Array<{
  side: "ltr" | "rtl";
  top: string;
  size: number;
  dur: string;
  delay: string;
}> = [
  { side: "ltr", top: "22%", size: 10, dur: "15s", delay: "0s" },
  { side: "ltr", top: "68%", size: 16, dur: "19s", delay: "-3s" },
  { side: "ltr", top: "40%", size: 7, dur: "13s", delay: "-7s" },
  { side: "ltr", top: "82%", size: 22, dur: "23s", delay: "-11s" },
  { side: "ltr", top: "14%", size: 12, dur: "17s", delay: "-14s" },
  { side: "rtl", top: "34%", size: 14, dur: "18s", delay: "-2s" },
  { side: "rtl", top: "58%", size: 9, dur: "14s", delay: "-6s" },
  { side: "rtl", top: "76%", size: 18, dur: "21s", delay: "-9s" },
  { side: "rtl", top: "28%", size: 6, dur: "12s", delay: "-13s" },
  { side: "rtl", top: "50%", size: 20, dur: "25s", delay: "-16s" },
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-[18px] h-[18px] text-[--color-azure] flex-none"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export default function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > window.innerHeight * 0.55);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -40px 0px" }
    );
    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el, i) => {
      const parent = el.parentElement;
      const staggered =
        parent?.classList.contains("services-grid") || parent?.classList.contains("steps-grid");
      if (staggered) {
        (el as HTMLElement).style.transitionDelay = `${(i % 3) * 0.09}s`;
      }
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <main>
      {/* HERO */}
      <section
        id="top"
        className="relative min-h-screen min-h-[100svh] pt-26 pb-24 flex items-center overflow-hidden before:content-[''] before:absolute before:inset-0 before:z-0 before:pointer-events-none before:[background:radial-gradient(720px_460px_at_82%_12%,rgba(46,155,238,.16),transparent_62%),radial-gradient(560px_420px_at_6%_88%,rgba(21,96,212,.10),transparent_60%)]"
      >
        <div className="relative z-10 w-full max-w-[1180px] mx-auto px-6.5 grid grid-cols-1 md:grid-cols-[1.04fr_.96fr] gap-10 items-center">
          <div className="max-w-[560px] min-w-0">
            <h1 className="text-[clamp(44px,6.4vw,80px)] font-extrabold mt-5.5">
              <span className="block overflow-hidden">
                <span className="block">Shipping AI</span>
              </span>
              <span className="block overflow-hidden">
                <span className="block text-gradient animate-sheen">for your business.</span>
              </span>
            </h1>
            <p className="text-[clamp(17px,1.7vw,20px)] text-[--color-muted] mt-6 max-w-[520px]">
              We build automation, assistants, and software that take real work off your team&apos;s
              plate. No jargon, no drama, just tools that quietly do their job.
            </p>
            <div className="flex gap-3.5 mt-8.5 flex-wrap">
              <Button
                variant="primary"
                arrow
                href="mailto:alex@ecello.net?subject=Let's%20talk"
                className="!px-6.5 !py-4 !text-base"
              >
                Book a call
              </Button>
              <Button variant="ghost" href="#services" className="!px-6.5 !py-4 !text-base">
                See what we do
              </Button>
            </div>
          </div>

          <Ship />
        </div>

        <Button
          variant="scrollDown"
          href="#services"
          aria-label="Scroll down to what we do"
          className="absolute left-1/2 bottom-6 z-20 -translate-x-1/2 hover:-translate-x-1/2"
        >
          ↓
        </Button>
      </section>

      <Button
        variant="scrollUp"
        href="#top"
        aria-label="Back to top"
        className={`fixed right-6.5 bottom-6.5 z-70 transition-[opacity,transform,background,border-color,color] duration-300 ${
          showBackToTop
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none translate-y-3"
        }`}
      >
        ↑
      </Button>

      {/* POSITIONING STRIP */}
      <div className="reveal relative overflow-hidden py-13 border-y border-white/6 bg-[#08315a]">
        <div className="absolute inset-0 z-0 pointer-events-none [background:radial-gradient(120%_150%_at_50%_50%,#1d6ba8_0%,#135286_34%,#0b3d68_62%,#062a4c_100%)]" />
        <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden" aria-hidden="true">
          {BUBBLES.map((b, i) => (
            <span
              key={i}
              className={`absolute top-1/2 rounded-full border border-[rgba(190,230,255,.4)] bg-[rgba(190,230,255,.12)] ${
                b.side === "ltr" ? "bubble-ltr" : "bubble-rtl"
              }`}
              style={
                {
                  top: b.top,
                  width: b.size,
                  height: b.size,
                  "--dur": b.dur,
                  "--delay": b.delay,
                } as React.CSSProperties
              }
            />
          ))}
        </div>
        <div className="relative z-[2] max-w-[1180px] mx-auto px-6.5">
          <p className="max-w-[840px] mx-auto text-center text-[clamp(18px,2vw,23px)] font-[family-name:var(--font-bricolage)] font-medium tracking-[-0.01em] text-[#EAF4FF] leading-[1.35]">
            A remote AI &amp; software studio in{" "}
            <span className="bg-[linear-gradient(120deg,#8fd0ff,#bfeaff_60%,#e6f6ff)] bg-clip-text text-transparent">
              Bremerhaven, Germany
            </span>{" "}
            — for teams who&apos;d rather see results than slide decks.
          </p>
        </div>
      </div>

      {/* SERVICES */}
      <section id="services" className="py-24">
        <div className="max-w-[1180px] mx-auto px-6.5">
          <div className="reveal max-w-[640px]">
            <span className="text-[12.5px] font-semibold tracking-[0.16em] uppercase text-[#1560d4] inline-flex items-center gap-2">
              What we do
            </span>
            <h2 className="text-[clamp(30px,3.6vw,46px)] mt-4">
              Six ways we take work off your plate.
            </h2>
            <p className="text-[--color-muted] text-lg mt-4">
              Each one starts with a real problem in your business — not a buzzword. Here&apos;s
              the plain-language version.
            </p>
          </div>

          <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-13">
            {SERVICES.map((s) => (
              <article
                key={s.title}
                className="reveal group relative bg-white border border-[--color-line] rounded-[22px] px-7 pt-7.5 pb-8 overflow-hidden transition-[transform,border-color] duration-300 ease-[cubic-bezier(.2,.7,.2,1)] hover:-translate-y-2 hover:border-[rgba(46,155,238,0.36)]"
              >
                <div className="w-13 h-13 rounded-2xl grid place-items-center mb-5 bg-[linear-gradient(135deg,#eef5ff,#dcecfd)] text-[--color-blue] transition-[transform,background,color] duration-400 group-hover:bg-[--color-navy] group-hover:text-white group-hover:-translate-y-0.5 group-hover:-rotate-3">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6.5 h-6.5"
                  >
                    {s.icon}
                  </svg>
                </div>
                <h3 className="text-[21px] font-bold">{s.title}</h3>
                <p className="text-[--color-muted] text-[15.5px] mt-2.5">{s.desc}</p>
                <span className="block mt-4.5 text-[11.5px] font-semibold tracking-[0.08em] uppercase text-[#8b98af]">
                  {s.tag}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section id="approach" className="py-24 bg-white border-y border-[--color-line]">
        <div className="max-w-[1180px] mx-auto px-6.5">
          <div className="reveal max-w-[640px]">
            <span className="text-[12.5px] font-semibold tracking-[0.16em] uppercase text-[--color-blue] inline-flex items-center gap-2">
              How it works
            </span>
            <h2 className="text-[clamp(30px,3.6vw,46px)] mt-4">Three steps. No mystery.</h2>
            <p className="text-[--color-muted] text-lg mt-4">
              We keep the process short and the updates honest, so you always know where things
              stand.
            </p>
          </div>

          <div className="steps-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6.5 mt-12.5">
            {STEPS.map((step) => (
              <div key={step.no} className="reveal">
                <span className="font-[family-name:var(--font-bricolage)] font-extrabold text-[15px] text-[--color-azure] tracking-[0.05em]">
                  {step.no}
                </span>
                <h3 className="text-[23px] mt-3.5">{step.title}</h3>
                <p className="text-[--color-muted] mt-3 text-base">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="reveal flex flex-wrap gap-3.5 mt-14">
            {WHY_ITEMS.map((item) => (
              <span
                key={item}
                className="flex items-center gap-2.5 text-[15px] font-medium text-[--color-navy] bg-[--color-paper] border border-[--color-line] rounded-full py-2.5 pl-3.5 pr-4.5"
              >
                <CheckIcon />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 pb-24">
        <div className="max-w-[1232px] mx-auto px-6.5">
          <div className="reveal relative overflow-hidden text-white rounded-[32px] px-10 py-18 text-center [background:radial-gradient(760px_430px_at_20%_12%,rgba(46,155,238,.32),transparent_68%),linear-gradient(135deg,#0b2264_0%,#0d286b_52%,#24538f_100%)] before:content-[''] before:absolute before:-inset-x-[18%] before:-top-[32%] before:-bottom-[24%] before:z-0 before:[background:radial-gradient(700px_380px_at_18%_8%,rgba(46,155,238,.4),transparent_64%),radial-gradient(760px_440px_at_88%_82%,rgba(21,96,212,.12),transparent_72%)] before:animate-drift">
            <svg
              className="absolute left-0 right-0 -bottom-0.5 w-full h-[210px] opacity-86 z-0"
              viewBox="0 0 1200 210"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="waveFade" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#1d7fd4" stopOpacity=".08" />
                  <stop offset=".4" stopColor="#1b77ca" stopOpacity=".46" />
                  <stop offset="1" stopColor="#1a67b0" stopOpacity=".9" />
                </linearGradient>
              </defs>
              <g>
                <path
                  d="M0,112 C120,88 240,88 360,112 C480,136 600,136 720,112 C840,88 960,88 1080,112 C1200,136 1320,136 1440,112 C1560,88 1680,88 1800,112 C1920,136 2040,136 2160,112 C2280,88 2400,88 2520,112 L2520,210 L0,210 Z"
                  fill="url(#waveFade)"
                />
                <path
                  d="M0,138 C150,116 300,116 450,138 C600,160 750,160 900,138 C1050,116 1200,116 1350,138 C1500,160 1650,160 1800,138 C1950,116 2100,116 2250,138 C2400,160 2550,160 2700,138 L2700,210 L0,210 Z"
                  fill="#2690df"
                  opacity=".22"
                />
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  from="0 0"
                  to="-1200 0"
                  dur="16s"
                  repeatCount="indefinite"
                />
              </g>
            </svg>
            <div className="relative z-[1] max-w-[640px] mx-auto">
              <h2 className="text-[clamp(30px,4vw,50px)] font-extrabold">
                Have something worth automating?
              </h2>
              <p className="text-[#c7d6f2] text-lg mt-4.5">
                Tell us what&apos;s eating your team&apos;s time. We&apos;ll tell you honestly
                whether AI can help, and if it can&apos;t, we&apos;ll say so.
              </p>
              <Button
                variant="white"
                arrow
                href="mailto:alex@ecello.net?subject=Let's%20talk%20about%20a%20project"
                className="!mt-8.5 !px-7.5 !py-4 !text-[17px]"
              >
                Email alex@ecello.net
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
