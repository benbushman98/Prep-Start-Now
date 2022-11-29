import React from 'react';
import { useQuery } from '@apollo/client';
import DisplayCard from '../components/Card';
import { QUERY_AUTO_INDUSTRIAL } from '../utils/queries';



const AutoIndustrial = () => {
    const { loading, data } = useQuery(QUERY_AUTO_INDUSTRIAL);
    const items = data?.items || [];


    return (
        <div>
            <DisplayCard items={items} />
        </div>
    )
}

export default AutoIndustrial;