# Todo App with Next.js, MUI, and NextAuth

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
│   │   └── login.service.ts            # login api service
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
│   │       ├── todo/                   # todo api related// to avoid CORS issue on client side           
├── .env                            # Environment variables
