import { useState } from "react";
import svgPaths from "../../imports/Section4MarketingServices-3/svg-i07q1108o";
import mobileSvgPaths from "../../imports/Mobile375Px/svg-oaaoybgexn";
import imgBottomDividerLine from "../../imports/Section4MarketingServices-3/4cda6478763fa38461788e08e0c25ec93507eff5.png";

const industries = [
  {
    name: "Real Estate",
    description:
      "Designity helps real estate brands stand out with smart creative, targeted campaigns, and polished visuals — from residential listings to large-scale commercial projects.",
  },
  {
    name: "Finance",
    description:
      "Designity partners with finance brands to create clear, compliant marketing — from investor decks to lead-gen campaigns — that builds trust and drives engagement.",
  },
  {
    name: "Healthcare",
    description:
      "Designity supports healthcare organizations with thoughtful, patient-focused content and campaigns that strengthen community trust and raise brand visibility.",
  },
  {
    name: "Food & Beverage",
    description:
      "Designity creates fresh, engaging visuals and brand strategies that bring food and beverage products to life across packaging, social media, and beyond.",
  },
  {
    name: "Restaurants",
    description:
      "From menu design to local promotions, Designity helps restaurants attract guests, build loyalty, and stay top of mind in competitive markets.",
  },
  {
    name: "Automotive",
    description:
      "Designity works with automotive brands and dealerships to increase foot traffic, grow visibility, and build interest through compelling creative and smart local targeting.",
  },
  {
    name: "Retail",
    description:
      "Designity helps retail brands create consistent, eye-catching marketing that boosts in-store traffic, strengthens eCommerce performance, and reinforces brand identity.",
  },
  {
    name: "Manufacturing",
    description:
      "Designity supports manufacturers with creative that clarifies complex and technical offerings, improves B2B communication, and helps drive growth across both digital and traditional channels.",
  },
  {
    name: "Cybersecurity",
    description:
      "Designity helps cybersecurity brands simplify technical messaging, build credibility, and reach the right audiences with clear, confident creative that builds trust.",
  },
  {
    name: "SaaS",
    description:
      "Designity works with SaaS companies to tell compelling product stories, drive awareness, and support every stage of the customer journey with strategic creative.",
  },
  {
    name: "Fashion",
    description:
      "Designity brings fashion brands to life through striking visuals, engaging campaigns, and digital experiences that elevate perception and spark connection.",
  },
  {
    name: "Sports",
    description:
      "Designity helps sports brands and organizations energize their audiences, grow their reach, and promote events or partnerships with creative that makes an impact.",
  },
  {
    name: "Hospitality",
    description:
      "Designity supports hotels, venues, and service brands with creative that captures experience, builds trust, and inspires bookings across every channel.",
  },
  {
    name: "Legal",
    description:
      "Designity partners with law firms to modernize their brand presence, communicate expertise, and attract ideal clients with clean, professional marketing.",
  },
  {
    name: "Entertainment",
    description:
      "Designity creates standout visuals, campaigns, and digital content that help entertainment brands launch big, engage fans, and build long-term buzz.",
  },
];

function AccordionList({ openIndex, setOpenIndex }: { openIndex: number | null; setOpenIndex: (i: number | null) => void }) {
  return (
    <>
      {industries.map((industry, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={industry.name} className="bg-[rgba(249,249,251,0.1)] relative rounded-[12px] shrink-0 w-full">
            <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
            <button
              className="flex flex-row justify-end size-full w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f1b71c] rounded-[12px]"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <div className="content-stretch flex gap-[32px] items-start justify-between p-[16px] relative size-full">
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative">
                  <p className="[word-break:break-word] font-inter font-bold leading-[22px] not-italic overflow-hidden relative shrink-0 text-[16px] text-ellipsis text-white w-full whitespace-nowrap text-left">
                    {industry.name}
                  </p>
                  {isOpen && (
                    <p className="[word-break:break-word] font-open-sans font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(232,232,239,0.8)] w-full whitespace-normal text-left">
                      {industry.description}
                    </p>
                  )}
                </div>
                {/* + icon */}
                <div className="bg-white relative rounded-[10px] shrink-0 size-[20px]">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center relative size-full">
                      <div className="relative shrink-0 size-[10px]">
                        <div className="absolute inset-[-10%]">
                          <svg className="block size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12" aria-hidden="true">
                            <path d="M1 6H11" stroke="#101636" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            {!isOpen && <path d="M6 1V11" stroke="#101636" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />}
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </div>
        );
      })}
    </>
  );
}

export function IndustriesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#101636] relative shrink-0 w-full" aria-label="Industries we serve">

      {/* Mobile layout — visible only below md breakpoint */}
      <div className="md:hidden bg-[#101636] flex flex-col gap-[24px] px-[20px] py-[48px]">
        {/* Heading block */}
        <div className="flex flex-col gap-[24px]">
          <h2 className="font-inter font-semibold text-[32px] leading-[40px] text-white">
            Industries We Serve
          </h2>
          <p className="font-open-sans font-normal text-[14px] leading-[20px] text-[rgba(255,255,255,0.8)]">
            {"Designity partners with a wide range of industries to deliver high-impact creative and marketing solutions tailored to your sector's unique needs. From innovative FinTech branding to powerful healthcare campaigns and dynamic marketing for real estate and retail, our vetted creatives and designated Creative Directors make sure every project is expertly managed and strategically aligned. No matter the challenge, Designity is equipped to help Atlanta businesses scale, differentiate, and succeed."}
          </p>
          <button
            className="bg-[#f1b71c] rounded-[71px] w-full py-[14px] font-inter font-semibold text-[16px] text-black cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            onClick={() => document.getElementById("cta-demo")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get Your 2-Week Trial
          </button>
        </div>

        {/* Accordion list */}
        <div className="flex flex-col gap-[12px] w-full">
          <AccordionList openIndex={openIndex} setOpenIndex={setOpenIndex} />
        </div>

        {/* Mobile US map */}
        <div className="shrink-0" style={{ width: "334.998px", height: "211.785px" }}>
          <svg className="block w-full h-full" fill="none" height="211.785" preserveAspectRatio="none" viewBox="0 0 334.998 211.785" width="334.998" aria-label="US map with Georgia highlighted">
            <path d={mobileSvgPaths.p42cb480} fill="white" fillOpacity="0.12" />
            <path d={mobileSvgPaths.p25d90b70} fill="white" fillOpacity="0.12" />
            <path d={mobileSvgPaths.pe36d900} fill="white" fillOpacity="0.12" />
            <path d={mobileSvgPaths.p312ee700} fill="white" fillOpacity="0.12" />
            <path d={mobileSvgPaths.p370dc280} fill="white" fillOpacity="0.12" />
            <path d={mobileSvgPaths.p16a90c00} fill="white" fillOpacity="0.12" />
            <path d={mobileSvgPaths.pca01b00} fill="white" fillOpacity="0.12" />
            <path d={mobileSvgPaths.p16b31f00} fill="white" fillOpacity="0.12" />
            <path d={mobileSvgPaths.p2cf79b00} fill="white" fillOpacity="0.12" />
            <path d={mobileSvgPaths.p1f1f8100} fill="white" fillOpacity="0.12" />
            <path d={mobileSvgPaths.p2dc1a300} fill="white" fillOpacity="0.12" />
            <path d={mobileSvgPaths.p2eb12040} fill="white" fillOpacity="0.12" />
            <path d={mobileSvgPaths.p527a680} fill="white" fillOpacity="0.12" />
            <path d={mobileSvgPaths.p1237400} fill="white" fillOpacity="0.12" />
            <path d={mobileSvgPaths.p117d3f00} fill="white" fillOpacity="0.12" />
            <path d={mobileSvgPaths.p2540da00} fill="white" fillOpacity="0.12" />
            <path d={mobileSvgPaths.p1e961d00} fill="white" fillOpacity="0.12" />
            <path d={mobileSvgPaths.p2b802a00} fill="white" fillOpacity="0.12" />
            <path d={mobileSvgPaths.p1e8ff000} fill="white" fillOpacity="0.12" />
            <path d={mobileSvgPaths.p14a89500} fill="#F1B71C" />
            <path d={mobileSvgPaths.p145b8400} fill="white" fillOpacity="0.12" />
            <path d={mobileSvgPaths.p3b7abf00} fill="white" fillOpacity="0.12" />
            <path d={mobileSvgPaths.p1b49af00} fill="white" fillOpacity="0.12" />
            <path d={mobileSvgPaths.p764ce00} fill="white" fillOpacity="0.12" />
            <path d={mobileSvgPaths.p35092180} fill="white" fillOpacity="0.12" />
            <path d={mobileSvgPaths.p1f69c500} fill="white" fillOpacity="0.12" />
            <path d={mobileSvgPaths.p2cdcec00} fill="white" fillOpacity="0.12" />
            <path d={mobileSvgPaths.p1b31a800} fill="white" fillOpacity="0.12" />
            <path d={mobileSvgPaths.p2bbca180} fill="white" fillOpacity="0.12" />
            <path d={mobileSvgPaths.p3fc2580} fill="white" fillOpacity="0.12" />
            <path d={mobileSvgPaths.p10388012} fill="white" fillOpacity="0.12" />
            <path d={mobileSvgPaths.p27b6a900} fill="white" fillOpacity="0.12" />
            <path d={mobileSvgPaths.p6b97900} fill="white" fillOpacity="0.12" />
            <path d={mobileSvgPaths.p2721d6f0} fill="white" fillOpacity="0.12" />
            <path d={mobileSvgPaths.p2783a800} fill="white" fillOpacity="0.12" />
            <path d={mobileSvgPaths.p12f28000} fill="white" fillOpacity="0.12" />
            <path d={mobileSvgPaths.p20982300} fill="white" fillOpacity="0.12" />
            <path d={mobileSvgPaths.p1cc32b00} fill="white" fillOpacity="0.12" />
            <path d={mobileSvgPaths.p1a35aa00} fill="white" fillOpacity="0.12" />
            <path d={mobileSvgPaths.p16b83800} fill="white" fillOpacity="0.12" />
            <path d={mobileSvgPaths.p19731500} fill="white" fillOpacity="0.12" />
            <path d={mobileSvgPaths.pe3c5080} fill="white" fillOpacity="0.12" />
            <path d={mobileSvgPaths.p190c4c00} fill="white" fillOpacity="0.12" />
            <path d={mobileSvgPaths.p37260b00} fill="white" fillOpacity="0.12" />
            <path d={mobileSvgPaths.p3d368730} fill="white" fillOpacity="0.12" />
            <path d={mobileSvgPaths.p1fd789f0} fill="white" fillOpacity="0.12" />
            <path d={mobileSvgPaths.p1b649200} fill="white" fillOpacity="0.12" />
          </svg>
        </div>
      </div>

      {/* Desktop layout — hidden on mobile, visible md and up */}
      <div className="hidden md:block">
        {/* Shared parent container — all 4 pieces inside one row */}
        <div className="bg-[#101636] content-stretch flex gap-[80px] items-start justify-center px-[60px] py-[120px] relative w-full">

          {/* 1. Left column — Frame (kept as-is) */}
          <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[540px]">

            {/* TextContainer */}
            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
              <p className="font-inter font-semibold leading-[0] not-italic relative shrink-0 text-[0px] text-white tracking-[-0.44px] w-full">
                <span className="leading-[52px] text-[44px]">The industries that we serve across </span>
                <span className="font-extrabold italic leading-[52px] text-[44px]">Atlanta</span>
              </p>
              <p className="font-open-sans font-normal leading-[26px] relative shrink-0 text-[#e8e8ef] text-[16px] w-full">
                {"Designity partners with a wide range of industries to deliver high-impact creative and marketing solutions tailored to your sector's unique needs. From innovative FinTech branding to powerful healthcare campaigns and dynamic marketing for real estate and retail, our vetted creatives and designated Creative Directors make sure every project is expertly managed and strategically aligned. No matter the challenge, Designity is equipped to help Atlanta businesses scale, differentiate, and succeed."}
              </p>
            </div>

            {/* CTA Button */}
            <button
              className="bg-[#f1b71c] relative rounded-[71px] shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              onClick={() => document.getElementById("cta-demo")?.scrollIntoView({ behavior: "smooth" })}
            >
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center px-[20px] py-[10px] relative size-full">
                  <p className="font-inter font-semibold leading-[1.3] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Get Your 2-Week Trial</p>
                </div>
              </div>
            </button>

          </div>

          {/* 2. Vertical divider */}
          <div className="flex h-full items-center justify-center relative shrink-0 w-[8px]" style={{ containerType: "size" }}>
            <div className="flex-none rotate-90 w-[100cqh]">
              <div className="bg-[rgba(255,255,255,0.08)] h-[8px] overflow-clip relative rounded-[71px] w-full">
                <div className="-translate-x-1/2 absolute bg-white h-[8px] left-[calc(50%-141.2px)] rounded-[71px] top-0 w-[382px]" />
              </div>
            </div>
          </div>

          {/* 3. Accordion list — ServiceTabsContainer */}
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px overflow-clip relative">
            <AccordionList openIndex={openIndex} setOpenIndex={setOpenIndex} />

            {/* Bottom divider line image */}
            <div className="absolute bottom-0 left-0 right-0 h-[72px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBottomDividerLine} />
            </div>
          </div>

          {/* 4. US Map — MapAndTextContainer (inline SVG with Georgia highlighted in yellow) */}
          <div className="absolute inset-[60.4%_58.33%_1.67%_4.17%]">
            <svg className="absolute block inset-0 size-full" fill="none" height="341.382" preserveAspectRatio="none" viewBox="0 0 539.997 341.382" width="539.997" aria-label="US map with Georgia highlighted">
              <path d={svgPaths.p14a1d280} fill="white" fillOpacity="0.12" />
              <path d={svgPaths.p149882d0} fill="white" fillOpacity="0.12" />
              <path d={svgPaths.p162d6000} fill="white" fillOpacity="0.12" />
              <path d={svgPaths.pc750a00} fill="white" fillOpacity="0.12" />
              <path d={svgPaths.p3ed12a80} fill="white" fillOpacity="0.12" />
              <path d={svgPaths.p2037dff0} fill="white" fillOpacity="0.12" />
              <path d={svgPaths.p5fe6080} fill="white" fillOpacity="0.12" />
              <path d={svgPaths.p24e473c0} fill="white" fillOpacity="0.12" />
              <path d={svgPaths.p241f6800} fill="white" fillOpacity="0.12" />
              <path d={svgPaths.p1b4f1d00} fill="white" fillOpacity="0.12" />
              <path d={svgPaths.pe39de00} fill="white" fillOpacity="0.12" />
              <path d={svgPaths.p22da9500} fill="white" fillOpacity="0.12" />
              <path d={svgPaths.p37633a80} fill="white" fillOpacity="0.12" />
              <path d={svgPaths.p7dbc600} fill="white" fillOpacity="0.12" />
              <path d={svgPaths.p2d98cd00} fill="white" fillOpacity="0.12" />
              <path d={svgPaths.p39356f30} fill="white" fillOpacity="0.12" />
              <path d={svgPaths.p9064770} fill="white" fillOpacity="0.12" />
              <path d={svgPaths.p174f4600} fill="white" fillOpacity="0.12" />
              <path d={svgPaths.p6a9ee80} fill="white" fillOpacity="0.12" />
              <path d={svgPaths.p2328d5f0} fill="#F1B71C" />
              <path d={svgPaths.p1e5cee00} fill="white" fillOpacity="0.12" />
              <path d={svgPaths.p2f50d080} fill="white" fillOpacity="0.12" />
              <path d={svgPaths.p1a634300} fill="white" fillOpacity="0.12" />
              <path d={svgPaths.p7559b00} fill="white" fillOpacity="0.12" />
              <path d={svgPaths.p2f936200} fill="white" fillOpacity="0.12" />
              <path d={svgPaths.p4e6f0} fill="white" fillOpacity="0.12" />
              <path d={svgPaths.p33057540} fill="white" fillOpacity="0.12" />
              <path d={svgPaths.p1d21ac00} fill="white" fillOpacity="0.12" />
              <path d={svgPaths.p8ea2580} fill="white" fillOpacity="0.12" />
              <path d={svgPaths.p1fbb8400} fill="white" fillOpacity="0.12" />
              <path d={svgPaths.p28261470} fill="white" fillOpacity="0.12" />
              <path d={svgPaths.p37808800} fill="white" fillOpacity="0.12" />
              <path d={svgPaths.p3a15cf00} fill="white" fillOpacity="0.12" />
              <path d={svgPaths.p14c6080} fill="white" fillOpacity="0.12" />
              <path d={svgPaths.p9550f00} fill="white" fillOpacity="0.12" />
              <path d={svgPaths.p38d9bd80} fill="white" fillOpacity="0.12" />
              <path d={svgPaths.p98c7a00} fill="white" fillOpacity="0.12" />
              <path d={svgPaths.p25f3a200} fill="white" fillOpacity="0.12" />
              <path d={svgPaths.p16ca3100} fill="white" fillOpacity="0.12" />
              <path d={svgPaths.p3f57ca00} fill="white" fillOpacity="0.12" />
              <path d={svgPaths.p39c86180} fill="white" fillOpacity="0.12" />
              <path d={svgPaths.p286d0700} fill="white" fillOpacity="0.12" />
              <path d={svgPaths.p2ccf0cc0} fill="white" fillOpacity="0.12" />
              <path d={svgPaths.p3e931580} fill="white" fillOpacity="0.12" />
              <path d={svgPaths.p16380900} fill="white" fillOpacity="0.12" />
              <path d={svgPaths.p36549d80} fill="white" fillOpacity="0.12" />
              <path d={svgPaths.p3bc46700} fill="white" fillOpacity="0.12" />
            </svg>
          </div>

        </div>
      </div>

    </section>
  );
}
