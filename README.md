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

Stream real-time progress events as the job runs with the `streamJob` helper:

```typescript
import { streamJob } from '@sawvant/sdk/dist/streaming';

for await (const event of streamJob(job.jobId, {
  apiKey: 'sk_your_api_key_here',
  // baseUrl: 'https://api.sawvant.com', // optional
  // signal: abortController.signal,     // optional
})) {
  if (event.type === 'progress') {
    console.log('Progress:', event.data.progress);
  } else if (event.type === 'completed') {
    console.log('Done:', event.data.result);
    break;
  } else if (event.type === 'failed') {
    console.error('Failed:', event.data.error);
    break;
  }
}
```

When a `completed` event arrives, the SDK fetches the full job via `GET /v1/jobs/{id}` and puts it in the event, so `event.data.result` holds the complete result. The server leaves the result out of stream events to keep them small. Other events are passed on as received.

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
