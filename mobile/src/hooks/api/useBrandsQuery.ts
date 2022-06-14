import { useQuery } from 'react-query';

import { axiosInstance } from '../../utils';

export const useBrandsQuery = () => {
  return useQuery<string[], unknown>(['brands'], () =>
    axiosInstance.get('/brands').then((res) => res.data),
  );
};
