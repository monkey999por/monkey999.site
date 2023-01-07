import Image from "next/image";

import Copyright from "@atoms/Copyright";
import HeadTitle from "@atoms/HeadTitle";
import SampleHead from "@atoms/SampleHead";
import TopicPath from "@atoms/TopicPath";
import HeaderItem from "@molecules/HeaderItem";
import NewsList from "@molecules/NewsList";
import OtherMakes from "@molecules/OtherMakes";
import styles from "@utils/styles/komorikosha.module.scss";

export default function komorikosha() {
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
            <section className={styles.mainVisual}>
              <div className={styles.mainVisualText}>
                <h1>Cafe Debut</h1>
                <p>
                  baser CMS Cafe site theme
                  <br />
                  Baser CMS Theme Contest 2012 Restaurant Theme Award (Click
                  here for award results ）
                </p>
              </div>
              <Image
                src='/images/mainVisual_img_01.jpg'
                alt='no content'
                width={980}
                height={500}
              />
            </section>
            <div className={styles.portfolioIndex}>
              <article>
                <a href='portfolio/03.html'>
                  <Image
                    src='/images/mainVisual_img_03.jpg'
                    alt='no content'
                    width={300}
                    height={163}
                  />
                  <h2>Wizard who wants to be a grasshopper</h2>
                </a>
                <p>
                  Comomo Hiromasya&aposs Web-based picture book password is to
                  become a grasshopper!
                </p>
              </article>
              <article>
                <a href='portfolio/02.html'>
                  <Image
                    src='/images/mainVisual_img_02.jpg'
                    alt='no content'
                    width={300}
                    height={163}
                  />
                  <h2>WordPress design workbook</h2>
                </a>
                <p>
                  A book for those who want to create a full-fledged website
                  with WordPress, co-authored by Komomo and Hiromasa
                </p>
              </article>
              <article>
                <a href='portfolio/01.html'>
                  <Image
                    src='/images/mainVisual_img_01.jpg'
                    alt='no content'
                    width={300}
                    height={163}
                  />
                  <h2>Cafe Debut</h2>
                </a>
                <p>
                  Won the restaurant theme award in 2012 general theme theme
                  contest for cafe site of baserCMS
                </p>
              </article>
            </div>
            <section className={styles.news}>
              <h2>News</h2>
              <table>
                <tbody>
                  <tr>
                    <th>
                      <time dateTime='2013-10-01'>2013/10/1</time>
                    </th>
                    <td>
                      Comomo and Moriko are writing a book titled "HTML/CSS
                      textbook (tentative title)". looking forward to.
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <time dateTime='2013-10-01'>2013-10-1</time>
                    </th>
                    <td>
                      Comomo, Moriko, and Hiromasa have opened a website called
                      "komorikomash".
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
            <div className={styles.pageBodySub}>
              <OtherMakes />
              <NewsList />
            </div>
          </div>
          <p className={styles.toPageTop}>
            <a href='#page'>set to top</a>
          </p>
          <Copyright />
        </div>
      </div>
    </>
  );
}
