import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import loader from "../Images/loader.gif";

function Layout({ children }) {
  const location = useLocation();
  
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [location.pathname]);

  return (
    <>
      {isLoading && (
        <div className="loader" style={{ backgroundColor: 'rgb(51 51 51 / 100%)' }}>
          <img className="loadingMeesho" src={loader} alt="Loading" />
        </div>
      )}

      {/* Render the routed component */}
      {children}
    </>
  );
}

export default Layout;
