import styles from "@utils/styles/komorikosha.module.scss";

/**
 * サイドのニュースリストを追加
 */
export default function NewsList(): JSX.Element {
  console.log(`render component NewsList`);
  return (
    <section className={styles.newsList}>
      <h2>News</h2>
      <ul>
        <li>
          <time dateTime='2013-10-01'>2013/10/1</time>
          Comomo and Moriko are writing a book titled &quot;HTML/CSS textbook
          (tentative title)&quot;. looking forward to.
        </li>
        <li>
          <time dateTime='2013-10-01'>2013-10-1</time>
          Comomo, Moriko, and Hiromasa have opened a website called
          &quot;komorikomash&quot;.
        </li>
      </ul>
    </section>
  );
}
