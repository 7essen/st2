module.exports = ({ env }) => ({
	upload: {
		config: {
			provider: 'st2provider',
			providerOptions: {
				token: 'vercel_blob_rw_k6zCgoCCJcYCW0QY_bOWHbKFb0bY7iZvBrrLumDt8lc4ujX',
				addRandomSuffix: true,
				cacheControlMaxAge: 31536000, // سنة بالثواني
			},
		},
	},
});
