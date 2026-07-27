const BASE = import.meta.env.BASE_URL.replace(/\/+$/, '');

/**
 * Builds an internal URL that respects the configured `base` path.
 * Use this for every internal link and every asset in /public so the site
 * keeps working whether it is served from a subpath or a bare domain.
 */
export function url(path = '/'): string {
  const clean = path.replace(/^\/+/, '');
  return clean ? `${BASE}/${clean}` : `${BASE}/`;
}
