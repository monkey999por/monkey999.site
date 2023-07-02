import Image from "next/image";
import { ReactElement } from "react";

import PageTitle from "@atoms/PageTitle/PageTitle";
import NewsList from "@molecules/NewsList/NewsList";
import PageTemplate from "@organisms/PageTemplate/PageTemplate";

import styles from "./About.module.scss";

export default function About(): ReactElement {
  return (
    <>
      <PageTemplate>
        <div className={styles.pageBody}>
          <div className={styles.pageBodyMain}>
            <article className={styles.articleDetail}>
              <PageTitle />
              <div className={styles.imageContiner}>
                <div className={styles.imageWrap}>
                  <Image
                    className={styles.image}
                    src='/images/about/img_01.png'
                    alt='no content'
                    fill
                  />
                </div>
              </div>
              <p>I don&apos;`t like that kind of thing. I wish I could</p>
              <p>
                If we all work together, we will surely be able to do what we
                couldn&apos;`t do before.
              </p>
              <p>
                Even when it&apos;`s a little tough, I can do my best with my
                friends. So, always think of something fun, do it, and make it.
              </p>
              <p>
                On this site, we introduce things made by the members of Comomo,
                Moriko, and Hiroshima.
              </p>
            </article>
          </div>
          <div className={styles.pageBodySub}>
            {/* <OtherMakes /> */}
            <NewsList />
          </div>
        </div>
      </PageTemplate>
    </>
  );
}
