import ProductCard from "@/components/ProductCard";
import productsData from "@/data/products.json";

const Products = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <h1 className="mb-4 text-primary-foreground">Our Products</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            High-quality equipment and solutions designed for the demanding requirements of the oil and gas industry
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsData.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6">Need Custom Solutions?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Our team can design and manufacture custom equipment tailored to your specific requirements. 
            Contact us to discuss your project needs.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Products;
