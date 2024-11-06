import { useState } from "react";
import axios from "axios";

const API_URL = "https://api.exchangerate-api.com/v4/latest/";

export const useCurrencyConverter = (baseCurrency) => {
  const [rates, setRates] = useState({});
  const [error, setError] = useState(null);

  const fetchRates = async () => {
    try {
      const response = await axios.get(`${API_URL}${baseCurrency}`);
      setRates(response.data.rates);
    } catch (err) {
      setError("Failed to fetch rates");
    }
  };

  return { rates, fetchRates, error };
};
