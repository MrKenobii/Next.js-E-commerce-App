import Layout from "../components/Layout";
import Product from "../components/Product";
import data from "../utils/data";

export default function Home() {
  return (
    <div>
        <Layout title="Home Page">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {data.products.map(product => (
              <Product product={product} key={product.slug} />
            ))}
          </div>
        </Layout>
    </div>
  )
}
