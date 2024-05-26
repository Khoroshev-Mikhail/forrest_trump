import { useGetElementHeight } from "@/hooks/hooks";
import Image from "next/image";
import logo from '../public/img/01Menu/logo.svg'
import burger from '../public/img/01Menu/burger.svg'
import x from '../public/img/x.svg'
import tg from '../public/img/tg.svg'

export default function Menu(){
    const [ height, ref ] = useGetElementHeight();
    return (
        <>       
            <section ref={ ref } className="_section fixed z-40 top-0 left-0">
                <div className="_wrapper !rounded-[10px] !px-[20px] !py-[16px]">
                    <div className="w-full flex justify-between text-[20px] font-semibold leading-[32px]">
                        <div className="flex justify-start gap-x-[12px]">
                            <div className="flex flex-col justify-center">
                                <Image className="" src={logo} alt="FT" />
                            </div>
                            <div className="hidden md:flex flex-col justify-center">
                                FORRE$T TRUMP
                            </div>
                            <a className="md:hidden flex flex-col justify-center cursor-pointer">
                                <Image className="" src={x} alt="FT" />
                            </a>
                            <a className="md:hidden flex flex-col justify-center cursor-pointer">
                                <Image className="" src={tg} alt="FT" />
                            </a>
                        </div>
                        <div className="hidden md:block">
                            <nav className="flex flex-col justify-center h-full">
                                <ul className="flex gap-x-[32px]">
                                    <li>About</li>
                                    <li>Tokenomics</li>
                                    <li>Partners</li>
                                    <li>Roadmap</li>
                                </ul>
                            </nav>
                        </div>
                        <div className="md:hidden flex flex-col justify-center">
                            <Image src={burger} alt="☰" width={32} height={32}/>
                        </div>
                    </div>
                </div>
            </section>

            {/* Заглушка для отступа равным высоте фиксированной шапки (ref) */}
            <div style={{ height }}></div>
        </>

    )
}