export default function ShippingPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Shipping Policy</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Shipping Information</h2>
            <p className="text-gray-600 leading-relaxed">
              We offer fast and reliable shipping services to ensure your products reach you safely and on time.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Delivery Time</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Standard Delivery: 5-7 business days</li>
              <li>Express Delivery: 2-3 business days</li>
              <li>Same Day Delivery: Available in select cities</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Shipping Charges</h3>
            <p className="text-gray-600 leading-relaxed mb-2">
              Free shipping on orders above $50. For orders below $50:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Standard Delivery: $5.99</li>
              <li>Express Delivery: $12.99</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">International Shipping</h3>
            <p className="text-gray-600 leading-relaxed">
              We currently ship to select international locations. Shipping charges and delivery times vary by location.
              Please check at checkout for availability in your area.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Order Tracking</h3>
            <p className="text-gray-600 leading-relaxed">
              Once your order is shipped, you will receive a tracking number via email to monitor your delivery status.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
