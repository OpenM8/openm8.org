/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type MenuItem = {
  __typename: "MenuItem",
  id: string,
  name: string,
  uri: string,
  order: number,
  parent?: MenuItem | null,
  children?:  Array<MenuItem | null > | null,
};

export type GetMenuItemsQuery = {
  getMenuItems?:  {
    __typename: "MenuItem",
    id: string,
    name: string,
    uri: string,
    order: number,
    parent?:  {
      __typename: "MenuItem",
      id: string,
      name: string,
      uri: string,
      order: number,
    } | null,
    children?:  Array< {
      __typename: "MenuItem",
      id: string,
      name: string,
      uri: string,
      order: number,
    } | null > | null,
  } | null,
};
