import React from 'react';
import { useQuery } from '@apollo/client';
import DisplayCard from '../components/Card';
import { QUERY_ALL_ITEMS } from '../utils/queries';

// const items = [
//     {
//         name: 'Nicolas Cage',
//         imageURL: 'http://www.placecage.com/gif/284/196',
//         imageAlt: 'Nicolas Cage',
//         text: 'this is Nicolas Cage and he\'s cool.',
//         price: '300',
//     },
//     {
//         name: 'Also Nicolas Cage',
//         imageURL: 'https://www.placecage.com/gif/300/200',
//         imageAlt: 'Nicolas Cage Again',
//         text: 'this is also Nicolas Cage and he\'s also cool.',
//         price: '375',
//     },
//     {
//         name: 'Nicolas Cage',
//         imageURL: 'http://www.placecage.com/gif/284/196',
//         imageAlt: 'Nicolas Cage',
//         text: 'this is Nicolas Cage and he\'s cool.',
//         price: '300',
//     },
//     {
//         name: 'Also Nicolas Cage',
//         imageURL: 'https://www.placecage.com/gif/300/200',
//         imageAlt: 'Nicolas Cage Again',
//         text: 'this is also Nicolas Cage and he\'s also cool.',
//         price: '375',
//     },
//     {
//         name: 'Nicolas Cage',
//         imageURL: 'http://www.placecage.com/gif/284/196',
//         imageAlt: 'Nicolas Cage',
//         text: 'this is Nicolas Cage and he\'s cool.',
//         price: '300',
//     },
//     {
//         name: 'Also Nicolas Cage',
//         imageURL: 'https://www.placecage.com/gif/300/200',
//         imageAlt: 'Nicolas Cage Again',
//         text: 'this is also Nicolas Cage and he\'s also cool.',
//         price: '375',
//     },

// ]

const Shop = () => {
    const { loading, data } = useQuery(QUERY_ALL_ITEMS);
    const items = data?.items || [];
  

    return (
        <div>
            <DisplayCard items={items} />
        </div>
    )
}

export default Shop;