// routes.ts

export const routes = {
  home: '/',
  login: '/login',
  signup: '/signup',
  forgotPassword: '/forgot-password',
  dashboard: '/dashboard',
  profile: '/profile',
  settings: '/settings',
  // Example of dynamic route helper
  userProfile: (id: string) => `/users/${id}`,
};
