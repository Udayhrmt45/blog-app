# MyBlog Application

This is a simple blog application that allows users to perform CRUD (Create, Read, Update, Delete) operations on blog posts. The application also features user authentication, enabling users to sign up, log in, and manage their blog posts.

## Features

- User Authentication: Secure sign-up and login system using JWT (JSON Web Token).
- CRUD Operations: Users can create, read, update, and delete blog posts.
- MongoDB: MongoDB is used as the database for storing user details and blog posts.
- Responsive Design: The front-end is designed to work well on both mobile and desktop devices.

## Tech Stack

- Backend: Node.js with Express.js
- Database: MongoDB (using Mongoose for data modeling)
- Authentication: JWT or session-based authentication (using Passport.js, bcrypt for password hashing)
- Frontend: HTML, CSS, JavaScript (or optionally React.js)
- Others:
  - Body-parser for handling request bodies
  - dotenv for environment variables
  - nodemon for development server auto-restart

## Prerequisites

Ensure you have the following installed on your machine:

- Node.js (v14.x or later)
- MongoDB
- npm

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/MyBlog.git
   cd blog-app

2. Install dependencies:
   ```bash
   npm install

3. Start the application:
   ```bash
   npm run dev

The app will be running on http://localhost:5173/

## API Endpoints

### Authentication

- POST /register
  Create a new user.

- POST /login
  Log in a user.

### Blog Posts 

- GET /
  Fetch all blog posts
 
- POST /create
  Create a new blog post (Authenticated users only).

- PUT edit/posts/:id
  Update a blog post (Authenticated users only).

- DELETE edit/posts/:id
  Delete a blog post (Authenticated users only).

## Usage

1. Sign Up: Register as a new user via the /api/auth/register endpoint.
2. Login: Log in using the /api/auth/login endpoint and receive a token (if using JWT).
3. Create Posts: Use the token to create, update, or delete blog posts via the protected endpoints.

## Security

- Passwords are hashed using bcrypt.
- Authentication is handled using JWT (or session-based,depending on your setup).