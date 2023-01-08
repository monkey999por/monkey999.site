import Copyright from "@atoms/Copyright";
import HeadTitle from "@atoms/HeadTitle";
import PageTitle from "@atoms/PageTitle";
import SampleHead from "@atoms/SampleHead";
import TopicPath from "@atoms/TopicPath";
import HeaderItem from "@molecules/HeaderItem";
import NewsList from "@molecules/NewsList";
import styles from "@utils/styles/komorikosha.module.scss";

export default function about() {
  return (
    <>
      <div className={styles.container}>
        <HeadTitle />
        <canvas className={styles.myCanvas} />
        <SampleHead />
        <div className={styles.page}>
          <HeaderItem />
          <TopicPath />
          <div className={styles.pageBody}>
            <div className={styles.pageBodyMain}>
              <article className={styles.articleDetail}>
                <PageTitle />
                <div className={styles.imageContiner}>
                  <img src='/images/about/img_01.png' alt='no content' />
                </div>
                <p>I don&apos;`t like that kind of thing. I wish I could</p>
                <p>
                  If we all work together, we will surely be able to do what we
                  couldn&apos;`t do before.
                </p>
                <p>
                  Even when it&apos;`s a little tough, I can do my best with my
                  friends. So, always think of something fun, do it, and make
                  it.
                </p>
                <p>
                  On this site, we introduce things made by the members of
                  Comomo, Moriko, and Hiroshima.
                </p>
              </article>
            </div>
            <div className={styles.pageBodySub}>
              {/* <OtherMakes /> */}
              <NewsList />
            </div>
          </div>
          <p className={styles.toPageTop}>
            <a href='#top'>set to top</a>
          </p>
          <footer className={styles.pageFoot}>
            <Copyright />
          </footer>
        </div>
      </div>
    </>
  );
}
