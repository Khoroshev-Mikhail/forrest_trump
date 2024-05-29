import Image from "next/image";
import forrest_trump from "../public/img/04Tokenomics/forrest_trump.webp"
import shadow from "../public/img/shadow.webp"
import { TOKEN } from "@/pages";

export default function Tokenomics(){
    return (
        <section id="Tokenomics" className="_section">
            <div className="_wrapper flex overflow-hidden flex-col md:flex-row gap-y-[16px] gap-x-[16px]">
                <div className="relative w-full md:w-1/4 xl:w-1/3 flex justify-center order-last md:order-first h-2/3 xl:h-ful">
                    <Image className="z-30 w-1/2 aspect-[253/370] mx-auto object-contain  md:w-auto lg:w-full l" src={forrest_trump} alt="FORRE$T TRUMP" />
                    <Image className="absolute bottom-0 translate-y-1/2 left-0 w-full" src={shadow} alt="" />
                </div>
                <div className="w-full md:w-3/4 xl:w-2/3 flex flex-col gap-y-[16px] md:gap-y-[24px]">
                    <div data-aos="fade-right" data-aos-duration="1500" className="_h2_wrapper">
                        <h2 className="_h2">Tokenomics</h2>
                        <span className="_number">02</span>
                    </div>
                    <div data-aos="fade-right" data-aos-duration="1500" className="_text_14-16 opacity-85">
                        Our tokenomics promotes sustainable and healthy project development by ensuring sufficient liquidity, marketing support, and enabling the team to achieve its goals according to the roadmap.
                    </div>
                    <div className="grid grid-cols-2 gap-y-[12px]">
                        <div data-aos="fade-right" data-aos-duration="1500" className="col-span-2 flex flex-col py-[12px] gap-y-[12px] border-b-[1px] border-[#92B7E0]">
                            <div className="_text_14-16 opacity-85 ">
                                Token adress
                            </div>
                            <div className="break-all _text_14-20 opacity-85 border-dashed border-b-[1px] border-[#92B7E0] hover:border-[#FFF] duration-500 transition cursor-pointer" onClick={()=>navigator.clipboard.writeText( TOKEN )}>
                                { TOKEN }
                            </div>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="1500" className="col-span-1 flex flex-col py-[12px] gap-y-[12px]  border-b-[1px] border-[#92B7E0]">
                            <div className="_text_14-20 opacity-85">
                                1 000 000 000
                            </div>
                            <div className="_text_14-16 opacity-85">
                                Total Supply
                            </div>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="1500" className="col-span-1 flex flex-col py-[12px] gap-y-[12px]  border-b-[1px] border-[#92B7E0]">
                            <div className="_text_14-20 opacity-85">
                            10%
                            </div>
                            <div className="_text_14-16 opacity-85">
                            Team
                            </div>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="1500" className="col-span-1 flex flex-col py-[12px] gap-y-[12px]  border-b-[1px] border-[#92B7E0]">
                            <div className="_text_14-20 opacity-85">
                            40%
                            </div>
                            <div className="_text_14-16 opacity-85">
                            Presale
                            </div>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="1500" className="col-span-1 flex flex-col py-[12px] gap-y-[12px]  border-b-[1px] border-[#92B7E0]">
                            <div className="_text_14-20 opacity-85">
                            10%
                            </div>
                            <div className="_text_14-16 opacity-85">
                            Marketing
                            </div>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="1500" className="col-span-1 flex flex-col py-[12px] gap-y-[12px]  border-b-[1px] border-[#92B7E0]">
                            <div className="_text_14-20 opacity-85">
                            20%
                            </div>
                            <div className="_text_14-16 opacity-85">
                            Liquidity
                            </div>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="1500" className="col-span-1 flex flex-col py-[12px] gap-y-[12px]  border-b-[1px] border-[#92B7E0]">
                            <div className="_text_14-20 opacity-85">
                            20%
                            </div>
                            <div className="_text_14-16 opacity-85">
                            CEX listing
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}