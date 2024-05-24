import { Inter, Manrope } from "next/font/google";
import Menu from "@/components/01Menu";
import Header from "@/components/02Header";
import About from "@/components/03About";

export const INTER = Inter({ subsets: ["latin"] });
export const MANROPE = Manrope({ subsets: ["latin"] });

export default function Home() {
  return (
        <main className={`${INTER.className}`}>
            <Menu />
            <Header />
            {/* <About /> */}
        </main>
  );
}
