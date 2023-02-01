import React from 'react';
import axios from "axios";
import { useQuery } from 'react-query';

const fetchMatchToday = async () => {
    return await axios.get('http://localhost:4000/TodayMatches');
}

const useGetTodayMatches = () => {
    return (
        useQuery('Todaymatch', fetchMatchToday)
    );
}

export default useGetTodayMatches;