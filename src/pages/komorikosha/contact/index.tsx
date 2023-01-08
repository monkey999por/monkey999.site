import Copyright from "@atoms/Copyright";
import HeadTitle from "@atoms/HeadTitle";
import PageTitle from "@atoms/PageTitle";
import SampleHead from "@atoms/SampleHead";
import TopicPath from "@atoms/TopicPath";
import HeaderItem from "@molecules/HeaderItem";
import NewsList from "@molecules/NewsList";
import styles from "@utils/styles/komorikosha.module.scss";

export default function contact() {
  return (
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
              <p>
                Opinions and questions about this site are accepted from the
                contact form.
                <br />
              </p>
              <div className={styles.contactButton}>
                <p>contact formbotton</p>
              </div>
              <div className={styles.border} />
              <h3 className='heading-typeB'>Comomo (Tomoyo Takahashi)</h3>
              <ul>
                <li>
                  Blog <a href='d'>http://cat-speak.net</a>
                </li>
                <li>
                  twitter <a href='dd'>@komomoaichi</a>
                </li>
              </ul>
              <h3 className='heading-typeB'>Moriko (Chikako Mori)</h3>
              <ul>
                <li>
                  ブログ <a href='ss'>http://mori-ko.tumblr.com/</a>
                </li>
                <li>
                  twitter <a href='sss'>@mori_ko</a>
                </li>
              </ul>
              <h3 className='heading-typeB'>Hiroshima (Hiromasa Tanaka)</h3>
              <ul>
                <li>
                  ブログ <a href='ss'>http://another.maple4ever.net/</a>
                </li>
              </ul>
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
      {/* CreateJSのライブラリー読み込み */}
      {/* ParticleJSのライブラリー読み込み */}
    </div>
  );
}
