import mdx from "@mdx-js/rollup";
import { unstable_vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [remix(), tsconfigPaths(), mdx({
    remarkPlugins: [
      remarkFrontmatter, remarkMdxFrontmatter
    ]
  }),
  svgr()
  ],
});
