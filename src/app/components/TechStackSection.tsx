import imgSeoToolImage from "../../imports/Section4MarketingServices/47b19056757c2321a067602f00026d813261f09c.png";
import imgSeoToolImage1 from "../../imports/Section4MarketingServices/4fbcc9be18cd24ce99bf13e0d2a812453a0c6b76.png";
import imgSeoToolImage2 from "../../imports/Section4MarketingServices/12065b414876e2d054a650effc168bbc7b8f58b4.png";
import imgSeoToolImage3 from "../../imports/Section4MarketingServices/a55ad16925430677f0692a24b0532d5384c184e8.png";
import imgDesignToolImage from "../../imports/Section4MarketingServices/2b136ecfdb28559e32d5cb3433e6e03ae884d786.png";
import imgDesignToolImage1 from "../../imports/Section4MarketingServices/898424ee7dcacbef56c20383af10c97b3e57a6dd.png";
import imgDesignToolImage2 from "../../imports/Section4MarketingServices/f772d8be6129a4d8647fcd09ad1560ea664595ff.png";
import imgDesignToolImage3 from "../../imports/Section4MarketingServices/6104378b85c550b347be1be72f3b085bdf53a3f2.png";
import imgDesignToolImage4 from "../../imports/Section4MarketingServices/270f57303628cd2f2bdcfa81da69a6d55fc462a1.png";
import imgDesignToolImage5 from "../../imports/Section4MarketingServices/10c8125ea4684ec7f3e42670bf35dee7c4a0bb99.png";
import imgDesignToolImage6 from "../../imports/Section4MarketingServices/76e914daa867010e74491ee2d6fe98ce6223f50b.png";
import imgDesignToolImage7 from "../../imports/Section4MarketingServices/f471a277dac516cfe5bf3e5700a2a2d891113bae.png";
import imgDesignToolImage8 from "../../imports/Section4MarketingServices/48d965ed463dcadedb12486d4913513c67fbdc6d.png";
import imgAnalyticsPlatformImage from "../../imports/Section4MarketingServices/6d8b7958b47d278ddd6d84ee567bc1c4bc1a5433.png";
import imgAnalyticsPlatformImage1 from "../../imports/Section4MarketingServices/db10969e53982fe15f0ed6a2296bd40506817992.png";
import imgAnalyticsPlatformImage2 from "../../imports/Section4MarketingServices/3ec8457318ae9d12d487f5805662a406d4c558b7.png";
import imgAnalyticsPlatformImage3 from "../../imports/Section4MarketingServices/889b5bdf613a8d587508a20dbbe0b64b1c5f8664.png";
import imgAnalyticsPlatformImage4 from "../../imports/Section4MarketingServices/0a1d29c2b01d2da3901e42b277ab78d2d5faaef8.png";
import imgAnalyticsPlatformImage5 from "../../imports/Section4MarketingServices/677b8b4627752103280b8c883aabd4d681e887a2.png";
import imgAnalyticsPlatformImage6 from "../../imports/Section4MarketingServices/4ed5e55c5fdb8597318696e916ad340c1471ec8a.png";
import imgCmsWebPlatformImage from "../../imports/Section4MarketingServices/455ac2c30809bf366aacdc88043b6889d7ce287e.png";
import imgCmsWebPlatformImage1 from "../../imports/Section4MarketingServices/add6d0adfd7de1ce253506dd1f0d983486ce1f0b.png";
import imgCmsWebPlatformImage2 from "../../imports/Section4MarketingServices/096c8f767beafcd02d6bb4f1c936eeac9e01fed2.png";
import imgCmsWebPlatformImage3 from "../../imports/Section4MarketingServices/045bf1c8485782240b97ea357f4cb1fc2f9db278.png";
import imgCommunicationPmImage from "../../imports/Section4MarketingServices/307234a1ab6bca3ce55b8b8bb6ef50ad953077dd.png";
import imgCommunicationPmImage1 from "../../imports/Section4MarketingServices/be144f8051fc459fd772943616c5f460a9837ded.png";
import imgCommunicationPmImage2 from "../../imports/Section4MarketingServices/c366dbb38a166ff6af486db936690cf36465fba9.png";
import imgCommunicationPmImage3 from "../../imports/Section4MarketingServices/d2900b85323f9255d582a39af1b58d1b34227925.png";
import imgCommunicationPmImage4 from "../../imports/Section4MarketingServices/4e5f5c2ce5438325a90463fc80de4c5adc9ad095.png";
import imgCommunicationPmImage5 from "../../imports/Section4MarketingServices/528019172853714e287298e234eeddf6be324fcc.png";
import imgPaidMediaPlatformImage from "../../imports/Section4MarketingServices/ab17e400f966f89721cc7547fdfc0a441a965e41.png";
import imgPaidMediaPlatformImage1 from "../../imports/Section4MarketingServices/2020dd580fcfdea896672bc41e58492540f42d84.png";
import imgPaidMediaPlatformImage2 from "../../imports/Section4MarketingServices/ce3c60dc5fc70c554051481d3ae3805fd18d5ec9.png";
import imgPaidMediaPlatformImage3 from "../../imports/Section4MarketingServices/bebfe1c35ec58cd7810997b73d383e32a73f6ad1.png";
import imgPaidMediaPlatformImage4 from "../../imports/Section4MarketingServices/ea89243e62063a320e76b9d0d0198a499aadb855.png";
import imgPaidMediaPlatformImage5 from "../../imports/Section4MarketingServices/37fff77f2d0e697266f54478be8416b0607426bf.png";
import imgPaidMediaPlatformImage6 from "../../imports/Section4MarketingServices/90f3603126062a8eacdb9e4a9d5632afc65a0489.png";

// Reusable sub-components matching reference layer structure

function ToolImg({ src, alt = "" }: { src: string; alt?: string }) {
  return (
    <div className="relative shrink-0 size-[160px]">
      <img alt={alt} className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={src} />
    </div>
  );
}

function Badge({ label }: { label: string }) {
  return (
    <div className="bg-white content-stretch flex items-start px-[16px] py-[8px] relative rounded-[6px] shrink-0">
      <div aria-hidden className="absolute border border-[#e8e8ef] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-open-sans font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap">{label}</p>
    </div>
  );
}

// --- SEO Tools card ---
function SeoCard() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[20px]">
      <div aria-hidden className="absolute border border-[#e8e8ef] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
        <p className="font-open-sans font-bold leading-[24px] relative shrink-0 text-[#023456] text-[16px] whitespace-nowrap">SEO Tools</p>
        {/* Images strip */}
        <div className="content-stretch flex gap-[12px] items-center overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] relative shrink-0 w-full">
          <div className="content-stretch flex items-center justify-center relative shrink-0 size-[160px]">
            <div className="h-[91.995px] relative shrink-0 w-[122.469px]">
              <img alt="Ahrefs" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSeoToolImage} />
            </div>
          </div>
          <ToolImg src={imgSeoToolImage1} alt="Semrush" />
          <div className="content-stretch flex items-center justify-center relative shrink-0 size-[160px]">
            <div className="relative shrink-0 size-[105.938px]">
              <img alt="Google Search Console" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSeoToolImage2} />
            </div>
          </div>
          <ToolImg src={imgSeoToolImage3} alt="Google Keyword Planner" />
        </div>
        {/* Badges */}
        <div className="flex gap-[8px] items-start overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] relative shrink-0 w-full">
          <Badge label="Ahrefs" />
          <Badge label="Semrush" />
          <Badge label="Google Search Console" />
          <Badge label="Google Keyword Planner" />
        </div>
      </div>
    </div>
  );
}

// --- Design Tools card ---
function DesignCard() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[20px]">
      <div aria-hidden className="absolute border border-[#e8e8ef] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
        <p className="font-open-sans font-bold leading-[24px] relative shrink-0 text-[#023456] text-[16px] whitespace-nowrap">Design Tools</p>
        {/* Images strip */}
        <div className="content-stretch flex gap-[12px] items-center overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] relative shrink-0 w-full">
          <ToolImg src={imgDesignToolImage} alt="Adobe Suite" />
          <ToolImg src={imgDesignToolImage1} alt="Figma" />
          <ToolImg src={imgDesignToolImage2} alt="Canva" />
          <ToolImg src={imgDesignToolImage3} alt="Framer" />
          <div className="content-stretch flex items-center justify-center relative shrink-0 size-[160px]">
            <div className="h-[34.388px] relative shrink-0 w-[138.977px]">
              <img alt="Google Suite" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDesignToolImage4} />
            </div>
          </div>
          <ToolImg src={imgDesignToolImage5} alt="PowerPoint" />
          <ToolImg src={imgDesignToolImage6} alt="Sketch" />
          <ToolImg src={imgDesignToolImage7} alt="Midjourney" />
          <ToolImg src={imgDesignToolImage8} alt="DALL-E" />
        </div>
        {/* Badges */}
        <div className="content-stretch flex gap-[8px] items-start overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] relative shrink-0 w-full">
          <Badge label="Adobe Suite" />
          <Badge label="Figma" />
          <Badge label="Canva" />
          <Badge label="Framer" />
          <Badge label="Google Suite" />
          <Badge label="PowerPoint" />
          <Badge label="Sketch" />
          <Badge label="Midjourney" />
          <Badge label="DALL-E" />
        </div>
      </div>
    </div>
  );
}

// --- Analytics Platforms card ---
function AnalyticsCard() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[20px]">
      <div aria-hidden className="absolute border border-[#e8e8ef] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
        <p className="font-open-sans font-bold leading-[24px] relative shrink-0 text-[#023456] text-[16px] whitespace-nowrap">Analytics Platforms</p>
        {/* Images strip */}
        <div className="content-stretch flex gap-[12px] items-center overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] relative shrink-0 w-full">
          <div className="content-stretch flex items-center justify-center relative shrink-0 size-[160px]">
            <div className="h-[85.871px] relative shrink-0 w-[75.137px]">
              <img alt="Google Analytics" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAnalyticsPlatformImage} />
            </div>
          </div>
          <ToolImg src={imgAnalyticsPlatformImage1} alt="GA4" />
          <ToolImg src={imgAnalyticsPlatformImage2} alt="HubSpot" />
          <ToolImg src={imgAnalyticsPlatformImage3} alt="Tableau" />
          <ToolImg src={imgAnalyticsPlatformImage4} alt="Looker Studio" />
          <ToolImg src={imgAnalyticsPlatformImage5} alt="Domo" />
          <ToolImg src={imgAnalyticsPlatformImage6} alt="Power BI" />
        </div>
        {/* Badges */}
        <div className="flex gap-[8px] items-start overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] relative shrink-0 w-full">
          <Badge label="Google Analytics" />
          <Badge label="GA4" />
          <Badge label="HubSpot" />
          <Badge label="Tableau" />
          <Badge label="Looker Studio" />
          <Badge label="Domo" />
          <Badge label="Power BI" />
        </div>
      </div>
    </div>
  );
}

// --- CMS & Web Platforms card ---
function CmsCard() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[20px]">
      <div aria-hidden className="absolute border border-[#e8e8ef] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
        <p className="font-open-sans font-bold leading-[24px] relative shrink-0 text-[#023456] text-[16px] whitespace-nowrap">CMS &amp; Web Platforms</p>
        {/* Images strip */}
        <div className="content-stretch flex gap-[12px] items-center overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] relative shrink-0 w-full">
          <ToolImg src={imgCmsWebPlatformImage} alt="Webflow" />
          <ToolImg src={imgCmsWebPlatformImage1} alt="WordPress" />
          <ToolImg src={imgCmsWebPlatformImage2} alt="Shopify" />
          <ToolImg src={imgCmsWebPlatformImage3} alt="Wix" />
        </div>
        {/* Badges */}
        <div className="flex gap-[8px] items-start overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] relative shrink-0 w-full">
          <Badge label="Webflow" />
          <Badge label="WordPress" />
          <Badge label="Shopify" />
          <Badge label="Wix" />
        </div>
      </div>
    </div>
  );
}

// --- Communication & PM card ---
function CommCard() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[20px]">
      <div aria-hidden className="absolute border border-[#e8e8ef] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
        <p className="font-open-sans font-bold leading-[24px] relative shrink-0 text-[#023456] text-[16px] whitespace-nowrap">Communication &amp; PM</p>
        {/* Images strip */}
        <div className="content-stretch flex gap-[12px] items-center overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] relative shrink-0 w-full">
          <ToolImg src={imgCommunicationPmImage} alt="Slack" />
          <ToolImg src={imgCommunicationPmImage1} alt="Zoom" />
          <ToolImg src={imgCommunicationPmImage2} alt="Meets" />
          <ToolImg src={imgCommunicationPmImage3} alt="Miro" />
          <ToolImg src={imgCommunicationPmImage4} alt="Asana" />
          <ToolImg src={imgCommunicationPmImage5} alt="ClickUp" />
        </div>
        {/* Badges */}
        <div className="flex gap-[8px] items-start overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] relative shrink-0 w-full">
          <Badge label="Slack" />
          <Badge label="Zoom" />
          <Badge label="Meets" />
          <Badge label="Miro" />
          <Badge label="Asana" />
          <Badge label="ClickUp" />
        </div>
      </div>
    </div>
  );
}

// --- Paid Media Platforms card ---
function PaidMediaCard() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[20px]">
      <div aria-hidden className="absolute border border-[#e8e8ef] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
        <p className="font-open-sans font-bold leading-[24px] relative shrink-0 text-[#023456] text-[16px] whitespace-nowrap">Paid Media Platforms</p>
        {/* Images strip */}
        <div className="content-stretch flex gap-[12px] items-center overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] relative shrink-0 w-full">
          <ToolImg src={imgPaidMediaPlatformImage} alt="Google Ads" />
          <ToolImg src={imgPaidMediaPlatformImage1} alt="LinkedIn Ads" />
          <ToolImg src={imgPaidMediaPlatformImage2} alt="Meta Ads" />
          <div className="content-stretch flex items-center justify-center relative shrink-0 size-[160px]">
            <div className="h-[75.278px] relative shrink-0 w-[64.516px]">
              <img alt="TikTok Ads" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPaidMediaPlatformImage3} />
            </div>
          </div>
          <ToolImg src={imgPaidMediaPlatformImage4} alt="Twitter (X) Ads" />
          <ToolImg src={imgPaidMediaPlatformImage5} alt="Reddit Ads" />
          <ToolImg src={imgPaidMediaPlatformImage6} alt="Programmatic" />
        </div>
        {/* Badges */}
        <div className="content-stretch flex gap-[8px] items-start overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] relative shrink-0 w-full">
          <Badge label="Google Ads" />
          <Badge label="LinkedIn Ads" />
          <Badge label="Meta Ads" />
          <Badge label="TikTok Ads" />
          <Badge label="Twitter (X) Ads" />
          <Badge label="Reddit Ads" />
          <Badge label="Programmatic" />
        </div>
      </div>
    </div>
  );
}

// Mobile tool category row with horizontal scroll
function MobileToolCategory({ label, images }: { label: string; images: { src: string; alt: string }[] }) {
  return (
    <div className="flex flex-col gap-[12px]">
      <p className="font-inter font-bold text-[14px] text-[#101636]">{label}</p>
      <div className="flex gap-[4px] items-center overflow-x-auto [&::-webkit-scrollbar]:hidden -mx-[20px] px-[20px]">
        {images.map(({ src, alt }) => (
          <img key={src} className="shrink-0 size-[90px] object-contain" src={src} alt={alt} />
        ))}
      </div>
    </div>
  );
}

export function TechStackSection() {
  return (
    <section className="bg-white relative shrink-0 w-full" aria-label="Our tech stack and tools">

      {/* Mobile layout — visible only below md breakpoint */}
      <div className="md:hidden bg-white flex flex-col gap-[32px] px-[20px] py-[48px]">
        <h2 className="font-inter font-semibold text-[32px] leading-[40px] text-[#101636] w-full">
          Our Marketing Tech Stack for Atlanta Businesses
        </h2>
        <p className="text-[14px] text-[rgba(0,0,0,0.8)] leading-[20px] w-full">
          We integrate seamlessly with your existing tools to streamline collaboration, campaign delivery, and performance tracking, using (but not limited to) the following platforms:
        </p>
        <div className="flex flex-col gap-[24px]">
          <MobileToolCategory
            label="SEO Tools"
            images={[
              { src: imgSeoToolImage, alt: "Ahrefs" },
              { src: imgSeoToolImage1, alt: "Semrush" },
              { src: imgSeoToolImage2, alt: "Google Search Console" },
              { src: imgSeoToolImage3, alt: "Google Keyword Planner" },
            ]}
          />
          <MobileToolCategory
            label="Design Tools"
            images={[
              { src: imgDesignToolImage, alt: "Adobe Suite" },
              { src: imgDesignToolImage1, alt: "Figma" },
              { src: imgDesignToolImage2, alt: "Canva" },
              { src: imgDesignToolImage3, alt: "Framer" },
              { src: imgDesignToolImage4, alt: "Google Suite" },
              { src: imgDesignToolImage5, alt: "PowerPoint" },
              { src: imgDesignToolImage6, alt: "Sketch" },
              { src: imgDesignToolImage7, alt: "Midjourney" },
              { src: imgDesignToolImage8, alt: "DALL-E" },
            ]}
          />
          <MobileToolCategory
            label="Analytics Platforms"
            images={[
              { src: imgAnalyticsPlatformImage, alt: "Google Analytics" },
              { src: imgAnalyticsPlatformImage1, alt: "GA4" },
              { src: imgAnalyticsPlatformImage2, alt: "HubSpot" },
              { src: imgAnalyticsPlatformImage3, alt: "Tableau" },
              { src: imgAnalyticsPlatformImage4, alt: "Looker Studio" },
              { src: imgAnalyticsPlatformImage5, alt: "Domo" },
              { src: imgAnalyticsPlatformImage6, alt: "Power BI" },
            ]}
          />
          <MobileToolCategory
            label="CMS & Web Platforms"
            images={[
              { src: imgCmsWebPlatformImage, alt: "Webflow" },
              { src: imgCmsWebPlatformImage1, alt: "WordPress" },
              { src: imgCmsWebPlatformImage2, alt: "Shopify" },
              { src: imgCmsWebPlatformImage3, alt: "Wix" },
            ]}
          />
          <MobileToolCategory
            label="Communication & PM"
            images={[
              { src: imgCommunicationPmImage, alt: "Slack" },
              { src: imgCommunicationPmImage1, alt: "Zoom" },
              { src: imgCommunicationPmImage2, alt: "Meets" },
              { src: imgCommunicationPmImage3, alt: "Miro" },
              { src: imgCommunicationPmImage4, alt: "Asana" },
              { src: imgCommunicationPmImage5, alt: "ClickUp" },
            ]}
          />
          <MobileToolCategory
            label="Paid Media Platforms"
            images={[
              { src: imgPaidMediaPlatformImage, alt: "Google Ads" },
              { src: imgPaidMediaPlatformImage1, alt: "LinkedIn Ads" },
              { src: imgPaidMediaPlatformImage2, alt: "Meta Ads" },
              { src: imgPaidMediaPlatformImage3, alt: "TikTok Ads" },
              { src: imgPaidMediaPlatformImage4, alt: "Twitter (X) Ads" },
              { src: imgPaidMediaPlatformImage5, alt: "Reddit Ads" },
              { src: imgPaidMediaPlatformImage6, alt: "Programmatic" },
            ]}
          />
        </div>
      </div>

      {/* Desktop layout — hidden on mobile, visible md and up */}
      <div className="hidden md:block">
        <div className="bg-white content-stretch flex flex-col gap-[80px] items-center px-[60px] py-[120px] relative w-full">

          {/* Frame — two-column heading row */}
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            <h2 className="font-inter font-semibold leading-[52px] not-italic relative shrink-0 text-[#101636] text-[44px] tracking-[-0.44px] w-[610.434px]">
              Our Marketing Tech Stack for Atlanta Businesses
            </h2>
            <p className="font-open-sans font-normal leading-[26px] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.8)] w-[487.641px]">
              We integrate seamlessly with your existing tools to streamline collaboration, campaign delivery, and performance tracking, using (but not limited to) the following platforms:
            </p>
          </div>

          {/* Frame1 — 3 rows × 2 columns card grid */}
          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
            {/* Row 1: SEO + Design */}
            <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
              <SeoCard />
              <DesignCard />
            </div>
            {/* Row 2: Analytics + CMS */}
            <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
              <AnalyticsCard />
              <CmsCard />
            </div>
            {/* Row 3: Comm & PM + Paid Media */}
            <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
              <CommCard />
              <PaidMediaCard />
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
