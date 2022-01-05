/** @param {HTMLDocument} doc */
export function get_base_uri(doc) {
	let baseURI = doc.baseURI;

	if (!baseURI) {
		const baseTags = doc.getElementsByTagName('base');
		baseURI = baseTags.length ? baseTags[0].href : doc.URL;
	}

	return baseURI;
}

/**
 * @param {string} href
 */
export function resolve_path(href) {
	const anchor = document.createElement('a');

	anchor.href = href;

	const resolved = new URL(anchor.href);

	resolved.pathname.replace(/\/$/, '');

	return resolved;
}
