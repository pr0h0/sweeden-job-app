import MockProducts from "../data/mockProducts";
import { ProductResponse } from "../types/Product";
import HelperService from "./helper.service";
import HttpService from "./http.service";

class ProductService extends HttpService {
  static products = MockProducts;

  static async getMockProduct(id: string) {
    const data = await new Promise<ProductResponse | undefined>((resolve) => {
      const data = ProductService.products.find(
        (p) => p.product.barcode === id
      );
      resolve(data);
    });

    if (!data) {
      return {
        error: true,
        data: null,
        message: "Product not found",
      };
    }

    return {
      error: false,
      data,
      message: "",
    };
  }
  static async getProduct(id: string) {
    const options: RequestInit = {
      headers: HelperService.getHeaders(),
      // mode: 'no-cors'
    };
    return await this.get<ProductResponse>(
      `${HelperService.API_URL}/product/${id}`,
      options
    );
  }
}

export default ProductService;
