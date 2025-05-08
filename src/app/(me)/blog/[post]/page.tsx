"use client";

import { useParams } from "next/navigation";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula as theme } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Header } from "@/app/_widgets";
import { posts } from "@/constants/posts";
import type { BlogPostProps } from "@/interfaces";

const BlogPost = () => {
  const { post } = useParams();

  const currentPost = posts.find((p) => p.post === post) as BlogPostProps;

  return (
    <>
      <Header />
      <main className="p-8 md:p-24">
        <article className="prose dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-4">
            <Markdown>{currentPost.title}</Markdown>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            {currentPost.date}
          </p>
          <Markdown
            components={{
              code({ className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return match ? (
                  <SyntaxHighlighter
                    style={theme}
                    language={match[1]}
                    PreTag="div"
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {currentPost.content}
          </Markdown>
        </article>
      </main>
    </>
  );
};

export default BlogPost;
