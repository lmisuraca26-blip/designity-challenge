import type { Dispatch, ReactNode, SetStateAction } from "react";

export const DEMO_CALL_TOTAL_STEPS = 3;

type DemoCallProgressProps = {
  step: number;
  variant: "light" | "dark";
};

export function DemoCallProgress({ step, variant }: DemoCallProgressProps) {
  const trackBg = variant === "dark" ? "bg-[rgba(255,255,255,0.08)]" : "bg-[rgba(16,22,54,0.08)]";
  const fillBg = variant === "dark" ? "bg-white" : "bg-[#023456]";
  const textColor = variant === "dark" ? "text-white" : "text-[#023456]";

  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[20px] items-center justify-center px-[20px] relative size-full">
          <div className={`${trackBg} flex-[1_0_0] h-[7px] min-w-px overflow-clip relative rounded-[71px]`}>
            <div
              className={`absolute ${fillBg} h-full left-0 top-0 rounded-[71px] transition-[width] duration-300`}
              style={{ width: `${(step / DEMO_CALL_TOTAL_STEPS) * 100}%` }}
            />
          </div>
          <p className={`font-open-sans text-[14px] ${textColor} leading-[20px] shrink-0 text-center whitespace-nowrap`}>
            {step}/{DEMO_CALL_TOTAL_STEPS}
          </p>
        </div>
      </div>
    </div>
  );
}

type DemoCallCardProps = {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  renderStep1: () => ReactNode;
  onComplete?: () => void;
};

export function DemoCallCard({ step, setStep, renderStep1, onComplete }: DemoCallCardProps) {
  const isLastStep = step >= DEMO_CALL_TOTAL_STEPS;

  function handleNext() {
    if (!isLastStep) {
      setStep((s) => s + 1);
    } else {
      onComplete?.();
      setStep(1);
    }
  }

  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center justify-center px-[32px] py-[20px] relative size-full">
          <p className="[word-break:break-word] font-inter font-semibold leading-[1.3] min-w-full not-italic relative shrink-0 text-[#101636] text-[16px] text-center w-[min-content]">
            Book a Demo Call
          </p>
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 511 1" width="511" aria-hidden="true">
                <line stroke="#E8E8EF" x2="511" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>

          {step === 1 && renderStep1()}

          {step === 2 && (
            <div className="flex flex-col gap-[12px] w-full">
              {(["First Name", "Last Name"] as const).map((label) => (
                <div key={label} className="flex flex-col gap-[4px] w-full">
                  <label className="font-open-sans text-[12px] text-[rgba(0,0,0,0.6)] leading-[16px]">{label}</label>
                  <input
                    type="text"
                    className="h-[36px] bg-white border border-[#e8e8ef] rounded-[6px] px-[12px] font-open-sans text-[14px] text-[#101636] focus:outline-none focus:border-[#023456] transition-colors w-full"
                  />
                </div>
              ))}
              <div className="flex flex-col gap-[4px] w-full">
                <label className="font-open-sans text-[12px] text-[rgba(0,0,0,0.6)] leading-[16px]">Email</label>
                <input
                  type="email"
                  className="h-[36px] bg-white border border-[#e8e8ef] rounded-[6px] px-[12px] font-open-sans text-[14px] text-[#101636] focus:outline-none focus:border-[#023456] transition-colors w-full"
                />
              </div>
              <div className="flex flex-col gap-[4px] w-full">
                <label className="font-open-sans text-[12px] text-[rgba(0,0,0,0.6)] leading-[16px]">Message</label>
                <textarea
                  rows={4}
                  className="bg-white border border-[#e8e8ef] rounded-[6px] px-[12px] py-[8px] font-open-sans text-[14px] text-[#101636] resize-none focus:outline-none focus:border-[#023456] transition-colors w-full"
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="flex items-center justify-center h-[375.789px] w-full">
              <p className="font-inter font-semibold text-[16px] text-[rgba(0,0,0,0.3)]">Step 3</p>
            </div>
          )}

          <button
            onClick={handleNext}
            className="bg-[#023456] relative rounded-[71px] shrink-0 cursor-pointer hover:bg-[#012a42] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f1b71c]"
          >
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[20px] py-[10px] relative size-full">
                <p className="[word-break:break-word] font-inter font-semibold leading-[1.3] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
                  {isLastStep ? "Confirm Booking" : "Next"}
                </p>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e8e8ef] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

type DemoCallWidgetProps = {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  variant: "light" | "dark";
  renderStep1: () => ReactNode;
  onComplete?: () => void;
};

export function DemoCallWidget({ step, setStep, variant, renderStep1, onComplete }: DemoCallWidgetProps) {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center justify-center relative w-full">
      <DemoCallProgress step={step} variant={variant} />
      <DemoCallCard step={step} setStep={setStep} renderStep1={renderStep1} onComplete={onComplete} />
    </div>
  );
}
