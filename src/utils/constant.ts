export const globalNavilinks: {
  [key: string]: string;
} = {
  home: "/index.html",
  aboutMe: "/about/index.html",
  portfolios: "/portfolio/index.html",
  contact: "/contact/index.html",
  wizard: "/portfolio/03.html",
  wordpress: "/portfolio/02.html",
  cafe: "/portfolio/01.html",
};

export const PAGE_INFO: {
  path: string;
  item: {
    title: string;
    breadcrumb: string[];
  };
}[] = [
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
