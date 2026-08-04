import svgPaths from "./svg-qdogtq4n1m";
import imgChatGptImageJun182025112347Pm1 from "./b61c77c79b6ca654a05846df69b14d6a52814c7b.png";

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
type SocialIconsProps = {
  className?: string;
  type?: "Linkedin" | "Youtube" | "Instagram" | "Facebook" | "Tik Tok" | "Behance" | "X";
};

function SocialIcons({ className, type = "Linkedin" }: SocialIconsProps) {
  const isTikTok = type === "Tik Tok";
  return (
    <div className={className || "bg-[#f1b71c] relative rounded-[58px] size-[40px]"}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center relative size-full">
          {["Linkedin", "Youtube", "Instagram", "Facebook", "Tik Tok"].includes(type) && (
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Social icon">
              {["Facebook", "Tik Tok"].includes(type) && (
                <div className={`absolute ${isTikTok ? "inset-[0_6.25%_0_8.33%]" : "inset-[0_0_0.61%_0]"}`} data-name="Vector">
                  <svg className="absolute block inset-0 size-full" fill="none" height={isTikTok ? "24" : "23.8542"} preserveAspectRatio="none" viewBox={isTikTok ? "0 0 20.5 24" : "0 0 24 23.8542"} width={isTikTok ? "20.5" : "24"}>
                    <path d={isTikTok ? svgPaths.pc63ad00 : svgPaths.p2334f790} fill="#101636" id="Vector" />
                  </svg>
                </div>
              )}
              {type === "Linkedin" && (
                <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
                  <g id="Group">
                    <path d={svgPaths.p2ccee40} fill="#101636" id="Vector" />
                  </g>
                </svg>
              )}
              {type === "Youtube" && (
                <div className="absolute inset-[14.82%_0_14.84%_0]" data-name="Lozenge">
                  <svg className="absolute block inset-0 size-full" fill="none" height="16.8797" preserveAspectRatio="none" viewBox="0 0 24 16.8797" width="24">
                    <g id="Lozenge">
                      <path d={svgPaths.p3b8c1c00} fill="#101636" id="Vector" />
                    </g>
                  </svg>
                </div>
              )}
              {type === "Instagram" && (
                <div className="absolute inset-[0_0.06%_0.02%_0]" data-name="Group">
                  <svg className="absolute block inset-0 size-full" fill="none" height="23.9953" preserveAspectRatio="none" viewBox="0 0 23.9859 23.9953" width="23.9859">
                    <g id="Group">
                      <path d={svgPaths.pe5f40} fill="#101636" id="Vector" />
                      <path d={svgPaths.p90dcd40} fill="#101636" id="Vector_2" />
                      <path d={svgPaths.p36893400} fill="#101636" id="Vector_3" />
                    </g>
                  </svg>
                </div>
              )}
            </div>
          )}
          {type === "Behance" && (
            <div className="h-[14.796px] relative shrink-0 w-[22.956px]">
              <svg className="absolute block inset-0 size-full" fill="none" height="14.7962" preserveAspectRatio="none" viewBox="0 0 22.9558 14.7962" width="22.9558">
                <g id="Group 4">
                  <path d={svgPaths.pabb1c00} fill="#101636" id="Subtract" />
                  <path d={svgPaths.p341b4700} fill="#101636" id="Subtract_2" />
                  <path d={svgPaths.p297e6980} fill="#101636" id="Vector" />
                </g>
              </svg>
            </div>
          )}
          {type === "X" && (
            <div className="h-[23.685px] relative shrink-0 w-[23.126px]" data-name="Subtract">
              <svg className="absolute block inset-0 size-full" fill="none" height="23.6847" preserveAspectRatio="none" viewBox="0 0 23.126 23.6847" width="23.126">
                <path d={svgPaths.p1a613c00} fill="#101636" id="Subtract" />
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Footer({ className }: { className?: string }) {
  return (
    <div className={className || "h-[748px] relative w-[1440px]"} data-name="Footer">
      <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start justify-end relative size-full">
          <div className="absolute flex h-[2161.813px] items-center justify-center left-[-431.77px] top-[-608.71px] w-[2330.197px]">
            <div className="-rotate-120 flex-none">
              <div className="h-[1874.207px] relative w-[1414.173px]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="1874.21" preserveAspectRatio="none" viewBox="0 0 1414.17 1874.21" width="1414.17">
                  <path d={svgPaths.p370c6500} fill="#F9F9FB" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Footer">
            <div className="relative shrink-0 w-full" data-name="Content">
              <div className="content-stretch flex flex-col gap-[64px] items-start pb-[40px] pt-[80px] px-[80px] relative size-full">
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Header Row">
                  <div className="relative shrink-0" data-name="Designity Logo">
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex items-center relative size-full">
                        <div className="h-[74.366px] overflow-clip relative shrink-0 w-[164.771px]" data-name="Designity Logo">
                          <div className="absolute inset-[9.19%_67.67%_0_0]" data-name="O.SHAPE">
                            <svg className="absolute block inset-0 size-full" fill="none" height="67.5294" preserveAspectRatio="none" viewBox="0 0 53.2642 67.5294" width="53.2642">
                              <g id="O.SHAPE">
                                <path d={svgPaths.p25eaa600} fill="#F1B71C" id="Vector" />
                              </g>
                            </svg>
                          </div>
                          <div className="absolute inset-[0_64.16%_52.43%_14.27%]" data-name="CIRCLE">
                            <svg className="absolute block inset-0 size-full" fill="none" height="35.3747" preserveAspectRatio="none" viewBox="0 0 35.5463 35.3747" width="35.5463">
                              <g id="CIRCLE">
                                <path d={svgPaths.p195fbc00} fill="black" id="Vector" />
                              </g>
                            </svg>
                          </div>
                          <div className="absolute inset-[46.43%_80.79%_21.62%_6.46%]" data-name="D">
                            <svg className="absolute block inset-0 size-full" fill="none" height="23.759" preserveAspectRatio="none" viewBox="0 0 21.011 23.759" width="21.011">
                              <g id="D">
                                <path d={svgPaths.p17028b40} fill="black" id="Vector" />
                              </g>
                            </svg>
                          </div>
                          <div className="absolute inset-[55.13%_68.9%_21.23%_20.36%]" data-name="e">
                            <svg className="absolute block inset-0 size-full" fill="none" height="17.581" preserveAspectRatio="none" viewBox="0 0 17.6932 17.581" width="17.6932">
                              <g id="e">
                                <path d={svgPaths.pc083a00} fill="black" id="Vector" />
                              </g>
                            </svg>
                          </div>
                          <div className="absolute inset-[55.09%_58.56%_21.26%_32.26%]" data-name="s">
                            <svg className="absolute block inset-0 size-full" fill="none" height="17.581" preserveAspectRatio="none" viewBox="0 0 15.1154 17.581" width="15.1154">
                              <g id="s">
                                <path d={svgPaths.p25d80000} fill="black" id="Vector" />
                              </g>
                            </svg>
                          </div>
                          <div className="absolute inset-[55.88%_53.68%_21.65%_43.13%]" data-name="i">
                            <svg className="absolute block inset-0 size-full" fill="none" height="16.7111" preserveAspectRatio="none" viewBox="0 0 5.26655 16.7111" width="5.26655">
                              <g id="i">
                                <path d={svgPaths.p41345f0} fill="black" id="Vector" />
                              </g>
                            </svg>
                          </div>
                          <div className="absolute inset-[45.26%_53.29%_46.04%_42.75%]" data-name="_.">
                            <svg className="absolute block inset-0 size-full" fill="none" height="6.46793" preserveAspectRatio="none" viewBox="0 0 6.53087 6.46793" width="6.53087">
                              <g id="_.">
                                <path d={svgPaths.pe8b01b2} fill="black" id="Vector" />
                              </g>
                            </svg>
                          </div>
                          <div className="absolute inset-[55.88%_23.94%_21.65%_72.87%]" data-name="i-2">
                            <svg className="absolute block inset-0 size-full" fill="none" height="16.7111" preserveAspectRatio="none" viewBox="0 0 5.26655 16.7111" width="5.26655">
                              <g id="i-2">
                                <path d={svgPaths.p11c58800} fill="black" id="Vector" />
                              </g>
                            </svg>
                          </div>
                          <div className="absolute inset-[45.26%_23.55%_46.04%_72.48%]" data-name="_.-2">
                            <svg className="absolute block inset-0 size-full" fill="none" height="6.46793" preserveAspectRatio="none" viewBox="0 0 6.53087 6.46793" width="6.53087">
                              <g id="_.-2">
                                <path d={svgPaths.p38687680} fill="black" id="Vector" />
                              </g>
                            </svg>
                          </div>
                          <div className="absolute inset-[55.38%_41.23%_11.78%_47.94%]" data-name="G">
                            <svg className="absolute block inset-0 size-full" fill="none" height="24.4176" preserveAspectRatio="none" viewBox="0 0 17.8502 24.4176" width="17.8502">
                              <g id="G">
                                <path d={svgPaths.p2893fe40} fill="black" id="Vector" />
                              </g>
                            </svg>
                          </div>
                          <div className="absolute inset-[55.27%_29.05%_21.62%_60.77%]" data-name="n">
                            <svg className="absolute block inset-0 size-full" fill="none" height="17.1861" preserveAspectRatio="none" viewBox="0 0 16.7719 17.1861" width="16.7719">
                              <g id="n">
                                <path d={svgPaths.p4e7900} fill="black" id="Vector" />
                              </g>
                            </svg>
                          </div>
                          <div className="absolute inset-[48.99%_14.88%_21.65%_77.81%]" data-name="t">
                            <svg className="absolute block inset-0 size-full" fill="none" height="21.8327" preserveAspectRatio="none" viewBox="0 0 12.059 21.8327" width="12.059">
                              <g id="t">
                                <path d={svgPaths.p2afff200} fill="black" id="Vector" />
                              </g>
                            </svg>
                          </div>
                          <div className="absolute inset-[55.7%_2.87%_11.82%_86.32%]" data-name="y">
                            <svg className="absolute block inset-0 size-full" fill="none" height="24.1553" preserveAspectRatio="none" viewBox="0 0 17.807 24.1553" width="17.807">
                              <g id="y">
                                <path d={svgPaths.p383d9a80} fill="black" id="Vector" />
                              </g>
                            </svg>
                          </div>
                          <div className="absolute inset-[78.77%_0_11.99%_95.85%]" data-name="R">
                            <svg className="absolute block inset-0 size-full" fill="none" height="6.86571" preserveAspectRatio="none" viewBox="0 0 6.84768 6.86571" width="6.84768">
                              <g id="R">
                                <path d={svgPaths.p27dbae40} fill="black" id="Vector" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex gap-[40px] items-start relative shrink-0 w-full" data-name="Link Columns">
                  <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative self-stretch whitespace-nowrap" data-name="Col-Company">
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.3] not-italic relative shrink-0 text-[16px] text-black">Company</p>
                    <div className="content-stretch flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal gap-[12px] items-start leading-[20px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.8)] w-full" data-name="Frame">
                      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Our Story
                      </p>
                      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
                        The Team
                      </p>
                      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Portfolio
                      </p>
                      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Case Studies
                      </p>
                      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Careers
                      </p>
                      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Press
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#e8e8ef] relative self-stretch shrink-0 w-px" data-name="Divider-1" />
                  <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative self-stretch whitespace-nowrap" data-name="Col-Clients">
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.3] not-italic relative shrink-0 text-[16px] text-black">For Clients</p>
                    <div className="content-stretch flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal gap-[12px] items-start leading-[20px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.8)] w-full" data-name="Frame">
                      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Login as Clients
                      </p>
                      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Book Your Demo
                      </p>
                      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Services
                      </p>
                      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Pricing
                      </p>
                      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Compare Us
                      </p>
                      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
                        For Agencies
                      </p>
                      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
                        For Enterprises
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#e8e8ef] relative self-stretch shrink-0 w-px" data-name="Divider-2" />
                  <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative self-stretch whitespace-nowrap" data-name="Col-Creatives">
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.3] not-italic relative shrink-0 text-[16px] text-black">For Creatives</p>
                    <div className="content-stretch flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal gap-[12px] items-start leading-[20px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.8)] w-full" data-name="Frame">
                      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Login as Creatives
                      </p>
                      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Create with Us
                      </p>
                      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Join as a Creative Director
                      </p>
                      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Join as a Creative
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#e8e8ef] relative self-stretch shrink-0 w-px" data-name="Divider-3" />
                  <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative self-stretch whitespace-nowrap" data-name="Col-Resources">
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.3] not-italic relative shrink-0 text-[16px] text-black">Resources</p>
                    <div className="content-stretch flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal gap-[12px] items-start leading-[20px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.8)] w-full" data-name="Frame">
                      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Blog
                      </p>
                      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Testimonials
                      </p>
                      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Referral Program
                      </p>
                      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
                        FAQ
                      </p>
                      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Call: +1 (917) 634-3407
                      </p>
                      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Support@designity.com
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Social Row">
                  <SocialIcons className="bg-[#f1b71c] relative rounded-[58px] shrink-0 size-[40px]" />
                  <SocialIcons className="bg-[#f1b71c] relative rounded-[58px] shrink-0 size-[40px]" type="Youtube" />
                  <SocialIcons className="bg-[#f1b71c] relative rounded-[58px] shrink-0 size-[40px]" type="Facebook" />
                  <SocialIcons className="bg-[#f1b71c] relative rounded-[58px] shrink-0 size-[40px]" type="Instagram" />
                  <SocialIcons className="bg-[#f1b71c] relative rounded-[58px] shrink-0 size-[40px]" type="X" />
                  <SocialIcons className="bg-[#f1b71c] relative rounded-[58px] shrink-0 size-[40px]" type="Tik Tok" />
                  <SocialIcons className="bg-[#f1b71c] relative rounded-[58px] shrink-0 size-[40px]" type="Behance" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#f1b71c] relative shrink-0 w-full" data-name="Bottom Bar">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center justify-between px-[60px] py-[12px] relative size-full">
                <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.8)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Terms of Use | Privacy Policy
                </p>
                <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.8)] text-right whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                  © 2026 Designity Inc. All Rights Reserved.
                </p>
                <div className="absolute bg-[#e8e8ef] content-stretch flex gap-[6px] items-center left-[627px] px-[16px] py-[8px] rounded-[20px] top-[-21px]" data-name="Back to Top">
                  <div aria-hidden className="absolute border border-[#e8e8ef] border-solid inset-0 pointer-events-none rounded-[20px]" />
                  <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.8)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Back to top
                  </p>
                  <ChevronRight className="flex items-center justify-center relative shrink-0 size-[12px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute left-[1128.75px] size-[306.671px] top-[7.33px]" data-name="ChatGPT Image Jun 18, 2025, 11_23_47 PM 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgChatGptImageJun182025112347Pm1} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Footer1() {
  return <Footer className="relative size-full" />;
}