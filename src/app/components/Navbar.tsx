import { useState } from "react";
import svgPaths from "../../imports/Desktop1440Px/svg-66s18btp46";

function DesignityLogo() {
  return (
    <div className="h-[38px] w-[84px] md:h-[51px] md:w-[113px] overflow-clip relative shrink-0">
      <div className="absolute inset-[9.19%_67.67%_0_0]">
        <svg className="absolute block inset-0 size-full" fill="none" height="46.3115" preserveAspectRatio="none" viewBox="0 0 36.5285 46.3115" width="36.5285">
          <path d={svgPaths.p2811a600} fill="#F1B71C" />
        </svg>
      </div>
      <div className="absolute inset-[0_64.16%_52.43%_14.27%]">
        <svg className="absolute block inset-0 size-full" fill="none" height="24.2599" preserveAspectRatio="none" viewBox="0 0 24.3776 24.2599" width="24.3776">
          <path d={svgPaths.p2412a300} fill="black" />
        </svg>
      </div>
      <div className="absolute inset-[46.43%_80.79%_21.62%_6.46%]">
        <svg className="absolute block inset-0 size-full" fill="none" height="16.2939" preserveAspectRatio="none" viewBox="0 0 14.4093 16.2939" width="14.4093">
          <path d={svgPaths.p2141bd80} fill="black" />
        </svg>
      </div>
      <div className="absolute inset-[55.13%_68.9%_21.23%_20.36%]">
        <svg className="absolute block inset-0 size-full" fill="none" height="12.057" preserveAspectRatio="none" viewBox="0 0 12.134 12.057" width="12.134">
          <path d={svgPaths.pc0c9500} fill="black" />
        </svg>
      </div>
      <div className="absolute inset-[55.09%_58.56%_21.26%_32.26%]">
        <svg className="absolute block inset-0 size-full" fill="none" height="12.057" preserveAspectRatio="none" viewBox="0 0 10.3661 12.057" width="10.3661">
          <path d={svgPaths.p2fcc9880} fill="black" />
        </svg>
      </div>
      <div className="absolute inset-[55.88%_53.68%_21.65%_43.13%]">
        <svg className="absolute block inset-0 size-full" fill="none" height="11.4605" preserveAspectRatio="none" viewBox="0 0 3.61179 11.4605" width="3.61179">
          <path d={svgPaths.p22c51800} fill="black" />
        </svg>
      </div>
      <div className="absolute inset-[45.26%_53.29%_46.04%_42.75%]">
        <svg className="absolute block inset-0 size-full" fill="none" height="4.4357" preserveAspectRatio="none" viewBox="0 0 4.47886 4.4357" width="4.47886">
          <path d={svgPaths.p1c3e0900} fill="black" />
        </svg>
      </div>
      <div className="absolute inset-[55.88%_23.94%_21.65%_72.87%]">
        <svg className="absolute block inset-0 size-full" fill="none" height="11.4605" preserveAspectRatio="none" viewBox="0 0 3.61179 11.4605" width="3.61179">
          <path d={svgPaths.p9da6af0} fill="black" />
        </svg>
      </div>
      <div className="absolute inset-[45.26%_23.55%_46.04%_72.48%]">
        <svg className="absolute block inset-0 size-full" fill="none" height="4.4357" preserveAspectRatio="none" viewBox="0 0 4.47886 4.4357" width="4.47886">
          <path d={svgPaths.p33306200} fill="black" />
        </svg>
      </div>
      <div className="absolute inset-[55.38%_41.23%_11.78%_47.94%]">
        <svg className="absolute block inset-0 size-full" fill="none" height="16.7455" preserveAspectRatio="none" viewBox="0 0 12.2416 16.7455" width="12.2416">
          <path d={svgPaths.pb727f0} fill="black" />
        </svg>
      </div>
      <div className="absolute inset-[55.27%_29.05%_21.62%_60.77%]">
        <svg className="absolute block inset-0 size-full" fill="none" height="11.7862" preserveAspectRatio="none" viewBox="0 0 11.5021 11.7862" width="11.5021">
          <path d={svgPaths.p24d0cdf0} fill="black" />
        </svg>
      </div>
      <div className="absolute inset-[48.99%_14.88%_21.65%_77.81%]">
        <svg className="absolute block inset-0 size-full" fill="none" height="14.9728" preserveAspectRatio="none" viewBox="0 0 8.27005 14.9728" width="8.27005">
          <path d={svgPaths.p3f1d5e00} fill="black" />
        </svg>
      </div>
      <div className="absolute inset-[55.7%_2.87%_11.82%_86.32%]">
        <svg className="absolute block inset-0 size-full" fill="none" height="16.5657" preserveAspectRatio="none" viewBox="0 0 12.212 16.5657" width="12.212">
          <path d={svgPaths.pd522500} fill="black" />
        </svg>
      </div>
      <div className="absolute inset-[78.77%_0_11.99%_95.85%]">
        <svg className="absolute block inset-0 size-full" fill="none" height="4.70849" preserveAspectRatio="none" viewBox="0 0 4.69612 4.70849" width="4.69612">
          <path d={svgPaths.p2afb3e00} fill="black" />
        </svg>
      </div>
    </div>
  );
}

export function Navbar() {
  const navItems = ["Company", "Services", "Portfolio", "Pricing", "Resources"];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function scrollToDemo() {
    setMobileMenuOpen(false);
    document.getElementById("cta-demo")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav className="bg-white relative shrink-0 w-full border-b border-[#e6e6e6]" aria-label="Main navigation">
      {/* Mobile header — logo + hamburger */}
      <div className="flex md:hidden items-center justify-between h-[60px] px-[20px]">
        <a href="#" aria-label="Designity home" className="relative shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f1b71c] rounded">
          <DesignityLogo />
        </a>
        <button
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav-menu"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f1b71c] rounded"
        >
          {mobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6L18 18" stroke="#101636" strokeWidth="2" strokeLinecap="round" />
              <path d="M18 6L6 18" stroke="#101636" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M3 6h18" stroke="#101636" strokeWidth="2" strokeLinecap="round" />
              <path d="M3 12h18" stroke="#101636" strokeWidth="2" strokeLinecap="round" />
              <path d="M3 18h18" stroke="#101636" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu panel */}
      {mobileMenuOpen && (
        <div id="mobile-nav-menu" className="md:hidden flex flex-col gap-[4px] px-[20px] pb-[20px] border-t border-[#e6e6e6] pt-[12px]">
          {navItems.map((item) => (
            <button
              key={item}
              className="text-left px-[12px] py-[10px] font-open-sans text-[16px] text-black leading-[20px] hover:opacity-70 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f1b71c] rounded"
            >
              {item}
            </button>
          ))}
          <button
            onClick={scrollToDemo}
            className="mt-[12px] w-full bg-[#f1b71c] rounded-[71px] px-[20px] py-[10px] font-inter font-semibold text-[16px] text-black leading-[1.3] hover:bg-[#d9a519] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#023456] focus-visible:ring-offset-2"
          >
            Get Your 2-Week Trial
          </button>
        </div>
      )}

      {/* Desktop header — full nav */}
      <div className="hidden md:flex items-center justify-between px-[60px] py-[16px]">
        <a href="#" aria-label="Designity home" className="relative shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f1b71c] rounded">
          <DesignityLogo />
        </a>
        <div className="flex gap-[20px] items-center">
          <div className="flex gap-[4px] items-center">
            {navItems.map((item) => (
              <div key={item} className="relative">
                <button
                  className="flex gap-[6px] items-center px-[12px] py-[8px] font-open-sans text-[14px] text-black leading-[20px] hover:opacity-70 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f1b71c] rounded"
                >
                  {item}
                  <svg width="8" height="10" viewBox="0 0 8.10064 10" fill="none" aria-hidden="true" className="shrink-0">
                    <path d="M0 10V0L8.10064 5L0 10Z" fill="#F1B71C" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={scrollToDemo}
            className="bg-[#f1b71c] rounded-[71px] px-[20px] py-[10px] font-inter font-semibold text-[16px] text-black leading-[1.3] whitespace-nowrap hover:bg-[#d9a519] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#023456] focus-visible:ring-offset-2"
          >
            Get Your 2-Week Trial
          </button>
        </div>
      </div>
    </nav>
  );
}
