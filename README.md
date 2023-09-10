## Knox.Pro Next

This is the next.js app source code running on https://knox.pro.


### Running 

You can run this locally with:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

### Building

I've deployed this as a static site, that's why my next config looks like this:

```typescript
/** @type {import('next').NextConfig} */
const nextConfig = {
  ...
  output: 'export',
  images: { unoptimized: true },
  ...
}

module.exports = nextConfig

```

You can build with this command:


```bash
npm run build
# or
yarn build
# or
pnpm build
```

The build ends up being in `./out`, and I've deploy on [DigitalOcean app-platform](https://www.digitalocean.com/go/app-platform).
