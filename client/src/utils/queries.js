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

export const ELECTRONICS = gql`
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



