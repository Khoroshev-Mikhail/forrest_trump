import Image from "next/image";
import shake_hand from "../public/img/05Partners/shake_hand.png"

export default function Partners(){
    return (
        <section className="_section">
            <div className="_wrapper flex flex-col md:flex-row gap-x-[16px]">
                <div className="md:w-3/4 flex flex-col gap-y-[16px] md:gap-y-[24px]">
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
                        <div className="rounded-[8px] md:rounded-[24px]">
                            SOLANA
                        </div>
                        <div className="rounded-[8px] md:rounded-[24px]">
                            RADIUM
                        </div>
                        <div className="rounded-[8px] md:rounded-[24px]">
                            COINMARKETCAP
                        </div>
                        <div className="rounded-[8px] md:rounded-[24px]">
                            COINGECKO
                        </div>
                        <div className="rounded-[8px] md:rounded-[24px]">
                            PINKSALE
                        </div>
                        <div className="rounded-[8px] md:rounded-[24px]">
                            INTERFI
                        </div>
                    </div>
                </div>
                <div className="md:order-first md:w-1/4">
                    <Image className="w-1/2 aspect-[250/265] mx-auto object-contain h-2/3 md:w-auto lg:h-full" src={ shake_hand } alt="Partners Forre$t Trump" />
                </div>
            </div>
        </section>
    )
}