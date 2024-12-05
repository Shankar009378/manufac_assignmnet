# Indian Agriculture Data Analysis

This project analyzes Indian Agriculture dataset from the National Data and Analytics Platform (NITI Aayog) and displays the analysis in tabular format using TypeScript and Mantine v7.

## Features

- Yearly analysis showing crops with maximum and minimum production
- Crop-wise analysis showing average yield and cultivation area between 1950-2020
- Clean, modular code structure with TypeScript
- Mantine v7 UI components for tables

## Setup and Running

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The application will start and open in your default browser.

## Project Structure

```
src/
  ├── components/          # React components
  │   ├── YearlyAnalysisTable.tsx
  │   └── CropAnalysisTable.tsx
  ├── types/              # TypeScript interfaces
  │   └── agriculture.ts
  ├── utils/              # Utility functions
  │   └── dataAnalysis.ts
  ├── App.tsx            # Main application component
  └── main.ts            # Application entry point
```

## Implementation Details

- Data processing functions are implemented in `utils/dataAnalysis.ts`
- Type definitions are centralized in `types/agriculture.ts`
- Tables are implemented using Mantine v7 components
- All calculations are performed efficiently using Map data structures
- Average values are rounded to 3 decimal places

## Screenshots

[Screenshots will be added after implementation]

## Technologies Used

- TypeScript
- Vite
- Mantine v7
- React