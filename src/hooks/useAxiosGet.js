import { useState, useEffect } from "react";
import axios from "axios";

const client = axios.create({
  baseURL: "https://api.covid19api.com" 
});

export const useAxiosGet = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .get("/summary")
      .then((response) => { 
        // timeout to show loading page
        setTimeout(() => {
          setData(response.data) 
          setLoading(false)
        }, 1000)
      })
      .catch((error) => {
        setError(error.message)
        setLoading(false)
      })
      
  }, []);

  return { data, error, loading };
};