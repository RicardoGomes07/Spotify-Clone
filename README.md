# Spotify-Clone

A full-featured Spotify clone built with Next.js, TypeScript, and TailwindCSS.

### Environment Setup
Startup Command:
```bash
npx create-next-app@latest spotify clone
```

Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

Open the local server using this uri [http://localhost:3000](http://localhost:3000) in your browser to test and interact with the application.

### Components

##### Client Components:
- Sidebar/SidebarItem
- Library
- Header
- Box


### Supabase
Generating types using Supabase CLI

```bash
npm i supabase@">=1.8.1" --save-dev
```

Login:
```bash
npx supabase login
```

Generate file:
```bash
npx supabase gen types typescript --project-id "$PROJECT_REF" --schema public > database.types.ts
```