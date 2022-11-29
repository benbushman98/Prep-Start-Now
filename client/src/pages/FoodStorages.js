import React from 'react';
import { useQuery } from '@apollo/client';
import DisplayCard from '../components/Card';
import { QUERY_FOODSTORAGE } from '../utils/queries';



const FoodStorage = () => {
    const { loading, data } = useQuery(QUERY_FOODSTORAGE);
    const items = data?.items || [];


    return (
        <div>
            <DisplayCard items={items} />
        </div>
    )
}

export default FoodStorage;