import Link from "next/link";

import Copyright from "@atoms/Copyright/Copyright";
import PageTitle from "@atoms/PageTitle/PageTitle";
import SampleHead from "@atoms/SampleHead/SampleHead";
import TopicPath from "@atoms/TopicPath/TopicPath";
import Waku from "@atoms/Waku/Waku";
import HeaderItem from "@molecules/HeaderItem/HeaderItem";
import NewsList from "@molecules/NewsList/NewsList";
import OtherMakes from "@molecules/OtherMakes/OtherMakes";
import PageTemplate from "@organisms/PageTemplate/PageTemplate";
import styles from "@styles/component-test.module.scss";

export const info = {
  description: "fairu-1",
  path: "./dkdkfj",
};

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
