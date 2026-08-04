import { useState } from "react";
import svgPaths from "../../imports/FaQs/svg-a3jw561aht";
import imgChatGptImageApr172025095449Pm21 from "../../imports/FaQs/26b72a958318f062ae37ffec3e22726cf3decf4b.png";

// --- Icon (+ / -) ---
function Icons({ kind = "+" }: { kind?: "+" | "-" }) {
  const isMinus = kind === "-";
  return (
    <div className="bg-[#f1b71c] relative rounded-[10px] shrink-0 size-[20px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center relative size-full">
          <div className={`relative shrink-0 ${isMinus ? "h-0 w-[10px]" : "size-[10px]"}`}>
            <div className={`absolute ${isMinus ? "inset-[-1px_-10%]" : "inset-[-10%]"}`}>
              <svg className="block size-full" fill="none" height={isMinus ? "2" : "12"} preserveAspectRatio="none" viewBox={isMinus ? "0 0 12 2" : "0 0 12 12"} width="12">
                <g>
                  <path d={isMinus ? "M1 1H11" : "M1 6H11"} stroke="#101636" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  {!isMinus && <path d="M6 1V11" stroke="#101636" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />}
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Designity Logo (from FaQs reference) ---
function DesignityLogo() {
  return (
    <div className="h-[28.754px] overflow-clip relative shrink-0 w-[63.711px]">
      <div className="absolute inset-[9.19%_67.67%_0_0]">
        <svg className="absolute block inset-0 size-full" fill="none" height="26.1109" preserveAspectRatio="none" viewBox="0 0 20.5952 26.1109" width="20.5952">
          <path d={svgPaths.p1c395a00} fill="#F1B71C" />
        </svg>
      </div>
      <div className="absolute inset-[0_64.16%_52.43%_14.27%]">
        <svg className="absolute block inset-0 size-full" fill="none" height="13.678" preserveAspectRatio="none" viewBox="0 0 13.7443 13.678" width="13.7443">
          <path d={svgPaths.p32ac2400} fill="black" />
        </svg>
      </div>
      <div className="absolute inset-[46.43%_80.79%_21.62%_6.46%]">
        <svg className="absolute block inset-0 size-full" fill="none" height="9.18665" preserveAspectRatio="none" viewBox="0 0 8.12411 9.18665" width="8.12411">
          <path d={svgPaths.p2750c900} fill="black" />
        </svg>
      </div>
      <div className="absolute inset-[55.13%_68.9%_21.23%_20.36%]">
        <svg className="absolute block inset-0 size-full" fill="none" height="6.79787" preserveAspectRatio="none" viewBox="0 0 6.84126 6.79787" width="6.84126">
          <path d={svgPaths.p14c30700} fill="black" />
        </svg>
      </div>
      <div className="absolute inset-[55.09%_58.56%_21.26%_32.26%]">
        <svg className="absolute block inset-0 size-full" fill="none" height="6.79787" preserveAspectRatio="none" viewBox="0 0 5.84451 6.79787" width="5.84451">
          <path d={svgPaths.p1d457a80} fill="black" />
        </svg>
      </div>
      <div className="absolute inset-[55.88%_53.68%_21.65%_43.13%]">
        <svg className="absolute block inset-0 size-full" fill="none" height="6.46153" preserveAspectRatio="none" viewBox="0 0 2.03636 6.46153" width="2.03636">
          <path d={svgPaths.p2b35ef00} fill="black" />
        </svg>
      </div>
      <div className="absolute inset-[45.26%_53.29%_46.04%_42.75%]">
        <svg className="absolute block inset-0 size-full" fill="none" height="2.50089" preserveAspectRatio="none" viewBox="0 0 2.52523 2.50089" width="2.52523">
          <path d={svgPaths.p37498d00} fill="black" />
        </svg>
      </div>
      <div className="absolute inset-[55.88%_23.94%_21.65%_72.87%]">
        <svg className="absolute block inset-0 size-full" fill="none" height="6.46153" preserveAspectRatio="none" viewBox="0 0 2.03636 6.46153" width="2.03636">
          <path d={svgPaths.p34254100} fill="black" />
        </svg>
      </div>
      <div className="absolute inset-[45.26%_23.55%_46.04%_72.48%]">
        <svg className="absolute block inset-0 size-full" fill="none" height="2.50089" preserveAspectRatio="none" viewBox="0 0 2.52523 2.50089" width="2.52523">
          <path d={svgPaths.p3760dd71} fill="black" />
        </svg>
      </div>
      <div className="absolute inset-[55.38%_41.23%_11.78%_47.94%]">
        <svg className="absolute block inset-0 size-full" fill="none" height="9.4413" preserveAspectRatio="none" viewBox="0 0 6.90195 9.4413" width="6.90195">
          <path d={svgPaths.p21d5df72} fill="black" />
        </svg>
      </div>
      <div className="absolute inset-[55.27%_29.05%_21.62%_60.77%]">
        <svg className="absolute block inset-0 size-full" fill="none" height="6.64519" preserveAspectRatio="none" viewBox="0 0 6.48501 6.64519" width="6.48501">
          <path d={svgPaths.p1b8da340} fill="black" />
        </svg>
      </div>
      <div className="absolute inset-[48.99%_14.88%_21.65%_77.81%]">
        <svg className="absolute block inset-0 size-full" fill="none" height="8.44184" preserveAspectRatio="none" viewBox="0 0 4.66274 8.44184" width="4.66274">
          <path d={svgPaths.p133b7a80} fill="black" />
        </svg>
      </div>
      <div className="absolute inset-[55.7%_2.87%_11.82%_86.32%]">
        <svg className="absolute block inset-0 size-full" fill="none" height="9.33989" preserveAspectRatio="none" viewBox="0 0 6.88526 9.33989" width="6.88526">
          <path d={svgPaths.p33ab53e0} fill="black" />
        </svg>
      </div>
      <div className="absolute inset-[78.77%_0_11.99%_95.85%]">
        <svg className="absolute block inset-0 size-full" fill="none" height="2.6547" preserveAspectRatio="none" viewBox="0 0 2.64772 2.6547" width="2.64772">
          <path d={svgPaths.p3f1f0b80} fill="black" />
        </svg>
      </div>
    </div>
  );
}

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "What makes Designity a top marketing agency in Atlanta?",
    answer: "Designity combines a dedicated Creative Director, top 3% US-based creative talent, and a transparent subscription model to deliver consistent, high-quality marketing for Atlanta businesses — without the overhead of a traditional agency.",
  },
  {
    question: "Do you work with startups and enterprises in Atlanta?",
    answer: "Yes, we support businesses of all sizes in Atlanta, from fast-growing startups to established enterprises. Our flexible pricing and scalable services make us a great fit for a wide range of industries.",
  },
  {
    question: "Can you run location-specific campaigns for Atlanta-based audiences?",
    answer: "Absolutely. Our team is experienced in geo-targeted campaigns across paid media, SEO, and social platforms — helping Atlanta businesses reach the right local audience with precision and impact.",
  },
  {
    question: "How quickly can we launch a campaign after signing up?",
    answer: "Most Designity clients are fully onboarded and running their first campaign within the first two weeks. Your Creative Director handles team assembly and project kickoff so things move fast.",
  },
  {
    question: "What's included in your monthly marketing plans?",
    answer: "Plans include design, content, social media, SEO, digital advertising, video, email marketing, and more — all managed by your dedicated Creative Director at a flat monthly rate.",
  },
  {
    question: "What industries do you specialize in within Atlanta?",
    answer: "We serve a wide range of Atlanta industries including healthcare, real estate, finance, SaaS, retail, food & beverage, manufacturing, hospitality, automotive, and more.",
  },
  {
    question: "Will I have to manage multiple freelancers or vendors?",
    answer: "No. Your Creative Director manages the entire team for you — acting as your single point of contact for every project, deliverable, and revision.",
  },
  {
    question: "How is Designity different from a traditional marketing agency in Atlanta?",
    answer: "Designity is built on a subscription model with no long-term contracts, transparent pricing, and a dedicated Creative Director — giving you agency-quality output at a fraction of the cost and complexity.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number>(1);

  function toggle(i: number) {
    setOpenIndex((prev) => (prev === i ? -1 : i));
  }

  return (
    <section className="bg-white relative shrink-0 w-full overflow-clip" aria-label="Frequently asked questions">

      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start justify-center px-[20px] py-[48px] relative size-full md:flex-row md:gap-[80px] md:px-[60px] md:py-[120px]">

          {/* Left column: heading + CTA */}
          <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full md:w-[540px]">
            <p className="font-inter font-semibold leading-[40px] not-italic relative shrink-0 text-[#101636] text-[32px] w-full md:leading-[52px] md:text-[44px] md:tracking-[-0.44px] md:w-[min-content] md:min-w-full">
              Frequently Asked Questions
            </p>
            <button
              className="bg-[#f1b71c] relative rounded-[71px] shrink-0 w-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#023456] md:w-auto"
              onClick={() => document.getElementById("cta-demo")?.scrollIntoView({ behavior: "smooth" })}
            >
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center px-[20px] py-[14px] relative size-full md:py-[10px]">
                  <p className="font-inter font-semibold leading-[1.3] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Get Your 2-Week Trial</p>
                </div>
              </div>
            </button>
          </div>

          {/* Right column: FAQ tiles */}
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] h-full items-start min-w-px overflow-clip relative w-full">

            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              const isLast = i === faqs.length - 1;
              return (
                <div
                  key={i}
                  className={`bg-[#f9f9fb] relative rounded-[12px] shrink-0 w-full ${isLast ? "opacity-0" : ""}`}
                >
                  <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                  <button
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    className="flex flex-row justify-end size-full w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f1b71c] rounded-[12px]"
                  >
                    <div className="content-stretch flex gap-[32px] items-start justify-end p-[16px] relative size-full w-full">
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative">
                        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
                          <p className="font-inter font-bold leading-[22px] not-italic relative shrink-0 text-[#101636] text-[16px] w-full text-left">
                            {faq.question}
                          </p>
                        </div>
                        {isOpen && (
                          <p className="font-open-sans font-normal leading-[20px] relative shrink-0 text-[14px] text-black w-full text-left">
                            {faq.answer}
                          </p>
                        )}
                      </div>
                      <Icons kind={isOpen ? "-" : "+"} />
                    </div>
                  </button>
                </div>
              );
            })}

          </div>

          {/* Group — decorative image + logo (absolute, desktop only) */}
          <div className="hidden md:block absolute contents left-[36.52px] top-[305.09px]">
            <div className="absolute flex h-[805.824px] items-center justify-center left-[36.52px] top-[305.09px] w-[537.216px]">
              <div className="-scale-y-100 flex-none rotate-180">
                <div className="h-[805.824px] relative w-[537.216px]">
                  <img alt="" aria-hidden className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgChatGptImageApr172025095449Pm21} />
                </div>
              </div>
            </div>
            <div className="absolute flex h-[34.15px] items-center justify-center left-[321.56px] top-[840.15px] w-[65.956px]">
              <div className="flex-none rotate-[-4.96deg]">
                <div className="h-[28.754px] relative w-[63.711px]">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center relative size-full">
                      <DesignityLogo />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
