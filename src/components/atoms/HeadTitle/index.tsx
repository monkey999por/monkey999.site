import Head from "next/head";
import { useRouter } from "next/router";

import { getPageInfo } from "@utils/functions/komorikoshaCommon";

/**
 * ページのタイトル
 */
export default function HeadTitle(): JSX.Element {
  console.log(`render component HeadTitle`);
  const router = useRouter();

  return (
    <Head>
      <title>{getPageInfo(router.asPath).title}</title>
    </Head>
  );
}
