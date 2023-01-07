import { useRouter } from "next/router";

import { getPageInfo } from "@utils/functions/komorikoshaCommon";
import styles from "@utils/styles/komorikosha.module.scss";

/**
 * パンくずリストを表示
 */
export default function TopicPath(): JSX.Element {
  const router = useRouter();
  return (
    <p className={styles.topicPath}>
      {getPageInfo(router.asPath).breadcrumb.map((path, index) => {
        return (
          <>
            <a key={index} href={path}>
              {getPageInfo(path).title}
            </a>
            {getPageInfo(router.asPath).breadcrumb.length > index ? "&gt;" : ""}
          </>
        );
      })}
      {getPageInfo(router.asPath).title}
    </p>
  );
}
