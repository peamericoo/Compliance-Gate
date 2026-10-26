export const appConfig = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8000",
  csrfCookieName: import.meta.env.VITE_CSRF_COOKIE_NAME ?? "cg_csrf",
  csrfHeaderName: import.meta.env.VITE_CSRF_HEADER_NAME ?? "X-CSRF-Token",
}
