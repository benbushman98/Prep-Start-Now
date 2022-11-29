import React from 'react';
import { useQuery } from '@apollo/client';
import DisplayCard from '../components/Card';
import { QUERY_CLOTHING_SHOES_ACCESSORIES } from '../utils/queries';



const ClothingShoesAccessories = () => {
    const { loading, data } = useQuery(QUERY_CLOTHING_SHOES_ACCESSORIES);
    const items = data?.items || [];


    return (
        <div>
            <DisplayCard items={items} />
        </div>
    )
}

export default ClothingShoesAccessories;