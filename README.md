# User Management App

## Overview

This React Native application demonstrates user authentication, registration, profile management,
and location fetching. It utilizes Redux for state management, Redux-Saga for handling
asynchronous operations, and Expo for simplified development and testing.

## Features

- `User Registration:`Register with first name, last name, email, username, password, and location.

- `User Login:`Authenticate using email and password.

- `User Listing:`Display a list of users fetched from a mock backend.

- `Profile Management:`View and edit user profiles.

- `Location Services:`Automatically fetch and suggest the user's current location during registration.

## Technologies Used

- `React Native:`A framework for building native apps using React.

- `Expo:`An open-source platform for making universal native apps for Android, iOS, and the web with JavaScript and React.

- `Redux Toolkit:`Toolset for efficient Redux development.

- `Redux-Saga:`Middleware library used to handle asynchronous side effects.

- `Axios:`Promise-based HTTP client for making requests to external APIs.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (LTS version recommended)

- npm or Yarn (package managers)

- Expo CLI

### `npm install -g expo-cli`

## Installation

To get started with the project, follow these steps:

### Clone the Repository:

> #### `git clone `
>
> #### `cd fronted-exercise`

## Install Dependencies:

> #### `npm install`

## Start the Application:

> #### `expo start`

This will open up a browser window with a QR code. You can scan this QR code using the Expo Go app on your Android or iOS device, or use an Android/iOS emulator on your computer.

## Structure

- `src/screens/:` Contains all the screen components (Login, Signup, Home, Edit Profile).

- `src/store/:` Houses the Redux store configuration, user slice, and sagas.

- `src/api/:` API utility functions to handle requests to the backend.

- `src/types/:` TypeScript definitions for application-wide types.

## Usage

- `Signup:` Fill in the registration form and submit. The location field is automatically populated if location services are permitted.

- `Login:` After registration, use the same credentials to login.

- `Home:` View a list of users registered in the system.

- `Edit Profile:` Modify your user details.
