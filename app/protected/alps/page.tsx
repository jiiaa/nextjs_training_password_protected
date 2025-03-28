import Image from "next/image";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import { promises as fs } from "fs";

import Accordion from "@/app/ui/htmlready/accordion";
import styles from "./styles.module.scss";
import { verifyJwt } from "@/app/lib/helpers";
import { ContentAlps } from "@/types/types";

export const metadata: Metadata = {
  title: "The Alps",
};

export default async function Page() {
  const file = await fs.readFile(process.cwd() + "/app/content/content.json", "utf8");
  const content = JSON.parse(file);
  const aplsContent = (content as ContentAlps).alps;

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
          <span>HTML5 accordion. SCSS styles. Title as metadata.</span> Esse fugiat tempor in ex sint non cupidatat sint amet tempor minim
          esse nisi. Reprehenderit non occaecat laborum laboris anim labore
          dolore duis consequat officia veniam proident qui. Cupidatat amet ex
          veniam excepteur commodo officia. Incididunt excepteur adipisicing
          elit nisi labore culpa pariatur reprehenderit dolore velit enim
          exercitation ut. Velit quis duis ullamco labore eu ut id id proident
          elit. Duis excepteur ut elit id.
        </p>
      </div>
      <section>
        {/* Map the content, max depth 2 */}
        {aplsContent.map((item) => (
          <Accordion
            key={item.title}
            title={item.title}
            image={item.image}
            instructions={item.instructions}
            subAccordion={item.subContent && item.subContent.map((element) => (
              <Accordion
                key={element.title}
                title={element.title}
                image={element.image}
                instructions={element.instructions}
                subAccordion
              />
            ))}
          />
        ))}
      </section>
    </main>
  );
}
