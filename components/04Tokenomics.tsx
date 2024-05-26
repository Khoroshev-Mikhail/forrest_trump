import Image from "next/image";
import forrest_trump from "../public/img/04Tokenomics/forrest_trump.png"

export default function Tokenomics(){
    return (
        <section className="_section">
            <div className="_wrapper flex flex-col md:flex-row gap-y-[16px]">
                <div className="w-full md:w-1/4 flex justify-center order-last md:order-first">
                    <Image className="w-1/2 aspect-[253/370] mx-auto object-contain h-2/3 md:w-auto" src={forrest_trump} alt="FORRE$T TRUMP" />
                </div>
                <div className="w-full md:w-3/4 flex flex-col gap-y-[16px] md:gap-y-[24px]">
                    <div className="_h2_wrapper">
                        <h2 className="_h2">Tokenomics</h2>
                        <span className="_number">02</span>
                    </div>
                    <div className="_text_14-16 opacity-85">
                        Our tokenomics promotes sustainable and healthy project development by ensuring sufficient liquidity, marketing support, and enabling the team to achieve its goals according to the roadmap.
                    </div>
                    <div className="grid grid-cols-2 gap-y-[12px]">
                        <div className="col-span-2 flex flex-col py-[12px] gap-y-[12px] border-b-[1px] border-[#92B7E0]">
                            <div className="_text_14-16 opacity-85 ">
                                Token adress
                            </div>
                            <div className="_text_14-20 opacity-85">
                                HnF56T5Dj1KTU9j8hFvo2<wbr/>JNf9ArtLxAZ54YjxURnJykC
                            </div>
                        </div>
                        <div className="col-span-1 flex flex-col py-[12px] gap-y-[12px]  border-b-[1px] border-[#92B7E0]">
                            <div className="_text_14-20 opacity-85">
                                1 000 000 000
                            </div>
                            <div className="_text_14-16 opacity-85">
                                Total Supply
                            </div>
                        </div>
                        <div className="col-span-1 flex flex-col py-[12px] gap-y-[12px]  border-b-[1px] border-[#92B7E0]">
                            <div className="_text_14-20 opacity-85">
                            10%
                            </div>
                            <div className="_text_14-16 opacity-85">
                            Team
                            </div>
                        </div>
                        <div className="col-span-1 flex flex-col py-[12px] gap-y-[12px]  border-b-[1px] border-[#92B7E0]">
                            <div className="_text_14-20 opacity-85">
                            40%
                            </div>
                            <div className="_text_14-16 opacity-85">
                            Presale
                            </div>
                        </div>
                        <div className="col-span-1 flex flex-col py-[12px] gap-y-[12px]  border-b-[1px] border-[#92B7E0]">
                            <div className="_text_14-20 opacity-85">
                            10%
                            </div>
                            <div className="_text_14-16 opacity-85">
                            Marketing
                            </div>
                        </div>
                        <div className="col-span-1 flex flex-col py-[12px] gap-y-[12px]  border-b-[1px] border-[#92B7E0]">
                            <div className="_text_14-20 opacity-85">
                            20%
                            </div>
                            <div className="_text_14-16 opacity-85">
                            Liquidity
                            </div>
                        </div>
                        <div className="col-span-1 flex flex-col py-[12px] gap-y-[12px]  border-b-[1px] border-[#92B7E0]">
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