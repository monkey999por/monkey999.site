import { memo, useState } from "react";
import React from "react";

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
  HeaderItemMemo.displayName = "HeaderItem";

  const SampleHeadMemo = React.memo((props) => {
    return <SampleHead />;
  });

  const [prefix, setPrefix] = useState("・");
  return (
    <>
      <div className={styles.container}>
        <HeadTitle />
        <canvas className={styles.myCanvas} />
        {/* <SampleHead /> */}
        <SampleHeadMemo />
        <div className={styles.page}>
          <HeaderItemMemo prefix={prefix} />
          トピックパスのプレフィックス
          <input
            className={styles.input_test}
            type='text'
            onChange={(e) => {
              setPrefix(e.target.value);
            }}
          />
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
