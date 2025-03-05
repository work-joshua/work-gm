import styles from "./page.module.css";
// import Body from "@/app/components/home/body";
import Home from "@/app/components/home/home";

export default function Page() {

  return (
    <div className={styles.page}>
      <Home />
    </div>
  );
}
