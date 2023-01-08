import Copyright from "@atoms/Copyright";
import HeadTitle from "@atoms/HeadTitle";
import SampleHead from "@atoms/SampleHead";
import TopicPath from "@atoms/TopicPath";
import HeaderItem from "@molecules/HeaderItem";

import styles from "./PageTemplate.module.scss";

export default function PageTemplate(props: any): JSX.Element {
  return (
    <div className={styles.container}>
      <HeadTitle />
      <canvas className={styles.myCanvas} />
      <SampleHead />
      <div className={styles.page}>
        <HeaderItem />
        <TopicPath />
        {/* main content */}
        {props.children}
        <p className={styles.toPageTop}>
          <a href='#top'>set to top</a>
        </p>
        <footer className={styles.pageFoot}>
          <Copyright />
        </footer>
      </div>
    </div>
  );
}
