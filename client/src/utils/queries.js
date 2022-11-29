import { gql } from '@apollo/client';

export const QUERY_FEATURED_BRANDS = gql`
 {
    items(category: "638580ad2dd4017e18aac223"){
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
    items(category: "638580ad2dd4017e18aac224"){
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

export const QUERY_FOODSTORAGE = gql`
 {
    items(category: "638580ad2dd4017e18aac227"){
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
    items(category: "638580ad2dd4017e18aac22b"){
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
   items(category: "638580ad2dd4017e18aac229"){
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
   items(category: "638580ad2dd4017e18aac228"){
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
   items(category: "638580ad2dd4017e18aac225"){
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
   items(category: "638580ad2dd4017e18aac22a"){
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
   items(category: "638580ad2dd4017e18aac226"){
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

export const QUERY_CART = gql`
  {
    items {
      name
      price
      quantity
    }
  }
`;

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