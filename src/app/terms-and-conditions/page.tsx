export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Welcome</h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Use License</h3>
            <p className="text-gray-600 leading-relaxed mb-2">
              Permission is granted to temporarily access the materials on this website for personal, non-commercial use only.
            </p>
            <p className="text-gray-600 leading-relaxed">
              This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mt-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Product Information</h3>
            <p className="text-gray-600 leading-relaxed">
              We strive to display our products as accurately as possible. However, we cannot guarantee that your device's display
              of colors accurately reflects the color of the products.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Pricing</h3>
            <p className="text-gray-600 leading-relaxed">
              All prices are subject to change without notice. We reserve the right to modify or discontinue products
              without prior notification.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Limitation of Liability</h3>
            <p className="text-gray-600 leading-relaxed">
              In no event shall Appscrip PLP Task or its suppliers be liable for any damages arising out of the use or
              inability to use the materials on this website.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Governing Law</h3>
            <p className="text-gray-600 leading-relaxed">
              These terms and conditions are governed by and construed in accordance with applicable laws, and you irrevocably
              submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
