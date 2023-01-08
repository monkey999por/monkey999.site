import { useRouter } from "next/router";

import { getPageInfo } from "@utils/functions/komorikoshaCommon";
import styles from "@utils/styles/komorikosha.module.scss";

/**
 * パンくずリストを表示
 */
export default function TopicPath(): JSX.Element {
  console.log(`render component TopicPath`);
  const router = useRouter();
  return (
    <p className={styles.topicPath}>
      {getPageInfo(router.asPath).breadcrumb.map((path, index) => {
        return (
          <span key={path}>
            <a href={path}>{getPageInfo(path).title}</a>
            {getPageInfo(router.asPath).breadcrumb.length > index ? " > " : ""}
          </span>
        );
      })}
      {getPageInfo(router.asPath).title}
    </p>
  );
}
