import Image from "next/image";
import x from '../public/img/07Joinus/x.svg'
import tg from '../public/img/07Joinus/tg.svg'
import feather from '../public/img/07Joinus/feather.webp'
import { TG_URL, X_URL } from "@/pages";

export default function Joinus(){
    return (
        <section className="_section ">
            <div className="_wrapper pt-[20%] mt-[4%] relative flex flex-col gap-y-[24px]">
                <div className="w-[70%] h-auto left-1/2 -translate-x-1/2 absolute z-20 -top-[12%] bg-gradient">
                    <Image className="w-full" src={feather} alt="" />
                </div>
                <h2 data-aos="fade-right" data-aos-duration="1500" className="mt-[13%] z-30 relative text-center font-bold uppercase font bold text-[32px] leading-[40px] md:text-[96px] md:leading-[120px] bg-[url('/img/07Joinus/shadow.webp')] bg-center bg-no-repeat">
                    Join us
                </h2>
                <div data-aos="fade-right" data-aos-duration="1500" className="z-30 _text_14-16 opacity-85 text-center md:w-1/2 mx-auto">
                    Join our lively community and embark on an exciting journey with us. Communicate, create interesting memes - together we will revolutionize this industry!
                </div>
                <div className="z-30 flex justify-center gap-x-[12px] md:gap-x-[24px]">
                    <a data-aos="fade-right" data-aos-duration="1500" href={ TG_URL } className="w-[142px] md:w-[218px] py-[16px] rounded-[53px] flex justify-center gap-x-[10px] bg-_green text-_blue _text_14-20 !font-semibold">
                        <Image src={tg} alt=""/>
                        <div>
                            Telegram
                        </div>
                    </a>
                    <a data-aos="fade-right" data-aos-duration="1500" href={ X_URL } className="w-[142px] md:w-[218px] py-[16px] rounded-[53px] flex justify-center gap-x-[10px] bg-_green text-_blue _text_14-20 !font-semibold">
                        <Image src={x} alt=""/>
                        <div>
                            Twitter
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}