export const globalNavilinks: {
  [key: string]: string;
} = {
  home: "/komorikosha",
  aboutMe: "/komorikosha/about",
  portfolios: "/komorikosha/portfolio",
  contact: "/komorikosha/contact",
  wizard: "/komorikosha/portfolio/03",
  wordpress: "/komorikosha/portfolio/02",
  cafe: "/komorikosha/portfolio/01",
};

export type PageInfo = {
  path: string;
  item: {
    title: string;
    breadcrumb: string[];
  };
};
export const PAGE_INFO: PageInfo[] = [
  // 上側のグローバルリンク
  {
    path: globalNavilinks.home,
    item: {
      title: "Home",
      breadcrumb: [globalNavilinks.home],
    },
  },
  {
    path: globalNavilinks.aboutMe,
    item: {
      title: "About me",
      breadcrumb: [globalNavilinks.home],
    },
  },
  {
    path: globalNavilinks.portfolios,
    item: {
      title: "Portfolios",
      breadcrumb: [globalNavilinks.home],
    },
  },
  {
    path: globalNavilinks.contact,
    item: {
      title: "Contact",
      breadcrumb: [globalNavilinks.home],
    },
  },

  // つくったものの下
  {
    path: globalNavilinks.cafe,
    item: {
      title: "Cafe Debut",
      breadcrumb: [globalNavilinks.home, globalNavilinks.portfolios],
    },
  },
  {
    path: globalNavilinks.wizard,
    item: {
      title: "wizard who wants to be a gresshopper",
      breadcrumb: [globalNavilinks.home, globalNavilinks.portfolios],
    },
  },
  {
    path: globalNavilinks.wordpress,
    item: {
      title: "wordpress design book",
      breadcrumb: [globalNavilinks.home, globalNavilinks.portfolios],
    },
  },
];
