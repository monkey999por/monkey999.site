import Image from "next/image";

import Copyright from "@atoms/Copyright";
import HeadTitle from "@atoms/HeadTitle";
import PageTitle from "@atoms/PageTitle";
import SampleHead from "@atoms/SampleHead";
import TopicPath from "@atoms/TopicPath";
import HeaderItem from "@molecules/HeaderItem";
import NewsList from "@molecules/NewsList";
import OtherMakes from "@molecules/OtherMakes";
import styles from "@utils/styles/komorikosha.module.scss";

export default function portfolio02(): JSX.Element {
  return (
    <div>
      <HeadTitle />
      <canvas className={styles.myCanvas} />
      <SampleHead />
      <div className={styles.page}>
        <HeaderItem />
        <TopicPath />
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
        <p className={styles.toPageTop}>
          <a href='#top'>set to top</a>
        </p>
        <Copyright />
      </div>
    </div>
  );
}
