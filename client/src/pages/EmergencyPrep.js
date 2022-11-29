import React from 'react';
import { useQuery } from '@apollo/client';
import DisplayCard from '../components/Card';
import { QUERY_EMERGENCY_PREP } from '../utils/queries';



const EmergencyPrep = () => {
    const { loading, data } = useQuery(QUERY_EMERGENCY_PREP);
    const items = data?.items || [];


    return (
        <div>
            <DisplayCard items={items} />
        </div>
    )
}

export default EmergencyPrep;