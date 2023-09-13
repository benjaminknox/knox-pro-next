## Knox.Pro Next

This is the next.js app source code running on https://knox.pro.

#### Desktop



https://github.com/benjaminknox/knox-pro-next/assets/5668789/b11c5b04-d79f-4b02-9aab-a9d84c279f7c




#### Mobile


https://github.com/benjaminknox/knox-pro-next/assets/5668789/67c01dd8-4196-4fa3-b746-3324d413841b



### Running 

You can run this locally with:

```bash
yarn dev
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
yarn build
```

The build ends up being in `./out`, and I've deploy on [DigitalOcean app-platform](https://www.digitalocean.com/go/app-platform).
