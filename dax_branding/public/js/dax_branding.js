(function () {
	// Dynamically inject the PWA manifest link
	const link = document.createElement('link');
	link.rel = 'manifest';
	link.href = '/assets/dax_branding/manifest.json';
	document.head.appendChild(link);

	// Dynamically inject/override the theme-color meta tag
	let themeColorMeta = document.querySelector('meta[name="theme-color"]');
	if (!themeColorMeta) {
		themeColorMeta = document.createElement('meta');
		themeColorMeta.name = 'theme-color';
		document.head.appendChild(themeColorMeta);
	}
	themeColorMeta.content = '#8b5cf6';
})();
