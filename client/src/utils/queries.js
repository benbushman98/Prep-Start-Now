import { gql } from '@apollo/client';

export const QUERY_FEATURED_BRANDS = gql`
 {
    items(category: "637eae47d617bf996dde5622"){
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



