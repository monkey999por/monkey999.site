import { useRouter } from "next/router";

import { globalNavilinks } from "@utils/constant";
import { isRoot } from "@utils/functions/komorikoshaCommon";
import styles from "@utils/styles/komorikosha.module.scss";

/**
 * ヘッダのコンテンツを追加
 */
export default function HeaderItem(): JSX.Element {
  const router = useRouter();
  return (
    <>
      <div className={styles.headerItem}>
        <header className={styles.pageHead}>
          <h1 className={styles.siteTitle}>komorikomasha</h1>
          <p className={styles.catchcopy}>
            What we cannot do alone, we can do together. 3 fun creations that
            give shape to what you want to try.
          </p>
        </header>
        <nav className={styles.globalNavi}>
          <ul>
            <li>
              <a
                className={isRoot(router.asPath) ? styles.current : ""}
                href={globalNavilinks.home}
              >
                home
              </a>
            </li>

            <li>
              <a
                className={
                  globalNavilinks.aboutMe === router.asPath
                    ? styles.current
                    : ""
                }
                href={globalNavilinks.aboutMe}
              >
                about me
              </a>
            </li>
            <li>
              <a
                className={
                  router.asPath.match(/portfolio/g) ? styles.current : ""
                }
                href={globalNavilinks.portfolios}
              >
                portfolios
              </a>
            </li>
            <li>
              <a
                className={
                  globalNavilinks.contact === router.asPath
                    ? styles.current
                    : ""
                }
                href={globalNavilinks.contact}
              >
                contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
