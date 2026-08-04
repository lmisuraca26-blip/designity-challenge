import svgPaths from "./svg-bctbod0kgh";
import imgVector from "./ee768790e76057a7ced27f0df3a373fd03b356a6.png";
import imgLogoImage from "./76c6e8795979d80e128792fef95a799ffce83ded.png";
import imgScreenshot20260803At14315Pm1 from "./8245cf9dfee912f8081aff58d0f874ab9db065f0.png";
type IconsProps = {
  className?: string;
  colour?: "White";
  kind?: "Check";
};

function Icons({ className, colour = "White", kind = "Check" }: IconsProps) {
  return (
    <div className={className || "bg-white relative rounded-[10px] size-[20px]"}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center relative size-full">
          <div className="h-[12px] relative shrink-0 w-[14px]" data-name="check">
            <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 14 12" width="14">
              <g id="check">
                <path d={svgPaths.p2afb7200} id="Vector" stroke="#101636" strokeLinecap="round" strokeWidth="2" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function MainHeader() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Main Header">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[0] min-w-px not-italic relative text-[#101636] text-[0px] tracking-[-0.96px]">
        <span className="leading-[1.3] text-[64px]">{`Top Marketing Agency in `}</span>
        <span className="font-['Inter:Extra_Bold_Italic',sans-serif] italic leading-[1.3] text-[64px]">Atlanta</span>
      </p>
    </div>
  );
}

function HeaderStack() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Header Stack">
      <MainHeader />
      <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[18px] text-[rgba(0,0,0,0.8)] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>{`Designity isn't your typical agency — it's smarter, faster, better. `}</p>
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[26px] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.8)] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>{`Designity's Creative as a Service (CaaS) model combines the power of a vetted marketing and creative team, a designated Creative Director, and a strategy-first approach to deliver impactful results and give businesses from Buffalo to Manhattan a flexible, transparent, and cost-efficient alternative to agencies or in-house hires.`}</p>
    </div>
  );
}

function LogoContainer() {
  return (
    <div className="content-stretch flex flex-col h-[32.963px] items-start relative shrink-0 w-[108.396px]" data-name="Logo Container">
      <div className="absolute h-[23.685px] left-[1.73px] top-[3.17px] w-[101.124px]" data-name="Logo Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[239.65%] left-0 max-w-none top-[-69.82%] w-full" src={imgLogoImage} />
        </div>
      </div>
    </div>
  );
}

function TrustScoreContainer() {
  return (
    <div className="bg-[#e8e8ef] content-stretch flex gap-[16px] items-center px-[18px] py-[6px] relative rounded-[95px] shrink-0" data-name="TrustScore Container">
      <div aria-hidden className="absolute border border-[#cf9d18] border-solid inset-0 pointer-events-none rounded-[95px]" />
      <LogoContainer />
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#101636] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        4.5 TrustScore from 112 Reviews
      </p>
    </div>
  );
}

function ChecklistItem() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Checklist Item">
      <Icons className="bg-white relative rounded-[10px] shrink-0 size-[20px]" />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.3] min-w-px not-italic relative text-[#101636] text-[16px]">Full-Stack US-based Marketing Team with 100+ Services</p>
    </div>
  );
}

function ChecklistItem1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Checklist Item">
      <Icons className="bg-white relative rounded-[10px] shrink-0 size-[20px]" />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.3] min-w-px not-italic relative text-[#101636] text-[16px]">Designated Creative Director</p>
    </div>
  );
}

function ChecklistItem2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Checklist Item">
      <Icons className="bg-white relative rounded-[10px] shrink-0 size-[20px]" />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.3] min-w-px not-italic relative text-[#101636] text-[16px]">Flexible Month-Over-Month Pricing</p>
    </div>
  );
}

function ChecklistItem3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Checklist Item">
      <Icons className="bg-white relative rounded-[10px] shrink-0 size-[20px]" />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.3] min-w-px not-italic relative text-[#101636] text-[16px]">70% Less $$$ vs Traditional Agencies</p>
    </div>
  );
}

function ChecklistItem4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Checklist Item">
      <Icons className="bg-white relative rounded-[10px] shrink-0 size-[20px]" />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.3] min-w-px not-italic relative text-[#101636] text-[16px]">Faster Turnaround Time</p>
    </div>
  );
}

function ChecklistContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checklist Container">
      <div className="content-stretch flex flex-col gap-[12px] items-start pl-[20px] relative size-full">
        <ChecklistItem />
        <ChecklistItem1 />
        <ChecklistItem2 />
        <ChecklistItem3 />
        <ChecklistItem4 />
      </div>
    </div>
  );
}

function HeroLeft() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[685px]" data-name="Hero Left">
      <HeaderStack />
      <TrustScoreContainer />
      <ChecklistContainer />
    </div>
  );
}

function ProgressComplete() {
  return <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#023456] h-[7px] left-[calc(50%-180px)] rounded-[71px] top-[calc(50%-0.28px)] w-[167px]" data-name="Progress Complete" />;
}

function ProgressFill() {
  return (
    <div className="bg-[rgba(16,22,54,0.08)] flex-[1_0_0] h-[7px] min-w-px overflow-clip relative rounded-[71px]" data-name="Progress Fill">
      <ProgressComplete />
    </div>
  );
}

function ProgressBarContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Progress Bar Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[20px] items-center justify-center px-[20px] relative size-full">
          <ProgressFill />
          <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#023456] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            1/3
          </p>
        </div>
      </div>
    </div>
  );
}

function DemoCallStack() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Demo Call Stack">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center justify-center px-[32px] py-[20px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.3] min-w-full not-italic relative shrink-0 text-[#101636] text-[16px] text-center w-[min-content]">Book a Demo Call</p>
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 511 1" width="511">
                <line id="Line 1" stroke="#E8E8EF" x2="511" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          <div className="h-[375.789px] relative shrink-0 w-[339.172px]" data-name="Screenshot 2026-08-03 at 1.43.15 pm 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[130.85%] left-[-1.4%] max-w-none top-[-29.02%] w-[101.94%]" src={imgScreenshot20260803At14315Pm1} />
            </div>
          </div>
          <div className="bg-[#023456] relative rounded-[71px] shrink-0" data-name="CTA Button">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[20px] py-[10px] relative size-full">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.3] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Next</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e8e8ef] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DemoCallContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-center justify-center min-w-px relative" data-name="Demo Call Container">
      <ProgressBarContainer />
      <DemoCallStack />
    </div>
  );
}

function Section1Hero() {
  return (
    <div className="h-[752px] relative shrink-0 w-full" data-name="Section 1: Hero">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[60px] items-start pt-[120px] px-[60px] relative size-full">
          <HeroLeft />
          <DemoCallContainer />
        </div>
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative size-full" data-name="Container">
      <div className="absolute flex h-[1513.097px] items-center justify-center left-[-297.96px] top-[-576.57px] w-[2817.92px]">
        <div className="flex-none rotate-84">
          <div className="h-[2703.402px] relative w-[1237.308px]" data-name="Vector">
            <img alt="" className="absolute block inset-0 max-w-none size-full" height="2703.402" src={imgVector} width="1237.308" />
          </div>
        </div>
      </div>
      <Section1Hero />
    </div>
  );
}