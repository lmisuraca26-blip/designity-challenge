import imgLogo from "../../imports/Section2StatsAndLogos/db85c8bee88b3955afb49b5f63c96598be6e1018.png";
import imgLogo1 from "../../imports/Section2StatsAndLogos/2fbc4763c2dd1cc70375456f3ffee0891e208047.png";
import imgLogo2 from "../../imports/Section2StatsAndLogos/e602f01ba926fb0d839a7e068a96d9b3b731ba30.png";
import imgLogo3 from "../../imports/Section2StatsAndLogos/755c38ed2a0b8d82cb4259838867cfc8b2e5d587.png";
import imgLogo4 from "../../imports/Section2StatsAndLogos/0341aa3b41f5c651fb49e706ee1bbc5975d48c1e.png";
import imgLogo5 from "../../imports/Section2StatsAndLogos/d91153fb6054ad1e89aab2f6269ac25bbad5e715.png";
import imgLogo6 from "../../imports/Section2StatsAndLogos/32ec3997419320e66515f5067e66c9cec1420078.png";
import imgLogo7 from "../../imports/Section2StatsAndLogos/6a2302cbd372bc2d5369f10189cd3b3f15fd1360.png";
import imgLogo8 from "../../imports/Section2StatsAndLogos/b088add1bf614b5e3550d4b1f2155038b7e1d3e9.png";
import imgLogo9 from "../../imports/Section2StatsAndLogos/083422593577b76cb5308ef41af097026b2508e2.png";
import imgDecorationImage from "../../imports/Section2StatsAndLogos/cdbb3a86bba99366beaa5eb16f55812b76795046.png";
import svgPaths from "../../imports/Section2StatsAndLogos/svg-a7wgw6ucar";

const logos = [
  { src: imgLogo, alt: "Icon Parking", w: 96.541, h: 52.331 },
  { src: imgLogo1, alt: "FSC", w: 107.368, h: 69.474 },
  { src: imgLogo2, alt: "Audible", w: 96.541, h: 52.331 },
  { src: imgLogo3, alt: "Anaheim Ducks", w: 105.564, h: 73.985 },
  { src: imgLogo4, alt: "Freethink", w: 96.541, h: 52.331 },
  { src: imgLogo5, alt: "Marriott International", w: 96.541, h: 52.331 },
  { src: imgLogo6, alt: "Kung Fu Tea", w: 126.316, h: 88.421 },
  { src: imgLogo7, alt: "Big Brothers Big Sisters", w: 110.075, h: 76.692 },
  { src: imgLogo8, alt: "Memphis Zoo", w: 105.564, h: 73.985 },
  { src: imgLogo9, alt: "Vital Farms", w: 109.173, h: 76.692 },
];

export function StatsLogosSection() {
  return (
    <section className="relative shrink-0 w-full" aria-label="Trusted brands and stats">
      <div className="flex flex-col items-center overflow-clip w-full">

        {/* ↓ Selected element — restructured to match Section2StatsAndLogos reference layer-for-layer */}
        <div className="bg-white content-stretch flex flex-col gap-[40px] items-center px-[20px] py-[48px] md:gap-[80px] md:pb-[80px] md:pt-[60px] md:px-[80px] relative size-full">

          {/* Heading */}
          <p className="font-inter font-semibold leading-[1.2] md:leading-[52px] not-italic relative shrink-0 text-[#023456] text-[24px] md:text-[44px] text-center tracking-[-0.44px] w-full md:w-[689px]">
            Trusted Marketing Partner to Leading Brands in Atlanta
          </p>

          {/* LogoGarden — auto-scrolling marquee, pauses on hover */}
          <div className="relative shrink-0 w-full overflow-hidden group">
            <div className="flex flex-row items-center w-max animate-marquee group-hover:[animation-play-state:paused]">
              {[0, 1].map((copy) => (
                <div key={copy} aria-hidden={copy === 1} className="content-stretch flex gap-[32px] md:gap-[80px] items-center pr-[32px] md:pr-[80px]">
                  {logos.map((logo) => (
                    <div key={logo.alt} className="relative shrink-0" style={{ width: logo.w, height: logo.h }}>
                      <img alt={copy === 0 ? logo.alt : ""} className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={logo.src} />
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Left gradient fade — desktop only */}
            <div className="hidden md:block -translate-y-1/2 absolute bg-gradient-to-r from-white h-[113.355px] left-0 to-[rgba(255,255,255,0)] top-1/2 w-[114.998px] pointer-events-none" aria-hidden="true" />

            {/* Right gradient fade — desktop only */}
            <div className="hidden md:flex -translate-y-1/2 absolute h-[113.355px] items-center justify-center right-0 top-1/2 w-[114.998px] pointer-events-none" aria-hidden="true">
              <div className="flex-none rotate-180">
                <div className="bg-gradient-to-r from-white h-[113.355px] relative to-[rgba(255,255,255,0)] w-[114.998px]" />
              </div>
            </div>
          </div>

          {/* Container — stats + decoration */}
          <div className="content-stretch flex flex-col md:flex-row md:items-start md:justify-between relative shrink-0 w-full">

            {/* Container1 — decorative image (hidden on mobile) */}
            <div className="hidden md:block content-stretch flex flex-col h-[260px] items-start relative shrink-0 w-[480px]">
              <div className="absolute h-[753.779px] left-[-150.91px] top-[14.78px] w-[781.83px]">
                <svg className="absolute block inset-0 size-full" fill="none" height="753.779" preserveAspectRatio="none" viewBox="0 0 781.83 753.779" width="781.83" aria-hidden="true">
                  <path d={svgPaths.p230c0900} fill="#FEB813" />
                </svg>
              </div>
              <div className="absolute h-[703.156px] left-[-67.21px] top-[-67.89px] w-[527.367px]">
                <img alt="" aria-hidden="true" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDecorationImage} />
              </div>
            </div>

            {/* Container2 — stat blocks */}
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full md:w-[631px]">

              {/* StatBlock — 70% */}
              <div className="relative rounded-[16px] shrink-0 w-full">
                <div className="content-stretch flex gap-[24px] items-start p-[32px] relative size-full">
                  <p className="font-inter font-black leading-[76px] not-italic relative shrink-0 text-[#023456] text-[72px] w-[200px]">70%</p>
                  <p className="flex-[1_0_0] font-open-sans font-semibold leading-[28px] min-w-px relative text-[18px] text-black">cost savings compared to in-house teams &amp; agencies</p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-[#E8E8EF] relative shrink-0 w-full" />

              {/* StatBlock1 — 50% */}
              <div className="relative rounded-[16px] shrink-0 w-full">
                <div className="content-stretch flex gap-[24px] items-start p-[32px] relative size-full">
                  <p className="font-inter font-black leading-[76px] not-italic relative shrink-0 text-[#023456] text-[72px] w-[200px]">50%</p>
                  <p className="flex-[1_0_0] font-open-sans font-semibold leading-[28px] min-w-px relative text-[18px] text-black">faster project delivery with an adaptable creative team</p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-[#E8E8EF] relative shrink-0 w-full" />

              {/* StatBlock2 — 60% */}
              <div className="relative rounded-[16px] shrink-0 w-full">
                <div className="content-stretch flex gap-[24px] items-start p-[32px] relative size-full">
                  <p className="font-inter font-black leading-[76px] not-italic relative shrink-0 text-[#023456] text-[72px] w-[200px]">60%</p>
                  <p className="flex-[1_0_0] font-open-sans font-semibold leading-[28px] min-w-px relative text-[18px] text-black">fewer revisions with AI-enhanced creative workflows</p>
                </div>
              </div>

            </div>
          </div>

        </div>
        {/* ↑ End of selected element */}

      </div>
    </section>
  );
}
