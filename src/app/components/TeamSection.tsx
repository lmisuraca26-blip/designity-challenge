import { useState } from "react";
import svgPaths from "../../imports/Section4MarketingServices-2/svg-p58pfderui";
import imgMatthewBig from "../../imports/TeamGrid/matthew-big.png";
import imgMatthewThumbActive from "../../imports/TeamGrid/matthew-thumb-active.png";
import imgMatthewThumbInactive from "../../imports/TeamGrid/matthew-thumb-inactive.png";
import imgAmitBig from "../../imports/TeamGrid/amit-big.png";
import imgAmitThumbActive from "../../imports/TeamGrid/amit-thumb-active.png";
import imgAmitThumbInactive from "../../imports/TeamGrid/amit-thumb-inactive.png";
import imgPooyanBig from "../../imports/TeamGrid/pooyan-big.png";
import imgPooyanThumbActive from "../../imports/TeamGrid/pooyan-thumb-active.png";
import imgPooyanThumbInactive from "../../imports/TeamGrid/pooyan-thumb-inactive.png";
import imgSimonBig from "../../imports/TeamGrid/simon-big.png";
import imgSimonThumbActive from "../../imports/TeamGrid/simon-thumb-active.png";
import imgSimonThumbInactive from "../../imports/TeamGrid/simon-thumb-inactive.png";
import imgSitaraBig from "../../imports/TeamGrid/sitara-big.png";
import imgSitaraThumbActive from "../../imports/TeamGrid/sitara-thumb-active.png";
import imgSitaraThumbInactive from "../../imports/TeamGrid/sitara-thumb-inactive.png";

const industryItems = ["Healthcare", "Hospitality", "Education", "Engineering", "Food & Beverage", "Fashion", "+ More"];
const expertiseItems = ["Graphic Design", "Illustration", "Content & Copywriting", "Video Production"];

const teamMembers = [
  {
    thumbActive: imgMatthewThumbActive,
    thumbInactive: imgMatthewThumbInactive,
    thumbW: 107,
    thumbH: 125,
    bigImg: imgMatthewBig,
    name: "Matthew W.",
    seeWork: "See Matthew's Work",
    location: "New York",
    experience: "10+ Years",
  },
  {
    thumbActive: imgAmitThumbActive,
    thumbInactive: imgAmitThumbInactive,
    thumbW: 101,
    thumbH: 112,
    bigImg: imgAmitBig,
    name: "Amit",
    seeWork: "See Amit's Work",
    location: "California",
    experience: "16+ Years",
  },
  {
    thumbActive: imgPooyanThumbActive,
    thumbInactive: imgPooyanThumbInactive,
    thumbW: 107,
    thumbH: 125,
    bigImg: imgPooyanBig,
    name: "Pooyan A.",
    seeWork: "See Pooyan's Work",
    location: "Texas",
    experience: "8+ Years",
  },
  {
    thumbActive: imgSimonThumbActive,
    thumbInactive: imgSimonThumbInactive,
    thumbW: 101,
    thumbH: 111,
    bigImg: imgSimonBig,
    name: "Simon",
    seeWork: "See Simon's Work",
    location: "Florida",
    experience: "12+ Years",
  },
  {
    thumbActive: imgSitaraThumbActive,
    thumbInactive: imgSitaraThumbInactive,
    thumbW: 107,
    thumbH: 125,
    bigImg: imgSitaraBig,
    name: "Sitara",
    seeWork: "See Sitara's Work",
    location: "Georgia",
    experience: "14+ Years",
  },
];

function StarRow() {
  return (
    <div className="flex flex-row items-center" role="img" aria-label="5 star rating">
      {[0, 1, 2, 3, 4].map((i) => (
        <div key={i} className="relative shrink-0 size-[29.141px]">
          <div className="absolute inset-[7.67%_9.57%_15.09%_9.57%]">
            <svg className="block size-full" fill="none" height="22.5084" preserveAspectRatio="none" viewBox="0 0 23.5628 22.5084" width="23.5628" aria-hidden="true">
              <path d={svgPaths.p7c07c00} fill="#F1B71C" />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
}

function CheckIcon() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 size-[20px] flex items-center justify-center">
      <svg className="block" fill="none" height="12" viewBox="0 0 14 12" width="14" aria-hidden="true">
        <path d={svgPaths.p2afb7200} stroke="#101636" strokeLinecap="round" strokeWidth="2" />
      </svg>
    </div>
  );
}

function MobilePillList({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="flex flex-col gap-[4px] items-start w-full">
      <p className="font-open-sans text-[12px] leading-[16px] text-black opacity-50 whitespace-nowrap">{label}</p>
      <div className="overflow-x-auto flex flex-row gap-[8px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-[6px] bg-white rounded-[10px] px-[8px] py-[4px] shrink-0">
            <CheckIcon />
            <p className="font-inter font-semibold text-[11px] leading-[1.3] text-[#101636] whitespace-nowrap">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TeamSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeMember = teamMembers[activeIndex];

  function goToPrev() {
    setActiveIndex((i) => (i - 1 + teamMembers.length) % teamMembers.length);
  }

  function goToNext() {
    setActiveIndex((i) => (i + 1) % teamMembers.length);
  }

  return (
    <section aria-label="Our marketing talent network">
      {/* Mobile layout */}
      <div className="md:hidden bg-white flex flex-col gap-[32px] pb-[48px] pt-[20px] px-[20px]">
        <h2 className="font-inter font-semibold text-[32px] leading-[40px] text-center text-[#101636] w-full">
          Our Marketing Talent Network Across Atlanta
        </h2>

        {/* Horizontal scroll carousel */}
        <div className="overflow-x-auto [scroll-snap-type:x_mandatory] -mx-[20px] px-[20px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="flex gap-[20px] items-start">
            {teamMembers.map((card) => (
              <div
                key={card.name}
                className="shrink-0 w-[275px] [scroll-snap-align:start] bg-[#e8e8ef] rounded-[20px] p-[20px] flex flex-col gap-[16px]"
              >
                {/* Profile photo */}
                <img
                  alt={card.name}
                  src={card.thumbActive}
                  className="h-[124px] w-[106px] object-cover object-top rounded-[12px]"
                />

                {/* Name */}
                <p className="font-inter font-semibold text-[38px] leading-[46px] text-[#023456]">{card.name}</p>

                {/* See Work link */}
                <a
                  href="#"
                  className="font-inter font-semibold text-[16px] leading-[1.3] text-[#101636] underline decoration-solid hover:opacity-70 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-[#023456] rounded"
                >
                  {card.seeWork}
                </a>

                {/* Stars */}
                <StarRow />

                {/* Location + Experience */}
                <div className="grid grid-cols-2 gap-[8px]">
                  <div className="flex flex-col gap-[4px]">
                    <p className="font-open-sans text-[11px] leading-[12px] text-black opacity-50">Location:</p>
                    <p className="font-inter font-bold text-[11px] leading-[12px] text-[#101636]">{card.location}</p>
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    <p className="font-open-sans text-[11px] leading-[12px] text-black opacity-50">Experience:</p>
                    <p className="font-inter font-bold text-[11px] leading-[12px] text-[#101636]">{card.experience}</p>
                  </div>
                </div>

                {/* Industry Knowledge */}
                <MobilePillList label="Industry Knowledge:" items={industryItems} />

                {/* Areas of Expertise */}
                <MobilePillList label="Areas of Expertise:" items={expertiseItems} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop layout — unchanged */}
      <div className="hidden md:block bg-[#e8e8ef] relative shrink-0 w-full">
        <div className="content-stretch flex h-[834px] items-center justify-between relative shrink-0 w-full">

          {/* ProfileContainer */}
          <div className="flex-[1_0_0] h-full min-w-px relative">
            <div className="content-stretch flex flex-col items-start px-[60px] py-[80px] relative size-full">

              {/* ProfileInfo */}
              <div className="content-stretch flex flex-col gap-[48px] items-start relative rounded-[16px] shrink-0">

                {/* ServicesHeadline */}
                <div className="h-[18px] relative shrink-0 w-[393.744px]">
                  <p className="absolute font-open-sans font-semibold leading-[18px] not-italic text-[#101636] text-[14px] whitespace-nowrap" style={{ top: 0, left: 0 }}>
                    Our Marketing Talent Network Across Atlanta
                  </p>
                </div>

                {/* ProfileDetails */}
                <div className="content-stretch flex flex-col gap-[24px] items-start pl-[32px] relative shrink-0">

                  <div className="h-[32.484px] relative shrink-0 w-[242.52px]">
                    <p className="absolute font-inter font-semibold leading-[32.484px] not-italic text-[#023456] text-[32px] tracking-[-0.44px] whitespace-nowrap" style={{ top: 0, left: 0 }}>
                      {activeMember.name}
                    </p>
                  </div>

                  <div className="relative rounded-[71px] shrink-0">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="content-stretch flex items-center justify-center relative size-full">
                        <a
                          href="#"
                          className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-inter font-semibold leading-[1.3] not-italic relative shrink-0 text-[#101636] text-[16px] underline whitespace-nowrap hover:opacity-70 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-[#023456] rounded"
                        >
                          {activeMember.seeWork}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="relative shrink-0" role="img" aria-label="5 star rating">
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex items-center relative size-full">
                        {[0, 1, 2, 3, 4].map((i) => (
                          <div key={i} className="relative shrink-0 size-[29.141px]">
                            <div className="absolute inset-[7.67%_9.57%_15.09%_9.57%]">
                              <svg className="block size-full" fill="none" height="22.5084" preserveAspectRatio="none" viewBox="0 0 23.5628 22.5084" width="23.5628" aria-hidden="true">
                                <path d={svgPaths.p7c07c00} fill="#F1B71C" />
                              </svg>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0">

                    <div className="content-stretch flex gap-[48px] items-start relative shrink-0">
                      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-[208px]">
                        <div className="h-[11.969px] relative shrink-0 w-[65.219px]">
                          <p className="absolute font-open-sans leading-[12px] text-[black] text-[11px] whitespace-nowrap" style={{ top: 0, left: 0, opacity: 0.5 }}>Location:</p>
                        </div>
                        <div className="h-[11.807px] relative shrink-0 w-[72.946px]">
                          <p className="absolute font-inter font-bold leading-[12px] text-[#101636] text-[11px] whitespace-nowrap" style={{ top: 0, left: 0 }}>{activeMember.location}</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-[208px]">
                        <div className="h-[15.586px] relative shrink-0 w-[83.594px]">
                          <p className="absolute font-open-sans leading-[16px] text-[black] text-[11px] whitespace-nowrap" style={{ top: 0, left: 0, opacity: 0.5 }}>Experience:</p>
                        </div>
                        <div className="h-[12.051px] relative shrink-0 w-[76.19px]">
                          <p className="absolute font-inter font-bold leading-[12px] text-[#101636] text-[11px] whitespace-nowrap" style={{ top: 0, left: 0 }}>{activeMember.experience}</p>
                        </div>
                      </div>
                    </div>

                    <div className="content-stretch flex gap-[48px] items-start relative shrink-0">
                      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-[208px]">
                        <div className="h-[16px] relative shrink-0 w-[149.859px]">
                          <p className="absolute font-open-sans leading-[16px] text-[black] text-[12px] whitespace-nowrap" style={{ top: 0, left: 0, opacity: 0.5 }}>Industry Knowledge:</p>
                        </div>
                        {industryItems.map((item) => (
                          <div key={item} className="content-stretch flex gap-[12px] items-center relative shrink-0">
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
                            <p className="font-inter font-semibold leading-[1.3] not-italic relative shrink-0 text-[#101636] text-[12px] whitespace-nowrap">{item}</p>
                          </div>
                        ))}
                      </div>

                      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-[208px]">
                        <div className="h-[16.086px] relative shrink-0 w-[137.617px]">
                          <p className="absolute font-open-sans leading-[16px] text-[black] text-[12px] whitespace-nowrap" style={{ top: 0, left: 0, opacity: 0.5 }}>Areas of Expertise:</p>
                        </div>
                        {expertiseItems.map((item) => (
                          <div key={item} className="content-stretch flex gap-[12px] items-center relative shrink-0">
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
                            <p className="font-inter font-semibold leading-[1.3] not-italic relative shrink-0 text-[#101636] text-[12px] whitespace-nowrap">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>

              </div>

            </div>
          </div>

          {/* ProfileImageContainer */}
          <div className="content-stretch flex gap-[10px] h-[834px] items-center relative shrink-0 w-[710px]">
            <div className="absolute h-[1015.511px] left-[-45.5px] top-[70.56px] w-[800.991px]">
              <svg className="absolute block inset-0 size-full" fill="none" height="1015.51" preserveAspectRatio="none" viewBox="0 0 800.991 1015.51" width="800.991" aria-hidden="true">
                <path d={svgPaths.p18175680} fill="#F1B71C" />
              </svg>
            </div>
            <div className="absolute h-[1135.722px] left-[-103.95px] top-[-49.65px] w-[805.455px]">
              <img alt={activeMember.name} className="absolute block inset-0 max-w-none size-full object-cover" height="1135.722" src={activeMember.bigImg} width="805.455" />
            </div>
          </div>

          {/* OtherProfilesContainer */}
          <div className="absolute content-stretch flex gap-[8.919px] items-center left-[60px] top-[661.98px]">
            <button
              onClick={goToPrev}
              className="flex items-center justify-center relative shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#023456]"
              aria-label="Previous profile"
            >
              <svg fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 7.91421 13" width="7.91421" aria-hidden="true">
                <path d="M6.5 1L1 6.5L6.5 12" stroke="#101636" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </button>

            {teamMembers.map((member, i) => (
              <button
                key={member.name}
                onClick={() => setActiveIndex(i)}
                aria-label={`View ${member.name}'s profile`}
                aria-pressed={i === activeIndex}
                className={`relative shrink-0 rounded-[8px] transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-[#023456] ${
                  i === activeIndex ? "ring-2 ring-[#f1b71c]" : "hover:opacity-80"
                }`}
                style={{ height: member.thumbH, width: member.thumbW }}
              >
                <img
                  alt={member.name}
                  className="absolute block inset-0 max-w-none size-full object-cover rounded-[8px]"
                  height={member.thumbH}
                  src={i === activeIndex ? member.thumbActive : member.thumbInactive}
                  width={member.thumbW}
                />
              </button>
            ))}

            <button
              onClick={goToNext}
              className="overflow-clip relative shrink-0 size-[22px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#023456]"
              aria-label="Next profile"
            >
              <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4">
                <div className="absolute inset-[-9.09%_-25.71%_-9.09%_-18.18%]">
                  <svg className="block size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 7.91421 13" width="7.91421" aria-hidden="true">
                    <path d="M1 12L6.5 6.5L1 1" stroke="#101636" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
