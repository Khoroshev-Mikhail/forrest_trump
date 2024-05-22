import { useGetElementHeight } from "@/hooks/hooks";
import Image from "next/image";
import logo from '../public/img/01Menu/logo.svg'

export default function Menu(){
    const [ height, ref ] = useGetElementHeight();
    return (
        <>       
            <section ref={ ref } className="_section fixed top-0 left-0">
                <div className="_wrapper border-[0.5px] border-[#5F9Ad7] !rounded-[10px] !px-[20px] !py-[16px]">
                    <div className="w-full flex justify-between text-[20px] font-semibold leading-[32px]">
                        <div className="flex justify-start gap-x-[12px]">
                            <div className="flex flex-col justify-center">
                                <Image className="" src={logo} alt="FT" />
                            </div>
                            <div className="flex flex-col justify-center">
                                FORRE$T TRUMP
                            </div>
                        </div>
                        <div>
                            <nav className="flex flex-col justify-center h-full">
                                <ul className="flex gap-x-[32px]">
                                    <li>About</li>
                                    <li>Tokenomics</li>
                                    <li>Partners</li>
                                    <li>Roadmap</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            {/* Заглушка для отступа равным высоте фиксированной шапки (ref) */}
            <div style={{ height }}></div>
        </>

    )
}