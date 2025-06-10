// Preventing client components from being async functions in Next.js:
//
// In Next.js, client components (those with "use client") must not be async functions.
// This is because React expects client components to be synchronous and to return JSX immediately.
//
// If you need to fetch data or perform async operations, use useEffect or SWR inside the component.
//
// Example fix:
//
// // ❌ Incorrect (async client component)
// "use client";
// export default async function MyComponent() {
//   // ...
// }
//
// // ✅ Correct (sync client component)
// "use client";
// export default function MyComponent() {
//   // ...
//   // useEffect(() => { ... }, []);
// }
//
// For your dashboard, move all async logic (like Supabase calls) to useEffect or a custom hook.
