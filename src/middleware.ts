import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    // A list of all locales that are supported
    locales: ['en', 'es', 'pt'],

    // Used when no locale matches
    defaultLocale: 'pt'
});

export const config = {
    // Match only internationalized pathnames
    matcher: [
        '/',
        '/(en|es|pt)/:path*',
        '/((?!_next|_vercel|.*\\..*).*)'
    ]
};