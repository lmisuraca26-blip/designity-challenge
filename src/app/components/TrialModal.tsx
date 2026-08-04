import { useEffect, useRef } from "react";
import svgPaths from "../../imports/Desktop1440Px/svg-66s18btp46";

type TrialModalProps = {
  onClose: () => void;
};

export function TrialModal({ onClose }: TrialModalProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-[20px] md:px-0"
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        ref={ref}
        tabIndex={-1}
        className="relative bg-white rounded-[24px] w-full max-w-[560px] p-[24px] md:p-[48px] shadow-2xl focus:outline-none"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-[16px] top-[16px] md:right-[24px] md:top-[24px] size-[36px] rounded-full bg-[#f9f9fb] border border-[#e8e8ef] flex items-center justify-center hover:bg-[#e8e8ef] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#023456]"
        >
          <svg fill="none" viewBox="0 0 10 10" width="10" height="10" aria-hidden="true">
            <path d="M1 9L9 1" stroke="#101636" strokeLinecap="round" strokeWidth="2" />
            <path d="M1 1L9 9" stroke="#101636" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </button>

        {/* Check icon */}
        <div className="bg-[#f1b71c] rounded-full flex items-center justify-center size-[56px] md:size-[72px] mb-[24px] md:mb-[32px]">
          <svg fill="none" height="28" viewBox="0 0 14 12" width="34" aria-hidden="true">
            <path d={svgPaths.p2afb7200} stroke="#101636" strokeLinecap="round" strokeWidth="2.5" />
          </svg>
        </div>

        <h2 id="modal-title" className="font-inter font-semibold text-[24px] md:text-[32px] text-[#101636] leading-[1.2] tracking-[-0.32px] mb-[16px]">
          Demo Call Request Received!
        </h2>

        <p className="font-open-sans text-[16px] text-[rgba(0,0,0,0.8)] leading-[26px] mb-[24px] md:mb-[32px]">
          A Designity Creative Director will reach out within 1 business day to schedule your personalized demo call. We look forward to discussing your Atlanta business's marketing goals!
        </p>

        <div className="flex flex-col gap-[12px]">
          <button
            onClick={onClose}
            className="bg-[#f1b71c] rounded-[71px] w-full py-[14px] font-inter font-semibold text-[16px] text-black leading-[1.3] hover:bg-[#d9a519] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#023456]"
          >
            Got it, thanks!
          </button>
          <button
            onClick={onClose}
            className="rounded-[71px] w-full py-[14px] font-inter font-semibold text-[16px] text-[#101636] leading-[1.3] hover:bg-[#f9f9fb] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#023456] border border-[#e8e8ef]"
          >
            Back to site
          </button>
        </div>
      </div>
    </div>
  );
}
