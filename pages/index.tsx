import { Inter } from "next/font/google";
import Menu from "@/components/01Menu";
import Header from "@/components/02Header";
import About from "@/components/03About";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
        <main className={`${inter.className}`}>
            <Menu />
            {/* <Header /> */}
            <About />
        </main>
  );
}
