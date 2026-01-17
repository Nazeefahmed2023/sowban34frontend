import ProductListingPage from "@/components/ProductListingPage";
import { Product } from "@/types";

async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch('https://fakestoreapi.com/products', {
      cache: 'no-store' // Force fresh data on each request for Netlify
    });
    
    if (!res.ok) {
      console.error('Failed to fetch products, status:', res.status);
      throw new Error('Failed to fetch products');
    }
    
    const data = await res.json();
    console.log('Products fetched successfully:', data.length);
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    // Return empty array as fallback
    return [];
  }
}

async function getCategories(): Promise<string[]> {
  try {
    const res = await fetch('https://fakestoreapi.com/products/categories', {
      cache: 'no-store'
    });
    
    if (!res.ok) {
      console.error('Failed to fetch categories, status:', res.status);
      throw new Error('Failed to fetch categories');
    }
    
    const data = await res.json();
    console.log('Categories fetched successfully:', data);
    return data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

export default async function Home() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories()
  ]);

  return (
    <div>
      <ProductListingPage initialProducts={products} categories={categories} />
    </div>
  );
}

