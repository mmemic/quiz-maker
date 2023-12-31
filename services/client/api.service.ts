class ApiService {
  private baseUrl: string;

  constructor() {
    const baseUrl = process.env.NEXT_PUBLIC_API_ENDPOINT;
    if (!baseUrl)
      throw new Error('No NEXT_PUBLIC_API_ENDPOINT env variable found.');
    this.baseUrl = baseUrl;
  }

  async get(url: string) {
    const response = await fetch(`${this.baseUrl}${url}`, {
      cache: 'no-store',
    });
    return response.json();
  }

  async post(url: string, data: unknown) {
    const response = await fetch(`${this.baseUrl}${url}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
      },
    });
    return response.json();
  }

  async put(url: string, data: unknown) {
    const response = await fetch(`${this.baseUrl}${url}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
      },
    });
    return response.json();
  }

  async delete(url: string) {
    const response = await fetch(`${this.baseUrl}${url}`, {
      method: 'DELETE',
      cache: 'no-store',
    });
    return response.json();
  }
}

export const apiService = new ApiService();
