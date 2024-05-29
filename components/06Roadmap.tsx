import Image from "next/image";
import forrest_trump from "../public/img/06Roadmap/forrest_trump.png"
import shadow from "../public/img/shadow.png"

export default function Roadmap(){
    return (
        <section id="Roadmap" className="_section">
            <div className="_wrapper overflow-hidden grid grid-cols-1 md:grid-cols-4 xl:grid-cols-3 gap-[16px]">
                <div className="md:col-span-3 xl:col-span-2 flex flex-col gap-y-[16px] md:gap-y-[24px]">
                    <div className="_h2_wrapper">
                        <h2 className="_h2">
                            Roadmap
                        </h2>
                        <span className="_number">
                            04
                        </span>
                    </div>
                    <div className="_text_14-16 opacity-85">
                        A roadmap is like a plan for a journey through life, full of unexpected twists and exciting adventures. We don't know what's going to happen next, but as they told me, 'Run, Forrest, run!' and I keep moving forward no matter what.
                    </div>
                </div>

                <div className="md:col-span-4 xl:col-span-2  w-full grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 gap-[16px] grid-rows-max">
                    <div className="bg-white bg-opacity-5 _border rounded-[8px] md:rounded-[24px] flex flex-col gap-y-[16px] p-[16px]">
                        <div className="flex justify-between _text_20-32">
                            <div className="uppercase">
                                Phase
                            </div>
                            <div className="_number">
                                01
                            </div>
                        </div>
                        <ul className="block list-disc ml-[22px] _text_14-20 opacity-85 !font-medium">
                            <li>Create website</li>
                            <li>Presale and Launch</li>
                            <li>Marketing</li>
                            <li>Crypto influencers AMA</li>
                            <li>Community of 5000 holders</li>
                        </ul>
                    </div>
                    <div className="bg-white bg-opacity-5 _border rounded-[8px] md:rounded-[24px] flex flex-col gap-y-[16px] p-[16px]">
                        <div className="flex justify-between _text_20-32">
                            <div className="uppercase">
                                Phase
                            </div>
                            <div className="_number">
                                02
                            </div>
                        </div>
                        <ul className="block list-disc ml-[22px] _text_14-20 opacity-85 !font-medium">
                            <li>Listed on Coinmarketcap</li>
                            <li>Listed on Coingecko</li>
                            <li>Partnership with Marketing Agencies</li>
                            <li>Community of 10000 holders</li>
                        </ul>
                    </div>
                    <div className="bg-white bg-opacity-5 _border rounded-[8px] md:rounded-[24px] flex flex-col gap-y-[16px] p-[16px]">
                        <div className="flex justify-between _text_20-32">
                            <div className="uppercase">
                                Phase
                            </div>
                            <div className="_number">
                                03
                            </div>
                        </div>
                        <ul className="block list-disc ml-[22px] _text_14-20 opacity-85 !font-medium">
                            <li>Global marketing</li>
                            <li>Community of 15000 holders</li>
                            <li>New Partnerships</li>
                            <li>Exchange Listing CEX</li>
                        </ul>
                    </div>
                    <div className="bg-white bg-opacity-5 _border rounded-[8px] md:rounded-[24px] flex flex-col gap-y-[16px] p-[16px]">
                        <div className="flex justify-between _text_20-32">
                            <div className="uppercase">
                                Phase
                            </div>
                            <div className="_number">
                                04
                            </div>
                        </div>
                        <ul className="block list-disc ml-[22px] _text_14-20 opacity-85 !font-medium">
                            <li>Community of 100000 holders</li>
                            <li>New Exchange Listing CEX</li>
                            <li>Focus on global development</li>
                            <li>CHARITY</li>
                        </ul>
                    </div>
                </div>

                <div className="md:order-first md:col-span-1 xl:row-start-1 xl:row-end-3 ">
                    <div className="h-auto w-full relative">
                        <Image className="relative z-30 w-1/2 md:w-full aspect-[459/612] mx-auto object-contain " src={ forrest_trump } alt="" />
                        <Image className="absolute bottom-0 translate-y-1/2 md:translate-y-1/4 md:scale-1/2 xl:scale-1 xl:translate-y-1/2 left-0 w-full" src={shadow} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}