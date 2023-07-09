class HttpService {
  static async get<T>(url: string, options: RequestInit = {}) {
    try {
      const res = await fetch(url, options);

      if (!res.ok) {
        console.log(res);
        throw new Error(res.statusText);
      }

      const data = (await res.json()) as T;

      return {
        error: false,
        data: data,
        message: "",
      };
    } catch (error: unknown) {
      return {
        error: true,
        data: null,
        message: (error as Error).message,
      };
    }
  }
}

export default HttpService;
