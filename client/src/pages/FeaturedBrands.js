import React from 'react';
import { useQuery } from '@apollo/client';
import DisplayCard from '../components/Card';
import { QUERY_FEATURED_BRANDS } from '../utils/queries';

const FeaturedBrands = () => {
    const { data } = useQuery(QUERY_FEATURED_BRANDS);
    const items = data?.items || [];
    console.log(items)

    return (
        <div>
            <DisplayCard items={items} />
        </div>
        
    )
}

export default FeaturedBrands;