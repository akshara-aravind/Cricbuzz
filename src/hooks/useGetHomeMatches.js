import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

const fetchMatch = async () => {
  return await axios.get('http://localhost:4000/typeMatches');
}

const useGetHomeMatches = () => {
  return (
    useQuery('HomeMatches', fetchMatch)
  );
}

export default useGetHomeMatches;