import {
  ChevronDoubleUpIcon,
  CloudIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import styles from "@/app/ui/home.module.scss";
import LocationCard from "@/app/ui/location-card";

const locations = [
  {
    title: "Alpit",
    icon: ChevronDoubleUpIcon,
    description:
      "Dolore est pariatur anim laboris. Exercitation ad incididunt commodo occaecat.",
    image: "/images/alpit.jpg",
    link: "/protected/alps",
  },
  {
    title: "Saari",
    icon: CloudIcon,
    description:
      "Commodo do esse officia ea nulla cupidatat duis exercitation.",
    image: "/images/saari.jpg",
    link: "/protected/island",
  },
  {
    title: "Hiekka",
    icon: SunIcon,
    description:
      "Cupidatat ut minim elit aliquip. Exercitation exercitation proident.",
    image: "/images/hiekka.jpg",
    link: "/middleware-protected/sand",
  },
];

export default function Home() {
  return (
    <main>
      <h1>Grata ad nostram deversorium</h1>
      <p className={styles.intro}>
        Laboris est cillum sint pariatur aliquip enim. Magna quis officia dolore
        ea nisi cupidatat qui adipisicing ex voluptate irure. Aliquip proident
        eu id proident aute ut sit officia in officia irure proident excepteur.
        Eiusmod velit ea veniam aute do. Sint do fugiat aliquip cillum nisi esse
        fugiat ea voluptate consequat. Et sit Lorem nostrud ex duis cupidatat do
        irure nulla elit. Pariatur irure dolor veniam aliqua ipsum qui nisi ad
        incididunt qui proident minim nulla duis.
      </p>
      <section className={styles.locations}>
        {locations.map((location) => (
          <LocationCard
            key={location.title}
            icon={location.icon}
            title={location.title}
            description={location.description}
            image={location.image}
            link={location.link}
          />
        ))}
      </section>
    </main>
  );
}
