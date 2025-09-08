import HeroSection from "@/components/heroSection";
import style from "./page.module.css";

export default function Home() {
  return (
    <div className={style.container}>
      <HeroSection />
    </div>
  );
}
