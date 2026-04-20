import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const mockProducts = [
    {
      id: 1,
      name: "Commander Plus 9kg",
      category: "Extinguisher",
      price: 129.99,
      stock: 45,
      certification: "ISO 9001",
      description: "Heavy-duty powder extinguisher suitable for ABC fires. High-pressure discharge system.",
      imageUrl: "/images/extinguisher.png"
    },
    {
      id: 2,
      name: "SirenGuard Smart Alarm",
      category: "Alarms",
      price: 79.50,
      stock: 120,
      certification: "NFPA Certified",
      description: "Dual-sensor smoke and CO detector with mobile app integration and 10-year battery.",
      imageUrl: "/images/smoke-alarm.png"
    },
    {
      id: 3,
      name: "RapidResponse Fire Blanket",
      category: "Textiles",
      price: 35.00,
      stock: 80,
      certification: "British Standard",
      description: "Fiberglass fire blanket for kitchen and small liquid fires. Compact wall-mount design.",
      imageUrl: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 4,
      name: "Commander Plus 9kg",
      category: "Extinguisher",
      price: 129.99,
      stock: 45,
      certification: "ISO 9001",
      description: "Heavy-duty powder extinguisher suitable for ABC fires. High-pressure discharge system.",
      imageUrl: "/images/extinguisher.png"
    },
    {
      id: 5,
      name: "Commander Plus 9kg",
      category: "Extinguisher",
      price: 129.99,
      stock: 45,
      certification: "ISO 9001",
      description: "Heavy-duty powder extinguisher suitable for ABC fires. High-pressure discharge system.",
      imageUrl: "/images/extinguisher.png"
    },
    {
      id: 6,
      name: "Commander Plus 9kg",
      category: "Extinguisher",
      price: 129.99,
      stock: 45,
      certification: "ISO 9001",
      description: "Heavy-duty powder extinguisher suitable for ABC fires. High-pressure discharge system.",
      imageUrl: "/images/extinguisher.png"
    },
    {
      id: 7,
      name: "Commander Plus 9kg",
      category: "Extinguisher",
      price: 129.99,
      stock: 45,
      certification: "ISO 9001",
      description: "Heavy-duty powder extinguisher suitable for ABC fires. High-pressure discharge system.",
      imageUrl: "/images/extinguisher.png"
    }
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/products');
        if (response.data && response.data.length > 0) {
          setProducts(response.data);
        } else {
          setProducts(mockProducts);
        }
      } catch (error) {
        console.error("Error fetching products, using mocks", error);
        setProducts(mockProducts);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-32 pb-20 min-h-screen bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight uppercase">
              Protection <span className="text-brand-red">Catalog</span>
            </h1>
            <div className="flex items-center space-x-3">
              <span className="w-12 h-1 bg-brand-red rounded-full"></span>
              <p className="text-gray-500 uppercase tracking-widest text-[10px] font-bold">
                Total Inventory: {products.length} Units Available
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <div className="relative group flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 group-focus-within:text-brand-red transition-colors" />
              <input 
                type="text" 
                placeholder="Search equipment..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-6 py-4 glass-dark rounded-2xl w-full lg:w-80 text-white border-transparent focus:border-brand-red/50 transition-all outline-none"
              />
            </div>
            <button className="flex items-center justify-center space-x-2 px-6 py-4 glass-dark rounded-2xl text-gray-300 hover:text-white transition-colors border border-white/5 active:scale-95">
              <SlidersHorizontal className="h-5 w-5" />
              <span className="sm:hidden font-bold uppercase tracking-widest text-xs">Filters</span>
            </button>
          </div>
        </header>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-12 h-12 border-4 border-brand-red border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
        
        {!loading && filteredProducts.length === 0 && (
          <div className="text-center py-20 glass-dark rounded-3xl border-dashed border-2 border-white/5">
            <Search className="h-12 w-12 text-gray-700 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-500">No matching equipment found</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductListPage;
