import Image from "next/image";

import PageTitle from "@atoms/PageTitle/PageTitle";
import NewsList from "@molecules/NewsList/NewsList";
import OtherMakes from "@molecules/OtherMakes/OtherMakes";
import PageTemplate from "@organisms/PageTemplate/PageTemplate";

import styles from "./Portfolio01.module.scss";

export default function Portfolio01(): JSX.Element {
  return (
    <PageTemplate>
      <div className={styles.pageBody}>
        <div className={styles.pageBodyMain}>
          <article className={styles.articleDetail}>
            <header className={styles.articleDetailHead}>
              <PageTitle />
              <div className={styles.imageWrap}>
                <Image
                  src='/images/portfolio/img_01_01.jpg'
                  alt='no content'
                  fill
                />
              </div>
              <p>
                baser CMS Cafe site theme
                <br />
                Baser CMS Theme Contest 2012 Restaurant Theme Award (
                <a href='sample'>Click here</a> for award results )
              </p>
            </header>
            <section className={styles.articleDetailBody}>
              <section>
                <h2 className={styles["heading-typeA"]}>
                  A cafe site theme that you can start right now!
                </h2>
                <p>
                  baserCMS is a cake PHP-based domestic CMS with the slogan
                  &quot;Perfect for corporate sites&quot;. Cafe Debut was
                  created by Team Komorikomasha to enter the BaseCMS Theme
                  Contest 2012.
                </p>
                <p>
                  After installing baserCMS and initializing the Cafe Debut
                  theme, all you have to do is take a photo on Instagram on your
                  smartphone.
                </p>
                <p>
                  This is a photolog-style baserCMS theme that allows you to
                  quickly create a wonderful cafe site with stylish Instagram
                  photos.
                </p>
                <table>
                  <caption>in charge of production</caption>
                  <tbody>
                    <tr>
                      <th>komomo</th>
                      <td>
                        In charge of planning, design, baserCMS theme base
                        integration
                      </td>
                    </tr>
                    <tr>
                      <th>moriko</th>
                      <td>HTML/CSS coding</td>
                    </tr>
                    <tr>
                      <th>hiroshama</th>
                      <td>
                        Debut was created by Team Komorikomasha to enter the
                        BaseCMS Theme Contest 2012.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </section>
              <section>
                <h3 className={styles["heading-typeB"]}>
                  Link with Instagram via plug-in
                </h3>
                <figure>
                  <div className={styles.imageWrap}>
                    <Image
                      src='/images/portfolio/img_01_02.jpg'
                      alt='no content'
                      fill
                    />
                  </div>
                  <figcaption>
                    Shooting today&apos;s lunch roast beef sandwich ♪
                  </figcaption>
                </figure>
                <p>
                  By linking with Instagram with a plug-in, photos taken on
                  Instagram will be immediately reflected on the top page.
                </p>
              </section>
              <section>
                <h3 className={styles["heading-typeB"]}>
                  Responsive design for comfortable viewing on smartphones and
                  tablets
                </h3>

                <figure>
                  <div className={styles.imageWrap}>
                    <Image
                      src='/images/portfolio/img_01_03.jpg'
                      alt='no content'
                      fill
                    />
                  </div>
                  <figcaption>
                    Display confirmation(iPhone、iPad、MacBook Air)
                  </figcaption>
                </figure>
                <p>
                  Responsive design has been adopted to support display on
                  various devices.It&apos;s nice to be able to take a picture of
                  the restaurant&apos;s menu on Instagram and check it on your
                  smartphone right away♪
                </p>
                <figure>
                  <div className={styles.imageWrap}>
                    <Image
                      src='/images/portfolio/img_01_04.jpg'
                      alt='no content'
                      fill
                    />
                  </div>
                  <figcaption>
                    Even if you get close to the iPhone screen... (ﾟдﾟ) Wow!
                    Beautiful!
                  </figcaption>
                </figure>
              </section>
              <section>
                <h3 className={styles["heading-typeB"]}>
                  Because it is a web font, decorative characters and icons are
                  also beautiful.
                </h3>
                <p>
                  Site title, navigation, and main headings are Google Web Font
                  and icons are web fonts (Fontello). We were able to achieve
                  beautiful text and icon display without worrying about
                  resolution even on scaled smartphones and tablets.
                </p>
              </section>
            </section>
            <footer className={styles.articleDetailFoot}>
              <section>
                <h2 className={styles["heading-typeC"]}>relation link</h2>
                <ul>
                  <li>
                    <a href='ok'> Download page Debut</a>
                  </li>
                  <li>
                    <a href='ok'> Demo page Cafe Debut</a>
                  </li>
                  <li>
                    <a href='ok'> Baser CMS Official</a>
                  </li>
                  <li>
                    <a href='ok'> Instagram Official</a>
                  </li>
                </ul>
              </section>
              <aside className={styles.creditUnit}>
                <p>shooting cooperation</p>
                <h2 className={styles["heading-typeC"]}>Kitchen nest</h2>
                <p>
                  Hokkaido Sapporo City Chuo Ward Minami 3 West 8 Chome Taiyo
                  Building 2F
                </p>
                <ul>
                  <li>
                    <a href='http://www.nest-kitchen.jp'>
                      http://www.nest-kitchen.jp
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.facebook.com/kitchennest/'
                      target='_blank'
                      rel='noreferrer'
                    >
                      Facebook
                    </a>
                  </li>
                </ul>
                <p>
                  Thank you for your cooperation in the image shooting of the
                  Cafe Debut theme. It&apos;s a very nice shop.
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
