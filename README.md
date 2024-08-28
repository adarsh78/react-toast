# React Toast Notification System Documentation

## Overview

This project implements a reusable toast notification system using React. It provides global accessibility, default message types with corresponding icons and styles, and support for custom messages. The notifications can be positioned anywhere on the screen and automatically dismissed after a specified duration.

## Components

### 1. **ToastProvider** (ToastContext.jsx)

#### Purpose:
The `ToastProvider` is a context provider that makes toast-related functions (`addToast`, `addCustomToast`) accessible to any component in the application. It manages the state of all active toasts and provides functions to add and remove toasts.

#### Props:
- `children`: The child components that will have access to the toast context.

#### Functions:
- `addToast(message, type, position, duration)`: Adds a new toast notification with a specified message, type (e.g., success, error, etc.), position (e.g., top-right, bottom-center), and duration (time in milliseconds before the toast disappears).
- `addCustomToast(message, type, position, duration)`: Adds a custom toast notification based on the user's input.
- `removeToast(id)`: Removes a toast notification by its unique ID.

#### State:
- `toasts`: An array of active toast notifications.
- `customToast`: The current value of the custom toast input field.
- `showCustomToastBtn`: Boolean to control the visibility of the custom toast button.

### 2. **Toast** (Toast.jsx)

#### Purpose:
The `Toast` component is responsible for rendering individual toast notifications. It is styled using `styled-components` and uses `React Portal` to position toasts on the screen.

#### Props:
- `id`: Unique identifier for the toast.
- `message`: The message to display inside the toast.
- `type`: The type of toast (e.g., success, error, warning, info, custom), which determines the background color and icon.
- `position`: The position on the screen where the toast should appear (e.g., top-right, bottom-center).
- `removeToast()`: Function to remove the toast when the close button is clicked.

### 3. **App** (App.jsx)

#### Purpose:
The `App` component demonstrates how to use the `ToastProvider` and the toast functions (`addToast`, `addCustomToast`). It includes buttons for each default toast type and an input field for adding custom toasts.

### 4. **ToastContainer** (Styled in Toast.jsx)

#### Purpose:
A styled component that handles the layout and styling of each toast notification. The `positions` object defines CSS for various screen positions and includes media queries to ensure responsiveness.



