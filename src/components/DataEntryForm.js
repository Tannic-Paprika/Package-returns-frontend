// components/DataEntryForm.js
import React, { useState } from 'react';

function DataEntryForm({ onAddEntry }) {
    const [formData, setFormData] = useState({
        product_id: '',
        product_category: '',
        return_reason: '',
        return_date: '',
        customer_feedback: '',
      });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const productCategories = ['Apparel', 'Electronics'];
    const returnReasons = ['Wrong Size', 'Damaged', 'No Longer Needed'];
    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate data before submission if necessary
        onAddEntry(formData);
        // Reset the form
        setFormData({
            product_id: '',
            product_category: '',
            return_reason: '',
            return_date: '',
            customer_feedback: '',
        });
  };

  return (
    <div className="card mb-4">
      <h2 className="text-xl font-semibold mb-4">Enter Return Data</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Product ID */}
        <div>
          <label className="block text-gray-700">Product ID</label>
          <input
            type="text"
            name="productId"
            value={formData.product_id}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
            required
          />
        </div>

        {/* Product Category */}
        <div>
            <label className="block text-gray-700">Product Category</label>
            <select
            name="product_category"
            value={formData.product_category}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
            required
            >
            <option value="">Select Category</option>
            {productCategories.map(category => (
                <option key={category} value={category}>{category}</option>
            ))}
            </select>
        </div>
        {/* Return Reason */}
        <div>
          <label className="block text-gray-700">Return Reason</label>
          <input
            type="text"
            name="returnReason"
            value={formData.return_reason}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
            required
          />
        </div>

        {/* Return Date */}
        <div>
          <label className="block text-gray-700">Return Date</label>
          <input
            type="date"
            name="returnDate"
            value={formData.return_date}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
            required
          />
        </div>

        {/* Customer Feedback */}
        <div>
          <label className="block text-gray-700">Customer Feedback</label>
          <textarea
            name="customerFeedback"
            value={formData.customer_feedback}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
            rows="3"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded"
          >
            Add Return Entry
          </button>
        </div>
      </form>
    </div>
  );
}

export default DataEntryForm;
