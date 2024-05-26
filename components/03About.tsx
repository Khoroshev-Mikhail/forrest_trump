import Image from "next/image";
import forrest_trump from "../public/img/03About/forrest_trump.png"

export default function About(){
    return (
        <section className="_section">
            <div className="_wrapper">
                <div className="flex flex-col md:flex-row gap-x-[5%] gap-y-[8px]">
                    <div className="w-1/2 md:w-1/4 h-full flex flex-col justify-center mx-auto order-last md:order-first">
                        <Image className="block 2xl:max-h-[530px] lg:max-h-[336px] object-contain aspect-[177:265]" src={forrest_trump} alt="FORREST TRUMP"/>
                    </div>
                    <div className="w-full md:w-3/4">
                        <div className="_h2_wrapper">
                            <h2 className="_h2">
                                About
                            </h2>
                            <span className="_number">
                                01
                            </span>
                        </div>
                        <div className="leading-[24px] text-[16px] font-medium space-y-6  _text_14-16 opacity-85">
                            <p>
                                FORREST TRUMP is a token inspired by two legendary characters: Forrest Gump and Donald Trump, created for a journey through the cryptocurrency space.
                            </p>
                            <p>
                                Imagine what happens when you combine the incredible stories of Forrest, his amazing adventures, with the unpredictability and success of Donald Trump. Fasten your seat belt - we're going to the moon!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}