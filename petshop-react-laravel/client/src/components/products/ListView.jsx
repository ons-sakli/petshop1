import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/helpers";
import { HiChevronDoubleRight } from 'react-icons/hi';

const ListView = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-4">
            <h3 className="mb-2 text-lg font-bold">{product.name}</h3>
            {product.thumbnail && (
              <img
                className="w-full h-48 object-cover mb-2"
                src={product.thumbnail}
                alt={product.name}
              />
            )}
            <h4  className="mb-2 text-mauve-100 italic font-bold">{formatPrice(product.price)}</h4>
            <p className="text-gray-600">{product.description.substring(0, 150)}...</p>
            <Link
              to={`/products/${product.id}`}
              className="text-sm inline-block mt-2 uppercase bg-secondary-100 text-white rounded-md font-bold py-1 px-3 shadow-lg"
            >
              Details
              <HiChevronDoubleRight className="inline-block ml-1" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListView;
