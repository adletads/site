import { products } from '../data/products';
import { Link } from 'react-router-dom';

export function Products() {
  const categories = Array.from(new Set(products.map(product => product.category)));

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Products</h1>
          <p className="mt-4 text-lg text-gray-600">
            Discover our innovative advertising solutions
          </p>
        </div>

        <div className="mt-16">
          {categories.map((category) => (
            <div key={category} className="mb-16">
              <h2 className="text-2xl font-semibold text-gray-800 mb-8">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products
                  .filter(product => product.category === category)
                  .map((product) => (
                    <div key={product.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                        <p className="text-gray-600 mb-4">{product.description}</p>
                        <div className="space-y-2">
                          {product.features.map((feature, index) => (
                            <p key={index} className="text-sm text-gray-600 flex items-center">
                              <span className="mr-2">•</span>
                              {feature}
                            </p>
                          ))}
                        </div>
                        <div className="mt-4 flex justify-between items-center">
                          <span className="text-blue-600 font-semibold">{product.price}</span>
                          <Link
                            to={`/contact`}
                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                          >
                            Get Started
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}