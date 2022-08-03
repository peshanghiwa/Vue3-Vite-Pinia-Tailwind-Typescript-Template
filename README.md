# Vue 3 + TypeScript + Vite + Pinia + Tailwind Template

This template should help you get a complete understanding of how vue 3 environment works alongside with typescript, it is structured with vue 3 best practices, and is built with vite.

The template is handling/using the followings:

- Vue 3 Script Setup

- Folder Structuring (Inspired by Nuxt.js).

- Reusable utility components that can be exported as modules or reused as components.

- Layout handlement (inspired by Nuxt.js).

- Pinia Store

- Vue router version 4 (including auth guards and redirects)

- Tailwind CSS (With custom configurations)

- API requests, error handling and integrations (Using Axios)

- Tests (Using vitest)

- Defining Types (For our own modules and 3rd party libraries that do not support typescript)

- TypeScript Configuration

- plugins

- Transitions (On the route components and layout components)

## Run the project

```bash
$ npm install
$ npm run dev

// To run the tests
$ npm run test
```

**_Important: the project is using some 3rd party APIs to fetch data, you may encounter cors-policy issue during development so i do recommend using any cors unblocking chrome extensions like [CORS Unblock](https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino?hl=en) to prevent the issue._**
