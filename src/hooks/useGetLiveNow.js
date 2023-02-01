import React from 'react';
import axios from "axios";
import { useQuery } from 'react-query';

const fetchLiveNow = async () => {
    return await axios.get('http://localhost:4000/LiveNowMatches');
}

const useGetLiveNow = () => {
    return (
        useQuery('Livenowmatch', fetchLiveNow)
    );
}

export default useGetLiveNow;