import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeRaw from "rehype-raw";
import remarkHeadingId from "remark-heading-id";

import linuxContent from "../data/articles/Linux";
import mysqlContent from "../data/articles/Mysql";
import pythonContent from "../data/articles/python";
import jsContent from "../data/articles/JS";
import englishContent from "../data/articles/english";
import htmlContent from "../data/articles/HTML";

const articles: Record<string, string> = {
  english: englishContent,
  linux: linuxContent,
  mysql: mysqlContent,
  python: pythonContent,
  js: jsContent,
  html: htmlContent,
};

export default function Article() {
  const { slug } = useParams<{ slug: string }>();
  const content = slug ? articles[slug] : "";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!content) return <div>文章未找到</div>;

  return (
    <article>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkHeadingId]}
        rehypePlugins={[rehypeSlug, rehypeRaw]}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
