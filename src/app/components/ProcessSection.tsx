import svgPaths from "../../imports/Container-1/svg-khpv8jsl93";
import imgDetailImage from "../../imports/Container-1/step01-demo-call.png";
import imgDetailImage1 from "../../imports/Container-1/step02-two-week-trial.png";
import imgImage79 from "../../imports/Container-1/ac3c7dd4715eacde9146fbeda5c009c62227a6bd.png";
import imgDetailImage2 from "../../imports/Container-1/a08b9976c9c5caa8b879c1b0306a2f6291813958.png";
import imgDetailImage3 from "../../imports/Container-1/24c5a60cc123b4886595023f3afdefcf924a3466.png";

// --- Reusable sub-components matching reference layer structure ---

function HexIcon({ step }: { step: string }) {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <div className="h-[67.529px] relative shrink-0 w-[53.264px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="67.5294" preserveAspectRatio="none" viewBox="0 0 53.2642 67.5294" width="53.2642">
          <path d={svgPaths.p25eaa600} fill="#F1B71C" />
        </svg>
        <p className="absolute font-inter font-semibold leading-[1.2] not-italic text-[#101636] text-[24px] tracking-[-0.24px] whitespace-nowrap" style={{ left: "12.63px", top: "19.27px" }}>{step}</p>
      </div>
    </div>
  );
}

function DetailHeader({ step, title }: { step: string; title: string }) {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <HexIcon step={step} />
      <p className="font-inter font-semibold leading-[1.2] not-italic relative shrink-0 text-[#101636] text-[24px] tracking-[-0.24px] whitespace-nowrap">{title}</p>
    </div>
  );
}

function DetailContentContainer({ leftBold, leftRegular, rightParagraphs }: {
  leftBold: string;
  leftRegular: string;
  rightParagraphs: string[];
}) {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 text-[rgba(0,0,0,0.8)] w-full">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative">
        <p className="font-open-sans font-bold leading-[24px] relative shrink-0 text-[16px] w-full">{leftBold}</p>
        <p className="font-open-sans font-normal leading-[20px] relative shrink-0 text-[14px] w-full">{leftRegular}</p>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col font-open-sans font-normal gap-[24px] items-start leading-[20px] min-w-px relative text-[14px]">
        {rightParagraphs.map((p, i) => (
          <p key={i} className="relative shrink-0 w-full">{p}</p>
        ))}
      </div>
    </div>
  );
}

function DetailTextContainer({ step, title, leftBold, leftRegular, rightParagraphs }: {
  step: string;
  title: string;
  leftBold: string;
  leftRegular: string;
  rightParagraphs: string[];
}) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px relative">
      <DetailHeader step={step} title={title} />
      <DetailContentContainer leftBold={leftBold} leftRegular={leftRegular} rightParagraphs={rightParagraphs} />
    </div>
  );
}

const mobileSteps = [
  {
    step: "01",
    title: "Demo Call",
    description: "It starts with a quick demo with one of our Account Executives. During the demo, you'll discuss your goals and challenges, get a walkthrough of the Designity platform, and explore our services to see if there's a good fit.",
    image: imgDetailImage,
    imageBg: undefined as string | undefined,
  },
  {
    step: "02",
    title: "Two-Week Trial",
    description: "Test drive our 100+ design and marketing services for two weeks, no upfront payment required. This risk-free trial will give you full access to the platform so you can start real work with your creative team right away.",
    image: imgDetailImage1,
    imageBg: undefined as string | undefined,
  },
  {
    step: "03",
    title: "Match with Your Creative Director",
    description: "Each Designity client is hand-matched to a designated Creative Director (CD), who will be your main point of contact and lead your creative strategy. This isn't a random pairing.",
    image: imgImage79,
    imageBg: "#e38925",
  },
  {
    step: "04",
    title: "KickOff Your Trial",
    description: "Once you've matched with your CD, you'll book your KickOff call, where you and your CD meet to discuss your first project, set clear expectations, and outline your goals.",
    image: imgDetailImage2,
    imageBg: undefined as string | undefined,
  },
  {
    step: "05",
    title: "Strategy, Roadmap, Execution, & Optimization",
    description: "As you continue beyond your trial and become an active client, your Creative Director builds a custom roadmap based on your brand, goals, and creative priorities.",
    image: imgDetailImage3,
    imageBg: undefined as string | undefined,
  },
];

export function ProcessSection() {
  return (
    <section aria-label="5-step marketing campaign process">
      {/* Mobile layout */}
      <div className="md:hidden bg-[#f9f9fb] flex flex-col gap-[24px] px-[20px] py-[48px]">
        {/* Heading */}
        <p className="font-inter font-semibold text-[32px] leading-[40px] text-[#101636] w-full">
          {"Our "}
          <strong className="font-inter font-black">5-Step</strong>
          {" Marketing Campaign Launch Process for Atlanta Businesses"}
        </p>

        {/* CTA button */}
        <button
          onClick={() => document.getElementById("cta-demo")?.scrollIntoView({ behavior: "smooth" })}
          className="w-full bg-[#f1b71c] rounded-[71px] hover:bg-[#d9a519] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#023456] px-[20px] py-[10px]"
        >
          <p className="font-inter font-semibold text-[16px] leading-[1.3] text-black whitespace-nowrap text-center">Get Your 2-Week Trial</p>
        </button>

        {/* Horizontal scroll carousel */}
        <div className="overflow-x-auto [scroll-snap-type:x_mandatory] -mx-[20px] px-[20px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="flex gap-[20px] items-stretch">
            {mobileSteps.map((s) => (
              <div
                key={s.step}
                className="shrink-0 w-[276px] [scroll-snap-align:start] bg-white rounded-[16px] drop-shadow-[0px_11px_12.1px_rgba(0,0,0,0.05)] border border-[#e8e8ef] p-[20px] flex flex-col gap-[20px]"
              >
                <div className="h-[180px] w-full rounded-[16px] overflow-hidden shrink-0" style={{ backgroundColor: s.imageBg }}>
                  <img alt="" className="size-full object-cover" src={s.image} />
                </div>
                <HexIcon step={s.step} />
                <p className="font-inter font-semibold text-[18px] leading-[1.2] text-[#101636]">{s.title}</p>
                <p className="font-open-sans font-normal text-[14px] leading-[20px] text-[rgba(0,0,0,0.8)]">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:block bg-[#f9f9fb] relative shrink-0 w-full">
        {/* Background decoration — clipped to the section in its own wrapper so it never
            interferes with the sticky step cards below (any ancestor with overflow != visible
            disables position: sticky) */}
        <div className="absolute inset-0 overflow-clip pointer-events-none" aria-hidden="true">
          <div className="absolute flex h-[2161.813px] items-center justify-center" style={{ left: "-431.77px", top: "-646.65px", width: "2330.197px" }}>
            <div className="-rotate-120 flex-none">
              <div className="h-[1874.207px] relative w-[1414.173px]">
                <svg className="absolute block inset-0 size-full" fill="none" height="1874.21" preserveAspectRatio="none" viewBox="0 0 1414.17 1874.21" width="1414.17"><path></path><path d={svgPaths.p370c6500} fill="#F9F9FB" /></svg>
              </div>
            </div>
          </div>
        </div>

        <div className="relative size-full">

          <div className="content-stretch flex flex-col gap-[64px] items-start px-[60px] py-[120px] relative size-full">

            {/* ProcessHeader */}
            <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
              <p className="font-inter font-semibold leading-[0] not-italic relative shrink-0 text-[#101636] text-[0px] tracking-[-0.44px] w-[818.959px]">
                <span className="leading-[52px] text-[44px]">Our </span>
                <span className="font-inter font-black leading-[1.2] text-[44px]">5-Step</span>
                <span className="leading-[52px] text-[44px]"> Marketing Campaign Launch Process for Atlanta Businesses</span>
              </p>
              <button
                onClick={() => document.getElementById("cta-demo")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-[#f1b71c] relative rounded-[71px] shrink-0 hover:bg-[#d9a519] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#023456]"
              >
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-center px-[20px] py-[10px] relative size-full">
                    <p className="font-inter font-semibold leading-[1.3] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Get Your 2-Week Trial</p>
                  </div>
                </div>
              </button>
            </div>

            {/* Steps stack — each card sticks as you scroll, so the next one covers it */}
            <div className="relative flex flex-col w-full">

            {/* Step 01 */}
            <div className="bg-white drop-shadow-[0px_11px_12.1px_rgba(0,0,0,0.05)] sticky top-[100px] z-[1] rounded-[16px] shrink-0 w-full">
              <div aria-hidden className="absolute border border-[#e8e8ef] border-solid inset-0 pointer-events-none rounded-[16px]" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[48px] items-center p-[32px] relative size-full">
                  <div className="h-[445px] relative rounded-[16px] shrink-0 w-[397px]">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
                      <img alt="" className="absolute inset-0 size-full object-cover" src={imgDetailImage} />
                    </div>
                  </div>
                  <DetailTextContainer
                    step="01"
                    title="Demo Call"
                    leftBold="It starts with a quick demo with one of our Account Executives. During the demo, you'll discuss your goals and challenges, get a walkthrough of the Designity platform, and explore our services to see if there's a good fit."
                    leftRegular="If it feels right for you, you'll then choose the plan that best fits your business and move forward with a two-week trial."
                    rightParagraphs={[
                      "It starts with a quick demo with one of our Account Executives. During the demo, you'll discuss your goals and challenges, get a walkthrough of the Designity platform, and explore our services to see if there's a good fit. If it feels right for you, you'll then choose the plan that best fits your business and move forward with a two-week trial.",
                      "It starts with a quick demo with one of our Account Executives. During the demo, you'll discuss your goals and challenges, get a walkthrough of the Designity platform, and explore our services to see if there's a good fit. If it feels right for you, you'll then choose the plan that best fits your business and move forward with a two-week trial.",
                    ]}
                  />
                </div>
              </div>
            </div>

            {/* Step 02 */}
            <div className="bg-white drop-shadow-[0px_11px_12.1px_rgba(0,0,0,0.05)] sticky top-[116px] z-[2] rounded-[16px] shrink-0 w-full">
              <div aria-hidden className="absolute border border-[#e8e8ef] border-solid inset-0 pointer-events-none rounded-[16px]" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[48px] items-center p-[32px] relative size-full">
                  <DetailTextContainer
                    step="02"
                    title="Two-Week Trial"
                    leftBold="Test drive our 100+ design and marketing services for two weeks, no upfront payment required. This risk-free trial will give you full access to the platform, so you can experience how Designity operates and start real work with your creative team right away."
                    leftRegular="Tip: To get the most value out of your trial, pick a project that can be wrapped up within two weeks. That way, you'll have everything you need to make an informed decision about continuing our partnership past your trial."
                    rightParagraphs={[
                      "Test drive our 100+ design and marketing services with no upfront payment. You'll get full access to the platform and start working with your creative team right away.",
                      "Tip: choose a project that can wrap within two weeks—so you'll have everything you need to decide if Designity's right for you.",
                    ]}
                  />
                  <div className="h-[445px] relative rounded-[16px] shrink-0 w-[397px]">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
                      <img alt="" className="absolute inset-0 size-full object-cover" src={imgDetailImage1} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 03 */}
            <div className="bg-white drop-shadow-[0px_11px_12.1px_rgba(0,0,0,0.05)] sticky top-[132px] z-[3] rounded-[16px] shrink-0 w-full">
              <div aria-hidden className="absolute border border-[#e8e8ef] border-solid inset-0 pointer-events-none rounded-[16px]" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[48px] items-center p-[32px] relative size-full">
                  <div className="bg-[#e38925] content-stretch flex flex-col h-[445px] items-start relative rounded-[16px] shrink-0 w-[397px]">
                    <div className="absolute h-[445px] left-[8.72px] top-0 w-[379.555px]">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img alt="" className="absolute h-[111.5%] left-0 max-w-none top-0 w-full" src={imgImage79} />
                      </div>
                    </div>
                  </div>
                  <DetailTextContainer
                    step="03"
                    title="Match with Your Creative Director"
                    leftBold="Each Designity client is hand-matched to a designated Creative Director (CD), who will be your main point of contact and lead your creative strategy. This isn't a random pairing."
                    leftRegular="We use your project request form—including your industry, goals, creative needs, and collaboration style—and compare it to our CDs' experience and leadership style to find the perfect fit."
                    rightParagraphs={[
                      "It's a thoughtful process designed to make sure your CD understands your vision and can lead your projects with clarity from day one.",
                      "Each Designity client is hand-matched to a designated Creative Director (CD), who will be your main point of contact and lead your creative strategy. This isn't a random pairing. We use your project request form—including your industry, goals, creative needs, and collaboration style—and compare it to our CDs' experience and leadership style to find the perfect fit. It's a thoughtful process designed to make sure your CD understands your vision and can lead your projects with clarity from day one.",
                    ]}
                  />
                </div>
              </div>
            </div>

            {/* Step 04 */}
            <div className="bg-white drop-shadow-[0px_11px_12.1px_rgba(0,0,0,0.05)] sticky top-[148px] z-[4] rounded-[16px] shrink-0 w-full">
              <div aria-hidden className="absolute border border-[#e8e8ef] border-solid inset-0 pointer-events-none rounded-[16px]" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[48px] items-center p-[32px] relative size-full">
                  <DetailTextContainer
                    step="04"
                    title="KickOff Your Trial"
                    leftBold="Once you've matched with your CD, you'll book your KickOff call, where you and your CD meet to discuss your first project, set clear expectations, and outline your goals."
                    leftRegular="Then, your CD assembles the perfect creative team for your specific needs—pulling from Designity's vetted pool of US-based talent—and your first project begins."
                    rightParagraphs={[
                      "This 2-week trial gives you a chance to experience how Designity works: the quality of the creative output, the easy collaboration, our services, transparent timelines, and the strategic leadership your CD brings to the table. And if you decide not to continue, you're free to cancel at any time during your trial—no payment, no risk, no pressure.",
                      "You and your CD will start your partnership with a KickOff Call to align on goals and discuss your first project. Your CD then assembles a creative team from our pool of vetted US-based talent. Over the two-week trial, you'll experience our quality, collaboration, and strategic leadership firsthand—with no payment required and no pressure to continue.",
                    ]}
                  />
                  <div className="h-[445px] relative rounded-[16px] shrink-0 w-[397px]">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgDetailImage2} />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 05 */}
            <div className="bg-white drop-shadow-[0px_11px_12.1px_rgba(0,0,0,0.05)] sticky top-[164px] z-[5] rounded-[16px] shrink-0 w-full">
              <div aria-hidden className="absolute border border-[#e8e8ef] border-solid inset-0 pointer-events-none rounded-[16px]" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[48px] items-center p-[32px] relative size-full">
                  <div className="h-[445px] relative rounded-[16px] shrink-0 w-[397px]">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgDetailImage3} />
                  </div>
                  <DetailTextContainer
                    step="05"
                    title="Strategy, Roadmap, Execution, & Optimization"
                    leftBold="As you continue beyond your trial and become an active client, your Creative Director builds a custom roadmap based on your brand, your goals, brand positioning, and creative priorities — outlining strategy, key milestones, and deliverables needed."
                    leftRegular="As your creative team delivers assets, you'll receive regular updates, performance tracking, and ongoing optimization to keep your campaigns effective and driving results."
                    rightParagraphs={[
                      "As you continue past the trial, your CD builds a custom roadmap tailored to your brand, goals, and priorities—outlining strategy, milestones, and key deliverables.",
                      "You'll get regular updates, performance tracking, and ongoing optimization to keep your campaigns effective and results-driven.",
                    ]}
                  />
                </div>
              </div>
            </div>

            </div>
            {/* ↑ End steps stack */}

          </div>

        </div>
      </div>
    </section>
  );
}
