import React from 'react';
import DisplayCard from '../Card';

const items = [
    {
        name: 'Nicolas Cage',
        image: 'http://www.placecage.com/gif/284/196',
        imageAlt: 'Nicolas Cage',
        description: 'this is Nicolas Cage and he\'s cool.',
        price: '300',
    },
    {
        name: 'Walkie-talkie',
        description:
          '20 mile indoor and outdoor range',
        image: 'radio.jpeg',
        // category: categories[1]._id,
        price: 29.99,
        quantity: 10
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