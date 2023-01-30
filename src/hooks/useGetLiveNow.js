import React from 'react';
import axios from "axios";
import { useQuery } from 'react-query';

const fetchLiveNow = () => {
    return axios.get('http://localhost:4000/LiveNowMatches');
}

const useGetLiveNow = () => {
    return (
        useQuery('Livenowmatch', fetchLiveNow)
    );
}

export default useGetLiveNow;