import { writeFileSync } from 'fs';
import { globby } from 'globby';
import prettier from 'prettier';

(async () => {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');

  const pages = await globby([
    'pages/**/*{.ts,.tsx,.mdx}',
    '!pages/_*.tsx',
    '!pages/api',
  ]);

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
          .map((page) => {
            const path = page
              .replace('pages', '')
              .replace('.tsx', '')
              .replace('.ts', '')
              .replace('.mdx', '');

            const route = path === '/index' ? '' : path;

            return `
              <url>
                <loc>${`https://alexknipfer.com${route}`}</loc>
              </url>
            `;
          })
          .join('')}
      </urlset>
    `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  });

  writeFileSync('public/sitemap.xml', formatted);
})();
