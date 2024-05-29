import Image from "next/image";
import x from '../public/img/x.svg'
import tg from '../public/img/tg.svg'
import forrest_trump from '../public/img/02Header/forrest_trump.webp' 
import forrest_trump_mobile from '../public/img/02Header/forrest_trump_mobile.webp' 
import eclipse from '../public/img/eclipse.webp' 
import { AUDIT_URL, MANROPE, PRESALE_URL, TG_URL, X_URL } from "@/pages";

export default function Header(){
    return (
        <section id="Header" className="_section">
            <div className="_wrapper relative overflow-hidden flex flex-col gap-y-[8px] md:gap-y-[24px]">
                <h1 className={`${MANROPE} z-30  font-extrabold text-[40px] md:text-[72px] lg:text-[96px] 2xl:text-[128px] leading-[48px] md:leading-[80px] lg:leading-[100px] 2xl:leading-[140px] md:order-2 text-center md:text-left`}>
                    FORREST
                    <br />
                    TRUMP
                </h1>
                <div className="z-30 md:w-1/2 lg:w-[40%] opacity-85 _text_14-16 text-center md:text-left md:order-3">
                    My mom always said, 'I'm not very smart, but I know how to go to the moon.' In the world of cryptocurrency, it's like picking from a box of chocolates: you wait for someone to take the biggest piece, and then you miss the chance to go to the moon!
                </div>
                <div className="z-30 flex justify-center md:justify-between md:order-1 _text_14-16">
                    <a className="py-[8px] px-[16px] font-semibold text-_green tracking-wide border-[1px] border-_green rounded-[32px]" href="">
                        PUMP FORREST PUMP
                    </a>
                    <a className="hidden md:inline-block py-[8px] px-[16px] font-semibold text-_green tracking-wide border-[1px] border-_green rounded-[32px] " href="">
                        UP TO 700X GROWTH
                    </a>
                </div>
                <div className="z-30 order-last flex justify-between pt-[90%] md:pt-0">
                    <div className="w-full flex gap-x-[24px] justify-center md:justify-normal _text_14-16">
                        <a href={ PRESALE_URL } className="w-[142px] h-[36px] md:w-[218px] md:h-[64px] flex flex-col justify-center bg-_green text-center text-_blue rounded-[53px] ">
                            Presale
                        </a>
                        <a href={ AUDIT_URL } className="w-[142px] h-[36px] md:w-[218px] md:h-[64px] flex flex-col justify-center bg-_green text-center text-_blue rounded-[53px] ">
                            Audit
                        </a>
                    </div>
                    <div className="z-30 hidden md:flex gap-x-[24px]">
                        <a href={TG_URL}>
                            <Image src={tg} alt="" width={64} height={64}/>
                        </a>
                        <a href={X_URL}>
                            <Image src={x} alt="" width={64} height={64}/>
                        </a>
                    </div>
                </div>
                <Image className="z-30 hidden md:block absolute h-full w-auto object-contain right-0 bottom-0 xl:right-[16%] 2xl:right-[20%]" src={forrest_trump} alt="FORREST TRUMP" />
                <Image className="z-30 md:hidden absolute h-1/2 w-auto object-contain left-1/2 -translate-x-1/2 bottom-0" src={forrest_trump_mobile} alt="FORREST TRUMP" />
                <Image className="z-20 h-full w-auto absolute -bottom-1/3 md:bottom-0 right-0 md:translate-x-1/2 xl:translate-x-0 xl:right-[5%]  " src={eclipse} alt="" />
            </div>
        </section>
    )
}