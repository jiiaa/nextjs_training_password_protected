import Image from "next/image";
import styles from "./accordion.module.scss";

export default function Accordion({
    title,
    image,
    instructions,
    subAccordion,
}: {
    title: string,
    image: string | undefined,
    instructions: string | undefined,
    subAccordion: React.ReactNode,
}) {
    return (
            <details className={styles.innerDetails}>
                <summary className={styles.summary}>{title}</summary>
                {instructions &&
                    <div className={styles.content}>
                        <p>
                            {instructions}
                        </p>
                    {image &&
                        <Image
                            src={image}
                            width={405}
                            height={403}
                            alt="Parking"
                        />
                    }
                    </div>
                }
                {subAccordion}
            </details>
    )
}