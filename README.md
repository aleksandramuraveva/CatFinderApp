# Actress Search App

This project allows users to search for actresses by making requests to an API. It features a user-friendly interface with efficient state management and comprehensive testing.

## Deployment

You can access the deployed application at: - [Actress Search App live](https://deploy)

## Stack

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![Vitest](https://img.shields.io/badge/vitest-%23C21325.svg?style=for-the-badge&logo=vitest&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)


## Screenshots

Here are some screenshots of the application in action:

<div align="center">
  <img src="https://github.com/user-attachments/assets/bfd10ff0-1cc2-43fe-ad9a-46e9c2969579" alt="" width="700" />
  <br>
  <br>
  <img src="https://github.com/user-attachments/assets/c63a570c-a699-4b6b-8010-ec1d15deec62" alt="" width="700"/>
  <img src="" alt="" width="500"/>
</div>

## Features

- **Component-Based Architecture**: Divided the application into multiple reusable components for better maintainability and scalability.
- **Search Functionality**: Integrated a search input and button to fetch and display search results from an API. Implemented local storage to save and retrieve the last search query.
- **API Integration**: Made API calls to fetch data based on user input and displayed the results dynamically. Used RTK Query for efficient API call management and caching.
- **Error Handling**: Wrapped the application in an error boundary to catch and display errors gracefully. Added a button to simulate errors for testing purposes.
- **Loading Indicators**: Implemented various loading indicators (Spinner, Skeleton, Loading Bar) to enhance user experience during data fetching.
- **Routing and Navigation**: Added React Router for seamless navigation between different pages. Included a 404 page for non-existing routes.
- **Testing**: Configured Vitest and React Testing Library for comprehensive testing. Achieved over 80% test coverage with tests for various components and scenarios.
- **Pagination**: Implemented pagination for the item list and updated the URL with query parameters. Displayed the current page and allowed navigation between pages.
- **State Management**: Integrated Redux and Redux Toolkit for state management. Used RTK Query to handle API calls and store results in the Redux store.
- **Theme Customization**: Added a context API to control the application theme (light or dark). Provided options for users to switch themes, affecting the entire application's appearance.
- **Selected Items Management**: Implemented a feature to select items and store the selection in the Redux store. Added functionality to download selected items as a CSV file and unselect all items.
- **Pre-Push Hook**: Configured Husky to run tests on the pre-push hook, ensuring code quality before pushing changes.
- **Testing**: Comprehensive test coverage using Vitest, with more than 80% coverage.

### How to run locally

1. Clone the repo

```sh
  git clone https://github.com/aleksandramuraveva/ActressSearchApp.git
```

2. Install NPM packages

```sh
  npm install
```

3. Start project

```sh
  npm run dev
```