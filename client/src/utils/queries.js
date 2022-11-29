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

//^^ FIX THIS TO ONLY QUERY A SINGLE ITEM WHEN 'ADD TO CART' IS CLICKED, PULLING EVERYTHING FOR NOW

// export const QUERY_ITEM = gql`
//   {
//     item(_id: $id) {
//       name
//       price
//       quantity
//     }
//   }
// `;

//^^ SINGLE ITEM BY ID



