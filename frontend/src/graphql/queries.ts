/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMenuItems = /* GraphQL */ `
  query GetMenuItems {
    getMenuItems {
      id
      name
      uri
      order
      parent {
        id
        name
        uri
        order
      }
      children {
        id
        name
        uri
        order
      }
    }
  }
`;
