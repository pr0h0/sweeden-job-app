class HelperService {
  static API_DOMAIN = "https://ean-db.com";
  static API_URL = "/api";

  static getHeaders = () => ({
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY as string}`,
    Accept: "application/json",
  });
}

export default HelperService;
