# Discount Portal

This project is a Discount Engine built using Node.js, React.js, and Next.js. The application allows administrators to create and manage various discounts (both coupon-based and automatic) on products. These discounts are prominently displayed on product pages, in the cart, and during checkout.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Code Explanation](#code-explanation)


## Features

- Admin dashboard to create and manage discounts.
- Supports automatic discounts and coupon-based discounts.
- Discounts are applied to products, cart items, and specific charges.
- Responsive design for seamless user experience.

## Installation

### Prerequisites

    Nodejs: v20.16.0
    ExpressJs: 4.19.2
    NextJs: 14.2.5
    React: 18.3.1
    MongoDB: 8.5.2
    cors: 2.8.5

### Backend Setup

   ``bash
    mkdir -p backend
    cd backend
    npm install express body-parser mongoose cors
    ``

### Backend Setup
### Frontend Setup

    ```bash
    mkdir -p frontend
    cd frontend
    npx create-next-app@latest .
    npm install axios
    ```



### USAGE

Visit http://localhost:3000 to view the product page.
Visit http://localhost:3000/cart to view the cart and apply discounts.
Visit http://localhost:3000/admin to access the admin dashboard and manage discounts.

## Code Explanation

### Backend
    server.js: The entry point of the backend server. Configures Express, connects to MongoDB, and sets up routes.
    models/discountModel.js: Defines the schema for discounts in MongoDB.
    controllers/discountController.js: Contains logic for creating, retrieving, and applying discounts.
    routes/discountRoutes.js: Defines the API endpoints for managing discounts.


### Frontend

    components/Product.js: Displays product information and applies automatic discounts.
    components/Cart.js: Displays cart items and allows users to apply discount codes.
    components/Admin.js: Provides a form for creating new discounts in the admin dashboard.
    pages/index.js: The home page that displays a sample product.
    pages/cart.js: The cart page that lists cart items and applies discounts.
    pages/admin.js: The admin page for managing discounts.
