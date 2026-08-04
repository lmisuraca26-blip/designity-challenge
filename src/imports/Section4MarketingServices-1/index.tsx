import { motion } from "motion/react";
import imgDetailImage from "./ece298d0ec2c16f10310d45724b276a6035cb503.png";
import imgDetailImage1 from "./69b07042cb39485666d3b1e17503dc58cd56fe3c.png";

function ChevronRight({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[12px]"} data-name="chevron-right">
      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-16.67%_-47.14%_-16.67%_-33.33%]">
          <svg className="block size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 5.41421 8" width="5.41421">
            <path d="M1 7L4 4L1 1" id="Vector" stroke="black" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ServicesHeadStack() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-center relative shrink-0 text-center w-full" data-name="Services Head Stack">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.2] not-italic relative shrink-0 text-[#023456] text-[52px] tracking-[-0.78px] w-full">Our Marketing Services in Atlanta</p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[26px] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.8)] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Get access to a full-service marketing team with expertise in:
      </p>
    </div>
  );
}

function ServiceTab() {
  return (
    <div className="bg-[#f9f9fb] relative rounded-[12px] shrink-0 w-full" data-name="Service Tab 01">
      <div aria-hidden className="absolute border border-[#e8e8ef] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            01
          </p>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[22px] min-w-px not-italic overflow-hidden relative text-[16px] text-black text-ellipsis whitespace-nowrap">{`Logo & Branding Design`}</p>
          <ChevronRight className="overflow-clip relative shrink-0 size-[12px]" />
        </div>
      </div>
    </div>
  );
}

function ServiceTab1() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Service Tab 02">
      <div aria-hidden className="absolute border border-[#e8e8ef] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            02
          </p>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[26px] min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>{`Social Media & Digital Ads`}</p>
          <ChevronRight className="overflow-clip relative shrink-0 size-[12px]" />
        </div>
      </div>
    </div>
  );
}

function ServiceTab2() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Service Tab 03">
      <div aria-hidden className="absolute border border-[#e8e8ef] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            03
          </p>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[26px] min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>{`SEO & Content Marketing`}</p>
          <ChevronRight className="overflow-clip relative shrink-0 size-[12px]" />
        </div>
      </div>
    </div>
  );
}

function ServiceTab3() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Service Tab 04">
      <div aria-hidden className="absolute border border-[#e8e8ef] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            04
          </p>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[26px] min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>{`Motion Graphics & Video`}</p>
          <ChevronRight className="overflow-clip relative shrink-0 size-[12px]" />
        </div>
      </div>
    </div>
  );
}

function ServiceTab4() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Service Tab 05">
      <div aria-hidden className="absolute border border-[#e8e8ef] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            05
          </p>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[26px] min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>{`Website Design & Coding`}</p>
          <ChevronRight className="overflow-clip relative shrink-0 size-[12px]" />
        </div>
      </div>
    </div>
  );
}

function ServiceTab5() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Service Tab 06">
      <div aria-hidden className="absolute border border-[#e8e8ef] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            06
          </p>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[26px] min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>{`Graphic Design & Illustration`}</p>
          <ChevronRight className="overflow-clip relative shrink-0 size-[12px]" />
        </div>
      </div>
    </div>
  );
}

function ServiceTab6() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Service Tab 07">
      <div aria-hidden className="absolute border border-[#e8e8ef] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            07
          </p>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[26px] min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            Account-Based Marketing
          </p>
          <ChevronRight className="overflow-clip relative shrink-0 size-[12px]" />
        </div>
      </div>
    </div>
  );
}

function ServiceTab7() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Service Tab 08">
      <div aria-hidden className="absolute border border-[#e8e8ef] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            08
          </p>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[26px] min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            Email Marketing Campaigns
          </p>
          <ChevronRight className="overflow-clip relative shrink-0 size-[12px]" />
        </div>
      </div>
    </div>
  );
}

function ServiceTab8() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Service Tab 09">
      <div aria-hidden className="absolute border border-[#e8e8ef] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            09
          </p>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[26px] min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>{`Marketing Audit & Strategy`}</p>
          <ChevronRight className="overflow-clip relative shrink-0 size-[12px]" />
        </div>
      </div>
    </div>
  );
}

function ServiceTab9() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Service Tab 10">
      <div aria-hidden className="absolute border border-[#e8e8ef] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            10
          </p>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[26px] min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>{`Copy & Content Writing`}</p>
          <ChevronRight className="overflow-clip relative shrink-0 size-[12px]" />
        </div>
      </div>
    </div>
  );
}

function ServiceTab10() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Service Tab 11">
      <div aria-hidden className="absolute border border-[#e8e8ef] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            11
          </p>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[26px] min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>{`Mobile App Design & Coding`}</p>
          <ChevronRight className="overflow-clip relative shrink-0 size-[12px]" />
        </div>
      </div>
    </div>
  );
}

function ServiceTab11() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Service Tab 12">
      <div aria-hidden className="absolute border border-[#e8e8ef] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            12
          </p>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[26px] min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>{`Presentation & Publication`}</p>
          <ChevronRight className="overflow-clip relative shrink-0 size-[12px]" />
        </div>
      </div>
    </div>
  );
}

function ServiceTab12() {
  return (
    <div className="bg-[#f9f9fb] relative rounded-[12px] shrink-0 w-full" data-name="Service Tab 13">
      <div aria-hidden className="absolute border border-[#e8e8ef] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            13
          </p>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:Bold',sans-serif] font-bold leading-[26px] min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>{`Packaging & Label Design`}</p>
          <ChevronRight className="overflow-clip relative shrink-0 size-[12px]" />
        </div>
      </div>
    </div>
  );
}

function ServicesTabsList() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-start justify-end overflow-clip relative shrink-0 w-[470px]" data-name="Services Tabs List">
      <ServiceTab />
      <ServiceTab1 />
      <ServiceTab2 />
      <ServiceTab3 />
      <ServiceTab4 />
      <ServiceTab5 />
      <ServiceTab6 />
      <ServiceTab7 />
      <ServiceTab8 />
      <ServiceTab9 />
      <ServiceTab10 />
      <ServiceTab11 />
      <ServiceTab12 />
    </div>
  );
}

function Scrollbar() {
  return <div className="-translate-x-1/2 absolute bg-[#023456] h-[8px] left-[calc(50%+139px)] rounded-[71px] top-0 w-[382px]" data-name="Scrollbar" />;
}

function Separator() {
  return (
    <div className="flex h-full items-center justify-center relative shrink-0 w-[8px]" style={{ containerType: "size" }}>
      <div className="flex-none rotate-90 w-[100cqh]">
        <div className="bg-[rgba(16,22,54,0.08)] h-[8px] overflow-clip relative rounded-[71px] w-full" data-name="Separator">
          <Scrollbar />
        </div>
      </div>
    </div>
  );
}

function DetailImage() {
  return (
    <div className="h-[455px] relative rounded-[8px] shrink-0 w-full" data-name="Detail Image">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgDetailImage} />
        <div className="absolute inset-0 overflow-hidden rounded-[8px]">
          <img alt="" className="absolute h-[114.41%] left-0 max-w-none top-0 w-full" src={imgDetailImage1} />
        </div>
      </div>
      <div className="flex flex-col items-end justify-end size-full">
        <div className="content-stretch flex flex-col items-end justify-end p-[32px] relative size-full">
          <div className="bg-[#f1b71c] relative rounded-[71px] shrink-0" data-name="CTA Button">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[20px] py-[10px] relative size-full">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.3] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Learn More</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SecondaryServiceRow() {
  return (
    <div className="relative shrink-0 w-full" data-name="Secondary Service Row">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.2] not-italic relative shrink-0 text-[24px] text-black tracking-[-0.24px] w-full">{`Packaging & Label Design`}</p>
        <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.8)] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>{`Turn heads in-store and online with packaging and label designs that blend creativity, clarity, and compliance. Packaging & label design services include everything from structural design and visual branding to production-ready files tailored for retail, DTC, and digital marketplaces.`}</p>
      </div>
    </div>
  );
}

function DetailsPanel() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start p-[20px] relative rounded-[20px] shrink-0 w-[762px]" data-name="Details Panel">
      <div aria-hidden className="absolute border border-[#e8e8ef] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <DetailImage />
      <SecondaryServiceRow />
    </div>
  );
}

function TabsLayoutContainer() {
  return (
    <motion.div className="content-stretch flex gap-[40px] h-[660px] items-start relative shrink-0" data-name="Tabs Layout Container">
      <ServicesTabsList />
      <Separator />
      <DetailsPanel />
    </motion.div>
  );
}

export default function Section4MarketingServices() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[48px] items-center pb-[100px] pt-[80px] px-[60px] relative size-full" data-name="Section 4: Marketing Services">
      <ServicesHeadStack />
      <TabsLayoutContainer />
    </div>
  );
}