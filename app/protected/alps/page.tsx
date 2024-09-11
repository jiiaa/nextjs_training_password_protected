import Image from "next/image";
import { Metadata } from "next";
import { authOptions } from "@/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import styles from "./styles.module.scss";

export const metadata: Metadata = {
  title: "The Alps",
};

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/protected/alps");
  }

  return (
    <main>
      <h1>The Alpit</h1>
      <div>
        <p className={styles.address}>
          Huoneiston osoite:{" "}
          <span>Rue de la Montagne 67, 12345 Village, Ranska</span>
        </p>
        <p className={styles.text}>
          Server authentication. Esse fugiat tempor in ex sint non cupidatat sint amet tempor minim
          esse nisi. Reprehenderit non occaecat laborum laboris anim labore
          dolore duis consequat officia veniam proident qui. Cupidatat amet ex
          veniam excepteur commodo officia. Incididunt excepteur adipisicing
          elit nisi labore culpa pariatur reprehenderit dolore velit enim
          exercitation ut. Velit quis duis ullamco labore eu ut id id proident
          elit. Duis excepteur ut elit id.
        </p>
      </div>
      <section>
        <details className={styles.outerDetails}>
          <summary className={styles.summary}>
            <div>Saapuminen huoneistolle</div>
          </summary>
          <details className={styles.innerDetails}>
            <summary className={styles.summary}>Autolla</summary>
            <div className={styles.content}>
              <p>
                Autolla pääset perille helposti. Huoneiston edessä on ilmainen
                parkkipaikka. Hae avaimet baaritiskiltä.
              </p>
              <Image
                src="/images/baari.jpg"
                width={405}
                height={403}
                alt="Parking"
              />
            </div>
          </details>
          <details className={styles.innerDetails}>
            <summary className={styles.summary}>Junalla</summary>
            <div className={styles.content}>
              <p>
                Kaupungin rautatieasema on n. puolen kilometri päässä
                huoneistolta.
              </p>
            </div>
          </details>
          <details className={styles.innerDetails}>
            <summary className={styles.summary}>Taksilla</summary>
            <div className={styles.content}>
              <p>Taksilla pääset perille suoraan talon alaoven tekeen.</p>
            </div>
          </details>
        </details>
        <details className={styles.outerDetails}>
          <summary className={styles.summary}>Majoittuminen</summary>
          <details className={styles.innerDetails}>
            <summary className={styles.summary}>Sähköt</summary>
            <div className={styles.content}>
              <p>
                Päävirtakatkaisin on huoneiston sisäpuolella heti oven vieressä.
              </p>
            </div>
          </details>
          <details className={styles.innerDetails}>
            <summary className={styles.summary}>Vesi</summary>
            <div className={styles.content}>
              <p>
                Huoneiston päävesisulku on käytävässä vastapäätä huoneiston ovea
                olevan kaapin sisällä.
              </p>
            </div>
          </details>
        </details>
      </section>
    </main>
  );
}
