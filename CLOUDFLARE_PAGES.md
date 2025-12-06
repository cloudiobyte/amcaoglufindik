# Cloudflare Pages Configuration

## Build Settings

### Environment Variables Required:
- `NODE_VERSION=20.18.0` (or set in Build settings)
- Add your Sanity environment variables

### Build Configuration:
- **Build command:** `npm run build`
- **Build output directory:** `.next`
- **Root directory:** `/` (default)

### Node Version:
This project requires Node.js 20.18.0 or higher. The version is specified in:
- `.nvmrc` file
- `.node-version` file  
- `package.json` engines field

### Framework Preset:
- Select **Next.js** as the framework preset

## Troubleshooting

If you see Node 18 being used:
1. Go to Settings → Environment Variables
2. Add `NODE_VERSION` = `20.18.0`
3. Retry the deployment

## Note:
The `@architect/*` packages have been replaced with noop packages via npm overrides to ensure compatibility and avoid unnecessary Node 20+ dependencies from transitive dependencies.
