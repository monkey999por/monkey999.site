import Image from "next/image";

import PageTitle from "@atoms/PageTitle/PageTitle";
import NewsList from "@molecules/NewsList/NewsList";
import OtherMakes from "@molecules/OtherMakes/OtherMakes";
import PageTemplate from "@organisms/PageTemplate/PageTemplate";

import styles from "./Portfolio03.module.scss";

export default function Portfolio03(): JSX.Element {
  return (
    <PageTemplate>
      <div className={styles.pageBody}>
        <div className={styles.pageBodyMain}>
          <article className={styles.articleDetail}>
            <header className={styles.articleDetailHead}>
              <PageTitle />
              <div className={styles.imageWrap}>
                <Image
                  src='/images/portfolio/img_03_01.jpg'
                  alt='no content'
                  fill
                />
              </div>
              <p>
                Web-based picture book
                <br />
                <a href='#top'>A wizard who wants to be a grasshopper</a>
              </p>
            </header>
            <section className={styles.articleDetailBody}>
              <section>
                <h2 className={styles["heading-typeA"]}>
                  The password is to become a grasshopper!
                </h2>
                <p>
                  Hiromasya, who wants to be a light novel author, and Komomo,
                  who wants to be an illustrator, have the same interests and
                  decided to start by making a picture book. The password is to
                  become a grasshopper! Well, anyway, please read the picture
                  book (^ ^)
                </p>
                <table>
                  <caption>Production manager</caption>
                  <tbody>
                    <tr>
                      <th>komomo</th>
                      <td>Huh</td>
                    </tr>
                    <tr>
                      <th>hiroshama</th>
                      <td> Story, JavaScript, etc.</td>
                    </tr>
                  </tbody>
                </table>
              </section>
              <section>
                <h3 className={styles["heading-typeB"]}>
                  Web-based picture book using parallax effect
                </h3>
                <p>
                  In producing the picture book, Hiroshima tried JavaScript for
                  the first time. I explain how to make it on my blog, so if you
                  are interested, please see this article .
                </p>
                <div className={styles.imageWrap}>
                  <Image
                    src='/images/portfolio/img_03_02.jpg'
                    alt='no content'
                    fill
                  />
                </div>
              </section>
            </section>
            <footer className={styles.articleDetailFoot}>
              <section>
                <h2 className={styles["heading-typeC"]}>relation link</h2>
                <ul>
                  <li>
                    <a href='ok'> Wizard who wants to be a grasshopper</a>
                  </li>
                  <li>
                    <a href='ok'>
                      {" "}
                      Hiroshima&apos;s article: canvas and web trick book
                    </a>
                  </li>
                </ul>
              </section>
            </footer>
          </article>
        </div>
        <div className={styles.pageBodySub}>
          <OtherMakes />
          <NewsList />
        </div>
      </div>
    </PageTemplate>
  );
}
