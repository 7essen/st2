export default [
	// ...
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
						'https://st2provider.public.blob.vercel-storage.com', // تأكد من أن هذا هو العنوان الصحيح
					],
					'media-src': [
						"'self'",
						'data:',
						'blob:',
						'https://st2provider.public.blob.vercel-storage.com', // تأكد من أن هذا هو العنوان الصحيح
					],
					upgradeInsecureRequests: null,
				},
			},
		},
	},
];
