import React from 'react';
import ITVendors from './sections/ITVendors/ITVendors';
import Events from './sections/Events/Events';
import Recognition from './sections/Recognition/Recognition';
// ... other imports

function App() {
  return (
    <div className="app">
      {/* Other sections */}
      <ITVendors />
      <Events />
      <Recognition />
    </div>
  );
}

export default App; 