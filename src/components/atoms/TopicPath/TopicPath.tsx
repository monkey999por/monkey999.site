import { useRouter } from "next/router";

import { getPageInfo } from "@utils/functions/komorikoshaCommon";

/**
 * パンくずリストを表示
 */
export default function TopicPath(): JSX.Element {
  console.log(`render component TopicPath`);
  const router = useRouter();
  return (
    <p>
      {getPageInfo(router.asPath).breadcrumb.map((path, index) => {
        return (
          <span key={path}>
            <a href={path}>{getPageInfo(path).title}</a>
            {getPageInfo(router.asPath).breadcrumb.length > index ? " > " : ""}
          </span>
        );
      })}
      {getPageInfo(router.asPath).title}
    </p>
  );
}
