import Image from "next/image";
import forrest_trump from "../public/img/03About/forrest_trump.png"
import eclipse from "../public/img/eclipse.png"
import shadow from "../public/img/shadow.png"

export default function About(){
    return (
        <section className="_section overflow-hidden">
            <div className="_wrapper relative overflow-hidden flex flex-col md:flex-row gap-x-[16px] gap-y-[8px] md:gap-y-[24px]">
                
                <Image className="md:block hidden absolute z-10 top-0 -right-1/4 lg:-right-[15%] h-full aspect-square" src={eclipse} alt="" />

                <div className="relative z-30 w-1/2 md:w-1/4 xl:w-1/3 h-full flex flex-col justify-center mx-auto order-last md:order-first">
                    <Image className="z-30 block 2xl:max-h-[530px] lg:max-h-[336px] object-contain aspect-[177:265]" src={forrest_trump} alt="FORREST TRUMP"/>
                    <Image className="absolute bottom-0 translate-y-1/2 left-0 w-full" src={shadow} alt="" />
                </div>
                <div className="z-30 w-full md:w-3/4 xl:w-2/3 flex flex-col gap-y-[8px] md:gap-y-[24px]">
                    <div className="_h2_wrapper">
                        <h2 className="_h2">
                            About
                        </h2>
                        <span className="_number">
                            01
                        </span>
                    </div>
                    <div className="space-y-6  _text_14-16 opacity-85">
                        FORREST TRUMP is a token inspired by two legendary characters: Forrest Gump and Donald Trump, created for a journey through the cryptocurrency space.
                    </div>
                    <div className="space-y-6  _text_14-16 opacity-85">
                        Imagine what happens when you combine the incredible stories of Forrest, his amazing adventures, with the unpredictability and success of Donald Trump. Fasten your seat belt - we're going to the moon!
                    </div>
                </div>
            </div>
        </section>
    )
}