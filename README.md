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
