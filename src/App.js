// App.js
import React, { useState,useEffect } from 'react';
import Header from './components/Header';
import Filters from './components/Filters';
import Metrics from './components/Metrics';
import DataEntryForm from './components/DataEntryForm';
import initialData from './data';
import axios from 'axios';

function App() {
  const [data, setData] = useState(initialData);
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    axios.get('http://localhost:8000/api/returns/')
      .then(response=> {
        setData(response.data);
        setFilteredData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      })
  },[]);

  const handleAddEntry = (newEntry) => {
    // Post new entry to the API
    axios.post('http://localhost:8000/api/returns/', newEntry)
      .then(response => {
        const updatedData = [response.data, ...data];
        setData(updatedData);
        setFilteredData(updatedData);
      })
      .catch(error => {
        console.error('Error adding entry:', error);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto p-4">
        <DataEntryForm onAddEntry={handleAddEntry} />
        <Filters data={data} setFilteredData={setFilteredData} />
        <Metrics data={filteredData} />
      </div>
    </div>
  );
}

export default App;
