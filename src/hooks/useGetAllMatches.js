import React from 'react';
import axios from "axios";
import { useQuery } from 'react-query';

const fetchMatch = async () => {
    return await axios.get('http://localhost:4000/AllMatches');
}

const useGetAllMatches = () => {
    return (
        useQuery('AllMatches', fetchMatch)
    );
}

export default useGetAllMatches;