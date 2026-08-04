import type { Dispatch, SetStateAction } from "react";
import svgPaths from "../../imports/RootContainer/svg-8uklajb9kg";
import imgScreenshot20260803At70004Pm1 from "../../imports/RootContainer/6c10ecacc9bf3dfd7d395a89e89f06ea60277783.png";
import { DemoCallWidget } from "./DemoCallWidget";

function CheckIcon() {
  return (
    <div className="bg-[#f1b71c] relative rounded-[10px] shrink-0 size-[20px]">
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
  );
}

function CtaStep1Image() {
  return (
    <div className="h-[428.692px] relative shrink-0 w-full md:w-[395px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[112.67%] left-0 max-w-none top-0 w-full" src={imgScreenshot20260803At70004Pm1} />
      </div>
    </div>
  );
}

type CtaDemoSectionProps = {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  onComplete?: () => void;
};

export function CtaDemoSection({ step, setStep, onComplete }: CtaDemoSectionProps) {
  return (
    <section id="cta-demo" className="bg-[#101636] relative shrink-0 w-full" aria-label="Book a demo call">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">

        {/* Mobile layout */}
        <div className="md:hidden flex flex-col gap-[24px] px-[20px] py-[48px] w-full">
          <p className="font-inter font-semibold text-[32px] leading-[40px] text-white w-full">
            {"Let's Chat About Your Atlanta Business's Marketing Opportunities"}
          </p>
          <p className="font-inter font-bold text-[16px] text-[#f1b71c]">
            Book a demo call to see:
          </p>
          <div className="flex flex-col gap-[16px]">
            <div className="flex gap-[12px] items-start">
              <CheckIcon />
              <p className="flex-1 font-open-sans font-normal leading-[20px] text-[14px] text-white">
                {"How Designity's Creative-as-a-Service platform helps companies in Atlanta scale their marketing and creative projects with greater speed and efficiency."}
              </p>
            </div>
            <div className="flex gap-[12px] items-start">
              <CheckIcon />
              <p className="flex-1 font-open-sans font-normal leading-[20px] text-[14px] text-white">
                Why Atlanta companies are choosing Designity over traditional agencies, in-house hires, and freelance marketplaces.
              </p>
            </div>
            <div className="flex gap-[12px] items-start">
              <CheckIcon />
              <p className="flex-1 font-open-sans font-normal leading-[20px] text-[14px] text-white">
                How working with a designated Creative Director can reduce admin overhead and deliver higher-quality mobile app solutions, tailored to the unique Atlanta market.
              </p>
            </div>
          </div>
          <DemoCallWidget step={step} setStep={setStep} variant="dark" renderStep1={() => <CtaStep1Image />} onComplete={onComplete} />
        </div>

        {/* Desktop layout */}
        <div className="hidden md:flex content-stretch gap-[64px] items-center justify-center px-[60px] py-[120px] relative size-full">

          {/* InformationSection */}
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[48px] items-start min-w-px relative">
            <p className="font-inter font-semibold leading-[52px] not-italic relative shrink-0 text-[44px] text-white tracking-[-0.44px] w-[599.98px]">
              {"Let's Chat About Your Atlanta Business's Marketing Opportunities"}
            </p>
            {/* InfoTextContainer */}
            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
              <p className="font-open-sans font-semibold leading-[28px] relative shrink-0 text-[#f1b71c] text-[18px] w-full">
                Book a demo call to see:
              </p>
              {/* ChecklistContainer */}
              <div className="relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[32px] items-start pl-[20px] relative size-full">
                  <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
                    <CheckIcon />
                    <p className="flex-[1_0_0] font-open-sans font-normal leading-[26px] min-w-px relative text-[16px] text-white">
                      {"How Designity's Creative-as-a-Service platform helps companies in Atlanta scale their marketing and creative projects with greater speed and efficiency."}
                    </p>
                  </div>
                  <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
                    <CheckIcon />
                    <p className="flex-[1_0_0] font-open-sans font-normal leading-[26px] min-w-px relative text-[16px] text-white">
                      Why Atlanta companies are choosing Designity over traditional agencies, in-house hires, and freelance marketplaces.
                    </p>
                  </div>
                  <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
                    <CheckIcon />
                    <p className="flex-[1_0_0] font-open-sans font-normal leading-[26px] min-w-px relative text-[16px] text-white">
                      How working with a designated Creative Director can reduce admin overhead and deliver higher-quality mobile app solutions, tailored to the unique Atlanta market.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CalendarSection */}
          <div className="content-stretch flex flex-col gap-[20px] items-center justify-center relative shrink-0 w-[538px]">
            <DemoCallWidget step={step} setStep={setStep} variant="dark" renderStep1={() => <CtaStep1Image />} onComplete={onComplete} />
          </div>

        </div>

      </div>
    </section>
  );
}
