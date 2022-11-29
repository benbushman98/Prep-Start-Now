import { gql } from '@apollo/client';

export const QUERY_FEATURED_BRANDS = gql`
 {
    items(category: "6384f5d343d84c3fdfb92de7"){
      _id
      name
      description
      price
      quantity
      image
      category {
        _id
      }
    }
  }
`;

export const ELECTRONICS = gql`
=======
export const QUERY_ELECTRONICS = gql`
 {
    items(category: "6384f5d343d84c3fdfb92de8"){
      _id
      name
      description
      price
      quantity
      image
      category {
        _id
      }
    }
  }
`;

export const QUERY_FOODSTORAGE72HRKITS = gql`
 {
    items(category: "6384f5d343d84c3fdfb92deb"){
      _id
      name
      description
      price
      quantity
      image
      category {
        _id
      }
    }
  }
`;

export const QUERY_HEALTH_AND_SAFETY = gql`
 {
    items(category: "6384f5d343d84c3fdfb92def"){
      _id
      name
      description
      price
      quantity
      image
      category {
        _id
      }
    }
  }
`;

export const QUERY_AUTO_INDUSTRIAL = gql`
{
   items(category: "6384f5d343d84c3fdfb92ded"){
     _id
     name
     description
     price
     quantity
     image
     category {
       _id
     }
   }
 }
`;

export const QUERY_HOUSEHOLD_ESSENTIALS = gql`
{
   items(category: "6384f5d343d84c3fdfb92dec"){
     _id
     name
     description
     price
     quantity
     image
     category {
       _id
     }
   }
 }
`;

export const QUERY_CLOTHING_SHOES_ACCESSORIES = gql`
{
   items(category: "6384f5d343d84c3fdfb92de9"){
     _id
     name
     description
     price
     quantity
     image
     category {
       _id
     }
   }
 }
`;

export const QUERY_PROMOTIONS = gql`
{
   items(category: "6384f5d343d84c3fdfb92dee"){
     _id
     name
     description
     price
     quantity
     image
     category {
       _id
     }
   }
 }
`;

export const QUERY_EMERGENCY_PREP = gql`
{
   items(category: "6384f5d343d84c3fdfb92dea"){
     _id
     name
     description
     price
     quantity
     image
     category {
       _id
     }
   }
 }
`;


export const QUERY_ALL_ITEMS = gql`
>>>>>>> 06f7e630d40d4b13cd4a37c7da98bf1066d396b1
  {
    items {
      _id
      name
      description
      price
      quantity
      category {
        name
      }
      image
    }
  }
`;

export const FOOD_STORAGE_72_HR_KITS = gql`
  {
    items {
      _id
      name
      description
      price
      quantity
      category {
        name
      }
      image
    }
  }
`;

export const HOUSEHOLD_ESSENTIALS = gql`
  {
    items {
      _id
      name
      description
      price
      quantity
      category {
        name
      }
      image
    }
  }
`;

export const AUTO_INDUSTRIAL = gql`
  {
    items {
      _id
      name
      description
      price
      quantity
      category {
        name
      }
      image
    }
  }
`;

export const PROMOTIONS = gql`
  {
    items {
      _id
      name
      description
      price
      quantity
      category {
        name
      }
      image
    }
  }
`;

export const HEALTH_AND_SAFETY = gql`
  {
    items {
      _id
      name
      description
      price
      quantity
      category {
        name
      }
      image
    }
  }
`;


export const QUERY_CART = gql`
  {
    items {
      _id
      name
      description
      price
      quantity
      category {
        name
      }
      image
    }
  }
`;

//FIXED QUERY (ITEM BY ID)
export const QUERY_ITEM =gql`
query Item($id: ID!) {
  item(_id: $id) {
    _id
    category {
      _id
      name
    }
    description
    image
    name
    price
    quantity
  }
}`;








