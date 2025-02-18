import styles from "./page.module.css";
import { Header } from "@/app/components/home/header";
import { Body } from "@/app/components/home/body";

export default function Home() {

  return (
    <div className={styles.page}>
      <Header />
      <Body />
    </div>
  );
}
