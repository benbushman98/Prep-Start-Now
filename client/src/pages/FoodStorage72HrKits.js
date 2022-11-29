import React from 'react';
import { useQuery } from '@apollo/client';
import DisplayCard from '../components/Card';
import { QUERY_FOODSTORAGE72HRKITS } from '../utils/queries';



const FoodStorage72HourKits = () => {
    const { loading, data } = useQuery(QUERY_FOODSTORAGE72HRKITS);
    const items = data?.items || [];


    return (
        <div>
            <DisplayCard items={items} />
        </div>
    )
}

export default FoodStorage72HourKits;