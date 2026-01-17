export default function Returns() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Cancellations and Refunds</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cancellation Policy</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              You can cancel your order within 24 hours of placing it, provided it has not been shipped yet.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Orders can be cancelled through your account dashboard</li>
              <li>Once shipped, orders cannot be cancelled</li>
              <li>Cancellation refunds are processed within 5-7 business days</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Return Policy</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              We accept returns within 30 days of delivery. To be eligible for a return, your item must be:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Unused and in the same condition that you received it</li>
              <li>In the original packaging with all tags attached</li>
              <li>Accompanied by proof of purchase</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Non-Returnable Items</h3>
            <p className="text-gray-600 leading-relaxed mb-2">
              The following items cannot be returned:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Clearance or sale items</li>
              <li>Personalized or customized products</li>
              <li>Perishable goods</li>
              <li>Intimate or sanitary goods</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Refund Process</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Once we receive and inspect your return, we will notify you of the approval or rejection of your refund.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Refund Timeline:</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Inspection: 2-3 business days after we receive your return</li>
                <li>Refund processing: 5-7 business days after approval</li>
                <li>Bank processing time: 3-5 business days (varies by institution)</li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Exchanges</h3>
            <p className="text-gray-600 leading-relaxed">
              We only replace items if they are defective or damaged. If you need to exchange a product,
              please contact us and send your item back. Once we receive it, we'll send you a replacement.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Shipping Costs</h3>
            <p className="text-gray-600 leading-relaxed">
              You will be responsible for paying the shipping costs for returning your item unless the return
              is due to our error (wrong item shipped, defective product, etc.).
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">How to Initiate a Return</h3>
            <ol className="list-decimal list-inside text-gray-600 space-y-2">
              <li>Contact our customer service team through the Contact page</li>
              <li>Provide your order number and reason for return</li>
              <li>Wait for return authorization and shipping instructions</li>
              <li>Pack the item securely with all original materials</li>
              <li>Ship the item to the provided address</li>
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
}
