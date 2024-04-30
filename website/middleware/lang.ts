export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path === '/en') {
    return navigateTo('/')
  }
})