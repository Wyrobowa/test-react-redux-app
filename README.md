# Test React Redux App

A modern React 19 application built with **Vite**, **Redux Toolkit**, and **React Router v7**.

This project is a refactored and modernized version of the classic Reduxstagram tutorial, updated to use the latest industry standards.

## 🚀 Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/) (Slices)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Bundler**: [Vite](https://vitejs.dev/)
- **Styling**: [Styled Components](https://styled-components.com/) & [Styled Normalize](https://github.com/sergeymalykhin/styled-normalize)
- **Linter**: [ESLint](https://eslint.org/) (Configured for modern JSX)

## 🛠️ Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm

### Installation

```bash
# Install dependencies
npm install
```

### Development

To start the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or the next available port).

### Production Build

To build the application for production:

```bash
npm run build
```

The optimized assets will be generated in the `dist/` folder.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## 📂 Project Structure

- `src/`
  - `components/`: React functional components.
  - `features/`: Redux Toolkit slices (state logic).
  - `data/`: Local data for posts and comments.
  - `common/`: Shared constants and styles.
  - `App.jsx`: Main application layout and routing.
  - `configureStore.js`: Redux store setup using `configureStore`.
  - `index.jsx`: Application entry point using `createRoot`.

## 🔄 Recent Modernization Notes

The project has recently undergone a major refactor:

1.  **Migrated from Webpack to Vite**: Replaced the slow Webpack/Babel setup with Vite for lightning-fast HMR and build times.
2.  **Redux Toolkit Migration**: Moved away from legacy boilerplate (manual actions/reducers) to modern Redux Toolkit Slices.
3.  **React 19 Ready**: Updated to use `createRoot` API and the modern JSX transform.
4.  **React Router v7**: Updated routing syntax (using `Routes` and `element` prop).
5.  **Babel-less Configuration**: Removed manual Babel setup in favor of Vite's internal `esbuild` and plugin-based transformations.

## 📄 License

This project is licensed under the ISC License.
