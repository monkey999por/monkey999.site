import Link from "next/link";

import Copyright from "@atoms/Copyright";
import PageTitle from "@atoms/PageTitle";
import SampleHead from "@atoms/SampleHead";
import TopicPath from "@atoms/TopicPath";
import Waku from "@atoms/Waku";
import HeaderItem from "@molecules/HeaderItem";
import NewsList from "@molecules/NewsList";
import OtherMakes from "@molecules/OtherMakes";
import PageTemplate from "@organisms/PageTemplate";
import styles from "@utils/styles/component-test.module.scss";

export default function componentTest(): JSX.Element {
  console.log(`render page componentTest`);
  return (
    <div className={styles.container}>
      <Link href={"/"}>←back to top</Link>
      <Waku>
        <Copyright />
      </Waku>
      <Waku>
        <PageTitle />
      </Waku>
      <Waku>
        <SampleHead />
      </Waku>
      <Waku>
        <TopicPath />
      </Waku>
      <Waku>
        <PageTitle />
      </Waku>
      <Waku>
        <HeaderItem prefix='*' />
      </Waku>
      <Waku>
        <NewsList />
      </Waku>
      <Waku>
        <OtherMakes />
      </Waku>
      <Waku>
        <PageTemplate />
      </Waku>
      {/* <Waku>
        <PageTemplate />
      </Waku> */}
      {/* <Waku>
        <Console />
      </Waku> */}
    </div>
  );
}
