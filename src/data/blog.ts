import fs from "fs";
import matter from "gray-matter";
import path from "path";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};

type Post = {
  metadata: Metadata;
  slug: string;
  source: string;
};

function getMDXFiles(dir: string): string[] {
  try {
    if (!fs.existsSync(dir)) {
      console.warn(`Directory ${dir} does not exist`);
      return [];
    }
    return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
  } catch (error) {
    console.error(`Failed to read directory ${dir}:`, error);
    return [];
  }
}

export async function markdownToHTML(markdown: string): Promise<string> {
  try {
    const p = await unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkRehype)
      .use(rehypePrettyCode, {
        theme: {
          light: "min-light",
          dark: "min-dark",
        },
        keepBackground: false,
      })
      .use(rehypeStringify)
      .process(markdown);

    return p.toString();
  } catch (error) {
    console.error("Failed to convert markdown to HTML:", error);
    return markdown; // Return original markdown as fallback
  }
}

export async function getPost(slug: string): Promise<Post | null> {
  try {
    const filePath = path.join(process.cwd(), "content", `${slug}.mdx`);
    
    if (!fs.existsSync(filePath)) {
      console.warn(`File ${filePath} does not exist`);
      return null;
    }
    
    const source = fs.readFileSync(filePath, "utf-8");
    const { content: rawContent, data: metadata } = matter(source);
    const content = await markdownToHTML(rawContent);
    
    return {
      source: content,
      metadata: metadata as Metadata,
      slug,
    };
  } catch (error) {
    console.error(`Failed to get post ${slug}:`, error);
    return null;
  }
}

async function getAllPosts(dir: string): Promise<Post[]> {
  try {
    const mdxFiles = getMDXFiles(dir);
    
    if (mdxFiles.length === 0) {
      console.warn(`No MDX files found in ${dir}`);
      return [];
    }
    
    const posts = await Promise.all(
      mdxFiles.map(async (file) => {
        try {
          const slug = path.basename(file, path.extname(file));
          const post = await getPost(slug);
          return post;
        } catch (error) {
          console.error(`Failed to process file ${file}:`, error);
          return null;
        }
      })
    );
    
    return posts.filter((post): post is Post => post !== null);
  } catch (error) {
    console.error("Failed to read content directory:", error);
    return [];
  }
}

export async function getLogsPosts(): Promise<Post[]> {
  try {
    const contentDir = path.join(process.cwd(), "content");
    console.log(`Reading posts from: ${contentDir}`);
    const posts = await getAllPosts(contentDir);
    console.log(`Found ${posts.length} posts`);
    return posts;
  } catch (error) {
    console.error("Failed to load logs posts:", error);
    return [];
  }
}

export const getBlogPosts = getLogsPosts;
