import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listBusinesses } from '../graphql/queries';

const BusinessList = () => {
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const businessData = await API.graphql(graphqlOperation(listBusinesses));
        setBusinesses(businessData.data.listBusinesses.items);
      } catch (err) {
        console.error("Error fetching businesses:", err);
      }
    };

    fetchBusinesses();
  }, []);

  return (
    <div>
      <h2>📍 Businesses</h2>
      <ul>
        {businesses.map((biz) => (
          <li key={biz.id}>
            <strong>{biz.name}</strong> — {biz.category} in {biz.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BusinessList;
