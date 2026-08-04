function ProgressBackground() {
  return <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white h-[7px] left-[calc(50%-180.5px)] rounded-[71px] top-[calc(50%-0.28px)] w-[167px]" data-name="Progress Background" />;
}

function ProgressIndicator() {
  return (
    <div className="bg-[rgba(255,255,255,0.08)] flex-[1_0_0] h-[7px] min-w-px overflow-clip relative rounded-[71px]" data-name="Progress Indicator">
      <ProgressBackground />
    </div>
  );
}

export default function CalendarHeader() {
  return (
    <div className="content-stretch flex gap-[20px] items-center justify-center px-[20px] relative size-full" data-name="Calendar Header">
      <ProgressIndicator />
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        1/3
      </p>
    </div>
  );
}