import { Inter, Manrope } from "next/font/google";
import Menu from "@/components/01Menu";
import Header from "@/components/02Header";
import About from "@/components/03About";
import Tokenomics from "@/components/04Tokenomics";
import Partners from "@/components/05Partners";
import Roadmap from "@/components/06Roadmap";
import Joinus from "@/components/07Joinus";
import Footer from "@/components/08Footer";

export const INTER = Inter({ subsets: ["latin"] });
export const MANROPE = Manrope({ subsets: ["latin"] });

export const TOKEN = 'FWEpX66gHktS5ysUQEGAVG1XDdAN8stH3MHFm8ycUTun'
export const TG_URL = "https://t.me/forrest_trump_sol"
export const X_URL = "https://x.com/forrestrumpsol"
export const PRESALE_URL = "https://raydium.io/swap/?inputMint=sol&outputMint=FWEpX66gHktS5ysUQEGAVG1XDdAN8stH3MHFm8ycUTun"
export const AUDIT_URL = "https://github.com/interfinetwork/project-delivery-data/blob/main/ForrestTrump/ForrestTrump_AuditReport_InterFi.pdf"
export const PUMP_FORREST_PUMP = ""
export const UP_TO_700X_GROWTH = ""


export default function Home() {
  return (
        <main className={`${INTER.className} relative`}>
            <Menu />
            <Header />
            <About />
            <Tokenomics />
            <Partners />
            <Roadmap />
            <Joinus />
            <Footer />
        </main>
  );
}
