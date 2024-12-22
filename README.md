
# Project Overview

This project is built using **Next.js** and **React** with **TypeScript** for type safety. The application leverages 
**Custom CSS** and **Tailwind CSS** for styling and **Vitest** for unit testing. Below is a detailed guide to understanding the folder 
structure and running the project.

## Build and Run Instructions

### Build the Project:
```bash
npm run build
```

### Start the Production Server:
```bash
npm start
```

## Folder Structure

```plaintext
__tests__/           // Contains test files organized by components.
  components/
    atoms/
    molecules/
    organisms/
    templates/

.next/               // Next.js build output.

public/              // Static assets like images.
  images/

src/                 // Main source code directory.
  app/               // Application-specific components and pages.
  constants/         // Constant values used across the project.
  dto/               // Data Transfer Objects.
  hooks/             // Custom React hooks.
  styles/            // Styling files.
  types/             // TypeScript type definitions.

tailwind.config.ts   // Tailwind CSS configuration.
tsconfig.json        // TypeScript configuration.
vitest.config.mts    // Vitest configuration.
vitest.setup.ts      // Vitest setup file.
```

## Assumptions and Trade-offs

### Assumptions:
- The project uses **Next.js** for server-side rendering and React for building UI components.
- **Custom CSS** and **Tailwind CSS** is used for styling.
- **Vitest** is used for testing.

### Trade-offs:
- **Next.js** is chosen for its built-in server-side rendering capabilities, which may add complexity but 
  provides better performance for dynamic content.
- Using **Tailwind CSS** for utility-first styling, which can lead to more verbose HTML but offers greater 
  flexibility and faster styling.
- Opted for **Vitest** for its speed and modern features, even though it might have less community support compared to Jest.

## Screenshots

Below are screenshots of the project:

<div style="display: flex; align-items: center; justify-content: flex-start">
  <image style="width: 50%; height: auto" src="./screenshots/localhost_3000_(iPhone 12 Pro)_1.png" />
  <image style="width: 50%; height: auto" src="./screenshots/localhost_3000_(iPhone 12 Pro)_2.png" />
</div>

## Recording

### Short Demo of the Application
<video width="320" height="240" controls>
  <source src="./screenshots/demo.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>