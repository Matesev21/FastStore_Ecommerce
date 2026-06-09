import styles from "./mainInfo.module.css";
import Image from "next/image";

export const MainInformation = () => {
    return (
        <section className={styles.section}>
            <div className={styles.backImage}>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <h1 className={styles.title}>FastStore</h1>
                        <p className={styles.description}>La tienda en línea más rápida y segura para comprar tus productos favoritos.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}