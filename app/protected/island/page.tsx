import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import AccordionHeroUi from "@/app/ui/nextui/accordion-nextui";

import { verifyJwt } from "@/app/lib/helpers";

import content from "@/app/content/content.json";
import { ContentIsland } from "@/types/types";

export default async function Page() {
  const islandContent = (content as ContentIsland).island;
  const cookieStore = await cookies();
  const cookieAuth = cookieStore.get("vowdanger_island") || null;

  if (!cookieAuth) {
    redirect("/signin?redirect=/protected/island");
  }

  const token = verifyJwt(cookieAuth?.value);

  if (token !== "/protected/island") {
    redirect("/signin?redirect=/protected/island");
  }

  const itemClasses = {
    base: "bg-my-blue text-white border border-my-orange mb-4",
    title: "text-my-orange uppercase",
    subtitle: "text-my-orange",
    inidicator: "stroke-white",
  };

  return (
    <main>
      <title>The Island | VoWDanger</title>
      <h1>The Island</h1>
      <div className="text-white">
        <p className="mb-4">Huvilan osoite:{" "}
          <span className="font-extrabold">Mökkitie 1234, 45678 Saari, Suomi</span>
        </p>
        <p className="mb-8 text-justify">
          <span className="italic">Client authentication. NextUI accordion. Tailwind styles. Title element inside main element.</span> Cupidatat mollit laborum nostrud deserunt irure dolore anim deserunt. Non et officia commodo dolore pariatur velit labore quis ipsum est. Labore excepteur incididunt sint cupidatat tempor ad quis consectetur dolor. Ut laboris sit laboris deserunt consectetur tempor mollit elit exercitation nostrud reprehenderit fugiat.
        </p>
      </div>
      <section>
        {/* Map the content, max depth 2 */}
        {islandContent.map((item) => (
          <AccordionHeroUi
            key={item.title}
            title={item.title}
            subtitle={item.subtitle}
            instructions={item.instructions}
            image={item.image}
            subAccordion={item.subContent && item.subContent.map((element) => (
              <AccordionHeroUi
                key={element.title}
                title={element.title}
                subtitle={element.subtitle}
                instructions={element.instructions}
                image={element.image}
              />
            ))}
          />
        ))}
      </section>
    </main>
  );
}
