import React from 'react';
import DisplayCard from '../Card';

const items = [
    {
        name: 'Nicolas Cage',
        imageURL: 'http://www.placecage.com/gif/284/196',
        imageAlt: 'Nicolas Cage',
        text: 'this is Nicolas Cage and he\'s cool.',
        price: '300',
    },
    {
        name: 'Also Nicolas Cage',
        imageURL: 'https://www.placecage.com/gif/300/200',
        imageAlt: 'Nicolas Cage Again',
        text: 'this is also Nicolas Cage and he\'s also cool.',
        price: '375',
    },
    {
        name: 'Nicolas Cage',
        imageURL: 'http://www.placecage.com/gif/284/196',
        imageAlt: 'Nicolas Cage',
        text: 'this is Nicolas Cage and he\'s cool.',
        price: '300',
    },
    {
        name: 'Also Nicolas Cage',
        imageURL: 'https://www.placecage.com/gif/300/200',
        imageAlt: 'Nicolas Cage Again',
        text: 'this is also Nicolas Cage and he\'s also cool.',
        price: '375',
    },
    {
        name: 'Nicolas Cage',
        imageURL: 'http://www.placecage.com/gif/284/196',
        imageAlt: 'Nicolas Cage',
        text: 'this is Nicolas Cage and he\'s cool.',
        price: '300',
    },
    {
        name: 'Also Nicolas Cage',
        imageURL: 'https://www.placecage.com/gif/300/200',
        imageAlt: 'Nicolas Cage Again',
        text: 'this is also Nicolas Cage and he\'s also cool.',
        price: '375',
    },

]

const Shop = () => {
    return (
        <div>
            <DisplayCard items={items} />
        </div>
    )
}

export default Shop;