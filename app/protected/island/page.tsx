"use client";

import Image from "next/image";
import { useSession } from "next-auth/react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

export default function Page() {
  const { status } = useSession({ required: true });

  const itemClasses = {
    base: "bg-my-blue text-white border border-my-orange mb-4",
    title: "text-my-orange uppercase",
    subtitle: "text-my-orange",
    inidicator: "stroke-white",
  };

  if (status == "loading") {
    return "Loading...";
  }

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
      <Accordion variant="splitted" itemClasses={itemClasses}>
        <AccordionItem key="1" className="pb-2" title="Lorem ipsum tempor quis" subtitle="Occaecat tempor nulla nostrud cupidatat reprehenderit irure nulla.">
          <div className="flex flex-col md:flex-row gap-x-4 gap-y-4">
            <div className="basis-1/2">
              Non sint do dolor nulla commodo nisi est voluptate aliquip duis amet eu adipisicing est. Exercitation dolor sint mollit quis ea fugiat enim labore et aute eu est. Consectetur ea ipsum labore occaecat est ipsum amet velit. Esse deserunt proident do aliqua consectetur veniam non ad.
            </div>
            <div className="grow">
              <Image src="/images/saari.jpg" width={793} height={595} alt="inlet" />
            </div>
          </div>
        </AccordionItem>
        <AccordionItem key="2" title="Quis velit ex laboris commodo" subtitle="Et aliquip voluptate quis fugiat anim deserunt fugiat.">
        <Accordion variant="splitted" itemClasses={itemClasses}>
        <AccordionItem key="1" className="pb-2" title="Lorem ipsum tempor quis" subtitle="Occaecat tempor nulla nostrud cupidatat reprehenderit irure nulla.">
          <div className="flex flex-col md:flex-row gap-x-4 gap-y-4">
            <div className="basis-1/2">
              Non sint do dolor nulla commodo nisi est voluptate aliquip duis amet eu adipisicing est. Exercitation dolor sint mollit quis ea fugiat enim labore et aute eu est. Consectetur ea ipsum labore occaecat est ipsum amet velit. Esse deserunt proident do aliqua consectetur veniam non ad.
            </div>
            <div className="grow">
              <Image src="/images/saari.jpg" width={793} height={595} alt="inlet" />
            </div>
          </div>
        </AccordionItem>
        <AccordionItem key="2" title="Quis velit ex laboris commodo" subtitle="Et aliquip voluptate quis fugiat anim deserunt fugiat.">
          Mollit cillum in deserunt esse esse aute ut laborum voluptate et. Dolore labore ex aute laboris. Laboris magna occaecat pariatur nulla minim excepteur officia. Quis non adipisicing ad adipisicing. Pariatur proident esse mollit veniam consectetur sunt laborum voluptate veniam consequat. Est est laboris est culpa reprehenderit voluptate.
        </AccordionItem>
      </Accordion>
        </AccordionItem>
      </Accordion>
    </main>
  );
}
