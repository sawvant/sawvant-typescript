/**
 * SSE streaming client for Sawvant job progress.
 *
 * Usage:
 *   const stream = streamJob(jobId, apiKey);
 *   for await (const event of stream) {
 *     console.log(event.type, event.data.status);
 *   }
 */

export interface StreamEvent {
  type: "progress" | "completed" | "failed" | "error";
  data: JobResponse;
}

// JobResponse type is imported from the generated models
import { JobResponse } from "./models";

export interface StreamOptions {
  baseUrl?: string;
  apiKey: string;
  signal?: AbortSignal;
}

export async function* streamJob(
  jobId: string,
  options: StreamOptions
): AsyncGenerator<StreamEvent> {
  const baseUrl = options.baseUrl ?? "https://api.sawvant.com";
  const url = `${baseUrl}/v1/jobs/${jobId}/stream`;

  const response = await fetch(url, {
    headers: {
      "X-API-Key": options.apiKey,
      Accept: "text/event-stream",
    },
    signal: options.signal,
  });

  if (!response.ok) {
    const body = await response.json();
    throw new Error(`Stream failed: ${response.status} - ${body.error}`);
  }

  const reader = response.body!.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  let currentEvent = "";

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() ?? "";

      for (const line of lines) {
        if (line.startsWith("event:")) {
          currentEvent = line.slice(6).trim();
        } else if (line.startsWith("data:")) {
          const data = JSON.parse(line.slice(5).trim()) as JobResponse;
          yield { type: currentEvent as StreamEvent["type"], data };
        }
      }
    }
  } finally {
    reader.releaseLock();
  }
}
