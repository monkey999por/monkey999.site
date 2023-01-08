import Link from "next/link";

import Copyright from "@atoms/Copyright";
import PageTitle from "@atoms/PageTitle";
import SampleHead from "@atoms/SampleHead";
import TopicPath from "@atoms/TopicPath";
import Waku from "@atoms/Waku";
import HeaderItem from "@molecules/HeaderItem";
import NewsList from "@molecules/NewsList";
import OtherMakes from "@molecules/OtherMakes";
import Console from "@templates/Console";
import styles from "@utils/styles/component-test.module.scss";

export default function componentTest(): JSX.Element {
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
        <HeaderItem />
      </Waku>
      <Waku>
        <NewsList />
      </Waku>
      <Waku>
        <OtherMakes />
      </Waku>
      <Waku>
        <Console />
      </Waku>
    </div>
  );
}
