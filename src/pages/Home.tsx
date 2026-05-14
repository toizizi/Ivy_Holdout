import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section>
      <h1>WHICH I LEARN</h1>
      <ul className="lang-list">
        <li className="lang-item">
          <Link to="/article/python" className="lang-name">
            Python
          </Link>
          <span className="lang-desc">最爱的语言之一，优雅的python.</span>
        </li>
        <li className="lang-item">
          <Link to="/article/html" className="lang-name">
            HTML+CSS
          </Link>
          <span className="lang-desc">属于构成网页的基本要素</span>
        </li>
        <li className="lang-item">
          <Link to="/article/linux" className="lang-name">
            Linux
          </Link>
          <span className="lang-desc">
            开源的类Unix操作系统内核，竟拥有cuteeee企鹅logo!
          </span>
        </li>
        <li className="lang-item">
          <Link to="/article/mysql" className="lang-name">
            Mysql
          </Link>
          <span className="lang-desc">
            硬核工程能力的Mysql也有一只海豚,或许学习这些等同于养育电子宠物..
          </span>
        </li>
        <li className="lang-item">
          <Link to="/article/js" className="lang-name">
            JavaScript
          </Link>
          <span className="lang-desc">
            全栈开发的通用语言，网页需要简单的交互效果.
          </span>
        </li>
        <li className="lang-item">
          <Link to="/article/english" className="lang-name">
            English
          </Link>
          <span className="lang-desc">英语，英语，是谁在惧怕它？</span>
        </li>
      </ul>
    </section>
  );
}
