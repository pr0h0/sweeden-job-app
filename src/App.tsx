import { useEffect, useState } from "react";
import { Product as IProduct } from "./types/Product";
import ProductService from "./services/product.service";
import Navbar from "./Components/Navbar";
import Wrapper from "./Components/Wrapper";
import Product from "./Components/Product";

function App() {
  const [product, setProduct] = useState<IProduct | null>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const fetchProduct = async () => {
    setLoading(true);
    // comment this line and uncomment the next one to use the mock data
    const response = await ProductService.getProduct("9780194229647");

    // Mock data
    // const response = await ProductService.getMockProduct("9780194229647");

    if (!response.error) {
      setProduct(response.data?.product || null);
    } else {
      setError(response.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    void fetchProduct();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (product) {
    return (
      <Wrapper>
        <Navbar />
        <Product {...product} />
      </Wrapper>
    );
  }

  return null;
}

export default App;
