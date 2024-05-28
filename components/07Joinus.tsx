import Image from "next/image";
import x from '../public/img/07Footer/x.svg'
import tg from '../public/img/07Footer/tg.svg'
import feather from '../public/img/07Footer/feather.png'

export default function Joinus(){
    return (
        <section className="_section ">
            <div className="_wrapper mt-[4%] relative flex flex-col gap-y-[24px] !rounded-b-none">
                <Image className="w-1/3 left-1/2 -translate-x-1/2 absolute -top-[10%]" src={feather} alt="" />
                <h2 className="pt-[10%] z-40 relative text-center font-bold uppercase font bold text-[32px] leading-[40px] md:text-[96px] md:leading-[120px]">
                    Join us
                </h2>
                <div className="_text_14-16 opacity-85 text-center md:w-1/2 mx-auto">
                    Join our lively community and embark on an exciting journey with us. Communicate, create interesting memes - together we will revolutionize this industry!
                </div>
                <div className="flex justify-center gap-x-[12px] md:gap-x-[24px]">
                    <a className="w-[142px] md:w-[218px] py-[16px] rounded-[53px] flex justify-center gap-x-[10px] bg-_green text-_blue _text_14-20 !font-semibold">
                        <Image src={tg} alt=""/>
                        <div>
                            Telegram
                        </div>
                    </a>
                    <a className="w-[142px] md:w-[218px] py-[16px] rounded-[53px] flex justify-center gap-x-[10px] bg-_green text-_blue _text_14-20 !font-semibold">
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