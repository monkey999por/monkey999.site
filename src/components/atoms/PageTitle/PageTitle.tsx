import { useRouter } from "next/router";

import { getPageInfo } from "@utils/functions/komorikoshaCommon";

import styles from "./PageTitle.module.scss";

/**
 * add page title
 */
export default function PageTitle(): JSX.Element {
  console.log(`render component PageTitle`);
  const router = useRouter();
  return (
    <h1 className={styles.pageTitle}>{getPageInfo(router.asPath)?.title}</h1>
  );
}
