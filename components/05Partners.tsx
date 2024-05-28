import Image from "next/image";
import shake_hand from "../public/img/05Partners/shake_hand.png"
import solana from "../public/img/05Partners/solana.svg"
import radium from "../public/img/05Partners/radium.svg"
import pinksale from "../public/img/05Partners/pinksale.svg"

export default function Partners(){
    return (
        <section className="_section">
            <div className="_wrapper flex flex-col md:flex-row gap-x-[16px] gap-y-[16px] md:gap-y-[24px]">
                <div className="md:w-3/4 xl:w-2/3 flex flex-col gap-y-[16px] md:gap-y-[24px]">
                    <div className="_h2_wrapper">
                        <h2 className="_h2">
                            Partners
                        </h2>
                        <span className="_number">
                            03
                        </span>
                    </div>
                    <div className="_text_14-16 opacity-85">
                        Partnership, you know, is like what mama used to say: 'Life is like an unpredictable marathon.' You never know what you'll get, but there's always a chance to discover something amazing together!
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 text-center gap-[8px] md:gap-[12px]">
                        <div className="h-[48px] md:h-[72px] flex flex-col justify-center rounded-[8px] md:rounded-[24px] _border bg-white bg-opacity-5 _text_16-36">
                            <div className="w-full flex justify-center gap-x-[16px]">
                                <div className="flex flex-col justify-center">
                                    <Image className="h-[24px] md:h-[40px]" src={ solana } alt="" />
                                </div>
                                SOLANA
                            </div>
                        </div>
                        <div className="h-[48px] md:h-[72px] flex flex-col justify-center rounded-[8px] md:rounded-[24px] _border bg-white bg-opacity-5 _text_16-36">
                            <div className="w-full flex justify-center gap-x-[16px]">
                                <div className="flex flex-col justify-center">
                                    <Image className="h-[24px] md:h-[40px]" src={ radium } alt="" />
                                </div>
                                RADIUM
                            </div>
                        </div>
                        <div className="h-[48px] md:h-[72px] flex flex-col justify-center rounded-[8px] md:rounded-[24px] _border bg-white bg-opacity-5 _text_16-36">
                            COINMARKETCAP
                        </div>
                        <div className="h-[48px] md:h-[72px] flex flex-col justify-center rounded-[8px] md:rounded-[24px] _border bg-white bg-opacity-5 _text_16-36">
                            COINGECKO
                        </div>
                        <div className="h-[48px] md:h-[72px] flex flex-col justify-center rounded-[8px] md:rounded-[24px] _border bg-white bg-opacity-5 _text_16-36">
                            <div className="w-full flex justify-center gap-x-[16px]">
                                <div className="flex flex-col justify-center">
                                    <Image className="h-[24px] md:h-[40px]" src={ pinksale } alt="" />
                                </div>
                                PINKSALE
                            </div>
                        </div>
                        <div className="h-[48px] md:h-[72px] flex flex-col justify-center rounded-[8px] md:rounded-[24px] _border bg-white bg-opacity-5 _text_16-36">
                            INTERFI
                        </div>
                    </div>
                </div>
                <div className="md:order-first xs:w-1/2 mx-auto md:w-1/4 xl:w-1/3 ">
                    <div className="bg-white bg-opacity-5  rounded-[24px] aspect-[250/265] _border flex flex-col justify-center">
                        <Image className="w-full object-contain" src={ shake_hand } alt="Partners Forre$t Trump" />
                    </div>
                </div>
            </div>
        </section>
    )
}