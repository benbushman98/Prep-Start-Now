import React from 'react';
import { useQuery } from '@apollo/client';
import DisplayCard from '../components/Card';
import { QUERY_ELECTRONICS } from '../utils/queries';



const Electronics = () => {
    const { loading, data } = useQuery(QUERY_ELECTRONICS);
    const items = data?.items || [];


    return (
        <div>
            <DisplayCard items={items} />
        </div>
    )
}


export default Electronics;
