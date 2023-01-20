import Image from "next/image";

import PageTitle from "@atoms/PageTitle/PageTitle";
import NewsList from "@molecules/NewsList/NewsList";
import OtherMakes from "@molecules/OtherMakes/OtherMakes";
import PageTemplate from "@organisms/PageTemplate/PageTemplate";

import styles from "./PortfolioHome.module.scss";

export default function Portfolio(): JSX.Element {
  return (
    <PageTemplate>
      <div className={styles.pageBody}>
        <div className={styles.pageBodyMain}>
          <PageTitle />
          <section>
            <article className={styles.articleList}>
              <a href='portfolio/03'>
                <div className={styles.articleListText}>
                  <h1>Wizard who wants to be a grasshopper</h1>
                  <p className='text-overflow-lines'>
                    Web-based picture book by Comomo Hiroshima <br />
                    The password is to become a grasshopper!
                  </p>
                </div>
                <div className={`${styles.div} ${styles.articleImage}`}>
                  <Image
                    src='/images/portfolio/index_03.jpg'
                    alt='no content'
                    width={300}
                    height={163}
                  />
                </div>
              </a>
            </article>
            <article className={styles.articleList}>
              <a href='portfolio/02'>
                <div className={styles.articleListText}>
                  <h1>WordPress design workbook</h1>
                  <p className='text-overflow-lines'>
                    A book for those who want to create a full-fledged website
                    with WordPress, co-authored by Komomo and Hiromasa
                  </p>
                </div>
                <div className={styles.articleListImage}>
                  <Image
                    src='/images/portfolio/index_02.jpg'
                    alt='no content'
                    width={300}
                    height={163}
                  />
                </div>
              </a>
            </article>
            <article className={styles.articleList}>
              <a href='portfolio/01'>
                <div className={styles.articleListText}>
                  <h1>Cafe Debut</h1>
                  <p className='text-overflow-lines'>
                    Generic theme for cafe site of baserCMS
                    <br />
                    Theme Contest 2012 Restaurant Theme Award Winner
                  </p>
                </div>
                <div className={styles.articleListImage}>
                  <Image
                    src='/images/portfolio/index_01.jpg'
                    alt='no content'
                    width={300}
                    height={163}
                  />
                </div>
              </a>
            </article>
          </section>
        </div>
        <div className={styles.pageBodySub}>
          <OtherMakes />
          <NewsList />
        </div>
      </div>
    </PageTemplate>
  );
}