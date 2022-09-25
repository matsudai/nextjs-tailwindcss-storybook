# Next.js + Tailwindcss + Storybook

## MEMO

### Next.js

- refs https://nextjs.org/docs/api-reference/create-next-app

1. Create Next App.

   ```sh
   yarn create next-app --typescript nextjs-tailwindcss-storybook

   # > yarn create v1.22.19
   # > [1/4] Resolving packages...
   # >
   # >     ...
   # >
   # > Success! Created nextjs-tailwindcss-storybook at /workspaces/nextjs-tailwindcss-storybook/nextjs-tailwindcss-storybook
   # > Done in 41.70s.
   ```

1. Move to current directory.

   ```sh
   mv nextjs-tailwindcss-storybook/.eslintrc.json ./
   mv nextjs-tailwindcss-storybook/.gitignore     ./
   mv nextjs-tailwindcss-storybook/next-env.d.ts  ./
   mv nextjs-tailwindcss-storybook/next.config.js ./
   mv nextjs-tailwindcss-storybook/node_modules   ./
   mv nextjs-tailwindcss-storybook/package.json   ./
   mv nextjs-tailwindcss-storybook/pages          ./
   mv nextjs-tailwindcss-storybook/public         ./
   mv nextjs-tailwindcss-storybook/styles         ./
   mv nextjs-tailwindcss-storybook/tsconfig.json  ./
   mv nextjs-tailwindcss-storybook/yarn.lock      ./
   # mv nextjs-tailwindcss-storybook/README.md      ./

   rm -rf nextjs-tailwindcss-storybook
   ```

1. Add export script.

   ```sh
   yarn add -D serve
   ```

   - package.json

   ```diff
     "build": "next build",
   + "export": "next build && next export",
     "start": "next start",
   + "serve": "serve out",
   ```

   - next.config.js

   ```diff
     swcMinify: true,
   + images: {
   +   unoptimized: true
   + }
   ```

### Prettier

1. Install.

   - refs: https://prettier.io/docs/en/install.html

   ```sh
   yarn add --dev --exact prettier
   ```

   - .prettierrc.json
   - .prettierignore

   - package.json

   ```diff
   - "lint": "next lint"
   + "lint": "next lint",
   + "fmt": "prettier --write ."
   ```

   - .vscode/settings.json

   ```diff
   + {
   +   "editor.formatOnSave": false,
   +   "[json]": {
   +     "editor.defaultFormatter": "esbenp.prettier-vscode",
   +     "editor.formatOnSave": true
   +   },
   +   "[typescript]": {
   +     "editor.defaultFormatter": "esbenp.prettier-vscode",
   +     "editor.formatOnSave": true
   +   },
   +   "[typescriptreact]": {
   +     "editor.defaultFormatter": "esbenp.prettier-vscode",
   +     "editor.formatOnSave": true
   +   },
   +   "[javascript]": {
   +     "editor.defaultFormatter": "esbenp.prettier-vscode",
   +     "editor.formatOnSave": true
   +   },
   +   "[javascriptreact]": {
   +     "editor.defaultFormatter": "esbenp.prettier-vscode",
   +     "editor.formatOnSave": true
   +   },
   +   "[css]": {
   +     "editor.defaultFormatter": "esbenp.prettier-vscode",
   +     "editor.formatOnSave": true
   +   }
   + }
   ```

1. Format.

   ```sh
   yarn fmt
   ```

### Tailwindcss

- refs: https://tailwindcss.com/docs/guides/nextjs

```sh
yarn add -D tailwindcss postcss autoprefixer
yarn tailwindcss init -p
```

- tailwind.config.js

```diff
- content: [],
+ content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
```

- styles/global.css

```diff
+ @tailwind base;
+ @tailwind components;
+ @tailwind utilities;
+
- ...
```
