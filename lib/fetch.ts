interface FetchConfig {
  nextConfig?: NextFetchRequestConfig;
  cache?: RequestCache;
}

export class Fetch {
  constructor(private config: FetchConfig = {}) {
    this.config = {
      nextConfig: config.nextConfig,
      cache: config.cache || 'no-store',
    };
  }

  public async get<Result>(url: string, headers?: Headers): Promise<Result> {
    const response = await fetch(url, {
      next: this.config.nextConfig,
      cache: 'no-store',
      headers,
    });

    return this.handleResponse(response);
  }

  public async post<Result>(
    url: string,
    headers: Headers,
    body: BodyInit,
  ): Promise<Result> {
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body,
    });

    return this.handleResponse(response);
  }

  private async handleResponse(response: Response) {
    if (!response.ok) {
      throw new Error(`HTTP Response: ${response.statusText}`);
    }

    const json = await response.json();

    if (json.error) {
      throw new Error(json.error.message);
    }

    return json;
  }
}
