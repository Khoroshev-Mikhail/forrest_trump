import { useGetElementHeight } from "@/hooks/hooks";
import Image from "next/image";
import logo from '../public/img/01Menu/logo.svg'
import burger from '../public/img/01Menu/burger.svg'
import cross from '../public/img/01Menu/cross.svg'
import x from '../public/img/x.svg'
import tg from '../public/img/tg.svg'
import forrest_trump from '../public/img/06Roadmap/forrest_trump.webp'
import { useState } from "react";
import { TG_URL, X_URL } from "@/pages";

export default function Menu(){
    const [ isHidden, setIsHidden ] = useState(true)
    const [ height, ref ] = useGetElementHeight();
    return (
        <>      
   
            <section ref={ ref } className="_section fixed z-40 top-0 left-0">

            {/* Выдвижное меню */}
            <div className={`${isHidden ? 'hidden' : 'block'} absolute z-50 top-0 left-0 w-full rounded-b-2xl`}>
                <div className="relative _wrapper py-10 sm:py-10 md:py-12 xl:py-20 flex flex-col justify-between !border-none  min-h-screen  _blur-[40px]">
                    <Image className="absolute top-[45px] right-[45px] cursor-pointer w-[30px] h-[30px] sm:w-[49px] sm:h-[49px]" src={ cross } alt="menu-toggle" onClick={()=> setIsHidden(true) }/>
                    
                    <menu className={`uppercase block md:w-1/2 w-full relative z-50 text-[16px] xs:text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] mt-10 text-white _text_16-36`}>
                        <li className="flex justify-center md:justify-start w-full" onClick={()=> setIsHidden(true) }><a href="#Header">Home</a></li>
                        <li className="flex justify-center md:justify-start w-full mt-3 md:mt-5" onClick={()=> setIsHidden(true) }><a href="#About">About</a></li>
                        <li className="flex justify-center md:justify-start w-full mt-3 md:mt-5" onClick={()=> setIsHidden(true) }><a href="#Tokenomics">Tokemomics</a></li>
                        <li className="flex justify-center md:justify-start w-full mt-3 md:mt-5" onClick={()=> setIsHidden(true) }><a href="#Partners">Partners</a></li>
                        <li className="flex justify-center md:justify-start w-full mt-3 md:mt-5" onClick={()=> setIsHidden(true) }><a href="#Roadmap">Roadmap</a></li>
                        <li className="flex justify-center md:justify-start w-full mt-10 gap-x-[12px]" onClick={()=> setIsHidden(true) }>
                            <a href={ TG_URL } className="md:hidden flex flex-col justify-center cursor-pointer">
                                <Image className="" src={x} alt="FT" />
                            </a>
                            <a href={ X_URL } className="md:hidden flex flex-col justify-center cursor-pointer">
                                <Image className="" src={tg} alt="FT" />
                            </a>
                        </li>
                    </menu>
                    <div className="w-1/2 flex flex-col justify-center mx-auto pb-[10%]">
                        <Image src={ forrest_trump } alt="" className="block  bottom-0 right-0 w-full" />
                    </div>
                    
                </div>
            </div> 

                <div className="_wrapper !rounded-[10px] !px-[20px] !py-[16px] _blur-[12px]">
                    <div className="w-full flex justify-between text-[20px] font-semibold leading-[32px]">
                        <div className="flex justify-start gap-x-[12px]">
                            <div className="flex flex-col justify-center">
                                <Image className="" src={ logo } alt="FT" />
                            </div>
                            <div className="hidden md:flex flex-col justify-center">
                                FORRE$T TRUMP
                            </div>
                            <a href={ TG_URL } className="md:hidden flex flex-col justify-center cursor-pointer">
                                <Image className="" src={ x } alt="FT" />
                            </a>
                            <a href={ X_URL } className="md:hidden flex flex-col justify-center cursor-pointer">
                                <Image className="" src={ tg } alt="FT" />
                            </a>
                        </div>
                        <div className="hidden md:block">
                            <nav className="flex flex-col justify-center h-full">
                                <ul className="flex gap-x-[32px]">
                                    <li>
                                        <a href="#About">
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#Tokenomics">
                                            Tokenomics
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#Partners">
                                            Partners
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#Roadmap">
                                            Roadmap
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="md:hidden flex flex-col justify-center">
                            <Image src={ burger } alt="☰" width={32} height={32} onClick={()=> setIsHidden(false) }/>
                        </div>
                    </div>
                </div>
            </section>

            {/* Заглушка для отступа равным высоте фиксированной шапки (ref) */}
            <div style={{ height }}></div>
        </>

    )
}