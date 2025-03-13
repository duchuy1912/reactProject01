// src/DataFetchAxios.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DataFetchAxios.css'

const DataFetchAxios = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedValue, setSelectedValue] = useState(''); // State to store selected option

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://provinces.open-api.vn/api');
      setData(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value); // Update the selected value
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <select value={selectedValue} onChange={handleChange}>
        <option value="">Chọn Quê Quán </option>
        {data.map((item) => (
          <option key={item.code} value={item.code}>
            {item.name}
          </option>
        ))}
      </select>
      {selectedValue && <p>ID : {selectedValue}</p>} {/* Show selected value */}
    </div>
  );
};

export default DataFetchAxios;
