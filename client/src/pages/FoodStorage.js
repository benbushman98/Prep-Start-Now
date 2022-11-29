import React from 'react';
import { useQuery } from '@apollo/client';
import DisplayCard from '../components/Card';
import { QUERY_FoodStorage } from '../utils/queries';



const FoodStorage = () => {
    const { loading, data } = useQuery(QUERY_FoodStorage);
    const items = data?.items || [];


    return (
        <div>
            <DisplayCard items={items} />
        </div>
    )
}

export default FoodStorage;