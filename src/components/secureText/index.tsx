import React from "react";
import styles from "./styles.module.css";

export const SecureText = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const text = children
    ?.toString()
    .split("")
    .map((item, idx) => (
      <p key={item+idx} aria-label={item} className={styles.item_container}>
        <span className={styles.secured_item}>{item}</span>
        <span className={styles.item_mask}>{item}</span>
      </p>
    ));

  return <div className={styles.secured_text}>{text}</div>;
};
