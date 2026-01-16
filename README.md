# NextStore - Next.js & Express E-commerce Application

A full-stack e-commerce application built with Next.js 15 (App Router) and Express.js.

## Features

- **Landing Page**: 7+ sections showcasing features, categories, and testimonials.
- **Authentication**: Mock login system with protected routes.
- **Item Listing**: Fetch and display items from the backend API.
- **Item Details**: Detailed view of each product.
- **Add Item**: Protected route to add new items to the store.
- **Responsive Design**: Built with Tailwind CSS for all devices.

## Tech Stack

- **Frontend**: Next.js 15, Tailwind CSS, React
- **Backend**: Express.js, CORS, Dotenv
- **Data**: Mock in-memory data (resets on server restart)

## Setup Instructions

### Prerequisites
- Node.js installed

### 1. Backend Setup

```bash
cd server
npm install
npm start
```
The server will run on `https://admirable-mandazi-510155.netlify.app`.

### 2. Frontend Setup

Open a new terminal:

```bash
cd client
npm install
npm run dev
```
The client will run on `https://admirable-mandazi-510155.netlify.app/:3000`.

## API Routes

- `GET /api/items`: Get all items
- `GET /api/items/:id`: Get item by ID
- `POST /api/items`: Add new item
- `POST /api/login`: Mock login

## Mock Credentials

- **Email**: test@example.com
- **Password**: password123

## Project Structure

- `client/`: Next.js frontend application
- `server/`: Express.js backend API
