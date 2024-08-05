import Image from "next/image";
import Link from "next/link";
import styles from "@/app/ui/location-card.module.scss";
import { ForwardRefExoticComponent, SVGProps } from "react";

export default function LocationCard({
  title,
  icon,
  description,
  image,
  link,
}: {
  title: string;
  icon: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "">>;
  description: string;
  image: string;
  link: string;
}) {
  const HeaderIcon = icon;

  return (
    <Link className={styles.card} href={link}>
      <div className={styles.imageContainer}>
        <Image src={image} fill alt="Location image" />
      </div>
      <div className={styles.textContainer}>
        <header className={styles.headerContainer}>
          <h2 className={styles.title}>{title}</h2>
          <HeaderIcon />
        </header>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.linkContainer}>
        <div>Katso ohjeet</div>
        <div className={styles.pointer}>👉</div>
      </div>
    </Link>
  );
}
