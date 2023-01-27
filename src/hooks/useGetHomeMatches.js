import React from "react";
import '../App.css'
import axios from "axios";
import { useQuery } from "react-query";

const fetchMatch = () => {
    return axios.get('http://localhost:4000/typeMatches');
  }

export default function useGetHomeMatches() {
   return (
    useQuery('HomeMatches', fetchMatch)
   );
}
