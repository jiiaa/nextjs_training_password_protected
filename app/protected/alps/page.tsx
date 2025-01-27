import Image from "next/image";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import { promises as fs } from "fs";
import { verifyJwt } from "@/app/lib/helpers";
import styles from "./styles.module.scss";

export const metadata: Metadata = {
  title: "The Alps",
};

export default async function Page() {
  const file = await fs.readFile(process.cwd() + "/app/content/content.json", "utf8");
  const content = JSON.parse(file);
  // console.log(content.alps);

  const cookieStore = await cookies();
  const cookieAuth = cookieStore.get("vowdanger_alps") || null;

  if (!cookieAuth) {
    redirect("/signin?redirect=/protected/alps");
  }

  const token = verifyJwt(cookieAuth?.value);

  if (token !== "/protected/alps") {
    redirect("/signin?redirect=/protected/alps");
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
          <span>Server authentication. HTML5 accordion. SCSS styles. Title as metadata.</span> Esse fugiat tempor in ex sint non cupidatat sint amet tempor minim
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
                Sint duis sunt voluptate minim minim excepteur esse minim dolor dolor. Id exercitation Lorem in ullamco. Proident incididunt ut duis id minim aliqua aute. Irure cupidatat magna aliquip laborum irure excepteur enim. Et commodo ex ut nisi nisi voluptate duis proident.
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
