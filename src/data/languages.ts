export interface Language {
  slug: string;
  name: string;
  desc: string;
}

export const languages: Language[] = [
  { slug: "english", name: "English", desc: "贯彻一生的语言" },
  {
    slug: "linux",
    name: "Linux",
    desc: "开源的类Unix操作系统内核，竟拥有cuteeee企鹅logo!",
  },
  {
    slug: "mysql",
    name: "MySQL",
    desc: "硬核的工程能力也有一只海豚,或许学习这些等同于抚养pet..",
  },
  {
    slug: "python",
    name: "Python",
    desc: "最爱的语言之一，python依旧保持优雅.",
  },
  {
    slug: "js",
    name: "JS",
    desc: "全栈开发的通用语言，网页需要简单的交互效果.",
  },
  {
    slug: "html",
    name: "HTML",
    desc: "1基础也可以上手，适当温习就好",
  },
];
