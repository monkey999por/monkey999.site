import { memo } from "react";

import Copyright from "@atoms/Copyright/Copyright";
import HeadTitle from "@atoms/HeadTitle/HeadTitle";
import SampleHead from "@atoms/SampleHead/SampleHead";
import TopicPath from "@atoms/TopicPath/TopicPath";
import HeaderItem, { Props } from "@molecules/HeaderItem/HeaderItem";

import styles from "./PageTemplate.module.scss";

export default function PageTemplate(props: any): JSX.Element {
  console.log(`render component PageTemplate`);

  const HeaderItemMemo = memo<Props>(function HeaderItemMemo({ prefix }) {
    return <HeaderItem prefix={prefix} />;
  });

  const SampleHeadMemo = memo(function SampleHeadMemo() {
    return <SampleHead />;
  });

  return (
    <>
      <div className={styles.container}>
        <HeadTitle />
        <canvas className={styles.myCanvas} />
        {/* <SampleHead /> */}
        <SampleHeadMemo />
        <div className={styles.page}>
          <HeaderItemMemo prefix='' />
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
    </>
  );
}
