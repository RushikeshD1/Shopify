# Shopify React Project

This is a Shopify-inspired project built using React. The project implements a login system with user authentication, a product catalog, and routing through different pages of the application. The main functionalities include creating a user, logging in with stored credentials, and viewing products on the home page. I have used `localStorage` for storing user data and managing authentication status.

## Demo

You can view the live demo of the application here:  
[Shopify React Demo](https://6820d83b576dd631c1636b9f--earnest-zuccutto-4ad3fd.netlify.app/)

## Features

- **Login Page**: 
  - Users can create an account or log in with their credentials (email and password).
  - LocalStorage is used to store and authenticate user data.
  - Only authorized users can log in and access the home page.
  
- **Home Page**:
  - Displays product data fetched via APIs.
  - Uses Context API to manage state such as `user`, `isAuthorized`, and product data.

- **Routing**:
  - The app uses `react-router-dom` for Single Page Application (SPA) routing.
  - Pages include Login, Home, Product, User, Contact, and Profile.

- **Authentication**:
  - Users' login status is stored in `localStorage`, and only authorized users can access the home page.

- **API Integration**:
  - Axios is used to fetch product data from external APIs.

- **Toaster Notifications**:
  - Used the `react-toastify` package for success and error notifications (e.g., successful login, invalid credentials).

## Tech Stack

- React
- React Router DOM
- Context API
- Axios (for API calls)
- React Toastify (for notifications)
- LocalStorage (for user authentication)
