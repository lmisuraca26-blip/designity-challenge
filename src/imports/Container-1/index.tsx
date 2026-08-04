import svgPaths from "./svg-khpv8jsl93";
import imgDetailImage from "./b3c9dfe0c8422deb8e681941295a37d6c03e2167.png";
import imgDetailImage1 from "./906dbf317cb8bc03b3a98fefdee694216dc315fb.png";
import imgImage79 from "./ac3c7dd4715eacde9146fbeda5c009c62227a6bd.png";
import imgDetailImage2 from "./a08b9976c9c5caa8b879c1b0306a2f6291813958.png";
import imgDetailImage3 from "./24c5a60cc123b4886595023f3afdefcf924a3466.png";

function ProcessHeader() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Process Header">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#101636] text-[0px] tracking-[-0.44px] w-[818.959px]">
        <span className="leading-[52px] text-[44px]">{`Our `}</span>
        <span className="font-['Inter:Black',sans-serif] font-black leading-[1.2] text-[44px]">5-Step</span>
        <span className="leading-[52px] text-[44px]">{` Marketing Campaign Launch Process for Atlanta Businesses`}</span>
      </p>
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

function DetailImage() {
  return (
    <div className="h-[445px] relative rounded-[16px] shrink-0 w-[397px]" data-name="Detail Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
        <img alt="" className="absolute h-[142.62%] left-[103.24%] max-w-none top-[-38.29%] w-[-106.47%]" src={imgDetailImage} />
      </div>
    </div>
  );
}

function DetailHeader() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Detail Header">
      <div className="h-[67.529px] relative shrink-0 w-[53.264px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="67.5294" preserveAspectRatio="none" viewBox="0 0 53.2642 67.5294" width="53.2642">
          <path d={svgPaths.p25eaa600} fill="#F1B71C" id="Vector" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.2] not-italic relative shrink-0 text-[#101636] text-[24px] tracking-[-0.24px] whitespace-nowrap">Demo Call</p>
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.2] left-[12.63px] not-italic text-[#101636] text-[24px] top-[19.27px] tracking-[-0.24px] whitespace-nowrap">01</p>
    </div>
  );
}

function LeftDetailText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative" data-name="Left Detail Text">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>{`It starts with a quick demo with one of our Account Executives. During the demo, you'll discuss your goals and challenges, get a walkthrough of the Designity platform, and explore our services to see if there's a good fit.`}</p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>{`If it feels right for you, you'll then choose the plan that best fits your business and move forward with a two-week trial.`}</p>
    </div>
  );
}

function RightDetailText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal gap-[24px] items-start leading-[20px] min-w-px relative text-[14px]" data-name="Right Detail Text">
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: '"wdth" 100' }}>{`It starts with a quick demo with one of our Account Executives. During the demo, you'll discuss your goals and challenges, get a walkthrough of the Designity platform, and explore our services to see if there's a good fit. If it feels right for you, you'll then choose the plan that best fits your business and move forward with a two-week trial.`}</p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: '"wdth" 100' }}>{`It starts with a quick demo with one of our Account Executives. During the demo, you'll discuss your goals and challenges, get a walkthrough of the Designity platform, and explore our services to see if there's a good fit. If it feels right for you, you'll then choose the plan that best fits your business and move forward with a two-week trial.`}</p>
    </div>
  );
}

function DetailContentContainer() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[24px] items-start relative shrink-0 text-[rgba(0,0,0,0.8)] w-full" data-name="Detail Content Container">
      <LeftDetailText />
      <RightDetailText />
    </div>
  );
}

function DetailTextContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px relative" data-name="Detail Text Container">
      <DetailHeader />
      <DetailContentContainer />
    </div>
  );
}

function DetailSection() {
  return (
    <div className="bg-white drop-shadow-[0px_11px_12.1px_rgba(0,0,0,0.05)] relative rounded-[16px] shrink-0 w-full" data-name="Detail Section">
      <div aria-hidden className="absolute border border-[#e8e8ef] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[48px] items-center p-[32px] relative size-full">
          <DetailImage />
          <DetailTextContainer />
        </div>
      </div>
    </div>
  );
}

function DetailHeader1() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Detail Header">
      <div className="h-[67.529px] relative shrink-0 w-[53.264px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="67.5294" preserveAspectRatio="none" viewBox="0 0 53.2642 67.5294" width="53.2642">
          <path d={svgPaths.p25eaa600} fill="#F1B71C" id="Vector" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.2] not-italic relative shrink-0 text-[#101636] text-[24px] tracking-[-0.24px] whitespace-nowrap">Two-Week Trial</p>
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.2] left-[12.63px] not-italic text-[#101636] text-[24px] top-[19.27px] tracking-[-0.24px] whitespace-nowrap">02</p>
    </div>
  );
}

function LeftDetailText1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative" data-name="Left Detail Text">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Test drive our 100+ design and marketing services for two weeks, no upfront payment required. This risk-free trial will give you full access to the platform, so you can experience how Designity operates and start real work with your creative team right away.
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>{`Tip: To get the most value out of your trial, pick a project that can be wrapped up within two weeks. That way, you'll have everything you need to make an informed decision about continuing our partnership past your trial.`}</p>
    </div>
  );
}

function RightDetailText1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal gap-[24px] items-start leading-[20px] min-w-px relative text-[14px]" data-name="Right Detail Text">
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: '"wdth" 100' }}>{`Test drive our 100+ design and marketing services with no upfront payment. You'll get full access to the platform and start working with your creative team right away.`}</p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: '"wdth" 100' }}>{`Tip: choose a project that can wrap within two weeks—so you'll have everything you need to decide if Designity's right for you.`}</p>
    </div>
  );
}

function DetailContentContainer1() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[24px] items-start relative shrink-0 text-[rgba(0,0,0,0.8)] w-full" data-name="Detail Content Container">
      <LeftDetailText1 />
      <RightDetailText1 />
    </div>
  );
}

function DetailTextContainer1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px relative" data-name="Detail Text Container">
      <DetailHeader1 />
      <DetailContentContainer1 />
    </div>
  );
}

function DetailImage1() {
  return (
    <div className="h-[445px] relative rounded-[16px] shrink-0 w-[397px]" data-name="Detail Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
        <img alt="" className="absolute h-[102.85%] left-[159.54%] max-w-none top-[-1.43%] w-[-173.1%]" src={imgDetailImage1} />
      </div>
    </div>
  );
}

function DetailSection1() {
  return (
    <div className="bg-white drop-shadow-[0px_11px_12.1px_rgba(0,0,0,0.05)] relative rounded-[16px] shrink-0 w-full" data-name="Detail Section">
      <div aria-hidden className="absolute border border-[#e8e8ef] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[48px] items-center p-[32px] relative size-full">
          <DetailTextContainer1 />
          <DetailImage1 />
        </div>
      </div>
    </div>
  );
}

function DetailImage2() {
  return (
    <div className="bg-[#e38925] content-stretch flex flex-col h-[445px] items-start relative rounded-[16px] shrink-0 w-[397px]" data-name="Detail Image">
      <div className="absolute h-[445px] left-[8.72px] top-0 w-[379.555px]" data-name="image 79">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[111.5%] left-0 max-w-none top-0 w-full" src={imgImage79} />
        </div>
      </div>
    </div>
  );
}

function DetailHeader2() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Detail Header">
      <div className="h-[67.529px] relative shrink-0 w-[53.264px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="67.5294" preserveAspectRatio="none" viewBox="0 0 53.2642 67.5294" width="53.2642">
          <path d={svgPaths.p25eaa600} fill="#F1B71C" id="Vector" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.2] not-italic relative shrink-0 text-[#101636] text-[24px] tracking-[-0.24px] whitespace-nowrap">Match with Your Creative Director</p>
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.2] left-[12.63px] not-italic text-[#101636] text-[24px] top-[19.27px] tracking-[-0.24px] whitespace-nowrap">03</p>
    </div>
  );
}

function LeftDetailText2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative" data-name="Left Detail Text">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>{`Each Designity client is hand-matched to a designated Creative Director (CD), who will be your main point of contact and lead your creative strategy. This isn't a random pairing.`}</p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>{`We use your project request form—including your industry, goals, creative needs, and collaboration style—and compare it to our CDs' experience and leadership style to find the perfect fit.`}</p>
    </div>
  );
}

function RightDetailText2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal gap-[24px] items-start leading-[20px] min-w-px relative text-[14px]" data-name="Right Detail Text">
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: '"wdth" 100' }}>{`It's a thoughtful process designed to make sure your CD understands your vision and can lead your projects with clarity from day one.`}</p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: '"wdth" 100' }}>{`Each Designity client is hand-matched to a designated Creative Director (CD), who will be your main point of contact and lead your creative strategy. This isn't a random pairing. We use your project request form—including your industry, goals, creative needs, and collaboration style—and compare it to our CDs' experience and leadership style to find the perfect fit. It's a thoughtful process designed to make sure your CD understands your vision and can lead your projects with clarity from day one.`}</p>
    </div>
  );
}

function DetailContentContainer2() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[24px] items-start relative shrink-0 text-[rgba(0,0,0,0.8)] w-full" data-name="Detail Content Container">
      <LeftDetailText2 />
      <RightDetailText2 />
    </div>
  );
}

function DetailTextContainer2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px relative" data-name="Detail Text Container">
      <DetailHeader2 />
      <DetailContentContainer2 />
    </div>
  );
}

function DetailSection2() {
  return (
    <div className="bg-white drop-shadow-[0px_11px_12.1px_rgba(0,0,0,0.05)] relative rounded-[16px] shrink-0 w-full" data-name="Detail Section">
      <div aria-hidden className="absolute border border-[#e8e8ef] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[48px] items-center p-[32px] relative size-full">
          <DetailImage2 />
          <DetailTextContainer2 />
        </div>
      </div>
    </div>
  );
}

function DetailHeader3() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Detail Header">
      <div className="h-[67.529px] relative shrink-0 w-[53.264px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="67.5294" preserveAspectRatio="none" viewBox="0 0 53.2642 67.5294" width="53.2642">
          <path d={svgPaths.p25eaa600} fill="#F1B71C" id="Vector" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.2] not-italic relative shrink-0 text-[#101636] text-[24px] tracking-[-0.24px] whitespace-nowrap">KickOff Your Trial</p>
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.2] left-[12.63px] not-italic text-[#101636] text-[24px] top-[19.27px] tracking-[-0.24px] whitespace-nowrap">04</p>
    </div>
  );
}

function LeftDetailText3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative" data-name="Left Detail Text">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Once you’ve matched with your CD, you’ll book your KickOff call, where you and your CD meet to discuss your first project, set clear expectations, and outline your goals.
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Then, your CD assembles the perfect creative team for your specific needs—pulling from Designity’s vetted pool of US-based talent—and your first project begins.
      </p>
    </div>
  );
}

function RightDetailText3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal gap-[24px] items-start leading-[20px] min-w-px relative text-[14px]" data-name="Right Detail Text">
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        This 2-week trial gives you a chance to experience how Designity works: the quality of the creative output, the easy collaboration, our services, transparent timelines, and the strategic leadership your CD brings to the table. And if you decide not to continue, you’re free to cancel at any time during your trial—no payment, no risk, no pressure.
      </p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        You and your CD will start your partnership with a KickOff Call to align on goals and discuss your first project. Your CD then assembles a creative team from our pool of vetted US-based talent. Over the two-week trial, you’ll experience our quality, collaboration, and strategic leadership firsthand—with no payment required and no pressure to continue.
      </p>
    </div>
  );
}

function DetailContentContainer3() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[24px] items-start relative shrink-0 text-[rgba(0,0,0,0.8)] w-full" data-name="Detail Content Container">
      <LeftDetailText3 />
      <RightDetailText3 />
    </div>
  );
}

function DetailTextContainer3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px relative" data-name="Detail Text Container">
      <DetailHeader3 />
      <DetailContentContainer3 />
    </div>
  );
}

function DetailImage3() {
  return (
    <div className="h-[445px] relative rounded-[16px] shrink-0 w-[397px]" data-name="Detail Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgDetailImage2} />
    </div>
  );
}

function DetailSection3() {
  return (
    <div className="bg-white drop-shadow-[0px_11px_12.1px_rgba(0,0,0,0.05)] relative rounded-[16px] shrink-0 w-full" data-name="Detail Section">
      <div aria-hidden className="absolute border border-[#e8e8ef] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[48px] items-center p-[32px] relative size-full">
          <DetailTextContainer3 />
          <DetailImage3 />
        </div>
      </div>
    </div>
  );
}

function DetailImage4() {
  return (
    <div className="h-[445px] relative rounded-[16px] shrink-0 w-[397px]" data-name="Detail Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgDetailImage3} />
    </div>
  );
}

function DetailHeader4() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Detail Header">
      <div className="h-[67.529px] relative shrink-0 w-[53.264px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="67.5294" preserveAspectRatio="none" viewBox="0 0 53.2642 67.5294" width="53.2642">
          <path d={svgPaths.p25eaa600} fill="#F1B71C" id="Vector" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.2] not-italic relative shrink-0 text-[#101636] text-[24px] tracking-[-0.24px] whitespace-nowrap">{`Strategy, Roadmap, Execution, & Optimization`}</p>
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.2] left-[12.63px] not-italic text-[#101636] text-[24px] top-[19.27px] tracking-[-0.24px] whitespace-nowrap">05</p>
    </div>
  );
}

function LeftDetailText4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative" data-name="Left Detail Text">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        As you continue beyond your trial and become an active client, your Creative Director builds a custom roadmap based on your brand, your goals, brand positioning, and creative priorities — outlining strategy, key milestones, and deliverables needed.
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        As your creative team delivers assets, you’ll receive regular updates, performance tracking, and ongoing optimization to keep your campaigns effective and driving results.
      </p>
    </div>
  );
}

function RightDetailText4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal gap-[24px] items-start leading-[20px] min-w-px relative text-[14px]" data-name="Right Detail Text">
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        As you continue past the trial, your CD builds a custom roadmap tailored to your brand, goals, and priorities—outlining strategy, milestones, and key deliverables.
      </p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        You’ll get regular updates, performance tracking, and ongoing optimization to keep your campaigns effective and results-driven.
      </p>
    </div>
  );
}

function DetailContentContainer4() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[24px] items-start relative shrink-0 text-[rgba(0,0,0,0.8)] w-full" data-name="Detail Content Container">
      <LeftDetailText4 />
      <RightDetailText4 />
    </div>
  );
}

function DetailTextContainer4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px relative" data-name="Detail Text Container">
      <DetailHeader4 />
      <DetailContentContainer4 />
    </div>
  );
}

function DetailSection4() {
  return (
    <div className="bg-white drop-shadow-[0px_11px_12.1px_rgba(0,0,0,0.05)] relative rounded-[16px] shrink-0 w-full" data-name="Detail Section">
      <div aria-hidden className="absolute border border-[#e8e8ef] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[48px] items-center p-[32px] relative size-full">
          <DetailImage4 />
          <DetailTextContainer4 />
        </div>
      </div>
    </div>
  );
}

function Section4MarketingServices() {
  return (
    <div className="bg-[#f9f9fb] relative shrink-0 w-full" data-name="Section 4: Marketing Services">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-start px-[60px] py-[120px] relative size-full">
          <ProcessHeader />
          <DetailSection />
          <DetailSection1 />
          <DetailSection2 />
          <DetailSection3 />
          <DetailSection4 />
        </div>
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Container">
      <div className="absolute flex h-[2161.813px] items-center justify-center left-[-431.77px] top-[-646.65px] w-[2330.197px]">
        <div className="-rotate-120 flex-none">
          <div className="h-[1874.207px] relative w-[1414.173px]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height="1874.21" preserveAspectRatio="none" viewBox="0 0 1414.17 1874.21" width="1414.17">
              <path d={svgPaths.p370c6500} fill="#F9F9FB" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <Section4MarketingServices />
    </div>
  );
}