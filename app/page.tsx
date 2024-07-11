import Image from "next/image";
import styles from '@/app/ui/home.module.scss'
import { lusitana } from "./ui/fonts";

export default function Home() {
  return (
    <main>
      <h1>Duis Lorem labore ex aliqua</h1>
      <div className={styles.shape} />
      <p className={`${lusitana.className} text-xl text-gray-800 md:text-2xl md:leading-normal`}>
        Esse ex quis tempor eu et pariatur ex nisi velit nisi officia. Sint dolor duis deserunt aliqua. Occaecat magna commodo excepteur mollit. Occaecat aliqua dolore sint irure id laborum eu pariatur culpa reprehenderit. Non proident ea Lorem mollit veniam mollit. Anim consequat sint nisi est duis elit in proident.
      </p>
      <h2>
        Alpit
      </h2>
      <p>
        In enim occaecat amet et deserunt laborum deserunt enim sit.
      </p>
      <Image
        src="/images/chamonix.jpg"
        width={289}
        height={217}
        className="hidden md:block"
        alt="Chamonix the house"
      />
        <h2>
          Saari
        </h2>
        <p>
          Commodo do esse officia ea nulla cupidatat duis exercitation.
        </p>
      </main>
  );
}
