import fs from "fs";
import path from "path";

import Link from "next/link";

import SampleHead from "@atoms/SampleHead/SampleHead";
import styles from "@styles/DesignSample.module.scss";

export async function getStaticProps(): Promise<{
  props: { file_paths: string[] };
}> {
  const root = path.join(process.cwd(), "src/pages/design_samples");
  const file_paths = await getFilePathsRecursive(root);
  return {
    props: { file_paths },
  };
}

async function getFilePathsRecursive(dir: string): Promise<string[]> {
  let file_paths: string[] = [];
  const files = await fs.promises.readdir(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = await fs.promises.stat(filePath);
    if (stat.isFile() && file.endsWith(".tsx")) {
      file_paths.push(file.split(".")[0]);
    } else if (stat.isDirectory()) {
      file_paths = file_paths.concat(await getFilePathsRecursive(file));
    }
  }
  return file_paths;
}
export default function designSample(props: { file_paths: [] }) {
  const { file_paths } = props;
  console.log(file_paths);

  return (
    <>
      <SampleHead title='Design Samples' />
      <div className={styles.waku}>
        <main className={styles.flexbox}>
          {file_paths.map((file: string, i: number) => {
            return (
              <Link href={`design_samples/${file}`} key={i}>
                <div className={styles.item}>{file}</div>
              </Link>
            );
          })}
        </main>
        <footer className={styles.footer}>Powered by{" dummy "}</footer>
      </div>
    </>
  );
}
