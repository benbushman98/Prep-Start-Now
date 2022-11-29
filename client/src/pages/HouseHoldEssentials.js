import React from 'react';
import { useQuery } from '@apollo/client';
import DisplayCard from '../components/Card';
import { QUERY_HOUSEHOLD_ESSENTIALS } from '../utils/queries';



const HouseholdEssentials = () => {
    const { loading, data } = useQuery(QUERY_HOUSEHOLD_ESSENTIALS);
    const items = data?.items || [];


    return (
        <div>
            <DisplayCard items={items} />
        </div>
    )
}

export default HouseholdEssentials;