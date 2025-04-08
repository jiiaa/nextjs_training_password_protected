"use client";

import { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";

import clsx from "clsx";
import styles from "./accordion-client.module.scss";
import Image from "next/image";

export default function AccordionClient(
  { title, image, children }: { title: string, image?: string, children?: React.ReactNode }
) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  const Icon = PlusIcon;

  return (
      <div className={styles.accordion}>
        <div onClick={() => handleClick()} className={styles.accordionTitle}>
          <div>
            <Icon className={clsx(styles.icon, {[styles.svgRotated]: isOpen})}/>
            {title}
          </div>
        </div>
        <div className={clsx(styles.accordionContent, {[styles.accordionOpen]: isOpen})}>
          <div className={styles.contentFlex}>
            <div className={styles.contentText}>
              {children}
            </div>
            {image &&
              <div className={styles.contentImage}>
                <Image
                  src={image}
                  width={650}
                  height={400}
                  alt="Image"
                />
              </div>
            }
          </div>
        </div>
      </div>
  )
}