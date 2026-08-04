import svgPaths from "./svg-a3jw561aht";
import imgChatGptImageApr172025095449Pm21 from "./26b72a958318f062ae37ffec3e22726cf3decf4b.png";
type IconsProps = {
  className?: string;
  colour?: "Yellow";
  kind?: "+" | "-";
};

function Icons({ className, colour = "Yellow", kind = "+" }: IconsProps) {
  const isAndYellow = kind === "-" && colour === "Yellow";
  return (
    <div className={className || "bg-[#f1b71c] relative rounded-[10px] size-[20px]"}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center relative size-full">
          <div className={`relative shrink-0 ${isAndYellow ? "h-0 w-[10px]" : "size-[10px]"}`}>
            <div className={`absolute ${isAndYellow ? "inset-[-1px_-10%]" : "inset-[-10%]"}`}>
              <svg className="block size-full" fill="none" height={isAndYellow ? "2" : "12"} preserveAspectRatio="none" viewBox={isAndYellow ? "0 0 12 2" : "0 0 12 12"} width="12">
                <g id="Group 3">
                  <path d={isAndYellow ? "M1 1H11" : "M1 6H11"} id="Vector" stroke="#101636" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  {kind === "+" && colour === "Yellow" && <path d="M6 1V11" id="Vector_2" stroke="#101636" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />}
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[540px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[52px] min-w-full not-italic relative shrink-0 text-[#101636] text-[44px] tracking-[-0.44px] w-[min-content]">Frequently Asked Questions</p>
      <div className="bg-[#f1b71c] relative rounded-[71px] shrink-0" data-name="CTA Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[20px] py-[10px] relative size-full">
            <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.3] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Get Your 2-Week Trial</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[22px] not-italic relative shrink-0 text-[#101636] text-[16px] w-full">What makes Designity a top marketing agency in Atlanta?</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative">
      <Frame2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start justify-center min-w-px relative">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] not-italic relative shrink-0 text-[#101636] text-[16px] w-full">Do you work with startups and enterprises in Atlanta?</p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Yes, we support businesses of all sizes in Atlanta, from fast-growing startups to established enterprises. Our flexible pricing and scalable services make us a great fit for a wide range of industries.
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[22px] not-italic relative shrink-0 text-[#101636] text-[16px] w-full">Can you run location-specific campaigns for Atlanta-based audiences?</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative">
      <Frame4 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[22px] not-italic relative shrink-0 text-[#101636] text-[16px] w-full">How quickly can we launch a campaign after signing up?</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative">
      <Frame5 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[22px] not-italic relative shrink-0 text-[#101636] text-[16px] w-full">{`What's included in your monthly marketing plans?`}</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative">
      <Frame6 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[22px] not-italic relative shrink-0 text-[#101636] text-[16px] w-full">What industries do you specialize in within Atlanta?</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative">
      <Frame7 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[22px] not-italic relative shrink-0 text-[#101636] text-[16px] w-full">Will I have to manage multiple freelancers or vendors?</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative">
      <Frame8 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[22px] not-italic relative shrink-0 text-[#101636] text-[16px] w-full">How is Designity different from a traditional marketing agency in Atlanta?</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative">
      <Frame9 />
    </div>
  );
}

function Frame17() {
  return <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] h-[26px] items-start min-w-px relative" />;
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] h-full items-start min-w-px overflow-clip relative">
      <div className="bg-[#f9f9fb] relative rounded-[12px] shrink-0 w-full" data-name="FAQs">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-row justify-end size-full">
          <div className="content-stretch flex gap-[32px] items-start justify-end p-[16px] relative size-full">
            <Frame10 />
            <Icons className="bg-[#f1b71c] relative rounded-[10px] shrink-0 size-[20px]" />
          </div>
        </div>
      </div>
      <div className="bg-[#f9f9fb] relative rounded-[12px] shrink-0 w-full" data-name="FAQs">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-row justify-end size-full">
          <div className="content-stretch flex gap-[32px] items-start justify-end p-[16px] relative size-full">
            <Frame3 />
            <Icons className="bg-[#f1b71c] relative rounded-[10px] shrink-0 size-[20px]" kind="-" />
          </div>
        </div>
      </div>
      <div className="bg-[#f9f9fb] relative rounded-[12px] shrink-0 w-full" data-name="FAQs">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-row justify-end size-full">
          <div className="content-stretch flex gap-[32px] items-start justify-end p-[16px] relative size-full">
            <Frame11 />
            <Icons className="bg-[#f1b71c] relative rounded-[10px] shrink-0 size-[20px]" />
          </div>
        </div>
      </div>
      <div className="bg-[#f9f9fb] relative rounded-[12px] shrink-0 w-full" data-name="FAQs">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-row justify-end size-full">
          <div className="content-stretch flex gap-[32px] items-start justify-end p-[16px] relative size-full">
            <Frame12 />
            <Icons className="bg-[#f1b71c] relative rounded-[10px] shrink-0 size-[20px]" />
          </div>
        </div>
      </div>
      <div className="bg-[#f9f9fb] relative rounded-[12px] shrink-0 w-full" data-name="FAQs">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-row justify-end size-full">
          <div className="content-stretch flex gap-[32px] items-start justify-end p-[16px] relative size-full">
            <Frame13 />
            <Icons className="bg-[#f1b71c] relative rounded-[10px] shrink-0 size-[20px]" />
          </div>
        </div>
      </div>
      <div className="bg-[#f9f9fb] relative rounded-[12px] shrink-0 w-full" data-name="FAQs">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-row justify-end size-full">
          <div className="content-stretch flex gap-[32px] items-start justify-end p-[16px] relative size-full">
            <Frame14 />
            <Icons className="bg-[#f1b71c] relative rounded-[10px] shrink-0 size-[20px]" />
          </div>
        </div>
      </div>
      <div className="bg-[#f9f9fb] relative rounded-[12px] shrink-0 w-full" data-name="FAQs">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-row justify-end size-full">
          <div className="content-stretch flex gap-[32px] items-start justify-end p-[16px] relative size-full">
            <Frame15 />
            <Icons className="bg-[#f1b71c] relative rounded-[10px] shrink-0 size-[20px]" />
          </div>
        </div>
      </div>
      <div className="bg-[#f9f9fb] relative rounded-[12px] shrink-0 w-full" data-name="FAQs">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-row justify-end size-full">
          <div className="content-stretch flex gap-[32px] items-start justify-end p-[16px] relative size-full">
            <Frame16 />
            <Icons className="bg-[#f1b71c] relative rounded-[10px] shrink-0 size-[20px]" />
          </div>
        </div>
      </div>
      <div className="bg-[#f9f9fb] opacity-0 relative rounded-[12px] shrink-0 w-full" data-name="FAQs">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-row justify-end size-full">
          <div className="content-stretch flex gap-[32px] items-start justify-end p-[16px] relative size-full">
            <Frame17 />
            <Icons className="bg-[#f1b71c] relative rounded-[10px] shrink-0 size-[20px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function OShape() {
  return (
    <div className="absolute inset-[9.19%_67.67%_0_0]" data-name="O.SHAPE">
      <svg className="absolute block inset-0 size-full" fill="none" height="26.1109" preserveAspectRatio="none" viewBox="0 0 20.5952 26.1109" width="20.5952">
        <g id="O.SHAPE">
          <path d={svgPaths.p1c395a00} fill="#F1B71C" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Circle() {
  return (
    <div className="absolute inset-[0_64.16%_52.43%_14.27%]" data-name="CIRCLE">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.678" preserveAspectRatio="none" viewBox="0 0 13.7443 13.678" width="13.7443">
        <g id="CIRCLE">
          <path d={svgPaths.p32ac2400} fill="black" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function D() {
  return (
    <div className="absolute inset-[46.43%_80.79%_21.62%_6.46%]" data-name="D">
      <svg className="absolute block inset-0 size-full" fill="none" height="9.18665" preserveAspectRatio="none" viewBox="0 0 8.12411 9.18665" width="8.12411">
        <g id="D">
          <path d={svgPaths.p2750c900} fill="black" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function E() {
  return (
    <div className="absolute inset-[55.13%_68.9%_21.23%_20.36%]" data-name="e">
      <svg className="absolute block inset-0 size-full" fill="none" height="6.79787" preserveAspectRatio="none" viewBox="0 0 6.84126 6.79787" width="6.84126">
        <g id="e">
          <path d={svgPaths.p14c30700} fill="black" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function S() {
  return (
    <div className="absolute inset-[55.09%_58.56%_21.26%_32.26%]" data-name="s">
      <svg className="absolute block inset-0 size-full" fill="none" height="6.79787" preserveAspectRatio="none" viewBox="0 0 5.84451 6.79787" width="5.84451">
        <g id="s">
          <path d={svgPaths.p1d457a80} fill="black" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function I() {
  return (
    <div className="absolute inset-[55.88%_53.68%_21.65%_43.13%]" data-name="i">
      <svg className="absolute block inset-0 size-full" fill="none" height="6.46153" preserveAspectRatio="none" viewBox="0 0 2.03636 6.46153" width="2.03636">
        <g id="i">
          <path d={svgPaths.p2b35ef00} fill="black" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component() {
  return (
    <div className="absolute inset-[45.26%_53.29%_46.04%_42.75%]" data-name="_.">
      <svg className="absolute block inset-0 size-full" fill="none" height="2.50089" preserveAspectRatio="none" viewBox="0 0 2.52523 2.50089" width="2.52523">
        <g id="_.">
          <path d={svgPaths.p37498d00} fill="black" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function I1() {
  return (
    <div className="absolute inset-[55.88%_23.94%_21.65%_72.87%]" data-name="i-2">
      <svg className="absolute block inset-0 size-full" fill="none" height="6.46153" preserveAspectRatio="none" viewBox="0 0 2.03636 6.46153" width="2.03636">
        <g id="i-2">
          <path d={svgPaths.p34254100} fill="black" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute inset-[45.26%_23.55%_46.04%_72.48%]" data-name="_.-2">
      <svg className="absolute block inset-0 size-full" fill="none" height="2.50089" preserveAspectRatio="none" viewBox="0 0 2.52523 2.50089" width="2.52523">
        <g id="_.-2">
          <path d={svgPaths.p3760dd71} fill="black" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function G() {
  return (
    <div className="absolute inset-[55.38%_41.23%_11.78%_47.94%]" data-name="G">
      <svg className="absolute block inset-0 size-full" fill="none" height="9.4413" preserveAspectRatio="none" viewBox="0 0 6.90195 9.4413" width="6.90195">
        <g id="G">
          <path d={svgPaths.p21d5df72} fill="black" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function N() {
  return (
    <div className="absolute inset-[55.27%_29.05%_21.62%_60.77%]" data-name="n">
      <svg className="absolute block inset-0 size-full" fill="none" height="6.64519" preserveAspectRatio="none" viewBox="0 0 6.48501 6.64519" width="6.48501">
        <g id="n">
          <path d={svgPaths.p1b8da340} fill="black" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function T() {
  return (
    <div className="absolute inset-[48.99%_14.88%_21.65%_77.81%]" data-name="t">
      <svg className="absolute block inset-0 size-full" fill="none" height="8.44184" preserveAspectRatio="none" viewBox="0 0 4.66274 8.44184" width="4.66274">
        <g id="t">
          <path d={svgPaths.p133b7a80} fill="black" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Y() {
  return (
    <div className="absolute inset-[55.7%_2.87%_11.82%_86.32%]" data-name="y">
      <svg className="absolute block inset-0 size-full" fill="none" height="9.33989" preserveAspectRatio="none" viewBox="0 0 6.88526 9.33989" width="6.88526">
        <g id="y">
          <path d={svgPaths.p33ab53e0} fill="black" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function R() {
  return (
    <div className="absolute inset-[78.77%_0_11.99%_95.85%]" data-name="R">
      <svg className="absolute block inset-0 size-full" fill="none" height="2.6547" preserveAspectRatio="none" viewBox="0 0 2.64772 2.6547" width="2.64772">
        <g id="R">
          <path d={svgPaths.p3f1f0b80} fill="black" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DesignityLogo() {
  return (
    <div className="h-[28.754px] overflow-clip relative shrink-0 w-[63.711px]" data-name="Designity Logo">
      <OShape />
      <Circle />
      <D />
      <E />
      <S />
      <I />
      <Component />
      <I1 />
      <Component1 />
      <G />
      <N />
      <T />
      <Y />
      <R />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[36.52px] top-[305.09px]">
      <div className="absolute flex h-[805.824px] items-center justify-center left-[36.52px] top-[305.09px] w-[537.216px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[805.824px] relative w-[537.216px]" data-name="ChatGPT Image Apr 17, 2025, 09_54_49 PM 2 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgChatGptImageApr172025095449Pm21} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[34.15px] items-center justify-center left-[321.56px] top-[840.15px] w-[65.956px]">
        <div className="flex-none rotate-[-4.96deg]">
          <div className="h-[28.754px] relative w-[63.711px]" data-name="Logo/Designity">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center relative size-full">
                <DesignityLogo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FaQs() {
  return (
    <div className="bg-white relative size-full" data-name="FAQs">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[80px] items-start justify-center px-[60px] py-[120px] relative size-full">
          <Frame />
          <Frame1 />
          <Group />
        </div>
      </div>
    </div>
  );
}