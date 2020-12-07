# [jenniferspick.com](https://jenniferspick.com/)

This personal site was developed to familiarize myself with TypeScript. I've recently decided that it's time to make the switch over to TypeScript from plain JavaScript. I figured a small, personal website would be the perfect project to get started in that transition.

### Overview

- `pages/api/items`: An API route for retrieving the travel destinations on the `/about` page.
- `pages/about`: Retrieves information from `pages/api/items` to display recent travel destinations.
- `pages/travel`: This is an authenticated route which displays a form to push new travel items onto the API.
- `pages/*`: All other pages are static pages.

### Running Locally

```
$ git clone https://github.com/jakequinter/jenniferspick.com.git
$ cd jenniferspick.com
$ yarn
$ yarn dev
```

Create a `.env.local` file similar to what is posted below:

```
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
FIREBASE_PRIVATE_KEY=
FIREBASE_CLIENT_EMAIL=
```

### Built With

- [Vercel](https://vercel.com/)
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Firebase](https://firebase.google.com/)
- [Tailwind CSS](https://tailwindcss.com/)
