import styles from "@/styles/components/Footer.module.scss";
import Link from "next/link";
import style from "@/styles/components/Footer.module.scss";
import { ParallaxProvider } from "react-scroll-parallax";

export default function Footer() {
  return (
    <ParallaxProvider>
      <div className={styles.footerContainer}>
        <div className={style.linksContainer}>
          <Link href="/impressum">
            <h5 className={style.link}>Impressum</h5>
          </Link>
          <Link href="/datenschutz">
            <h5 className={style.link}>Datenschutz</h5>
          </Link>
        </div>
      </div>
    </ParallaxProvider>
  );
}
