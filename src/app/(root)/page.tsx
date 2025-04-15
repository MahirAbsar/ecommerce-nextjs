import ProductList from "@/components/shared/products/product-list";
import sampleData from "../../../db/sample-data";

export const metadata = {
  title: "Home",
};

const HomePage = async () => {
  return (
    <div className="space-y-8">
      <h2 className="h2-bold">Latest Products</h2>
      <ProductList
        data={sampleData.products}
        title="Newest Arrivals"
        limit={4}
      />
    </div>
  );
};

export default HomePage;
