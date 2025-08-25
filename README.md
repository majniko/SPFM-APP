# SPFM - Simple Personal Finance Manager

A mobile application for easy and straightforward personal finance management. Track your income and expenses, categorize transactions, and get a clear overview of your financial habits.

This is the frontend repository for the SPFM application, built with React Native and Expo.

## Features

-   **User Authentication**: Secure sign-up and sign-in functionality.
-   **Transaction Management**: Add, view, and list all your financial transactions.
-   **Expense & Income Tracking**: Easily distinguish between money coming in and money going out.
-   **Category Management**: Organize your transactions by creating custom categories.

## Tech Stack

-   **Framework**: React Native with Expo
-   **Language**: TypeScript
-   **Navigation**: Expo Router
-   **HTTP Client**: Axios
-   **UI Components**: Custom-built reusable components

## Backend

The application relies on a custom backend service for all data operations.

-   **Hosted API URL**: [https://spfm-be.onrender.com/api](https://spfm-be.onrender.com/api)
-   **Backend Source Code**: [https://github.com/majniko/SPFM-BE](https://github.com/majniko/SPFM-BE)

## 🚨 Security Warning

**This application is for demonstration and educational purposes only.**

The backend service is currently hosted on a free-tier plan and communicates over **HTTP**, not **HTTPS**. This means that all data, including your password, is **NOT encrypted** during transmission.

**DO NOT use real passwords or sensitive personal details when using this application.**

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   [Node.js](https://nodejs.org/) (LTS version recommended)
-   [Expo Go](https://expo.dev/go) app installed on your iOS or Android device.

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone <your-frontend-repo-url>
    cd <your-frontend-repo-name>
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Configure the API endpoint for local development:**

    For the app to communicate with the backend from your physical device, you need to use your computer's local network IP address.

   -   Open the `src/api/api-client.ts` file.
   -   Find your computer's local IP address (e.g., `192.168.1.100`).
   -   Change the `API_URL` constant to point to the backend service running on your machine:
       ```typescript
       // Before
       const API_URL = 'http://192.168.0.105:3000';

       // After (example)
       const API_URL = 'http://192.168.1.100:3000';
       ```
    *Note: The backend must be running and accessible from your mobile device's network.*

4.  **Run the application:**
    ```sh
    npx expo start
    ```
    This will start the Metro bundler. Scan the QR code with the Expo Go app on your phone to launch the application.

## Pre-built APK for Android

A ready-to-install `.apk` file is available for Android users. You can find it in the **[Releases](https://github.com/your-username/your-repo/releases)** section of this GitHub repository.

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.