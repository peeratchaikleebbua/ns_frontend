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
│   │   └── useFetchClientSide.ts       # Hook for client-side data fetching
│   ├── service/               
│   │   └── login.service.ts            # login api service // server action
│   │   └── todo.service.ts             # todo api service // server action
│   ├── types/                      # TypeScript type definitions
│   │   ├── authType/                   # Types related to authentication
│   │   ├── todoType/                   # Types related to todos
│   │   ├── confirmType/                # Types related to confirm
│   │   ├── hookType/                   # Types related to hooks
│   ├── utils/                      # Utility functions // Separate util server, util client
│   │   ├── client-utils/                   # Types related to hooks
│   │   │   └── dateFormat.ts                   # date format into readable format
│   │   ├── server-utils/                   # Types related to hooks
│   │   │   └── fetchServerSide.ts              # server-side data fetching and CRUD
│   ├── app/                        # Next.js App directory (if using App Router)
│   │   └── layout.tsx                  # Root layout for the app
│   │   └── robots.ts                    # Robot for the app SEO
│   │   └── sitemap.ts                  # Sitemap for the app SEO
│   │   └── page.tsx                    # Root page for the app
│   │   └── login/                      # login page for the app
│   │   └── todo/                       # todo page for the app
│   │   └── api/                
│   │       ├── auth/                   # auth api related       
├── .env.local                      # Environment variables
├── next-seo.config.ts              # Default SEO for Todo App
```

## SEO Checklist
1. Static Metadata tags /
1. Dynamic Metadata tags X
2. JSON-LD Schema X
3. Sitemap.xml /
4. robots.txt /
5. Link tags X
6. Script optimization /
7. Image optimization X
8. OpenGraph Image X
9. Core Web Vitals /
10. NEXT SEO - Library for handling SEO /

SEO 100%
Check by Lighthouse Extention

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

Contact me to get values

`NEXT_HOST`

`NEXT_LOCAL_URL`

`NEXT_AUTH`

`NEXTAUTH_SECRET`

## Run Locally

Clone the project

Install dependencies

```bash
  pnpm install
```

Start the local development

```bash
  pnpm dev
```

## 🛠 Self-Note

https://reetesh.in/blog/server-action-with-tanstack-query-in-next.js-explained => refetchOnMouth and refetchOnReconnect => false, and also staletime as well
https://reetesh.in/blog/react-cache-function-explained
https://www.youtube.com/watch?v=yVsaCVEfPn4
https://blog.logrocket.com/manage-seo-next-js-with-next-seo/
https://www.youtube.com/watch?v=TvrQnBDIDpI&t=1049s
AVOID NEXT_PUBLIC since it will be readable on user browser