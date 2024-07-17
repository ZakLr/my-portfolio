'use client';

import LandingPage from "./pages/landingPage";
import { useState, useEffect } from "react";
import Loader from "./pages/Loader";
export default function Home() {
  const [loading, setLoading] = useState(true); // State to manage loader

  useEffect(() => {
    // Simulate fetching data with a timeout
    setTimeout(() => {
      setLoading(false); // Hide loader after data is loaded
    }, 3000); // 3 seconds delay
  }, []);
  return (
    <>
      {loading ? <Loader /> : <LandingPage />}
    </>
  );
}
