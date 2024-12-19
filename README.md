# Inventory Management System

A modern inventory management system built with React, TypeScript, and Material-UI. View the live demo at [https://inventory-management-rust-delta.vercel.app/](https://inventory-management-rust-delta.vercel.app/)

## Features

- 🔄 Admin/User view toggle
- 📦 Product management (CRUD operations)
- 🌓 Dark/Light theme support
- 📊 Real-time inventory statistics
- 📱 Responsive Material-UI design

## Tech Stack

- **Frontend Framework**: React with TypeScript
- **State Management**: Redux Toolkit
- **UI Framework**: Material-UI (MUI)
- **API Client**: Axios
- **Build Tool**: Vite
- **Deployment**: Vercel

## Project Structure

```
src/
├── components/         # React components organized by feature
│   ├── AdminView/     # Admin view components
│   ├── UserView/      # User view components
│   ├── ProductTable/  # Product table components
│   └── TopWidgets/    # Statistics widgets
├── redux/             # Redux state management
│   ├── inventory/     # Inventory-related state
│   └── theme/         # Theme-related state
├── services/          # API services
├── types/             # TypeScript interfaces
└── theme.ts           # Material-UI theming
```

## Design Patterns

- **Container/Presentational Pattern**: Separates logic from UI components
- **Redux Slice Pattern**: Modular state management
- **Type-Safe Development**: Comprehensive TypeScript implementation

## Getting Started

1. Clone the repository:
```bash
git clone git@github.com:krishnas1998/inventory-management.git
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## ESLint Configuration

For production applications, the ESLint configuration can be enhanced with type-aware lint rules:

```js
export default tseslint.config({
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
