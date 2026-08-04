import svgPaths from "./svg-i07q1108o";
import imgBottomDividerLine from "./4cda6478763fa38461788e08e0c25ec93507eff5.png";
type IconsProps = {
  className?: string;
  colour?: "White";
  kind?: "+";
};

function Icons({ className, colour = "White", kind = "+" }: IconsProps) {
  return (
    <div className={className || "bg-white relative rounded-[10px] size-[20px]"}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center relative size-full">
          <div className="relative shrink-0 size-[10px]">
            <div className="absolute inset-[-10%]">
              <svg className="block size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
                <g id="Group 3">
                  <path d="M1 6H11" id="Vector" stroke="#101636" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M6 1V11" id="Vector_2" stroke="#101636" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type UseCasesCardsProps = {
  className?: string;
  state?: "Closed";
};

function UseCasesCards({ className, state = "Closed" }: UseCasesCardsProps) {
  return (
    <div className={className || "bg-[rgba(249,249,251,0.1)] relative rounded-[12px] w-[533px]"}>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row justify-end size-full">
        <div className="content-stretch flex gap-[32px] items-start justify-end p-[16px] relative size-full">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative">
            <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[22px] not-italic overflow-hidden relative shrink-0 text-[16px] text-ellipsis text-white w-full whitespace-nowrap">Retail</p>
          </div>
          <Icons className="bg-white relative rounded-[10px] shrink-0 size-[20px]" />
        </div>
      </div>
    </div>
  );
}

function TextContainer() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Text Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[0px] text-white tracking-[-0.44px] w-full">
        <span className="leading-[52px] text-[44px]">{`The industries that we serve across `}</span>
        <span className="font-['Inter:Extra_Bold_Italic',sans-serif] font-extrabold italic leading-[52px] text-[44px]">Atlanta</span>
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[26px] relative shrink-0 text-[#e8e8ef] text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Designity partners with a wide range of industries to deliver high-impact creative and marketing solutions tailored to your sector’s unique needs. From innovative FinTech branding to powerful healthcare campaigns and dynamic marketing for real estate and retail, our vetted creatives and designated Creative Directors make sure every project is expertly managed and strategically aligned. No matter the challenge, Designity is equipped to help Atlanta businesses scale, differentiate, and succeed.
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[540px]" data-name="Frame">
      <TextContainer />
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

function Divider() {
  return <div className="-translate-x-1/2 absolute bg-white h-[8px] left-[calc(50%-141.2px)] rounded-[71px] top-0 w-[382px]" data-name="Divider" />;
}

function DividerContainer() {
  return (
    <div className="flex h-full items-center justify-center relative shrink-0 w-[8px]" style={{ containerType: "size" }}>
      <div className="flex-none rotate-90 w-[100cqh]">
        <div className="bg-[rgba(255,255,255,0.08)] h-[8px] overflow-clip relative rounded-[71px] w-full" data-name="Divider Container">
          <Divider />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[22px] not-italic overflow-hidden relative shrink-0 text-[16px] text-ellipsis text-white w-full whitespace-nowrap">Real Estate</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[22px] not-italic overflow-hidden relative shrink-0 text-[16px] text-ellipsis text-white w-full whitespace-nowrap">Finance</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[22px] not-italic overflow-hidden relative shrink-0 text-[16px] text-ellipsis text-white w-full whitespace-nowrap">Healthcare</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[22px] not-italic overflow-hidden relative shrink-0 text-[16px] text-ellipsis text-white w-full whitespace-nowrap">{`Food & Beverage`}</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[22px] not-italic overflow-hidden relative shrink-0 text-[16px] text-ellipsis text-white w-full whitespace-nowrap">Restaurants</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[22px] not-italic overflow-hidden relative shrink-0 text-[16px] text-ellipsis text-white w-full whitespace-nowrap">Automotive</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[22px] not-italic overflow-hidden relative shrink-0 text-[16px] text-ellipsis text-white w-full whitespace-nowrap">Manufacturing</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[22px] not-italic overflow-hidden relative shrink-0 text-[16px] text-ellipsis text-white w-full whitespace-nowrap">Cybersecurity</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[22px] not-italic overflow-hidden relative shrink-0 text-[16px] text-ellipsis text-white w-full whitespace-nowrap">SaaS</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[22px] not-italic overflow-hidden relative shrink-0 text-[16px] text-ellipsis text-white w-full whitespace-nowrap">Fashion</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[22px] not-italic overflow-hidden relative shrink-0 text-[16px] text-ellipsis text-white w-full whitespace-nowrap">Sports</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[22px] not-italic overflow-hidden relative shrink-0 text-[16px] text-ellipsis text-white w-full whitespace-nowrap">Hospitality</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[22px] not-italic overflow-hidden relative shrink-0 text-[16px] text-ellipsis text-white w-full whitespace-nowrap">Legal</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[22px] not-italic overflow-hidden relative shrink-0 text-[16px] text-ellipsis text-white w-full whitespace-nowrap">Entertainment</p>
    </div>
  );
}

function ServiceTabsContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] h-full items-start min-w-px overflow-clip relative" data-name="Service Tabs Container">
      <div className="bg-[rgba(249,249,251,0.1)] relative rounded-[12px] shrink-0 w-full" data-name="Use Cases Cards">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-row justify-end size-full">
          <div className="content-stretch flex gap-[32px] items-start justify-end p-[16px] relative size-full">
            <Frame1 />
            <Icons className="bg-white relative rounded-[10px] shrink-0 size-[20px]" />
          </div>
        </div>
      </div>
      <div className="bg-[rgba(249,249,251,0.1)] relative rounded-[12px] shrink-0 w-full" data-name="Use Cases Cards">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-row justify-end size-full">
          <div className="content-stretch flex gap-[32px] items-start justify-end p-[16px] relative size-full">
            <Frame2 />
            <Icons className="bg-white relative rounded-[10px] shrink-0 size-[20px]" />
          </div>
        </div>
      </div>
      <div className="bg-[rgba(249,249,251,0.1)] relative rounded-[12px] shrink-0 w-full" data-name="Use Cases Cards">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-row justify-end size-full">
          <div className="content-stretch flex gap-[32px] items-start justify-end p-[16px] relative size-full">
            <Frame3 />
            <Icons className="bg-white relative rounded-[10px] shrink-0 size-[20px]" />
          </div>
        </div>
      </div>
      <div className="bg-[rgba(249,249,251,0.1)] relative rounded-[12px] shrink-0 w-full" data-name="Use Cases Cards">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-row justify-end size-full">
          <div className="content-stretch flex gap-[32px] items-start justify-end p-[16px] relative size-full">
            <Frame4 />
            <Icons className="bg-white relative rounded-[10px] shrink-0 size-[20px]" />
          </div>
        </div>
      </div>
      <div className="bg-[rgba(249,249,251,0.1)] relative rounded-[12px] shrink-0 w-full" data-name="Use Cases Cards">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-row justify-end size-full">
          <div className="content-stretch flex gap-[32px] items-start justify-end p-[16px] relative size-full">
            <Frame5 />
            <Icons className="bg-white relative rounded-[10px] shrink-0 size-[20px]" />
          </div>
        </div>
      </div>
      <div className="bg-[rgba(249,249,251,0.1)] relative rounded-[12px] shrink-0 w-full" data-name="Use Cases Cards">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-row justify-end size-full">
          <div className="content-stretch flex gap-[32px] items-start justify-end p-[16px] relative size-full">
            <Frame6 />
            <Icons className="bg-white relative rounded-[10px] shrink-0 size-[20px]" />
          </div>
        </div>
      </div>
      <UseCasesCards className="bg-[rgba(249,249,251,0.1)] relative rounded-[12px] shrink-0 w-full" />
      <div className="bg-[rgba(249,249,251,0.1)] relative rounded-[12px] shrink-0 w-full" data-name="Use Cases Cards">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-row justify-end size-full">
          <div className="content-stretch flex gap-[32px] items-start justify-end p-[16px] relative size-full">
            <Frame7 />
            <Icons className="bg-white relative rounded-[10px] shrink-0 size-[20px]" />
          </div>
        </div>
      </div>
      <div className="bg-[rgba(249,249,251,0.1)] relative rounded-[12px] shrink-0 w-full" data-name="Use Cases Cards">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-row justify-end size-full">
          <div className="content-stretch flex gap-[32px] items-start justify-end p-[16px] relative size-full">
            <Frame8 />
            <Icons className="bg-white relative rounded-[10px] shrink-0 size-[20px]" />
          </div>
        </div>
      </div>
      <div className="bg-[rgba(249,249,251,0.1)] relative rounded-[12px] shrink-0 w-full" data-name="Use Cases Cards">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-row justify-end size-full">
          <div className="content-stretch flex gap-[32px] items-start justify-end p-[16px] relative size-full">
            <Frame9 />
            <Icons className="bg-white relative rounded-[10px] shrink-0 size-[20px]" />
          </div>
        </div>
      </div>
      <div className="bg-[rgba(249,249,251,0.1)] relative rounded-[12px] shrink-0 w-full" data-name="Use Cases Cards">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-row justify-end size-full">
          <div className="content-stretch flex gap-[32px] items-start justify-end p-[16px] relative size-full">
            <Frame10 />
            <Icons className="bg-white relative rounded-[10px] shrink-0 size-[20px]" />
          </div>
        </div>
      </div>
      <div className="bg-[rgba(249,249,251,0.1)] relative rounded-[12px] shrink-0 w-full" data-name="Use Cases Cards">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-row justify-end size-full">
          <div className="content-stretch flex gap-[32px] items-start justify-end p-[16px] relative size-full">
            <Frame11 />
            <Icons className="bg-white relative rounded-[10px] shrink-0 size-[20px]" />
          </div>
        </div>
      </div>
      <div className="bg-[rgba(249,249,251,0.1)] relative rounded-[12px] shrink-0 w-full" data-name="Use Cases Cards">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-row justify-end size-full">
          <div className="content-stretch flex gap-[32px] items-start justify-end p-[16px] relative size-full">
            <Frame12 />
            <Icons className="bg-white relative rounded-[10px] shrink-0 size-[20px]" />
          </div>
        </div>
      </div>
      <div className="bg-[rgba(249,249,251,0.1)] relative rounded-[12px] shrink-0 w-full" data-name="Use Cases Cards">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-row justify-end size-full">
          <div className="content-stretch flex gap-[32px] items-start justify-end p-[16px] relative size-full">
            <Frame13 />
            <Icons className="bg-white relative rounded-[10px] shrink-0 size-[20px]" />
          </div>
        </div>
      </div>
      <div className="bg-[rgba(249,249,251,0.1)] relative rounded-[12px] shrink-0 w-full" data-name="Use Cases Cards">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-row justify-end size-full">
          <div className="content-stretch flex gap-[32px] items-start justify-end p-[16px] relative size-full">
            <Frame14 />
            <Icons className="bg-white relative rounded-[10px] shrink-0 size-[20px]" />
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute bottom-0 h-[72px] left-1/2 w-[751.16px]" data-name="Bottom Divider Line">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBottomDividerLine} />
      </div>
    </div>
  );
}

function MapAndTextContainer() {
  return (
    <div className="absolute inset-[60.4%_58.33%_1.67%_4.17%]" data-name="Map and Text Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="341.382" preserveAspectRatio="none" viewBox="0 0 539.997 341.382" width="539.997">
        <g id="Map and Text Container">
          <path d={svgPaths.p14a1d280} fill="white" fillOpacity="0.12" id="Vector" />
          <path d={svgPaths.p149882d0} fill="white" fillOpacity="0.12" id="Vector_2" />
          <path d={svgPaths.p162d6000} fill="white" fillOpacity="0.12" id="Vector_3" />
          <path d={svgPaths.pc750a00} fill="white" fillOpacity="0.12" id="Vector_4" />
          <path d={svgPaths.p3ed12a80} fill="white" fillOpacity="0.12" id="Vector_5" />
          <path d={svgPaths.p2037dff0} fill="white" fillOpacity="0.12" id="Vector_6" />
          <path d={svgPaths.p5fe6080} fill="white" fillOpacity="0.12" id="Vector_7" />
          <path d={svgPaths.p24e473c0} fill="white" fillOpacity="0.12" id="Vector_8" />
          <path d={svgPaths.p241f6800} fill="white" fillOpacity="0.12" id="Vector_9" />
          <path d={svgPaths.p1b4f1d00} fill="white" fillOpacity="0.12" id="Vector_10" />
          <path d={svgPaths.pe39de00} fill="white" fillOpacity="0.12" id="Vector_11" />
          <path d={svgPaths.p22da9500} fill="white" fillOpacity="0.12" id="Vector_12" />
          <path d={svgPaths.p37633a80} fill="white" fillOpacity="0.12" id="Vector_13" />
          <path d={svgPaths.p7dbc600} fill="white" fillOpacity="0.12" id="Vector_14" />
          <path d={svgPaths.p2d98cd00} fill="white" fillOpacity="0.12" id="Vector_15" />
          <path d={svgPaths.p39356f30} fill="white" fillOpacity="0.12" id="Vector_16" />
          <path d={svgPaths.p9064770} fill="white" fillOpacity="0.12" id="Vector_17" />
          <path d={svgPaths.p174f4600} fill="white" fillOpacity="0.12" id="Vector_18" />
          <path d={svgPaths.p6a9ee80} fill="white" fillOpacity="0.12" id="Vector_19" />
          <path d={svgPaths.p2328d5f0} fill="#F1B71C" id="Vector_20" />
          <path d={svgPaths.p1e5cee00} fill="white" fillOpacity="0.12" id="Vector_21" />
          <path d={svgPaths.p2f50d080} fill="white" fillOpacity="0.12" id="Vector_22" />
          <path d={svgPaths.p1a634300} fill="white" fillOpacity="0.12" id="Vector_23" />
          <path d={svgPaths.p7559b00} fill="white" fillOpacity="0.12" id="Vector_24" />
          <path d={svgPaths.p2f936200} fill="white" fillOpacity="0.12" id="Vector_25" />
          <path d={svgPaths.p4e6f0} fill="white" fillOpacity="0.12" id="Vector_26" />
          <path d={svgPaths.p33057540} fill="white" fillOpacity="0.12" id="Vector_27" />
          <path d={svgPaths.p1d21ac00} fill="white" fillOpacity="0.12" id="Vector_28" />
          <path d={svgPaths.p8ea2580} fill="white" fillOpacity="0.12" id="Vector_29" />
          <path d={svgPaths.p1fbb8400} fill="white" fillOpacity="0.12" id="Vector_30" />
          <path d={svgPaths.p28261470} fill="white" fillOpacity="0.12" id="Vector_31" />
          <path d={svgPaths.p37808800} fill="white" fillOpacity="0.12" id="Vector_32" />
          <path d={svgPaths.p3a15cf00} fill="white" fillOpacity="0.12" id="Vector_33" />
          <path d={svgPaths.p14c6080} fill="white" fillOpacity="0.12" id="Vector_34" />
          <path d={svgPaths.p9550f00} fill="white" fillOpacity="0.12" id="Vector_35" />
          <path d={svgPaths.p38d9bd80} fill="white" fillOpacity="0.12" id="Vector_36" />
          <path d={svgPaths.p98c7a00} fill="white" fillOpacity="0.12" id="Vector_37" />
          <path d={svgPaths.p25f3a200} fill="white" fillOpacity="0.12" id="Vector_38" />
          <path d={svgPaths.p16ca3100} fill="white" fillOpacity="0.12" id="Vector_39" />
          <path d={svgPaths.p3f57ca00} fill="white" fillOpacity="0.12" id="Vector_40" />
          <path d={svgPaths.p39c86180} fill="white" fillOpacity="0.12" id="Vector_41" />
          <path d={svgPaths.p286d0700} fill="white" fillOpacity="0.12" id="Vector_42" />
          <path d={svgPaths.p2ccf0cc0} fill="white" fillOpacity="0.12" id="Vector_43" />
          <path d={svgPaths.p3e931580} fill="white" fillOpacity="0.12" id="Vector_44" />
          <path d={svgPaths.p16380900} fill="white" fillOpacity="0.12" id="Vector_45" />
          <path d={svgPaths.p36549d80} fill="white" fillOpacity="0.12" id="Vector_46" />
          <path d={svgPaths.p3bc46700} fill="white" fillOpacity="0.12" id="Vector_47" />
        </g>
      </svg>
    </div>
  );
}

export default function Section4MarketingServices() {
  return (
    <div className="bg-[#101636] content-stretch flex gap-[80px] items-start justify-center px-[60px] py-[120px] relative size-full" data-name="Section 4: Marketing Services">
      <Frame />
      <DividerContainer />
      <ServiceTabsContainer />
      <MapAndTextContainer />
    </div>
  );
}