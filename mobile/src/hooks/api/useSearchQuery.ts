import { useQuery } from 'react-query';
import { IOutfit } from '../../models';

import { axiosInstance } from '../../utils';

type useSearchQueryArgs = {
  search: string;
};

export const useSearchQuery = ({ search }: useSearchQueryArgs) => {
  return useQuery<IOutfit[], unknown>(['search', search], () =>
    axiosInstance.get(`/outfits?q=${search}`).then((res) => res.data),
  );
};
