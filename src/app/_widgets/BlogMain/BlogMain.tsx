import Link from "next/link";
import { posts } from "@/constants/posts";

export const BlogMain = () => {
  return (
    <main className="p-8 md:p-24 animate-fade-in">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid gap-6">
        {posts.map((post) => (
          <article
            key={post.post}
            className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-purple-500 dark:hover:border-purple-500 transition-colors"
          >
            <Link href={`/blog/${post.post}`}>
              <h2 className="text-2xl font-bold mb-2 hover:text-purple-600 transition-colors">
                {post.title}
              </h2>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{post.date}</p>
            <p className="text-gray-800 dark:text-gray-200">
              {post.description}
            </p>
          </article>
        ))}
      </div>
    </main>
  );
};
