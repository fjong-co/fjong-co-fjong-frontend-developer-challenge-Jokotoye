import { useQuery } from 'react-query';

import { axiosInstance } from '../../utils';
import { IOutfit } from '../../models';

type useOutfitQueryArgs = {
  brand: string;
};

export const useOutfitQuery = ({ brand }: useOutfitQueryArgs) => {
  return useQuery<IOutfit[], unknown>(['outfit', brand], () =>
    axiosInstance.get(`/outfits?brands_like=${brand}`).then((res) => res.data),
  );
};
