# Disney Character Search Application

This project is a Disney fan site that allows users to search for their favorite Disney characters, view detailed information, and edit profile preferences. The application is built using Next.js, TypeScript, TailwindCSS, and React Hook Form, with data powered by the Disney API.

## Motivation and Architecture

The motivation behind creating this project was to offer Disney fans a centralized and engaging platform to explore and learn about their favorite characters. By using modern technologies such as Next.js and TailwindCSS, the application benefits from a fast, scalable, and responsive experience.

### Key Architectural Decisions:

- **Next.js:** Selected for its ability to handle server-side rendering, improving both performance and SEO, which is crucial for a fan-oriented website with public visibility.
- **TailwindCSS:** Chosen for a streamlined UI development experience, which helps developers maintain consistency across the application while allowing rapid adjustments to styles.
- **React Hook Form:** Helps manage forms efficiently, reducing the complexity of form validation and state management, ultimately resulting in cleaner, more maintainable code.

## Project Organization and Folder Structure

The project is organized with a folder structure that promotes separation of concerns and scalability:

- Houses all reusable components, such as `CharacterCard` and `SearchBar`. These components are isolated to ensure consistency and reusability across different pages.
- Contains the Next.js pages that make up the different routes of the application, such as the search page and the character detail view.
- Custom React hooks for reusable logic, like fetching data from the Disney API.
- Utility functions that help with common operations, including data transformations.
- Contains Tailwind CSS configuration for theme customization and custom styles.

The folder structure is designed to maintain scalability by modularizing different parts of the application. This makes it easier to add new features or extend current functionality without impacting other areas.

## Development Standards

The development followed several best practices to ensure code quality:

- **TypeScript for Static Typing**: TypeScript was used to enhance maintainability and catch bugs during development.
- **Component-Driven Development**: The UI was developed as a set of small, independent components, making it easier to test and iterate.
- **Test-Driven Development (TDD)**: Jest and React Testing Library were used to write tests alongside the components, ensuring high test coverage.
- **Code Reviews**: All code was reviewed by at least one team member before merging to maintain code quality and consistency.

## Business Context

The Disney Character Search Application serves as an informational tool that allows Disney enthusiasts to connect with their favorite characters. It serves a dual purpose of engaging users and being an educational resource for Disney lore, which contributes to Disney's brand loyalty and user engagement.

## Features

- **Character Search**: Users can search for Disney characters using the Disney API.
- **Character Details**: Displays detailed information about each character, including appearances in movies and TV shows.
- **User Profile**: Allows users to view and edit their profile, including setting favorite characters and locations.
- **Loading Skeletons**: Skeleton screens are shown while data is being loaded to improve the user experience.
- **Responsive Design**: Optimized to provide a seamless experience across mobile, tablet, and desktop devices.

## Running the Application

### Install dependencies:

```
npm install --legacy-peer-deps

This will install all the required packages specified in `package.json`.
```
```
### Start the development server:

npm run dev

This command will start the application locally for development purposes.
```
```
## Running Tests

This application includes tests written with Jest and React Testing Library.

### Run all tests:

npm test
```
```

Tests cover various aspects of the application, including components, API calls, and user interactions.

## Lean and Scalable Development

The project was developed with a focus on lean and scalable practices. By using modern frameworks and reusable components, the codebase remains easy to maintain and extend. Server-side rendering (SSR) provided by Next.js helps keep the application fast, while static typing with TypeScript ensures a low rate of errors, contributing to both performance and quality.
```

## Preview

![Preview of application](preview.gif)
