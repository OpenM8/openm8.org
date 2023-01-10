import { gql, useLazyQuery } from '@apollo/client';
import { MenuItem } from '../API';
import { getMenuItems } from '../graphql/queries';

export const userGetMenuItem = () => {
  const [call, { loading, error, data }] = useLazyQuery<{ getMenuItems: MenuItem }>(gql(getMenuItems), {
    fetchPolicy: 'no-cache',
  });

  return {
    getMenuItems: call,
    getMenuData: data?.getMenuItems,
    getMenuLoading: loading,
    getMenuError: error,
  };
};
