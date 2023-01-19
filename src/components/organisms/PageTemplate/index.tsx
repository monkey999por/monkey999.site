import { memo } from "react";

import Copyright from "@atoms/Copyright";
import HeadTitle from "@atoms/HeadTitle";
import SampleHead from "@atoms/SampleHead";
import TopicPath from "@atoms/TopicPath";
import HeaderItem, { Props } from "@molecules/HeaderItem";

import styles from "./PageTemplate.module.scss";

export default function PageTemplate(props: any): JSX.Element {
  console.log(`render component PageTemplate`);

  const HeaderItemMemo = memo<Props>(({ prefix }) => {
    return <HeaderItem prefix={prefix} />;
  });
  HeaderItemMemo.displayName = "HeaderItemMemo";

  // ESLint Error: Component definition is missing display name
  // https://qiita.com/acro5piano/items/1cffa8c6b52a36e6bb73
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
