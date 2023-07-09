export interface ProductResponse {
  balance: number;
  product: Product;
}

export interface Product {
  barcode: string;
  titles: {
    [key: string]: string;
  };
  categories: {
    id: string;
    titles: {
      [key: string]: string;
    };
  }[];
  manufacturer: {
    id: string;
    titles: {
      [key: string]: string;
    };
    wikidataId: string;
  };
  images: {
    url: string;
  }[];
  metadata: {
    printBook: {
      numPages: number;
      publishedYear: number;
      bindingType: string;
    };
    generic: {
      contributors: {
        names: {
          [key: string]: string;
        };
        type: string;
      }[];
    };
  };
}
