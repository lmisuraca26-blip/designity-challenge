import imgBackgroundShape from "./b8efb1c995337d3bb439766bb6b334d62a1c9257.png";
import imgAuthorImage from "./b139ef7f62ce58b18db4402d5b1a739b1f51b02c.png";
import imgRectangle2 from "./3bc1930d9aebb3b9c3eb0f27b61747ce1842a415.png";
import imgAuthorImage1 from "./c9b08b648af0202d902bc9ebb4a6acef4fac5e19.png";
import imgRectangle3 from "./ea1ffabf071138d5e6ffdc002bd0b8301d21bea4.png";
import imgAuthorImage2 from "./20faed60358b95a4b9989ea851270905d2abfd2b.png";

function ServicesTextBlock() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start relative shrink-0 text-center w-[570px]" data-name="Services Text Block">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[52px] not-italic relative shrink-0 text-[44px] text-white tracking-[-0.44px] w-full">Showcasing Atlanta’s Brand Transformations</p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#e8e8ef] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Discover how Designity has helped Atlanta brands reimagine their identity, sharpen their messaging, and launch creative that gets results. Check out our recent projects and see what’s possible when expert strategy meets top-tier design.
      </p>
    </div>
  );
}

function StatsContainer() {
  return (
    <div className="bg-[#f1b71c] relative rounded-[16px] shrink-0 w-full" data-name="Stats Container">
      <div className="flex flex-col justify-center size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start justify-center not-italic p-[24px] relative size-full text-[#101636] whitespace-nowrap">
          <p className="font-['Inter:Black',sans-serif] font-black leading-[76px] relative shrink-0 text-[72px]">$50K+</p>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[24px] tracking-[-0.24px]">Revenue</p>
        </div>
      </div>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Mask group">
      <div className="bg-white col-1 h-[100.712px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[57.492px_10.461px] mask-size-[195.703px_66.718px] ml-[-57.49px] mt-[-10.46px] relative row-1 w-[294.768px]" style={{ maskImage: `url("${imgBackgroundShape}")` }} data-name="Background Shape" />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col h-[80px] items-center justify-center relative shrink-0">
      <MaskGroup />
    </div>
  );
}

function SecondaryInfoBlock() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px relative text-white w-full" data-name="Secondary Info Block">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.2] not-italic relative shrink-0 text-[24px] tracking-[-0.24px] w-full">A Custom Influencer Marketing Kit That Helped Drive $50K in Revenue</p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[26px] relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        “Designity’s thorough communication, ability to meet tight deadlines, and kind, flexible approach during organizational changes have made them an invaluable partner. We love our Designity team here at Physician’s Choice!”
      </p>
    </div>
  );
}

function AuthorInfoBlock() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Author Info Block">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="relative rounded-[37.265px] size-[74.529px]" data-name="Author Image">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[37.265px] size-full" src={imgAuthorImage} />
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] min-w-px relative text-[#023456] text-[0px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[24px] mb-0 text-[16px] text-white" style={{ fontVariationSettings: '"wdth" 100' }}>
          Gabrielle Williams
        </p>
        <p className="leading-[26px] text-[16px] text-white" style={{ fontVariationSettings: '"wdth" 100' }}>
          Senior Social Media Associate, Physician’s Choice
        </p>
      </div>
    </div>
  );
}

function AdditionalInfoContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px relative w-full" data-name="Additional Info Container">
      <SecondaryInfoBlock />
      <AuthorInfoBlock />
    </div>
  );
}

function PaginationAndAdditionalInfo() {
  return (
    <div className="bg-[rgba(232,232,239,0.1)] flex-[1_0_0] h-[715px] min-w-px relative rounded-[16px]" data-name="Pagination and Additional Info">
      <div aria-hidden className="absolute border border-[rgba(232,232,239,0.3)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[24px] relative size-full">
        <StatsContainer />
        <Frame />
        <AdditionalInfoContainer />
      </div>
    </div>
  );
}

function StatsContainer1() {
  return (
    <div className="bg-[#f1b71c] relative rounded-[16px] shrink-0 w-full" data-name="Stats Container">
      <div className="flex flex-col justify-center size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start justify-center not-italic p-[24px] relative size-full text-[#101636] whitespace-nowrap">
          <p className="font-['Inter:Black',sans-serif] font-black leading-[76px] relative shrink-0 text-[72px]">+20%</p>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[24px] tracking-[-0.24px]">Jump in web traffic</p>
        </div>
      </div>
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Mask group">
      <div className="bg-white col-1 h-[89.045px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[15.859px_-11.935px] mask-size-[252.449px_100.979px] ml-[-15.86px] mt-[11.93px] relative row-1 w-[276.214px]" style={{ maskImage: `url("${imgRectangle2}")` }} />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col h-[80px] items-center justify-center relative shrink-0">
      <MaskGroup1 />
    </div>
  );
}

function SecondaryInfoBlock1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px relative text-white w-full" data-name="Secondary Info Block">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.2] not-italic relative shrink-0 text-[24px] tracking-[-0.24px] w-full">The Strategic SEO and Content Revamp That Drove a 20% Jump in Web Traffic</p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[26px] relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        “Designity has not only helped us with our workload but has elevated our marketing to new levels. Out of every agency I have ever worked with, Designity is top notch and best of the best!”
      </p>
    </div>
  );
}

function AuthorInfoBlock1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Author Info Block">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="relative rounded-[37.265px] size-[74.529px]" data-name="Author Image">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[37.265px] size-full" src={imgAuthorImage1} />
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] min-w-px relative text-[#023456] text-[0px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[24px] mb-0 text-[16px] text-white" style={{ fontVariationSettings: '"wdth" 100' }}>
          Adella Smith
        </p>
        <p className="leading-[26px] text-[16px] text-white" style={{ fontVariationSettings: '"wdth" 100' }}>
          VP of Marketing, Midland Industries
        </p>
      </div>
    </div>
  );
}

function AdditionalInfoContainer1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px relative w-full" data-name="Additional Info Container">
      <SecondaryInfoBlock1 />
      <AuthorInfoBlock1 />
    </div>
  );
}

function PaginationAndAdditionalInfo1() {
  return (
    <div className="bg-[rgba(232,232,239,0.1)] flex-[1_0_0] min-w-px relative rounded-[16px] self-stretch" data-name="Pagination and Additional Info">
      <div aria-hidden className="absolute border border-[rgba(232,232,239,0.3)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[24px] relative size-full">
        <StatsContainer1 />
        <Frame1 />
        <AdditionalInfoContainer1 />
      </div>
    </div>
  );
}

function StatsContainer2() {
  return (
    <div className="bg-[#f1b71c] relative rounded-[16px] shrink-0 w-full" data-name="Stats Container">
      <div className="flex flex-col justify-center size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start justify-center not-italic p-[24px] relative size-full text-[#101636] whitespace-nowrap">
          <p className="font-['Inter:Black',sans-serif] font-black leading-[76px] relative shrink-0 text-[72px]">$50K+</p>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[24px] tracking-[-0.24px]">Revenue</p>
        </div>
      </div>
    </div>
  );
}

function MaskGroup2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Mask group">
      <div className="bg-white col-1 h-[120.403px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[17.242px_12.797px] mask-size-[161.094px_86.588px] ml-[-17.24px] mt-[-12.8px] relative row-1 w-[197.362px]" style={{ maskImage: `url("${imgRectangle3}")` }} />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col h-[80px] items-center justify-center relative shrink-0">
      <MaskGroup2 />
    </div>
  );
}

function SecondaryInfoBlock2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px relative w-full" data-name="Secondary Info Block">
      <Frame2 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.2] min-w-full not-italic relative shrink-0 text-[24px] text-white tracking-[-0.24px] w-[min-content]">The Brand Reinvention That Helped a Healthcare Tech Company Stand Out Without Overspending</p>
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[26px] min-w-full relative shrink-0 text-[16px] text-white w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
        “Adding Designity to our team is one of the best decisions we’ve made and I don’t know what we ever did without them. I wish all of my vendor relationships were this great!”
      </p>
    </div>
  );
}

function AuthorInfoBlock2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Author Info Block">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="relative rounded-[37.265px] size-[74.529px]" data-name="Author Image">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[37.265px]">
              <img alt="" className="absolute left-[-21.85%] max-w-none size-[131.97%] top-[-7.65%]" src={imgAuthorImage2} />
            </div>
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] min-w-px relative text-[#023456] text-[0px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[24px] mb-0 text-[16px] text-white" style={{ fontVariationSettings: '"wdth" 100' }}>
          Michelle Graska
        </p>
        <p className="leading-[26px] text-[16px] text-white" style={{ fontVariationSettings: '"wdth" 100' }}>{`Marketing & Corporate Events Enthusiast, HCIM`}</p>
      </div>
    </div>
  );
}

function AdditionalInfoContainer2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px relative w-full" data-name="Additional Info Container">
      <SecondaryInfoBlock2 />
      <AuthorInfoBlock2 />
    </div>
  );
}

function PaginationAndAdditionalInfo2() {
  return (
    <div className="bg-[rgba(232,232,239,0.1)] flex-[1_0_0] min-w-px relative rounded-[16px] self-stretch" data-name="Pagination and Additional Info">
      <div aria-hidden className="absolute border border-[rgba(232,232,239,0.3)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[24px] relative size-full">
        <StatsContainer2 />
        <AdditionalInfoContainer2 />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
      <PaginationAndAdditionalInfo />
      <PaginationAndAdditionalInfo1 />
      <PaginationAndAdditionalInfo2 />
    </div>
  );
}

export default function LeftSection() {
  return (
    <div className="bg-[#101636] content-stretch flex flex-col gap-[48px] items-center justify-center px-[60px] py-[80px] relative size-full" data-name="Left Section">
      <ServicesTextBlock />
      <Frame3 />
      <div className="bg-[#f1b71c] relative rounded-[71px] shrink-0" data-name="CTA Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[20px] py-[10px] relative size-full">
            <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.3] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Book Your Demo Call</p>
          </div>
        </div>
      </div>
    </div>
  );
}