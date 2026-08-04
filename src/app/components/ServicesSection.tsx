import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import imgExpandedImage from "../../imports/Mobile375Px/1bfb16d56f8bf0118b72678a1219f23354164daf.png";
import imgExpandedImage1 from "../../imports/Mobile375Px/69b07042cb39485666d3b1e17503dc58cd56fe3c.png";
import imgNutrireBrand from "../../imports/ServicesGrid/nutrire-brand.webp";
import imgPropertySageApp from "../../imports/ServicesGrid/property-sage-app.webp";
import imgFortreumWebsite from "../../imports/ServicesGrid/fortreum-website.webp";
import imgNutshellApp from "../../imports/ServicesGrid/nutshell-app.webp";
import imgAscentFitnessCopy from "../../imports/ServicesGrid/ascent-fitness-copy.webp";
import imgForgeFlameBlog from "../../imports/ServicesGrid/forge-flame-blog.webp";
import imgAtlanticusApp from "../../imports/ServicesGrid/atlanticus-app.webp";
import imgMimioCampaign from "../../imports/ServicesGrid/mimio-campaign.webp";
import imgNutrireBrand2 from "../../imports/ServicesGrid/nutrire-brand-2.jpg";
import imgLifelongpetsPackaging from "../../imports/ServicesGrid/lifelongpets-packaging.webp";
import imgPrintmailBooth from "../../imports/ServicesGrid/printmail-booth.webp";
import imgOwnershipworksBillboard from "../../imports/ServicesGrid/ownershipworks-billboard.webp";
import imgPompeianAd from "../../imports/ServicesGrid/pompeian-ad.png";
import imgTulsaInnovationLabs from "../../imports/ServicesGrid/tulsa-innovation-labs.webp";

const services = [
  {
    id: "01",
    name: "Logo & Branding Design",
    description:
      "Build a strong foundation for your brand with custom logos, visual identities, and brand guidelines that reflect your values and help you stand out in a crowd. Includes brand discovery, concept development, and cohesive design systems built to ensure visual consistency across all touchpoints.",
    image: imgNutrireBrand,
  },
  {
    id: "02",
    name: "Social Media & Digital Ads",
    description:
      "Build a powerful online presence and reach new audiences with scroll-stopping content, platform-specific strategies, and data-driven digital ad campaigns. Covers creative asset production, campaign planning, paid ads, and performance-optimized visuals tailor-made for platforms like Instagram, LinkedIn, TikTok, and more.",
    image: imgPompeianAd,
  },
  {
    id: "03",
    name: "SEO & Content Marketing",
    description:
      "Boost your search rankings and drive long-term organic traffic with high-quality SEO-optimized content that is designed with your audience in mind. Services include keyword strategy, blog writing, content calendars, and on-page optimization designed to improve visibility and engagement.",
    image: imgForgeFlameBlog,
  },
  {
    id: "04",
    name: "Motion Graphics & Video",
    description:
      "Grab attention and tell your brand story with custom motion graphics and videos that elevate your message across every customer touchpoint. Projects range from animated explainers and product demos to social video ads and branded motion design for websites, presentations, and more.",
    image: imgTulsaInnovationLabs,
  },
  {
    id: "05",
    name: "Website Design & Coding",
    description:
      "Create a seamless user experience with professionally designed, responsive websites that combine strong visuals, user-friendly navigation, and clean, optimized code. Services cover everything from wireframes and UI design to front-end development, CMS integration, and performance optimization for speed and accessibility.",
    image: imgFortreumWebsite,
  },
  {
    id: "06",
    name: "Graphic Design & Illustration",
    description:
      "Enhance your brand's visual identity and make a lasting impression with custom graphics and illustrations crafted by top US-based creatives. Includes infographics, editorial art, icon sets, branded visuals, and custom illustrations designed to elevate your digital and print marketing assets.",
    image: imgNutrireBrand2,
  },
  {
    id: "07",
    name: "Account-Based Marketing",
    description:
      "Reach, engage, and convert your high-value accounts through hyper-personalized campaigns that align sales and marketing for maximum ROI. Includes targeted messaging, creative assets, and multi-touch strategies designed to connect with key decision-makers and drive meaningful engagement.",
    image: imgAtlanticusApp,
  },
  {
    id: "08",
    name: "Email Marketing Campaigns",
    description:
      "From automation to segmentation, increase engagement with targeted, email campaigns that nurture leads, re-engage customers, and drive consistent conversions. Get campaign strategy, copywriting, visual design, A/B testing, and performance tracking to optimize deliverability and click-through rates and meet your email marketing goals.",
    image: imgMimioCampaign,
  },
  {
    id: "09",
    name: "Marketing Audit & Strategy",
    description:
      "Eliminate bottlenecks and uncover growth opportunities with a comprehensive audit and a custom-built marketing strategy. Covers competitive analysis, audience targeting, and channel recommendations — designed to align resources and maximize long-term performance.",
    image: imgPrintmailBooth,
  },
  {
    id: "10",
    name: "Copy & Content Writing",
    description:
      "Get impactful copy that connects and converts — crafted to match your brand voice, meet your business goals, and move your audience to action. Copy & content writing services include website copy, ad headlines, product descriptions, email content, and long-form assets like blogs, whitepapers, and case studies.",
    image: imgAscentFitnessCopy,
  },
  {
    id: "11",
    name: "Mobile App Design & Coding",
    description:
      "Bring your mobile ideas to life with intuitive, user-centric app designs and expert development for iOS, Android, or cross-platform solutions. Services include UX/UI design, prototyping, front-end and back-end development, and testing for performance, functionality, and scalability.",
    image: imgNutshellApp,
  },
  {
    id: "12",
    name: "Presentation & Publication",
    description:
      "Turn slides, reports, and publications into polished, on-brand assets that communicate your message clearly and leave a lasting impression. Presentation & publication services include layout design, data visualization, and formatting for pitch decks, eBooks, whitepapers, and print or digital publications.",
    image: imgPropertySageApp,
  },
  {
    id: "13",
    name: "Marketing Collateral Design",
    description:
      "Get beautifully designed brochures, flyers, postcards, and more — designed to match your brand and support every stage of your customers' journeys. Services cover layout design, print-ready formatting, and campaign integration for digital and physical marketing materials.",
    image: imgOwnershipworksBillboard,
  },
  {
    id: "14",
    name: "Packaging & Label Design",
    description:
      "Turn heads in-store and online with packaging and label designs that blend creativity, clarity, and compliance. Packaging & label design services include everything from structural design and visual branding to production-ready files tailored for retail, DTC, and digital marketplaces.",
    image: imgLifelongpetsPackaging,
  },
];

// Placeholder for tabs without real photography yet
function PlaceholderImage() {
  return (
    <div className="h-[455px] relative rounded-[8px] shrink-0 w-full bg-[#f0f0f5]">
      <div className="absolute inset-0 rounded-[8px]" style={{ background: "linear-gradient(135deg, #e8e8ef 0%, #d0d0dc 100%)" }} />
      <div className="flex flex-col items-end justify-end size-full">
        <div className="content-stretch flex flex-col items-end justify-end p-[32px] relative size-full">
          <div className="bg-[#f1b71c] relative rounded-[71px] shrink-0">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[20px] py-[10px] relative size-full">
                <p className="font-inter font-semibold leading-[1.3] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Learn More</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Real photography panel for tabs with an assigned image
function DetailImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="h-[455px] relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8px]">
        <img alt={alt} className="absolute inset-0 max-w-none object-cover rounded-[8px] size-full" src={src} />
      </div>
      <div className="flex flex-col items-end justify-end size-full">
        <div className="content-stretch flex flex-col items-end justify-end p-[32px] relative size-full">
          <div className="bg-[#f1b71c] relative rounded-[71px] shrink-0">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[20px] py-[10px] relative size-full">
                <p className="font-inter font-semibold leading-[1.3] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Learn More</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const TRACK_LENGTH = 660; // matches h-[660px] container

// Chevron icon for accordion rows
function ChevronRight({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" height="12" viewBox="0 0 8 12" width="8">
      <path d="M1.5 11L6.5 6L1.5 1" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
}

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileOpen, setMobileOpen] = useState<number | null>(null);
  const activeService = services[activeIndex];

  // Scroll tracking for custom scrollbar thumb
  const scrollRef = useRef<HTMLDivElement>(null);
  const [thumbStyle, setThumbStyle] = useState({ top: 0, height: TRACK_LENGTH });

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } = el;
      const thumbH = Math.max(40, (clientHeight / scrollHeight) * TRACK_LENGTH);
      const maxScroll = scrollHeight - clientHeight;
      const thumbT = maxScroll > 0 ? (scrollTop / maxScroll) * (TRACK_LENGTH - thumbH) : 0;
      setThumbStyle({ top: thumbT, height: thumbH });
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    return () => el.removeEventListener("scroll", update);
  }, []);

  return (
    <section className="relative shrink-0 w-full" aria-label="Marketing services">
      <div className="flex flex-col items-center w-full">

        {/* ===== MOBILE LAYOUT (hidden on md+) ===== */}
        <div className="md:hidden content-stretch flex flex-col gap-[32px] items-start px-[20px] py-[48px] relative size-full bg-white">
          {/* Section header */}
          <p className="font-inter font-semibold leading-[40px] text-[32px] text-[#101636] text-center w-full">
            Our Marketing Services in Atlanta
          </p>

          {/* Accordion list */}
          <div className="flex flex-col gap-[8px] w-full">
            {services.map((service, i) => {
              const isOpen = mobileOpen === i;
              // Packaging & Label Design is index 13
              const isPackagingItem = i === 13;
              const expandedImg = isPackagingItem ? imgExpandedImage : imgExpandedImage1;

              if (isOpen) {
                return (
                  <div
                    key={service.id}
                    className="bg-[#f9f9fb] rounded-[16px] border border-[#e8e8ef] w-full overflow-hidden"
                  >
                    {/* Header row */}
                    <button
                      className="flex items-center gap-[12px] p-[16px] w-full text-left focus:outline-none"
                      onClick={() => setMobileOpen(null)}
                      aria-expanded={true}
                    >
                      <p className="font-open-sans font-normal leading-[20px] text-[14px] text-[#023456] shrink-0">
                        {service.id}
                      </p>
                      <p className="flex-1 font-inter font-semibold leading-[22px] text-[16px] text-[#101636]">
                        {service.name}
                      </p>
                      <ChevronRight className="shrink-0 text-[#101636] rotate-90" />
                    </button>

                    {/* Expanded content */}
                    <div className="px-[16px] pb-[16px] flex flex-col gap-[12px]">
                      <img
                        alt={service.name}
                        src={expandedImg}
                        className="h-[180px] w-full rounded-[8px] object-cover"
                      />
                      <p className="font-open-sans font-normal leading-[20px] text-[14px] text-[rgba(0,0,0,0.8)]">
                        {service.description}
                      </p>
                      <div className="flex">
                        <div className="bg-[#f1b71c] rounded-[71px]">
                          <div className="flex items-center justify-center px-[20px] py-[10px]">
                            <p className="font-inter font-semibold leading-[1.3] text-[16px] text-black whitespace-nowrap">
                              Learn More
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <button
                  key={service.id}
                  className="bg-white border border-[#e8e8ef] rounded-[12px] flex items-center gap-[12px] p-[16px] w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#023456]"
                  onClick={() => setMobileOpen(i)}
                  aria-expanded={false}
                >
                  <p className="font-open-sans font-normal leading-[20px] text-[14px] text-[#023456] shrink-0">
                    {service.id}
                  </p>
                  <p className="flex-1 font-open-sans font-normal leading-[26px] text-[16px] text-[#101636]">
                    {service.name}
                  </p>
                  <ChevronRight className="shrink-0 text-[#101636]" />
                </button>
              );
            })}
          </div>
        </div>

        {/* ===== DESKTOP LAYOUT (hidden below md) ===== */}
        <div className="hidden md:block w-full">
          <div className="bg-white content-stretch flex flex-col gap-[48px] items-center pb-[100px] pt-[80px] px-[60px] relative size-full">

            {/* ServicesHeadStack */}
            <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 text-center w-full">
              <p className="font-inter font-semibold leading-[1.2] not-italic relative shrink-0 text-[#023456] text-[52px] tracking-[-0.78px] w-full">
                Our Marketing Services in Atlanta
              </p>
              <p className="font-open-sans font-normal leading-[26px] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.8)] w-full">
                Get access to a full-service marketing team with expertise in:
              </p>
            </div>

            {/* TabsLayoutContainer */}
            <motion.div
              className="content-stretch flex gap-[40px] h-[660px] items-start relative shrink-0"
              initial={{}}
              animate={{}}
              transition={{}}
            >

              {/* ServicesTabsList — scrollable left column */}
              <div
                ref={scrollRef}
                className="content-stretch flex flex-col gap-[8px] h-[660px] items-start overflow-y-auto relative shrink-0 w-[470px]"
                role="tablist"
                aria-label="Service categories"
                style={{ scrollbarWidth: "none" }}
              >
                {services.map((service, i) => {
                  const isActive = i === activeIndex;
                  return (
                    <button
                      key={service.id}
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={`service-panel-${service.id}`}
                      id={`service-tab-${service.id}`}
                      onClick={() => setActiveIndex(i)}
                      className={`relative rounded-[12px] shrink-0 w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#023456] ${isActive ? "bg-[#f9f9fb]" : "bg-white"}`}
                    >
                      <div aria-hidden className="absolute border border-[#e8e8ef] border-solid inset-0 pointer-events-none rounded-[12px]" />
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
                          <p className="font-open-sans font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap">
                            {service.id}
                          </p>
                          <p className={`flex-[1_0_0] min-w-px overflow-hidden text-ellipsis whitespace-nowrap ${isActive ? "font-inter font-bold leading-[22px] not-italic text-[16px] text-black" : "font-open-sans font-normal leading-[26px] text-[16px] text-black"}`}>
                            {service.name}
                          </p>
                          <div className="overflow-clip relative shrink-0 size-[12px]">
                            <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4">
                              <div className="absolute inset-[-16.67%_-47.14%_-16.67%_-33.33%]">
                                <svg className="block size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 5.41421 8" width="5.41421">
                                  <path d="M1 7L4 4L1 1" stroke="black" strokeLinecap="round" strokeWidth="2" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
                {/* Gradient fade at bottom */}
                <div className="sticky bottom-0 left-0 right-0 h-[80px] pointer-events-none shrink-0 w-full" style={{ background: "linear-gradient(to top, white, transparent)" }} />
              </div>

              {/* Separator */}
              <div className="bg-[rgba(16,22,54,0.08)] h-[660px] overflow-clip relative rounded-[71px] shrink-0 w-[8px]">
                <div
                  className="absolute bg-[#023456] left-0 right-0 rounded-[71px]"
                  style={{ top: thumbStyle.top, height: thumbStyle.height }}
                />
              </div>

              {/* DetailsPanel */}
              <div
                id={`service-panel-${activeService.id}`}
                role="tabpanel"
                aria-labelledby={`service-tab-${activeService.id}`}
                className="bg-white content-stretch flex flex-col gap-[24px] items-start p-[20px] relative rounded-[20px] shrink-0 w-[762px]"
              >
                <div aria-hidden className="absolute border border-[#e8e8ef] border-solid inset-0 pointer-events-none rounded-[20px]" />

                {/* DetailImage */}
                {activeService.image ? (
                  <DetailImage src={activeService.image} alt={activeService.name} />
                ) : (
                  <PlaceholderImage />
                )}

                {/* SecondaryServiceRow */}
                <div className="relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
                    <p className="font-inter font-semibold leading-[1.2] not-italic relative shrink-0 text-[24px] text-black tracking-[-0.24px] w-full">
                      {activeService.name}
                    </p>
                    <p className="font-open-sans font-normal leading-[20px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.8)] w-full">
                      {activeService.description}
                    </p>
                  </div>
                </div>
              </div>

            </motion.div>

          </div>
        </div>
        {/* ↑ End desktop layout */}

      </div>
    </section>
  );
}
