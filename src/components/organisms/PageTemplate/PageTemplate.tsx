import { memo } from "react";

import Copyright from "@atoms/Copyright/Copyright";
import HeadTitle from "@atoms/HeadTitle/HeadTitle";
import SampleHead from "@atoms/SampleHead/SampleHead";
import TopicPath from "@atoms/TopicPath/TopicPath";
import HeaderItem, {
  Props as HeaderItemProps,
} from "@molecules/HeaderItem/HeaderItem";
import { HasChildren } from "@utils/types/PropsUtilType";

import styles from "./PageTemplate.module.scss";

type Props = HasChildren;

export default function PageTemplate(props: Props): JSX.Element {
  console.log(`render component PageTemplate`);
  console.log(props);

  const HeaderItemMemo = memo<HeaderItemProps>(function HeaderItemMemo({
    prefix,
  }) {
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
