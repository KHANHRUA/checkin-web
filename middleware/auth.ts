export default defineNuxtRouteMiddleware((to, from) => {
    // isAuthenticated() is an example method verifying if a user is authenticated
    if (from.path === '/') {
        return navigateTo('/auth/login')
    }
    if (typeof window !== 'undefined'&&!localStorage.getItem('user')) {
        return navigateTo('/auth/login');
    }
})