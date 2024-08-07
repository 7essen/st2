module.exports = [
  'strapi::errors',
  'strapi::cors',
  'strapi::query',
  'strapi::body',
  'strapi::public',
  'strapi::favicon',
  {
      name: 'strapi::security',
      config: {
          contentSecurityPolicy: {
              useDefaults: true,
              directives: {
                  'connect-src': ["'self'", 'https:'],
                  'img-src': [
                      "'self'",
                      'data:',
                      'blob:',
                      'https://st2provider.public.blob.vercel-storage.com',
                  ],
                  'media-src': [
                      "'self'",
                      'data:',
                      'blob:',
                      'https://st2provider.public.blob.vercel-storage.com',
                  ],
                  upgradeInsecureRequests: null,
              },
          },
      },
  },
];
