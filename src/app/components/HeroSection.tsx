import image_Trustpilot_Logo__20_svg from '@/imports/Trustpilot_Logo__20.svg.png'
import type { Dispatch, SetStateAction } from "react";
import imgVector from "../../imports/Container-3/ee768790e76057a7ced27f0df3a373fd03b356a6.png";
import imgLogoImage from "../../imports/Container-2/76c6e8795979d80e128792fef95a799ffce83ded.png";
import imgScreenshot from "../../imports/Container-2/8245cf9dfee912f8081aff58d0f874ab9db065f0.png";
import svgPaths from "../../imports/Desktop1440Px/svg-66s18btp46";
import { DemoCallWidget } from "./DemoCallWidget";

function HeroStep1Image() {
  return (
    <div className="h-[375.789px] relative shrink-0 w-full md:w-[339.172px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="Select a time slot for your demo call" className="absolute h-[130.85%] left-[-1.4%] max-w-none top-[-29.02%] w-[101.94%]" src={imgScreenshot} />
      </div>
    </div>
  );
}

type HeroSectionProps = {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  onComplete?: () => void;
};

export function HeroSection({ step, setStep, onComplete }: HeroSectionProps) {
  const checklistItems = [
    "Full-Stack US-based Marketing Team with 100+ Services",
    "Designated Creative Director",
    "Flexible Month-Over-Month Pricing",
    "70% Less $$$ vs Traditional Agencies",
    "Faster Turnaround Time",
  ];

  return (
    <div className="relative shrink-0 w-full overflow-clip md:h-[810px]">
      {/* Background decorative vector — desktop crop */}
      <div className="hidden md:flex absolute h-[1513.097px] items-center justify-center left-[-297.96px] top-[-576.57px] w-[2817.92px]">
        <div className="flex-none rotate-84">
          <div className="h-[2703.402px] relative w-[1237.308px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" height="2703.402" src={imgVector} width="1237.308" />
          </div>
        </div>
      </div>

      {/* Background decorative vector — mobile crop */}
      <div className="flex md:hidden absolute h-[1833.385px] items-center justify-center left-[-592.13px] top-[-586.69px] w-[3414.409px]">
        <div className="flex-none rotate-84">
          <div className="h-[3275.65px] relative w-[1499.218px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" height="3275.65" src={imgVector} width="1499.218" />
          </div>
        </div>
      </div>

      {/* Mobile layout (below md) */}
      <div className="flex md:hidden flex-col gap-[32px] px-[20px] pt-[40px] pb-[48px] relative">

        {/* HeroHeader */}
        <div className="flex flex-col gap-[16px] items-start w-full">
          <p className="[word-break:break-word] w-full font-inter font-extrabold leading-[56px] text-[#101636] text-[48px]">
            <span>Top Marketing Agency in </span>
            <span className="italic">Atlanta</span>
          </p>
          <p className="[word-break:break-word] font-open-sans font-semibold leading-[28px] text-[18px] text-[#023456] w-full">
            {"Designity isn't your typical agency — it's smarter, faster, better. "}
          </p>
          <p className="[word-break:break-word] font-open-sans font-normal leading-[20px] text-[14px] text-[rgba(0,0,0,0.8)] w-full">
            {"Designity's Creative as a Service (CaaS) model combines the power of a vetted marketing and creative team, a designated Creative Director, and a strategy-first approach to deliver impactful results and give businesses from Buffalo to Manhattan a flexible, transparent, and cost-efficient alternative to agencies or in-house hires."}
          </p>
        </div>

        {/* TrustBadge — content-width pill on mobile */}
        <div className="bg-[#e8e8ef] flex gap-[8px] items-center px-[16px] py-[8px] relative rounded-[95px]">
          <div aria-hidden className="absolute border border-[#cf9d18] border-solid inset-0 pointer-events-none rounded-[95px]" />
          <div className="flex flex-col h-[33px] items-start relative shrink-0 w-[99px]">
            <div className="absolute h-[23.685px] left-[-3.48px] top-[3.17px] w-[101.124px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="Trustpilot" className="absolute h-[239.65%] left-0 max-w-none top-[-69.82%] w-full" src={imgLogoImage} />
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] font-open-sans leading-[16px] text-[#101636] text-[12px] whitespace-nowrap">
            <span className="font-bold">4.5</span> TrustScore &nbsp;|&nbsp; <span className="font-bold">112</span> Reviews
          </p>
        </div>

        {/* Checklist */}
        <div className="flex flex-col gap-[12px] items-start w-full">
          {checklistItems.map((item) => (
            <div key={item} className="flex gap-[12px] items-center w-full">
              <div className="bg-white relative rounded-[10px] shrink-0 size-[20px]">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="flex items-center justify-center size-full">
                    <div className="h-[12px] relative shrink-0 w-[14px]">
                      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 14 12" width="14" aria-hidden="true">
                        <path d={svgPaths.p2afb7200} stroke="#101636" strokeLinecap="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <p className="[word-break:break-word] flex-[1_0_0] font-open-sans font-normal leading-[20px] min-w-px text-[#101636] text-[14px]">{item}</p>
            </div>
          ))}
        </div>

        {/* DemoCallContainer — full width on mobile */}
        <DemoCallWidget step={step} setStep={setStep} variant="light" renderStep1={() => <HeroStep1Image />} onComplete={onComplete} />

      </div>

      {/* Desktop layout (md and above) */}
      <div className="hidden md:flex content-stretch gap-[60px] items-start pt-[120px] px-[60px] relative size-full">

        {/* HeroLeft */}
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[685px]">

          {/* HeaderStack */}
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">

            {/* MainHeader */}
            <div className="content-stretch flex items-center relative shrink-0 w-full">
              <p className="[word-break:break-word] flex-[1_0_0] font-inter font-extrabold leading-[0] min-w-px not-italic relative text-[#101636] text-[0px] tracking-[-0.96px]">
                <span className="leading-[1.3] text-[64px]">Top Marketing Agency in </span>
                <span className="italic leading-[1.3] text-[64px]">Atlanta</span>
              </p>
            </div>

            <p className="[word-break:break-word] font-open-sans font-semibold leading-[28px] relative shrink-0 text-[18px] text-[rgba(0,0,0,0.8)] w-full">
              {"Designity isn't your typical agency — it's smarter, faster, better. "}
            </p>
            <p className="[word-break:break-word] font-open-sans font-normal leading-[26px] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.8)] w-full">
              {"Designity's Creative as a Service (CaaS) model combines the power of a vetted marketing and creative team, a designated Creative Director, and a strategy-first approach to deliver impactful results and give businesses from Buffalo to Manhattan a flexible, transparent, and cost-efficient alternative to agencies or in-house hires."}
            </p>
          </div>

          {/* TrustScoreContainer */}
          <div className="bg-[#e8e8ef] content-stretch flex gap-[16px] items-center px-[18px] py-[6px] relative rounded-[95px] shrink-0">
            <div aria-hidden className="absolute border border-[#cf9d18] border-solid inset-0 pointer-events-none rounded-[95px]" />

            {/* LogoContainer */}
            <div className="content-stretch flex flex-col h-[32.963px] items-start relative shrink-0 w-[108.396px]">
              <div className="absolute h-[23.685px] left-[1.73px] top-[3.17px] w-[101.124px]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="Trustpilot" className="absolute h-[239.65%] left-0 max-w-none top-[-69.82%] w-full" src={imgLogoImage} />
                </div>
              </div>
            </div>

            <p className="[word-break:break-word] font-open-sans font-normal leading-[20px] relative shrink-0 text-[#101636] text-[14px] whitespace-nowrap">
              4.5 TrustScore from 112 Reviews
            </p>
          </div>

          {/* ChecklistContainer */}
          <div className="relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[12px] items-start pl-[20px] relative size-full">
              {checklistItems.map((item) => (
                <div key={item} className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                  <div className="bg-white relative rounded-[10px] shrink-0 size-[20px]">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="content-stretch flex items-center justify-center relative size-full">
                        <div className="h-[12px] relative shrink-0 w-[14px]">
                          <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 14 12" width="14" aria-hidden="true">
                            <path d={svgPaths.p2afb7200} stroke="#101636" strokeLinecap="round" strokeWidth="2" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="[word-break:break-word] flex-[1_0_0] font-inter font-semibold leading-[1.3] min-w-px not-italic relative text-[#101636] text-[16px]">{item}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* DemoCallContainer */}
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-center justify-center min-w-px relative">
          <DemoCallWidget step={step} setStep={setStep} variant="light" renderStep1={() => <HeroStep1Image />} onComplete={onComplete} />
        </div>

      </div>
      {/* End of desktop layout */}
    </div>
  );
}
