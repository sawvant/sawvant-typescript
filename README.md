# Sawvant TypeScript SDK

The official TypeScript/JavaScript client for the [Sawvant](https://sawvant.com) Cutting Optimization API.

- API version: 0.1.0
- Package: `@sawvant/sdk`

## Installation

```sh
npm install @sawvant/sdk
```

Requires Node.js 18 or later. Works in Node.js, Webpack, and Browserify environments.

## Quick Start

```typescript
import { OptimizeApi, Configuration } from '@sawvant/sdk';

const config = new Configuration({
  apiKey: 'sk_your_api_key_here',
  basePath: 'https://api.sawvant.com',
});

const api = new OptimizeApi(config);

// Submit an optimization job
const job = await api.createOptimization({
  optimizeRequest: {
    sheets: [
      { width: 2440, height: 1220, quantity: 5 },
    ],
    parts: [
      { width: 600, height: 400, quantity: 10, label: 'Panel A' },
      { width: 300, height: 200, quantity: 20, label: 'Panel B' },
    ],
  },
});

console.log('Job created:', job.id);

// Poll for results
let result = await api.getJob({ id: job.id });
while (result.status === 'pending' || result.status === 'running') {
  await new Promise(resolve => setTimeout(resolve, 1000));
  result = await api.getJob({ id: job.id });
}

if (result.status === 'completed') {
  console.log('Optimization complete:', result.result);
}
```

## SSE Streaming

Stream real-time progress events as the job runs:

```typescript
import { JobsApi, Configuration } from '@sawvant/sdk';

const config = new Configuration({
  apiKey: 'sk_your_api_key_here',
  basePath: 'https://api.sawvant.com',
});

const api = new JobsApi(config);

for await (const event of api.streamJob({ id: job.id })) {
  if (event.type === 'progress') {
    console.log('Progress:', event.data);
  } else if (event.type === 'completed') {
    console.log('Done:', event.data);
    break;
  } else if (event.type === 'failed') {
    console.error('Failed:', event.data);
    break;
  }
}
```

## Configuration

| Option | Description | Default |
|--------|-------------|---------|
| `apiKey` | Your Sawvant API key (`sk_...`) | — |
| `basePath` | API base URL | `https://api.sawvant.com` |
| `fetchApi` | Custom fetch implementation | `globalThis.fetch` |
| `middleware` | Request/response middleware array | `[]` |

```typescript
const config = new Configuration({
  apiKey: process.env.SAWVANT_API_KEY,
  basePath: 'https://api.sawvant.com',
});
```

## API Reference

All endpoints are relative to `https://api.sawvant.com`.

| Method | HTTP | Path | Description |
|--------|------|------|-------------|
| `createOptimization` | POST | `/v1/optimize` | Submit a new cutting optimization job |
| `getJob` | GET | `/v1/jobs/{id}` | Retrieve job status and result |
| `streamJob` | GET | `/v1/jobs/{id}/stream` | Stream job progress via SSE |
| `getHealth` | GET | `/health` | Health check (no auth required) |

## License

MIT
