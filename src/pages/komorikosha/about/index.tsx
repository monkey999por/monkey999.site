import PageTitle from "@atoms/PageTitle";
import NewsList from "@molecules/NewsList";
import PageTemplate from "@templates/PageTemplate";
import styles from "@utils/styles/komorikosha.module.scss";

export default function about() {
  return (
    <>
      <PageTemplate>
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
