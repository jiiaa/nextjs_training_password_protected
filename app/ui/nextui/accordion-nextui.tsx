import Image from "next/image";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

export default function AccordionHeroUi({
  title,
  subtitle,
  instructions,
  image,
  subAccordion,
}: {
  title: string,
  subtitle?: string,
  instructions?: string,
  image?: string,
  subAccordion?: React.ReactNode,
}) {
  const itemClasses = {
    base: "bg-my-blue text-white border border-my-orange mb-4",
    title: "text-my-orange uppercase",
    subtitle: "text-my-orange",
    inidicator: "stroke-white",
  };

  return (
    <Accordion variant="splitted" itemClasses={itemClasses}>
      <AccordionItem key="1" className="pb-2" title={title} subtitle={subtitle}>
        <div className="flex flex-col md:flex-row gap-x-4 gap-y-4">
          {instructions &&
            <div className="basis-1/2">
              {instructions}
            </div>
          }
          {image &&
            <div className="grow">
              <Image src={image} width={793} height={595} alt="inlet" />
            </div>
          }
        </div>
        {subAccordion}
      </AccordionItem>
    </Accordion>
  );
}