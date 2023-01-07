import { globalNavilinks, PAGE_INFO } from "@utils/constant";

/**
 * @returns
 */
export const getPageInfo = (path: string) => {
  const item = PAGE_INFO.filter((o) => o.path === path)[0]?.item;
  return item
    ? item
    : PAGE_INFO.filter((o) => o.path === globalNavilinks.home)[0]?.item;
};

export const isRoot = (path: string): boolean => {
  return path === globalNavilinks.home;
};
