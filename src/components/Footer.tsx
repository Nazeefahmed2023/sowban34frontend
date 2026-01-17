import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 mt-12 sm:mt-16">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">SHOP.CO</h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Your trusted online shopping destination for quality products at great prices.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-white mb-3 sm:mb-4 text-base sm:text-lg">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors inline-block py-1">About Us</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors inline-block py-1">Careers</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors inline-block py-1">Blog</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors inline-block py-1">Press</Link></li>
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="font-semibold text-white mb-3 sm:mb-4 text-base sm:text-lg">Help</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors inline-block py-1">Customer Support</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors inline-block py-1">Delivery Details</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors inline-block py-1">Terms & Conditions</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors inline-block py-1">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="font-semibold text-white mb-3 sm:mb-4 text-base sm:text-lg">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">Subscribe to get updates on new products and offers.</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2.5 border border-gray-700 bg-gray-900 text-white placeholder-gray-500 rounded-lg text-sm focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors"
              />
              <button className="px-4 sm:px-6 py-2.5 bg-white text-black rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors active:scale-95 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} SHOP.CO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
