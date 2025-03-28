import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import AccordionClient from "@/app/ui/handcrafted/accordion-client";
import styles from "./styles.module.scss";
import { ContentSand } from "@/types/types";

import content from "@/app/content/content.json";

export default async function Page() {
  const sandContent = (content as ContentSand).sand;
  const cookieStore = await cookies();
  const cookieAuth = cookieStore.get("vowdanger_sand") || null;

  if (!cookieAuth) {
    redirect("/signin?redirect=/protected/sand");
  }

  return (
    <main>
      <title>The Sand | VoWDanger</title>
      <h1>The Sand</h1>
      <div>
        <p className={styles.address}>
          Asunnon osoite: {" "}
          <span>Palm Jumeirah, Dubai United Arab Emirates</span>
        </p>
        <p className={styles.text}>
          <span>Accordion made of basic HTML elements and SCSS.</span> Ex incididunt velit voluptate aliquip aute do ipsum. Nostrud amet excepteur duis aliquip et aute occaecat commodo laboris deserunt velit ad occaecat quis. In velit minim in ut exercitation minim ex Lorem cupidatat deserunt dolore sint laboris aliqua. Culpa tempor tempor officia dolore est incididunt. Reprehenderit nisi aliqua consequat minim sunt eu amet ipsum proident occaecat.
        </p>
      </div>
      <section>
        {/* Map the content, max depth 2 */}
        {sandContent.map((item) => (
          <AccordionClient
            key={item.title}
            title={item.title}
            image={item.image}
          >
            {item.instructions}
            {item.subContent && item.subContent.map((element) => (
                <AccordionClient
                  key={element.title}
                  title={element.title}
                  image={element.image}
                >
                  {element.instructions}
                </AccordionClient>
            ))}
          </AccordionClient>
        ))}
      </section>
    </main>
  );
}
