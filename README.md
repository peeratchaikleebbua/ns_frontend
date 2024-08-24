# Todo App with Next.js, MUI, and NextAuth

## Tech Stack

**Client:** Next.js, MUI, Yup, Formik, Auth.js

## Overview

Todo App

## Project Structure

The project is organized as follows:

```plaintext
/todo_app
├── src/
│   ├── auth.ts                 # Authentication logic (e.g., signIn, signOut, credential setup)
│   ├── middleware.ts           
│   ├── components/             # Reusable React components
│   │   ├── todo/                   # Todo-related components
│   │   ├── auth/                   # auth/login-related components
│   │   ├── header/                 # Header Layout components
│   │   │   └── NavBar.tsx              # Navbar Layout components
│   │   └── ui/                     # Common UI components (e.g., buttons, modals)
│   ├── constants/                  # Project-wide constants (e.g., API URLs)
│   │   └── service.constant.ts         # constant for service and api call
│   ├── hooks/                      # Custom React hooks
│   │   └── getSession.ts               # Hook for getSession after login
│   │   └── useFetchClientSide.ts       # Hook for client-side data fetching
│   │   └── useFetchServerSide.ts       # Hook for server-side data fetching
│   ├── service/               
│   │   └── login.service.ts            # login api service // server action
│   │   └── todo.service.ts             # todo api service // server action
│   ├── types/                      # TypeScript type definitions
│   │   ├── authType/                   # Types related to authentication
│   │   ├── todoType/                   # Types related to todos
│   │   ├── confirmType/                # Types related to confirm
│   │   ├── hookType/                   # Types related to hooks
│   ├── utils/                      # Utility functions
│   │   └── dateFormat.ts               # date format into readable format
│   ├── app/                        # Next.js App directory (if using App Router)
│   │   └── layout.tsx                  # Root layout for the app
│   │   └── page.tsx                    # Root page for the app
│   │   └── login/                      # login page for the app
│   │   └── todo/                       # todo page for the app
│   │   └── api/                
│   │       ├── auth/                   # auth api related       
├── .env                            # Environment variables
```

## SEO Checklist
1. Meta tags /
2. JSON-LD Schema X
3. Sitemap /
4. robots.txt /
5. Link tags /
6. Script optimization /
7. Image optimization X

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

Contact me to get values

`NEXT_PUBLIC_HOST`

`NEXT_LOCAL_URL`

`NEXT_LOCAL_URL`

`NEXTAUTH_SECRET`

## Run Locally

Clone the project

Install dependencies

```bash
  pnpm install
```

Start the server

```bash
  pnpm dev
```