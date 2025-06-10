import React from 'react';
import BusinessList from './components/BusinessList';
import AddBusinessForm from './components/AddBusinessForm';

function App() {
  return (
    <div className="App">
      <h1>🍽️ My Yelp</h1>
      <AddBusinessForm />
      <BusinessList />
    </div>
  );
}

export default App;
