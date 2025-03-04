# reffer.al 🚀

reffer.al is an application designed for online events, allowing participants to register and use a referral system. The platform features a dynamic ranking system, link access tracking, and registration monitoring through referrals, providing an interactive and engaging experience.

## Tech's and Tool's 🔧

### Back-end
- **Node.js** - JavaScript runtime environment on the server-side
- **TypeScript** - Static typing for more robust and maintainable code
- **Fastify** - High-performance and lightweight web framework
- **Drizzle ORM** - TypeScript-first ORM for SQL databases
- **Zod** - Type-safe schema validation
- **Tsup** - Fast bundler for TypeScript projects
- **Swagger** - API documentation using Fastify plugin for create and UI  
- **Biome** - Code formatter and linter for TypeScript and JavaScript

### Front-end
- **React** - A JavaScript library for building user interfaces
- **Next.js** - A React framework with server-side rendering and static site generation
- **TypeScript** - Static typing for a more robust and maintainable codebase
- **TailwindCSS** - Utility-first CSS framework for styling
- **Orval** - API client code generation from OpenAPI specifications
- **Zod** - Type-safe schema validation
- **Biome** - Code formatter and linter
- **Lucide Icons** - Open-source icons for React applications
- **React Hook Form** - Performant and flexible form management
- **Tailwind Merge** - Utility for merging Tailwind CSS classes efficiently

### Database
- **PostgreSQL** - High-performance, open-source relational database
- **Redis** - In-memory key-value store for caching and real-time messaging

### Tool's
- **Docker** - Containerization for development and deployment
- **VS Code** - Popular code editor with extensive extensions and integrations
- **Insomnia** - API testing and debugging tool
- **DBeaver** - Database management tool for SQL and NoSQL databases
- **Warp Terminal** - Modern terminal with GPU acceleration and team collaboration features

## Available scripts ⌨️

#### (Back-end)
- `npm run db:init` - Initializes the database and runs migrations using Drizzle Kit.
- `npm run dev` - Starts the backend development server.
- `npm run build` - Compiles the backend code for production.
- `npm run start` - Runs the backend server in production mode.

#### (Front-end)
- `npm run orval` - Generates API client code from OpenAPI specifications using Orval.
- `npm run lint` - Runs ESLint to analyze and fix code quality issues.
- `npm run dev` - Starts the frontend development server.
- `npm run build` - Compiles the frontend for production.
- `npm run start` - Runs the frontend application in production mode.

## How to run the project in local? 🧐

### Prerequisites
- [Node.js](https://nodejs.org/pt)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [VScode](https://code.visualstudio.com/download) or your favorite code editor

### Steps
1. Clone the repository.
```sh
git clone https://github.com/LFeli/referr.al.git .
```

#### (Back-end)
1. Go to api directory
```sh
cd /api
```

2. Install deps
```sh
npm install
```

3. Config `.env` file
```sh
PORT # port that run my project
WEB_URL # web url that run
POSTGRES_URL # postgres url with config credentials
REDIS_URL # redis url with config credentials
```

4. run docker container
```sh
docker compose up -d
```

5. Run locally project 
```sh
npm run dev
```

#### (Front-end)
1. Go to web directory
```sh
cd /web
```

2. Install deps
```sh
npm install
```

3. Run locally project 
```sh
npm run dev
```

## License 📝
This project is licensed under the [MIT License](https://github.com/LFeli/referr.al/blob/main/LICENSE).

--- 
<br />
<br />
<div align="center">
  Made with 💙 by <a href="https://github.com/LFeli" target="_blank">LFeli</a>
</div>