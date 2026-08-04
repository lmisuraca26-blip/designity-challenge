import svgPaths from "../../imports/Desktop1440Px/svg-66s18btp46";

// --- Icon component (matches reference Icons component) ---
function CheckIcon() {
  return (
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
  );
}

function XIcon() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 size-[20px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center relative size-full">
          <div className="relative shrink-0 size-[7.071px]">
            <div className="absolute inset-[-14.14%]">
              <svg className="block size-full" fill="none" height="9.07107" preserveAspectRatio="none" viewBox="0 0 9.07107 9.07107" width="9.07107" aria-hidden="true">
                <path d="M1 8.07107L8.07107 1" stroke="#101636" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M1 1.00001L8.07107 8.07107" stroke="#101636" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Logo ---
function DesignityLogo() {
  return (
    <div className="h-[56.541px] relative shrink-0 w-[125.522px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="56.5413" preserveAspectRatio="none" viewBox="0 0 125.522 56.5413" width="125.522" aria-label="Designity" role="img">
        <path d={svgPaths.p32b83460} fill="black" />
        <path d={svgPaths.p9e65700} fill="#F1B71C" />
        <path d={svgPaths.p3167ac00} fill="#F1B71C" />
        <path d={svgPaths.p1a6f600} fill="black" />
        <path d={svgPaths.p27069e80} fill="#F1B71C" />
        <path d={svgPaths.p2b55d00} fill="black" />
        <path d={svgPaths.p31e45480} fill="black" />
        <path d={svgPaths.p1c910d00} fill="#F1B71C" />
        <path d={svgPaths.p29279380} fill="black" />
        <path d={svgPaths.p2577e080} fill="black" />
        <path d={svgPaths.p37ed1b00} fill="black" />
        <path d={svgPaths.p18e8cf00} fill="black" />
        <path d={svgPaths.pc3cc280} fill="black" />
        <path d={svgPaths.p6843c00} fill="black" />
        <path d={svgPaths.p26e3d400} fill="black" />
        <path d={svgPaths.p3d42a080} fill="#F1B71C" />
        <path d={svgPaths.p246c5f80} fill="black" />
        <path d={svgPaths.p12b4b900} fill="#F1B71C" />
        <path d={svgPaths.p38a8c000} fill="black" />
        <path d={svgPaths.p12805900} fill="black" />
      </svg>
    </div>
  );
}

// --- Table Header Row ---
function TableHeaderRow() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      {/* Col Empty */}
      <div className="h-[60px] relative shrink-0 w-[280px]" />
      {/* Col Designity */}
      <div className="flex-[1_0_0] min-w-px relative">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[20px] relative size-full">
            <div className="relative shrink-0">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center relative size-full">
                  <DesignityLogo />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Col Marketplace */}
      <div className="flex-[1_0_0] min-w-px relative self-stretch">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[20px] relative size-full">
            <p className="font-inter font-bold leading-[18px] not-italic relative shrink-0 text-[#101636] text-[14px] whitespace-nowrap">Marketplace</p>
          </div>
        </div>
      </div>
      {/* Col In-House */}
      <div className="flex-[1_0_0] min-w-px relative self-stretch">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[20px] relative size-full">
            <p className="font-inter font-bold leading-[18px] not-italic relative shrink-0 text-[#101636] text-[14px] whitespace-nowrap">In-House</p>
          </div>
        </div>
      </div>
      {/* Col Agency */}
      <div className="flex-[1_0_0] min-w-px relative self-stretch">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[20px] relative size-full">
            <p className="font-inter font-bold leading-[18px] not-italic relative shrink-0 text-[#101636] text-[14px] whitespace-nowrap">Agency</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Table Data Rows ---
type RowData = {
  label: string;
  designity: string;
  marketplace: string;
  inHouse: string;
  agency: string;
  shaded: boolean;
};

function TableDataRow({ label, designity, marketplace, inHouse, agency, shaded }: RowData) {
  return (
    <div className={`content-stretch flex items-start relative shrink-0 w-full ${shaded ? "bg-[rgba(0,0,0,0.02)]" : ""}`}>
      {/* Label Cell */}
      <div className="relative self-stretch shrink-0 w-[280px]">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[20px] relative size-full">
            <p className="font-inter font-bold leading-[18px] not-italic relative shrink-0 text-[#101636] text-[14px] whitespace-nowrap">{label}</p>
          </div>
        </div>
      </div>
      {/* Cell Designity */}
      <div className="flex-[1_0_0] min-w-px relative self-stretch">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center p-[20px] relative size-full">
            <CheckIcon />
            <p className="flex-[1_0_0] font-open-sans font-normal leading-[20px] min-w-px relative text-[#101636] text-[14px]">{designity}</p>
          </div>
        </div>
      </div>
      {/* Cell Marketplace */}
      <div className="flex-[1_0_0] min-w-px relative self-stretch">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center p-[20px] relative size-full">
            <XIcon />
            <p className="flex-[1_0_0] font-open-sans font-normal leading-[20px] min-w-px relative text-[14px] text-[rgba(0,0,0,0.8)]">{marketplace}</p>
          </div>
        </div>
      </div>
      {/* Cell In-House */}
      <div className="flex-[1_0_0] min-w-px relative self-stretch">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center p-[20px] relative size-full">
            <XIcon />
            <p className="flex-[1_0_0] font-open-sans font-normal leading-[20px] min-w-px relative text-[14px] text-[rgba(0,0,0,0.8)]">{inHouse}</p>
          </div>
        </div>
      </div>
      {/* Cell Agency */}
      <div className="flex-[1_0_0] min-w-px relative self-stretch">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center p-[20px] relative size-full">
            <XIcon />
            <p className="flex-[1_0_0] font-open-sans font-normal leading-[20px] min-w-px relative text-[14px] text-[rgba(0,0,0,0.8)]">{agency}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Mobile AltItem ---
type AltItemProps = {
  label: string;
  icon: "check" | "x";
  value: string;
};

function AltItem({ label, icon, value }: AltItemProps) {
  return (
    <div className="flex flex-col gap-[6px]">
      <p className="text-[14px] leading-[1.4] text-[rgba(0,0,0,0.8)]">{label}</p>
      <div className="flex flex-row gap-[8px] items-center">
        {icon === "check" ? <CheckIcon /> : <XIcon />}
        <p className="font-semibold text-[14px] leading-[1.4] text-[#101636]">{value}</p>
      </div>
    </div>
  );
}

function scrollToDemo() {
  document.getElementById("cta-demo")?.scrollIntoView({ behavior: "smooth" });
}

// --- Mobile Card Stack ---
function MobileCards() {
  return (
    <div className="flex flex-col gap-[16px]">
      {/* Designity card — yellow */}
      <div className="bg-[#f1b71c] rounded-[16px] p-[20px] flex flex-col gap-[32px]">
        <DesignityLogo />
        <div className="flex flex-col gap-[20px]">
          <AltItem label="Creative Team" icon="check" value="Top 3% US creatives" />
          <AltItem label="Creative Director" icon="check" value="Yes! Quality-assured CD" />
          <AltItem label="Avg. Monthly Cost" icon="check" value="$5,995 for a dynamic team" />
          <AltItem label="Up to 2-Week Trial" icon="check" value="Yes! No payment needed" />
        </div>
      </div>

      {/* Marketplace card — gray */}
      <div className="bg-[#e8e8ef] rounded-[16px] p-[20px] flex flex-col gap-[32px]">
        <p className="font-inter font-bold text-[16px] leading-[1.3] text-[#101636]">Marketplace</p>
        <div className="flex flex-col gap-[20px]">
          <AltItem label="Creative Team" icon="x" value="Unvetted offshore freelancers" />
          <AltItem label="Creative Director" icon="x" value="No! You handle it all" />
          <AltItem label="Avg. Monthly Cost" icon="x" value="Cheaper for a reason" />
          <AltItem label="Up to 2-Week Trial" icon="x" value="No trials offered!" />
        </div>
      </div>

      {/* In-House card — gray */}
      <div className="bg-[#e8e8ef] rounded-[16px] p-[20px] flex flex-col gap-[32px]">
        <p className="font-inter font-bold text-[16px] leading-[1.3] text-[#101636]">In-House</p>
        <div className="flex flex-col gap-[20px]">
          <AltItem label="Creative Team" icon="x" value="Limited-skill creatives" />
          <AltItem label="Creative Director" icon="x" value="Maybe! If you can afford" />
          <AltItem label="Avg. Monthly Cost" icon="x" value="$7,000 per month" />
          <AltItem label="Up to 2-Week Trial" icon="x" value="No trials offered!" />
        </div>
      </div>

      {/* Agency card — gray */}
      <div className="bg-[#e8e8ef] rounded-[16px] p-[20px] flex flex-col gap-[32px]">
        <p className="font-inter font-bold text-[16px] leading-[1.3] text-[#101636]">Agency</p>
        <div className="flex flex-col gap-[20px]">
          <AltItem label="Creative Team" icon="x" value="Typically offshore outsourcing" />
          <AltItem label="Creative Director" icon="x" value="Yes! Costly though" />
          <AltItem label="Avg. Monthly Cost" icon="x" value="$$$$$$$$$" />
          <AltItem label="Up to 2-Week Trial" icon="x" value="No trials offered!" />
        </div>
      </div>

      {/* Mobile CTA */}
      <button
        onClick={scrollToDemo}
        className="w-full bg-[#023456] rounded-[71px] hover:bg-[#012a40] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#023456]"
      >
        <div className="flex flex-row items-center justify-center px-[20px] py-[10px]">
          <p className="font-inter font-semibold leading-[1.3] not-italic text-[16px] text-white whitespace-nowrap">View The Full Comparison</p>
        </div>
      </button>
    </div>
  );
}

export function ComparisonSection() {
  return (
    <section
      className="relative shrink-0 w-full overflow-clip"
      style={{ background: "linear-gradient(to bottom, #f9f9fb 51.913%, white 51.923%)" }}
      aria-label="Comparison with alternatives"
    >
      {/* Background decoration — matches reference: left-[-437.48px] top-[-523.6px] rotate-[57.15deg] */}
      <div className="absolute flex h-[2204.734px] items-center justify-center pointer-events-none" style={{ left: "-437.48px", top: "-523.6px", width: "2341.625px" }}>
        <div className="flex-none rotate-[57.15deg]">
          <div className="h-[1874.207px] relative w-[1414.173px]">
            <svg className="absolute block inset-0 size-full" fill="none" height="1874.21" preserveAspectRatio="none" viewBox="0 0 1414.17 1874.21" width="1414.17" aria-hidden="true">
              <path d={svgPaths.p370c6500} fill="#F9F9FB" />
            </svg>
          </div>
        </div>
      </div>

      {/* ↓ Selected element — restructured to match reference layer-for-layer */}
      <div className="relative flex flex-col gap-[32px] md:gap-[64px] items-center px-[20px] py-[48px] md:px-[60px] md:py-[80px]">

        {/* Comparison Head Stack */}
        <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 text-center w-full md:w-[780px]">
          <h2 className="font-inter font-semibold leading-[40px] md:leading-[52px] not-italic relative shrink-0 text-[#023456] text-[32px] md:text-[44px] tracking-[-0.44px] w-full md:w-[683.758px]">
            A Better Alternative to Traditional Advertising Agencies
          </h2>
          <p className="font-open-sans font-normal leading-[26px] relative shrink-0 text-[#101636] text-[14px] md:text-[16px] w-full">
            Revolutionizing design &amp; marketing services - flexible, scalable, &amp; cost-effective
          </p>
        </div>

        {/* Mobile card stack */}
        <div className="md:hidden w-full">
          <MobileCards />
        </div>

        {/* Desktop table + CTA */}
        <div className="hidden md:flex flex-col gap-[64px] items-center w-full">
          {/* Table Container */}
          <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[20px] shrink-0 w-full" role="table" aria-label="Comparison between Designity, Marketplace, In-House, and Agency">
            {/* Yellow column overlay */}
            <div className="absolute bg-[#f1b71c] h-[356.712px] left-[280px] rounded-[16px] top-[-0.17px] w-[250px]" aria-hidden="true" />

            <TableHeaderRow />

            <TableDataRow
              label="Creative Team"
              designity="Top 3% US creatives"
              marketplace="Unvetted offshore freelancers"
              inHouse="Limited-skill creatives"
              agency="Typically offshore outsourcing"
              shaded={true}
            />
            <TableDataRow
              label="Creative Director"
              designity="Yes! Quality-assured CD"
              marketplace="No! You handle it all"
              inHouse="Maybe! If you can afford"
              agency="Yes! Costly though"
              shaded={false}
            />
            <TableDataRow
              label="Avg. Monthly Cost"
              designity="$5,995 for a dynamic team"
              marketplace="Cheaper for a reason"
              inHouse="$7,000 per month"
              agency="$$$$$$$$$"
              shaded={true}
            />
            <TableDataRow
              label="Up to 2-Week Trial"
              designity="Yes! No payment needed"
              marketplace="No trials offered!"
              inHouse="No trials offered!"
              agency="No trials offered!"
              shaded={false}
            />
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToDemo}
            className="bg-[#023456] relative rounded-[71px] shrink-0 hover:bg-[#012a40] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#023456]"
          >
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[20px] py-[10px] relative size-full">
                <p className="font-inter font-semibold leading-[1.3] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">View The Full Comparison</p>
              </div>
            </div>
          </button>
        </div>

      </div>
    </section>
  );
}
