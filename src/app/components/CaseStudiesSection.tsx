import imgBackgroundShape from "../../imports/LeftSection/b8efb1c995337d3bb439766bb6b334d62a1c9257.png";
import imgAuthorImage from "../../imports/LeftSection/b139ef7f62ce58b18db4402d5b1a739b1f51b02c.png";
import imgRectangle2 from "../../imports/LeftSection/3bc1930d9aebb3b9c3eb0f27b61747ce1842a415.png";
import imgAuthorImage1 from "../../imports/LeftSection/c9b08b648af0202d902bc9ebb4a6acef4fac5e19.png";
import imgRectangle3 from "../../imports/LeftSection/ea1ffabf071138d5e6ffdc002bd0b8301d21bea4.png";
import imgAuthorImage2 from "../../imports/LeftSection/20faed60358b95a4b9989ea851270905d2abfd2b.png";

function scrollToDemo() {
  document.getElementById("cta-demo")?.scrollIntoView({ behavior: "smooth" });
}

export function CaseStudiesSection() {
  return (
    <section className="bg-[#101636] relative shrink-0 w-full" aria-label="Brand transformations showcase">
      <div className="flex flex-col items-center justify-center w-full">

        {/* ↓ Selected element — restructured to match LeftSection reference layer-for-layer */}
        <div className="bg-[#101636] content-stretch flex flex-col gap-[32px] md:gap-[48px] items-center justify-center px-[20px] py-[48px] md:px-[60px] md:py-[80px] relative w-full">

          {/* Services Text Block */}
          <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 text-center w-full md:w-[570px]">
            <h2 className="font-inter font-semibold leading-[40px] md:leading-[52px] not-italic relative shrink-0 text-[32px] md:text-[44px] text-white tracking-[-0.44px] w-full">
              Showcasing Atlanta's Brand Transformations
            </h2>
            <p className="font-open-sans font-normal leading-[20px] relative shrink-0 text-[#e8e8ef] text-[14px] w-full">
              Discover how Designity has helped Atlanta brands reimagine their identity, sharpen their messaging, and launch creative that gets results. Check out our recent projects and see what's possible when expert strategy meets top-tier design.
            </p>
          </div>

          {/* Frame3 — three cards */}
          <div className="content-stretch flex flex-col gap-[20px] md:flex-row items-start relative shrink-0 w-full">

            {/* Card 1 — Physician's Choice / $50K+ Revenue */}
            <div className="bg-[rgba(232,232,239,0.1)] w-full md:flex-[1_0_0] md:min-w-px relative rounded-[16px]">
              <div aria-hidden className="absolute border border-[rgba(232,232,239,0.3)] border-solid inset-0 pointer-events-none rounded-[16px]" />
              <div className="content-stretch flex flex-col gap-[32px] items-start p-[24px] relative size-full">
                {/* Stats Container */}
                <div className="bg-[#f1b71c] relative rounded-[16px] shrink-0 w-full">
                  <div className="flex flex-col justify-center size-full">
                    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center not-italic p-[24px] relative size-full text-[#101636] whitespace-nowrap">
                      <p className="font-inter font-black leading-[76px] relative shrink-0 text-[72px]">$50K+</p>
                      <p className="font-inter font-semibold leading-[1.2] relative shrink-0 text-[24px] tracking-[-0.24px]">Revenue</p>
                    </div>
                  </div>
                </div>
                {/* Mask group — Physician's Choice logo */}
                <div className="content-stretch flex flex-col h-[80px] items-center justify-center relative shrink-0">
                  <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                    <div
                      className="bg-white col-1 h-[100.712px] mask-alpha mask-intersect mask-no-clip mask-no-repeat relative row-1 w-[294.768px]"
                      style={{
                        maskImage: `url("${imgBackgroundShape}")`,
                        maskPosition: "57.492px 10.461px",
                        maskSize: "195.703px 66.718px",
                        marginLeft: "-57.49px",
                        marginTop: "-10.46px",
                      }}
                    />
                  </div>
                </div>
                {/* Additional Info Container */}
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start relative w-full">
                  {/* Secondary Info Block */}
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start relative text-white w-full">
                    <p className="font-inter font-semibold leading-[1.2] not-italic relative shrink-0 text-[24px] tracking-[-0.24px] w-full">
                      A Custom Influencer Marketing Kit That Helped Drive $50K in Revenue
                    </p>
                    <p className="font-open-sans font-normal leading-[26px] relative shrink-0 text-[16px] w-full">
                      "Designity's thorough communication, ability to meet tight deadlines, and kind, flexible approach during organizational changes have made them an invaluable partner. We love our Designity team here at Physician's Choice!"
                    </p>
                  </div>
                  {/* Author Info Block */}
                  <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
                    <div className="flex items-center justify-center relative shrink-0">
                      <div className="-scale-y-100 flex-none rotate-180">
                        <div className="relative rounded-[37.265px] size-[74.529px]">
                          <img alt="Gabrielle Williams" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[37.265px] size-full" src={imgAuthorImage} />
                        </div>
                      </div>
                    </div>
                    <div className="flex-[1_0_0] font-open-sans font-normal leading-[0] min-w-px relative text-[0px]">
                      <p className="font-open-sans font-bold leading-[24px] mb-0 text-[16px] text-white">Gabrielle Williams</p>
                      <p className="font-open-sans leading-[26px] text-[16px] text-white">Senior Social Media Associate, Physician's Choice</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 — Midland Industries / +20% Web Traffic */}
            <div className="bg-[rgba(232,232,239,0.1)] w-full md:flex-[1_0_0] md:min-w-px relative rounded-[16px] md:self-stretch">
              <div aria-hidden className="absolute border border-[rgba(232,232,239,0.3)] border-solid inset-0 pointer-events-none rounded-[16px]" />
              <div className="content-stretch flex flex-col gap-[32px] items-start p-[24px] relative size-full">
                {/* Stats Container */}
                <div className="bg-[#f1b71c] relative rounded-[16px] shrink-0 w-full">
                  <div className="flex flex-col justify-center size-full">
                    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center not-italic p-[24px] relative size-full text-[#101636] whitespace-nowrap">
                      <p className="font-inter font-black leading-[76px] relative shrink-0 text-[72px]">+20%</p>
                      <p className="font-inter font-semibold leading-[1.2] relative shrink-0 text-[24px] tracking-[-0.24px]">Jump in web traffic</p>
                    </div>
                  </div>
                </div>
                {/* Mask group — Midland logo */}
                <div className="content-stretch flex flex-col h-[80px] items-center justify-center relative shrink-0">
                  <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                    <div
                      className="bg-white col-1 h-[89.045px] mask-alpha mask-intersect mask-no-clip mask-no-repeat relative row-1 w-[276.214px]"
                      style={{
                        maskImage: `url("${imgRectangle2}")`,
                        maskPosition: "15.859px -11.935px",
                        maskSize: "252.449px 100.979px",
                        marginLeft: "-15.86px",
                        marginTop: "11.93px",
                      }}
                    />
                  </div>
                </div>
                {/* Additional Info Container */}
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start relative w-full">
                  {/* Secondary Info Block */}
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start relative text-white w-full">
                    <p className="font-inter font-semibold leading-[1.2] not-italic relative shrink-0 text-[24px] tracking-[-0.24px] w-full">
                      The Strategic SEO and Content Revamp That Drove a 20% Jump in Web Traffic
                    </p>
                    <p className="font-open-sans font-normal leading-[26px] relative shrink-0 text-[16px] w-full">
                      "Designity has not only helped us with our workload but has elevated our marketing to new levels. Out of every agency I have ever worked with, Designity is top notch and best of the best!"
                    </p>
                  </div>
                  {/* Author Info Block */}
                  <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
                    <div className="flex items-center justify-center relative shrink-0">
                      <div className="-scale-y-100 flex-none rotate-180">
                        <div className="relative rounded-[37.265px] size-[74.529px]">
                          <img alt="Adella Smith" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[37.265px] size-full" src={imgAuthorImage1} />
                        </div>
                      </div>
                    </div>
                    <div className="flex-[1_0_0] font-open-sans font-normal leading-[0] min-w-px relative text-[0px]">
                      <p className="font-open-sans font-bold leading-[24px] mb-0 text-[16px] text-white">Adella Smith</p>
                      <p className="font-open-sans leading-[26px] text-[16px] text-white">VP of Marketing, Midland Industries</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 — HCIM / $50K+ Revenue (mask inside SecondaryInfoBlock) */}
            <div className="bg-[rgba(232,232,239,0.1)] w-full md:flex-[1_0_0] md:min-w-px relative rounded-[16px] md:self-stretch">
              <div aria-hidden className="absolute border border-[rgba(232,232,239,0.3)] border-solid inset-0 pointer-events-none rounded-[16px]" />
              <div className="content-stretch flex flex-col gap-[32px] items-start p-[24px] relative size-full">
                {/* Stats Container */}
                <div className="bg-[#f1b71c] relative rounded-[16px] shrink-0 w-full">
                  <div className="flex flex-col justify-center size-full">
                    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center not-italic p-[24px] relative size-full text-[#101636] whitespace-nowrap">
                      <p className="font-inter font-black leading-[76px] relative shrink-0 text-[72px]">$50K+</p>
                      <p className="font-inter font-semibold leading-[1.2] relative shrink-0 text-[24px] tracking-[-0.24px]">Revenue</p>
                    </div>
                  </div>
                </div>
                {/* Additional Info Container (note: mask group is inside SecondaryInfoBlock for card 3) */}
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start relative w-full">
                  {/* Secondary Info Block — contains mask group at top */}
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start relative w-full">
                    {/* Mask group — HCIM logo */}
                    <div className="content-stretch flex flex-col h-[80px] items-center justify-center relative shrink-0">
                      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                        <div
                          className="bg-white col-1 h-[120.403px] mask-alpha mask-intersect mask-no-clip mask-no-repeat relative row-1 w-[197.362px]"
                          style={{
                            maskImage: `url("${imgRectangle3}")`,
                            maskPosition: "17.242px 12.797px",
                            maskSize: "161.094px 86.588px",
                            marginLeft: "-17.24px",
                            marginTop: "-12.8px",
                          }}
                        />
                      </div>
                    </div>
                    <p className="font-inter font-semibold leading-[1.2] not-italic relative shrink-0 text-[24px] text-white tracking-[-0.24px] w-full">
                      The Brand Reinvention That Helped a Healthcare Tech Company Stand Out Without Overspending
                    </p>
                    <p className="font-open-sans font-normal leading-[26px] relative shrink-0 text-[16px] text-white w-full">
                      "Adding Designity to our team is one of the best decisions we've made and I don't know what we ever did without them. I wish all of my vendor relationships were this great!"
                    </p>
                  </div>
                  {/* Author Info Block */}
                  <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
                    <div className="flex items-center justify-center relative shrink-0">
                      <div className="-scale-y-100 flex-none rotate-180">
                        <div className="relative rounded-[37.265px] size-[74.529px]">
                          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[37.265px]">
                            <img alt="Michelle Graska" className="absolute left-[-21.85%] max-w-none size-[131.97%] top-[-7.65%]" src={imgAuthorImage2} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-[1_0_0] font-open-sans font-normal leading-[0] min-w-px relative text-[0px]">
                      <p className="font-open-sans font-bold leading-[24px] mb-0 text-[16px] text-white">Michelle Graska</p>
                      <p className="font-open-sans leading-[26px] text-[16px] text-white">Marketing & Corporate Events Enthusiast, HCIM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* CTA Button — child layer present in reference, recreated here */}
          <button
            onClick={scrollToDemo}
            className="w-full md:w-auto bg-[#f1b71c] relative rounded-[71px] shrink-0 hover:bg-[#d9a519] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f1b71c]"
          >
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[20px] py-[10px] relative size-full">
                <p className="font-inter font-semibold leading-[1.3] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Book Your Demo Call</p>
              </div>
            </div>
          </button>

        </div>
        {/* ↑ End of selected element */}

      </div>
    </section>
  );
}
