import PageTitle from "@atoms/PageTitle";
import NewsList from "@molecules/NewsList";
import OtherMakes from "@molecules/OtherMakes";
import PageTemplate from "@organisms/PageTemplate";

import styles from "./Portfolio02.module.scss";

export default function Portfolio02(): JSX.Element {
  return (
    <PageTemplate>
      <div className={styles.pageBody}>
        <div className={styles.pageBodyMain}>
          <article className={styles.articleDetail}>
            <header className={styles.articleDetailHead}>
              <PageTitle />
              <img src='/images/portfolio/img_02_01.jpg' alt='no content' />
              <p>
                A Primer on WordPress Theme CustomizationBuy on
                <br />
                <a href='#top'>Amazon here</a>
              </p>
            </header>
            <section className={styles.articleDetailBody}>
              <section>
                <h2 className={styles["heading-typeA"]}>
                  Practical guide for web production workflow
                </h2>
                <p>
                  &quot;WordPress Design Workbook&quot; is an introduction to
                  WordPress theme customization written by Comomo and Hiromasya.
                </p>
                <p>
                  Based on the two sample sites, we will start from working in
                  the development environment according to the actual site
                  production workflow, and we will teach you practical things
                  that are necessary for client work, such as migration to the
                  production server and backup methods. We post a lot of
                  know-how.
                </p>
                <table>
                  <caption>Production manager</caption>
                  <tbody>
                    <tr>
                      <th>Comomo</th>
                      <td>
                        Of the WordPress implementation of the sample site,
                        responsible for the PHP program part that seems
                        difficult Writing a book
                      </td>
                    </tr>
                    <tr>
                      <th>Hiroshima</th>
                      <td>
                        Of the WordPress implementation of the sample site,
                        responsible for the PHP program part that seems
                        difficult Writing a book
                      </td>
                    </tr>
                  </tbody>
                </table>
              </section>
              <section>
                <h3 className={styles["heading-typeB"]}>
                  For those who want to build up the basics of WordPress
                  properly
                </h3>
                <p>
                  I wrote it with the goal of &quot;knowing the design
                  philosophy of WordPress and being able to use WordPress
                  flexibly&quot; when a web designer creates a site as a
                  business.
                </p>
                <p>
                  I would be happy if you could not only create a casual
                  website, but also take another step into WordPress and apply
                  it to what you want to do.
                </p>
                <img src='/images/portfolio/img_02_02.jpg' alt='no content' />
              </section>
              <section>
                <h3 className={styles["heading-typeB"]}>
                  I want my web designer girl to read it
                </h3>
                <p>
                  One of the two sample sites is the site of a real crepe shop
                  &quot; nino &quot; in Sapporo.
                  <br />
                  It would be nice if a girl who is a web designer could read
                  while thinking that she wants to eat crepes (^ ^)
                </p>
                <img src='/images/portfolio/img_02_03.jpg' alt='no content' />
              </section>
            </section>
            <footer className={styles.articleDetailFoot}>
              <section>
                <h2 className={styles["heading-typeC"]}>relation link(h2)</h2>
                <ul>
                  <li>
                    <a href='ok'>
                      {" "}
                      Amazon (WordPress Design Workbook 3.4 compatible)
                    </a>
                  </li>
                  <li>
                    <a href='ok'>
                      Support page for WordPress Design Workbook 3.4
                    </a>
                  </li>
                  <li>
                    <a href='ok'> Sotec Co., Ltd.</a>
                  </li>
                  <li>
                    <a href='ok'>
                      {" "}
                      Comomo&apos;s preface: I wrote &quot;WordPress Design
                      Workbook 3.4compatible&quot;!
                    </a>
                  </li>
                  <li>
                    <a href='ok'>
                      Postscript of Hiroshima: I wrote &quot;WordPress Design
                      Workbook 3.4 compatible&quot;!
                    </a>
                  </li>
                </ul>
              </section>
              <aside className={styles.creditUnit}>
                <p>shooting cooperation</p>
                <h2 className={styles["heading-typeC"]}>nino</h2>
                <p>
                  Sapporo-shi Toyohira-ku Tsukisamuhigashi 2-jo 6-chome 1-17
                </p>
                <ul>
                  <li>
                    <a href='http://www.ninocrepe.info/'>
                      http://www.ninocrepe.info/
                    </a>
                  </li>
                </ul>
                <p>
                  A crepe shop that also appears as a sample site for WordPress
                  design workbooks. The crepe dough with okara is fluffy and
                  delicious.
                </p>
              </aside>
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
