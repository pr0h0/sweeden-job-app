class HelperService {
  static API_DOMAIN = "https://ean-db.com";
  static API_URL = `${HelperService.API_DOMAIN}/api/v1`;

  static getHeaders = () => ({
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY as string}`,
    Accept: "application/json",
  });
}

export default HelperService;
