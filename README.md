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
import { Configuration, JobsApi, OptimizationApi } from '@sawvant/sdk';

const config = new Configuration({
  apiKey: 'sk_your_api_key_here',
  basePath: 'https://api.sawvant.com',
});

const optimization = new OptimizationApi(config);
const jobs = new JobsApi(config);

// Submit an optimization job. Sizes are in mm.
const job = await optimization.createOptimization({
  sheets: [
    { id: 'board', length: 2800, width: 2070, quantity: 10, grain: 'none' },
  ],
  parts: [
    { id: 'panel-a', length: 600, width: 400, quantity: 10, grain: 'none' },
    { id: 'panel-b', length: 300, width: 200, quantity: 20, grain: 'none' },
  ],
  machine: { bladeThickness: 4.4, maxLevels: 3, cutDirection: 'default' },
});

console.log('Job created:', job.jobId);

// Poll for results
let result = await jobs.getJob(job.jobId);
while (result.status === 'pending' || result.status === 'running') {
  await new Promise(resolve => setTimeout(resolve, 1000));
  result = await jobs.getJob(job.jobId);
}

if (result.status === 'completed') {
  console.log('Optimization complete:', result.result);
} else {
  console.error('Job failed:', result.error);
}
```

## SSE Streaming

Stream real-time progress events as the job runs with the `streamJob` helper. Pass the `jobId` that `createOptimization` returned:

```typescript
import { streamJob } from '@sawvant/sdk/dist/streaming';

const jobId = '550e8400-e29b-41d4-a716-446655440000';

for await (const event of streamJob(jobId, {
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
| `apiKey` | Your Sawvant API key (`sk_...`) | none |
| `basePath` | API base URL | `https://api.sawvant.com` |
| `fetchApi` | Custom fetch implementation | `globalThis.fetch` |
| `middleware` | Request/response middleware array | `[]` |

```typescript
import { Configuration } from '@sawvant/sdk';

const config = new Configuration({
  apiKey: process.env.SAWVANT_API_KEY,
  basePath: 'https://api.sawvant.com',
});
```

## API Reference

All endpoints are relative to `https://api.sawvant.com`.

| Class | Method | HTTP | Path | Description |
|-------|--------|------|------|-------------|
| `OptimizationApi` | `createOptimization` | POST | `/v1/optimize` | Submit a new cutting optimization job |
| `OptimizationApi` | `createBatchOptimization` | POST | `/v1/optimize/batch` | Submit several optimization jobs at once |
| `JobsApi` | `getJob` | GET | `/v1/jobs/{id}` | Retrieve job status and result |
| `JobsApi` | `getJobDiagramSVG` | GET | `/v1/jobs/{id}/diagram` | Cutting diagram as SVG |
| `JobsApi` | `getJobDiagramPDF` | GET | `/v1/jobs/{id}/diagram.pdf` | Cutting diagram as PDF |
| `streamJob` (from `@sawvant/sdk/dist/streaming`) | | GET | `/v1/jobs/{id}/stream` | Stream job progress via SSE |
| `SystemApi` | `getHealth` | GET | `/health` | Health check (no auth required) |
| `SystemApi` | `listTiers` | GET | `/v1/tiers` | List subscription tiers (no auth required) |

## License

Apache-2.0. See [LICENSE](LICENSE).
