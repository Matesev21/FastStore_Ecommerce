import Image from "next/image";
import Link from "next/link";
import Logo from "@/app/HomePage/Assets/LogoFastStore.png";
import styles from "./Navbar.module.css";

export const NavBar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <Image
            src={Logo}
            alt="FastStore Logo"
            className={styles.logo}
            width={140}
            height={110}
            priority
            style={{ objectFit: "contain" }}
          />
        </Link>
      </div>

      <nav className={styles.navLinks}>
        <Link href="/" className={styles.link}>
          Inicio
        </Link>
        <Link href="/categorias" className={styles.link}>
          Categorías
        </Link>
        <Link href="/contacto" className={styles.link}>
          Contacto
        </Link>
      </nav>

      <div className={styles.actionContainer}>
        <Link href="/tienda" className={styles.ctaButton}>
          Tienda Online
        </Link>
      </div>
    </header>
  );
};
