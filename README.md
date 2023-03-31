# Modern Tooling SWC template

This repository contains two React templates for starting a project with modern 
tooling, including Vite, SWC, Vitest, Redux Toolkit, etc. The templates are organized
into separate folders and are available on the branch. 
These templates can be used as a solid starting point for building a React application 
with the latest tooling and best practices.
## 📝Templates
### 1. Base Template
This template contains the following:

- Vite
- React
- SWC
- Styled Components
- Vitest
- Testing Library
- Eslint
- Prettier
- lint-staged

### 2. With Redux Toolkit Template

This template contains the following:

- Vite
- React
- SWC
- Styled Components
- Vitest
- Testing Library
- Eslint
- Prettier
- lint-staged
- __Redux Toolkit__

## 🔧 Installation

To use the templates, follow the steps below:

1. Install degit:

   ```
   pnpm add -g degit
   ```

2. Clone the repository:
   - Base Template
      ```
      degit  https://github.com/dragenet/ts-vite-react-template.git/base <target-dir>
      ```
   - With Redux Toolkit
      ```
      degit  https://github.com/dragenet/ts-vite-react-template.git/with-redux-toolkit <target-dir>
      ```

3. Change directory to the desired template:

   ```
   cd <target-dir>
   ```
   
4. Initialize git:
    ```
        git init
    ```

5. Install dependencies:

   ```
   pnpm install
   ```

6. Start the development server:

   ```
   pnpm dev
   ```

## 📁 Template Structure

Each template has the following file and folder structure (excluding store directory):

```
├── index.html
├── package.json
├── pnpm-lock.yaml
├── public
│   └── vite.svg
├── src
│   ├── App.tsx
│   ├── assets
│   ├── components
│   │   ├── molecules
│   │   │   ├── Helmet
│   │   │   └── RootProvider
│   │   └── templates
│   │       └── HomePageTemplate
│   ├── main.tsx
│   ├── pages
│   │   ├── Home.tsx
│   │   └── __tests__
│   ├── router
│   ├── store (*only for with-redux-toolkit template)
│   │   ├── apis
│   │   ├── hooks
│   │   │   ├── useAppDispatch.ts
│   │   │   └── useAppSelector.ts
│   │   ├── rootStore.ts
│   │   └── slices
│   ├── theme
│   ├── types
│   │   └── env.d.ts
│   └── utils
│       └── test
│           ├── renderTest.tsx
│           └── withTestRouter.tsx
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── vitest.setup.ts

```

## 📝 Contribution

If you find any bug or have any suggestion, feel free to open an issue or submit a pull request.

## 🔐 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.