import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import AccordionClient from "@/app/ui/accordion-client";
import styles from "./styles.module.scss";
import Content from "@/app/content/content.json";

export default async function Page() {
  // console.log(Content.alps[0]);

  const cookieStore = await cookies();
  const cookieAuth = cookieStore.get("vowdanger_sand") || null;
  console.log(cookieAuth?.value);

  if (!cookieAuth) {
    redirect("/signin?redirect=/middleware-protected/sand");
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
      <AccordionClient
        title='Urheilumahdollisuudet'
        image="/images/sandboarding.jpg"
      >
        Esse aliqua quis nisi adipisicing ea incididunt esse pariatur adipisicing proident qui elit aliquip eu. Pariatur sit laborum aute est Lorem commodo elit. Magna Lorem sint eiusmod adipisicing qui adipisicing dolore et ex dolor. Reprehenderit cillum cillum sint ullamco reprehenderit. Deserunt duis culpa labore officia nulla. Tempor eu et fugiat reprehenderit non occaecat. Excepteur in excepteur occaecat id consectetur.
      </AccordionClient>
      <AccordionClient
        title="Est amet incididunt commodo ex excepteur minim adipisicing ea sint"
        image=""
      >
        <AccordionClient
          title="Minim incididunt consectetur cillum ullamco reprehenderit laboris voluptate sint enim aliquip reprehenderit"
          image=""
        >
          Pariatur qui sunt duis laboris enim consequat cillum Lorem pariatur velit adipisicing id. Duis nisi non irure laboris ullamco consectetur. Consectetur pariatur enim deserunt fugiat veniam ullamco minim incididunt. Tempor elit non quis et anim esse consectetur exercitation amet nostrud. Anim aliquip pariatur pariatur enim fugiat cupidatat tempor sunt id. In magna dolore ea excepteur fugiat id occaecat ea labore quis aute elit. Minim dolore incididunt commodo sint.
        </AccordionClient>
        <AccordionClient
          title="Labore sit consequat labore quis"
          image=""
        >
          Amet cupidatat dolore aliqua commodo. Cupidatat sit dolor labore velit proident. Magna excepteur velit cillum id dolore duis amet adipisicing sunt ea nisi. Elit laborum et anim ea labore aute quis excepteur dolore nulla amet. Deserunt officia non ad ex sint quis. Ad cupidatat in aliqua anim ut aliquip ipsum mollit exercitation excepteur dolor exercitation ut nulla. Exercitation commodo enim nisi non ullamco id exercitation magna consequat esse do ex commodo.
        </AccordionClient>
      </AccordionClient>
    </main>
  );
}
