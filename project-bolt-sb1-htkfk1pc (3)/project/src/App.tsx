import React from 'react';
import { Sprout, Leaf, Sun, ShieldCheck, Truck, ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-50">
      {/* Hero Section */}
      <header className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Sprout className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Farm Fresh Vegetables
              <br />
              Straight to Your Table
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Experience the taste of nature with our organically grown vegetables. From farm to fork, we ensure quality in every bite.
            </p>
            <button className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors inline-flex items-center gap-2">
              Shop Now <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Featured Products */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Seasonal Favorites</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Organic Tomatoes',
                image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=600&q=80',
                price: '$3.99/lb'
              },
              {
                name: 'Fresh Spinach',
                image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=600&q=80',
                price: '$2.49/bunch'
              },
              {
                name: 'Bell Peppers',
                image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=600&q=80',
                price: '$1.99/each'
              }
            ].map((product, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-green-500 font-bold">{product.price}</p>
                  <button className="mt-4 w-full bg-green-100 text-green-700 py-2 rounded-full hover:bg-green-200 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Leaf className="h-8 w-8 text-green-500" />,
                title: '100% Organic',
                description: 'Certified organic produce'
              },
              {
                icon: <ShieldCheck className="h-8 w-8 text-green-500" />,
                title: 'Quality Assured',
                description: 'Rigorous quality controls'
              },
              {
                icon: <Truck className="h-8 w-8 text-green-500" />,
                title: 'Fast Delivery',
                description: 'Same day local delivery'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="inline-block p-3 bg-green-100 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Farm to Table Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Our Farm to Table Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Growing', description: 'Organic farming practices' },
              { step: '2', title: 'Harvesting', description: 'Picked at peak ripeness' },
              { step: '3', title: 'Quality Check', description: 'Strict quality standards' },
              { step: '4', title: 'Delivery', description: 'Fresh to your doorstep' }
            ].map((process, index) => (
              <div key={index} className="relative">
                <div className="bg-green-800 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                <p className="text-green-100">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Get Fresh Updates
          </h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter for seasonal recipes, farming tips, and exclusive offers
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-300"
            />
            <button
              type="submit"
              className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sprout className="h-6 w-6" />
              <span className="font-bold text-xl">FreshVeg Co.</span>
            </div>
            <p className="text-gray-400">
              Bringing nature's goodness to your table.
            </p>
          </div>
          {['Products', 'About Us', 'Support'].map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4">{section}</h3>
              <ul className="space-y-2">
                {['Seasonal Produce', 'Organic Certification', 'Delivery Areas'].map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
}

export default App;