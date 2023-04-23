import styles from "@styles/design_samples/grid-garden.module.scss";

export default function componentTest(): JSX.Element {
  return (
    <>
      <header className={styles.head}>
        <div className={styles.sitename}>monkey999-site</div>
        <div className={styles.links}>
          <div className={styles.item}>Games</div>
          <div className={styles.item}>Plans</div>
          <div className={styles.item}>Blog</div>
        </div>
        <div className={styles.account}>monkey999</div>
      </header>
      <main className={styles.container}>
        <div className={styles.fieldContainer}>
          <div className={styles.fieldArea}>
            <div className={styles.field}>1</div>
            <div className={styles.field}>1</div>
            <div className={styles.field}>1</div>
            <div className={styles.field}>1</div>
            <div className={styles.field}>1</div>
            <div className={styles.field}>1</div>
            <div className={styles.field}>1</div>
            <div className={styles.field}>1</div>
            <div className={styles.field}>1</div>
            <div className={styles.field}>1</div>
            <div className={styles.field}>1</div>
            <div className={styles.field}>1</div>
            <div className={styles.field}>1</div>
            <div className={styles.field}>1</div>
            <div className={styles.field}>1</div>

            <div className={styles.field}>1</div>
            <div className={styles.field}>1</div>
            <div className={styles.field}>1</div>
            <div className={styles.field}>1</div>
            <div className={styles.field}>1</div>
            <div className={styles.field}>1</div>
            <div className={styles.field}>1</div>
            <div className={styles.field}>1</div>
            <div className={styles.field}>1</div>
            <div className={styles.field}>1</div>
          </div>
        </div>
        <div className={styles.editArea}>
          <h2 className={styles.titil}>MONKEY GARDEN</h2>
          <div className={styles.buttons}>
            <div className={styles.volume}>
              <i>🔊</i>
            </div>
            <div className={styles.language}>日本語</div>
            <div className={styles.levelArea}>
              <div className={styles.back}>←</div>
              <div className={styles.currentLevel}>レベル12/28</div>
              <div className={styles.next}>→</div>
            </div>
          </div>
          <p className={styles.description}>sample design from GRID GARDEN</p>
          <div className={styles.codeBlock}>
            <div className={styles.rowitems}>
              <div className={styles.rowItem}>#input your code </div>
              <div className={styles.rowItem}>#grid </div>
              <div className={styles.rowItem}>indent {"{"}</div>
              <div className={styles.rowItem}>&nbsp;&nbsp;item</div>
              <div className={styles.rowItem}>&nbsp;&nbsp;item</div>
              <div className={styles.rowItem}>&nbsp;&nbsp;item</div>
              <div className={styles.rowItem}>{"}"}</div>
              <div className={styles.rowItem}>input here</div>
              <div className={styles.rowItem}>
                <input type='text' />
              </div>
              <div className={styles.rowItem}>
                <input type='text' />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
