// components/Filters.js
import React, { useState } from 'react';

function Filters({ data, setFilteredData }) {
  const [productCategory, setProductCategory] = useState('');
  const [returnReason, setReturnReason] = useState('');
  const [dateRange, setDateRange] = useState({ from: '', to: '' });

  const categories = [...new Set(data.map(item => item.productCategory))];
  const reasons = [...new Set(data.map(item => item.returnReason))];

  const handleFilter = () => {
    let filtered = data;

    if (productCategory) {
      filtered = filtered.filter(item => item.productCategory === productCategory);
    }

    if (returnReason) {
      filtered = filtered.filter(item => item.returnReason === returnReason);
    }

    if (dateRange.from && dateRange.to) {
      filtered = filtered.filter(item => {
        const date = new Date(item.returnDate);
        return date >= new Date(dateRange.from) && date <= new Date(dateRange.to);
      });
    }

    setFilteredData(filtered);
  };

  return (
    <div className="card mb-4">
      <div className="flex flex-wrap -mx-2">
        {/* Product Category Filter */}
        <div className="w-full md:w-1/3 px-2 mb-4">
          <label className="block text-gray-700">Product Category</label>
          <select
            className="w-full mt-1 p-2 border rounded"
            value={productCategory}
            onChange={e => setProductCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category}>{category}</option>
            ))}
          </select>
        </div>

        {/* Return Reason Filter */}
        <div className="w-full md:w-1/3 px-2 mb-4">
          <label className="block text-gray-700">Return Reason</label>
          <select
            className="w-full mt-1 p-2 border rounded"
            value={returnReason}
            onChange={e => setReturnReason(e.target.value)}
          >
            <option value="">All Reasons</option>
            {reasons.map(reason => (
              <option key={reason}>{reason}</option>
            ))}
          </select>
        </div>

        {/* Date Range Filter */}
        <div className="w-full md:w-1/3 px-2 mb-4">
          <label className="block text-gray-700">Date Range</label>
          <div className="flex">
            <input
              type="date"
              className="w-1/2 p-2 border rounded mr-2"
              value={dateRange.from}
              onChange={e => setDateRange({ ...dateRange, from: e.target.value })}
            />
            <input
              type="date"
              className="w-1/2 p-2 border rounded"
              value={dateRange.to}
              onChange={e => setDateRange({ ...dateRange, to: e.target.value })}
            />
          </div>
        </div>

        {/* Apply Filters Button */}
        <div className="w-full px-2">
          <button
            className="w-full md:w-auto bg-blue-500 text-white p-2 rounded"
            onClick={handleFilter}
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filters;
