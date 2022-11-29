import React from 'react';
import { useQuery } from '@apollo/client';
import DisplayCard from '../components/Card';
import { QUERY_HEALTH_AND_SAFETY } from '../utils/queries';



const HealthAndSafety = () => {
    const { loading, data } = useQuery(QUERY_HEALTH_AND_SAFETY);
    const items = data?.items || [];


    return (
        <div>
            <DisplayCard items={items} />
        </div>
    )
}

export default HealthAndSafety;