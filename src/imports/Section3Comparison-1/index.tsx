import svgPaths from "./svg-1537n449eg";
type IconsProps = {
  className?: string;
  colour?: "White";
  kind?: "Check" | "x";
};

function Icons({ className, colour = "White", kind = "Check" }: IconsProps) {
  return (
    <div className={className || "bg-white relative rounded-[10px] size-[20px]"}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center relative size-full">
          {kind === "Check" && colour === "White" && (
            <div className="h-[12px] relative shrink-0 w-[14px]" data-name="check">
              <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 14 12" width="14">
                <g id="check">
                  <path d={svgPaths.p2afb7200} id="Vector" stroke="#101636" strokeLinecap="round" strokeWidth="2" />
                </g>
              </svg>
            </div>
          )}
          {kind === "x" && colour === "White" && (
            <div className="relative shrink-0 size-[7.071px]">
              <div className="absolute inset-[-14.14%]">
                <svg className="block size-full" fill="none" height="9.07107" preserveAspectRatio="none" viewBox="0 0 9.07107 9.07107" width="9.07107">
                  <g id="Group 3">
                    <path d="M1 8.07107L8.07107 1" id="Vector" stroke="#101636" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d="M1 1.00001L8.07107 8.07107" id="Vector_2" stroke="#101636" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </g>
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ComparisonHeadStack() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-center relative shrink-0 text-center w-[780px]" data-name="Comparison Head Stack">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[52px] not-italic relative shrink-0 text-[#023456] text-[44px] tracking-[-0.44px] w-[683.758px]">A Better Alternative to Traditional Advertising Agencies</p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[26px] min-w-full relative shrink-0 text-[#101636] text-[16px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>{`Revolutionizing design & marketing services - flexible, scalable, & cost-effective`}</p>
    </div>
  );
}

function ColEmpty() {
  return <div className="h-[60px] relative shrink-0 w-[280px]" data-name="Col Empty" />;
}

function Group() {
  return (
    <div className="h-[56.541px] relative shrink-0 w-[125.522px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="56.5413" preserveAspectRatio="none" viewBox="0 0 125.522 56.5413" width="125.522">
        <g id="Group 3">
          <path d={svgPaths.p32b83460} fill="black" id="Subtract" />
          <path d={svgPaths.p9e65700} fill="#F1B71C" id="Vector" />
          <path d={svgPaths.p3167ac00} fill="#F1B71C" id="Vector_2" />
          <path d={svgPaths.p1a6f600} fill="black" id="Vector_3" />
          <path d={svgPaths.p27069e80} fill="#F1B71C" id="Vector_4" />
          <path d={svgPaths.p2b55d00} fill="black" id="Vector_5" />
          <path d={svgPaths.p31e45480} fill="black" id="Vector_6" />
          <path d={svgPaths.p1c910d00} fill="#F1B71C" id="Vector_7" />
          <path d={svgPaths.p29279380} fill="black" id="Vector_8" />
          <path d={svgPaths.p2577e080} fill="black" id="Vector_9" />
          <path d={svgPaths.p37ed1b00} fill="black" id="Vector_10" />
          <path d={svgPaths.p18e8cf00} fill="black" id="Vector_11" />
          <path d={svgPaths.pc3cc280} fill="black" id="Vector_12" />
          <path d={svgPaths.p6843c00} fill="black" id="Vector_13" />
          <path d={svgPaths.p26e3d400} fill="black" id="Vector_14" />
          <path d={svgPaths.p3d42a080} fill="#F1B71C" id="Vector_15" />
          <path d={svgPaths.p246c5f80} fill="black" id="Vector_16" />
          <path d={svgPaths.p12b4b900} fill="#F1B71C" id="Vector_17" />
          <path d={svgPaths.p38a8c000} fill="black" id="Vector_18" />
          <path d={svgPaths.p12805900} fill="black" id="Vector_19" />
        </g>
      </svg>
    </div>
  );
}

function ColDesignity() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Col Designity">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[20px] relative size-full">
          <div className="relative shrink-0" data-name="Logo">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center relative size-full">
                <Group />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ColMarketplace() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Col Marketplace">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[20px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic relative shrink-0 text-[#101636] text-[14px] whitespace-nowrap">Marketplace</p>
        </div>
      </div>
    </div>
  );
}

function ColInHouse() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Col InHouse">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[20px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic relative shrink-0 text-[#101636] text-[14px] whitespace-nowrap">In-House</p>
        </div>
      </div>
    </div>
  );
}

function ColAgency() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Col Agency">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[20px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic relative shrink-0 text-[#101636] text-[14px] whitespace-nowrap">Agency</p>
        </div>
      </div>
    </div>
  );
}

function TableHeaderRow() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Table Header Row">
      <ColEmpty />
      <ColDesignity />
      <ColMarketplace />
      <ColInHouse />
      <ColAgency />
    </div>
  );
}

function LabelCell() {
  return (
    <div className="relative self-stretch shrink-0 w-[280px]" data-name="Label Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[20px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic relative shrink-0 text-[#101636] text-[14px] whitespace-nowrap">Creative Team</p>
        </div>
      </div>
    </div>
  );
}

function CellDesignity() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Cell Designity">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[20px] relative size-full">
          <Icons className="bg-white relative rounded-[10px] shrink-0 size-[20px]" />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[#101636] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            Top 3% US creatives
          </p>
        </div>
      </div>
    </div>
  );
}

function CellMarketplace() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Cell Marketplace">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[20px] relative size-full">
          <Icons className="bg-white relative rounded-[10px] shrink-0 size-[20px]" kind="x" />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[14px] text-[rgba(0,0,0,0.8)]" style={{ fontVariationSettings: '"wdth" 100' }}>
            Unvetted offshore freelancers
          </p>
        </div>
      </div>
    </div>
  );
}

function CellInHouse() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Cell InHouse">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[20px] relative size-full">
          <Icons className="bg-white relative rounded-[10px] shrink-0 size-[20px]" kind="x" />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[14px] text-[rgba(0,0,0,0.8)]" style={{ fontVariationSettings: '"wdth" 100' }}>
            Limited-skill creatives
          </p>
        </div>
      </div>
    </div>
  );
}

function CellAgency() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Cell Agency">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[20px] relative size-full">
          <Icons className="bg-white relative rounded-[10px] shrink-0 size-[20px]" kind="x" />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[14px] text-[rgba(0,0,0,0.8)]" style={{ fontVariationSettings: '"wdth" 100' }}>
            Typically offshore outsourcing
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow() {
  return (
    <div className="bg-[rgba(0,0,0,0.02)] content-stretch flex items-start relative shrink-0 w-full" data-name="TableRow 1">
      <LabelCell />
      <CellDesignity />
      <CellMarketplace />
      <CellInHouse />
      <CellAgency />
    </div>
  );
}

function LabelCell1() {
  return (
    <div className="relative self-stretch shrink-0 w-[280px]" data-name="Label Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[20px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic relative shrink-0 text-[#101636] text-[14px] whitespace-nowrap">Creative Director</p>
        </div>
      </div>
    </div>
  );
}

function CellDesignity1() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Cell Designity">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[20px] relative size-full">
          <Icons className="bg-white relative rounded-[10px] shrink-0 size-[20px]" />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[#101636] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            Yes! Quality-assured CD
          </p>
        </div>
      </div>
    </div>
  );
}

function CellMarketplace1() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Cell Marketplace">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[20px] relative size-full">
          <Icons className="bg-white relative rounded-[10px] shrink-0 size-[20px]" kind="x" />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[14px] text-[rgba(0,0,0,0.8)]" style={{ fontVariationSettings: '"wdth" 100' }}>
            No! You handle it all
          </p>
        </div>
      </div>
    </div>
  );
}

function CellInHouse1() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Cell InHouse">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[20px] relative size-full">
          <Icons className="bg-white relative rounded-[10px] shrink-0 size-[20px]" kind="x" />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[14px] text-[rgba(0,0,0,0.8)]" style={{ fontVariationSettings: '"wdth" 100' }}>
            Maybe! If you can afford
          </p>
        </div>
      </div>
    </div>
  );
}

function CellAgency1() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Cell Agency">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[20px] relative size-full">
          <Icons className="bg-white relative rounded-[10px] shrink-0 size-[20px]" kind="x" />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[14px] text-[rgba(0,0,0,0.8)]" style={{ fontVariationSettings: '"wdth" 100' }}>
            Yes! Costly though
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="TableRow 2">
      <LabelCell1 />
      <CellDesignity1 />
      <CellMarketplace1 />
      <CellInHouse1 />
      <CellAgency1 />
    </div>
  );
}

function LabelCell2() {
  return (
    <div className="relative self-stretch shrink-0 w-[280px]" data-name="Label Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[20px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic relative shrink-0 text-[#101636] text-[14px] whitespace-nowrap">Avg. Monthly Cost</p>
        </div>
      </div>
    </div>
  );
}

function CellDesignity2() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Cell Designity">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[20px] relative size-full">
          <Icons className="bg-white relative rounded-[10px] shrink-0 size-[20px]" />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[#101636] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            $5,995 for a dynamic team
          </p>
        </div>
      </div>
    </div>
  );
}

function CellMarketplace2() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Cell Marketplace">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[20px] relative size-full">
          <Icons className="bg-white relative rounded-[10px] shrink-0 size-[20px]" kind="x" />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[14px] text-[rgba(0,0,0,0.8)]" style={{ fontVariationSettings: '"wdth" 100' }}>
            Cheaper for a reason
          </p>
        </div>
      </div>
    </div>
  );
}

function CellInHouse2() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Cell InHouse">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[20px] relative size-full">
          <Icons className="bg-white relative rounded-[10px] shrink-0 size-[20px]" kind="x" />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[14px] text-[rgba(0,0,0,0.8)]" style={{ fontVariationSettings: '"wdth" 100' }}>
            $7,000 per month
          </p>
        </div>
      </div>
    </div>
  );
}

function CellAgency2() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Cell Agency">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[20px] relative size-full">
          <Icons className="bg-white relative rounded-[10px] shrink-0 size-[20px]" kind="x" />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[14px] text-[rgba(0,0,0,0.8)]" style={{ fontVariationSettings: '"wdth" 100' }}>
            $$$$$$$$$
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow2() {
  return (
    <div className="bg-[rgba(0,0,0,0.02)] content-stretch flex items-start relative shrink-0 w-full" data-name="TableRow 3">
      <LabelCell2 />
      <CellDesignity2 />
      <CellMarketplace2 />
      <CellInHouse2 />
      <CellAgency2 />
    </div>
  );
}

function LabelCell3() {
  return (
    <div className="relative self-stretch shrink-0 w-[280px]" data-name="Label Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[20px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic relative shrink-0 text-[#101636] text-[14px] whitespace-nowrap">Up to 2-Week Trial</p>
        </div>
      </div>
    </div>
  );
}

function CellDesignity3() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Cell Designity">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[20px] relative size-full">
          <Icons className="bg-white relative rounded-[10px] shrink-0 size-[20px]" />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[#101636] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            Yes! No payment needed
          </p>
        </div>
      </div>
    </div>
  );
}

function CellMarketplace3() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Cell Marketplace">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[20px] relative size-full">
          <Icons className="bg-white relative rounded-[10px] shrink-0 size-[20px]" kind="x" />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[14px] text-[rgba(0,0,0,0.8)]" style={{ fontVariationSettings: '"wdth" 100' }}>
            No trials offered!
          </p>
        </div>
      </div>
    </div>
  );
}

function CellInHouse3() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Cell InHouse">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[20px] relative size-full">
          <Icons className="bg-white relative rounded-[10px] shrink-0 size-[20px]" kind="x" />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[14px] text-[rgba(0,0,0,0.8)]" style={{ fontVariationSettings: '"wdth" 100' }}>
            No trials offered!
          </p>
        </div>
      </div>
    </div>
  );
}

function CellAgency3() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Cell Agency">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[20px] relative size-full">
          <Icons className="bg-white relative rounded-[10px] shrink-0 size-[20px]" kind="x" />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[14px] text-[rgba(0,0,0,0.8)]" style={{ fontVariationSettings: '"wdth" 100' }}>
            No trials offered!
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="TableRow 4">
      <LabelCell3 />
      <CellDesignity3 />
      <CellMarketplace3 />
      <CellInHouse3 />
      <CellAgency3 />
    </div>
  );
}

function TableContainer() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[20px] shrink-0 w-full" data-name="Table Container">
      <div className="absolute bg-[#f1b71c] h-[356.712px] left-[280px] rounded-[16px] top-[-0.17px] w-[250px]" data-name="Logo" />
      <TableHeaderRow />
      <TableRow />
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
    </div>
  );
}

export default function Section3Comparison() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#f9f9fb] from-[51.913%] gap-[64px] items-center px-[60px] py-[80px] relative size-full to-[51.923%] to-white" data-name="Section 3: Comparison">
      <div className="absolute flex h-[2204.734px] items-center justify-center left-[-437.48px] top-[-523.6px] w-[2341.625px]">
        <div className="flex-none rotate-[57.15deg]">
          <div className="h-[1874.207px] relative w-[1414.173px]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height="1874.21" preserveAspectRatio="none" viewBox="0 0 1414.17 1874.21" width="1414.17">
              <path d={svgPaths.p370c6500} fill="#F9F9FB" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <ComparisonHeadStack />
      <TableContainer />
      <div className="bg-[#023456] relative rounded-[71px] shrink-0" data-name="CTA Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[20px] py-[10px] relative size-full">
            <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.3] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">View The Full Comparison</p>
          </div>
        </div>
      </div>
    </div>
  );
}