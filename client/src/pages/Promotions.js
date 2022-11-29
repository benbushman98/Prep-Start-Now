import React from 'react';
import { useQuery } from '@apollo/client';
import DisplayCard from '../components/Card';
import { QUERY_PROMOTIONS } from '../utils/queries';



const Promotions = () => {
    const { loading, data } = useQuery(QUERY_PROMOTIONS);
    const items = data?.items || [];


    return (
        <div>
            <DisplayCard items={items} />
        </div>
    )
}

export default Promotions;