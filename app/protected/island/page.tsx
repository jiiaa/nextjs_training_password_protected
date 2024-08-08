"use client";

import { useSession } from "next-auth/react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

export default function Page() {
  const { status } = useSession({ required: true });

  if (status == "loading") {
    return "Loading...";
  }

  return (
    <main>
      <title>The Island | VoWDanger</title>
      <h2>The Island</h2>
      <p>Client protected page.</p>
      <Accordion>
        <AccordionItem key="1" title="Item 1">
          Lorem ipsum dolor sit amet
        </AccordionItem>
        <AccordionItem key="2" title="Item 2">
          Consectetur adipiscing elit
        </AccordionItem>
      </Accordion>
    </main>
  );
}
