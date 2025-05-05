import type { BlogPostProps } from "@/interfaces";

export const posts: BlogPostProps[] = [
  {
    title: "Hello World",
    date: "2025-05-03",
    description: "Welcome to my blog! This is my first post.",
    post: "hello-world",
    content: "**This** is the content of my first post. Stay tuned for more!",
  },
  {
    title: "Typescript types",
    date: "2025-05-05",
    description: "A comprehensive types to TypeScript.",
    post: "typescript-types",
    content: `
\`\`\`typescript
// Basic types
let name: string = "John";
let age: number = 30;
let isStudent: boolean = true;

// Arrays
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"];
\`\`\`

Start using TypeScript in your next project to write more reliable and maintainable code!`,
  },
];
