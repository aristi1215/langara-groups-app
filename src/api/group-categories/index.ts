import { supabase } from '@/client/supabase';
import { useQuery } from '@tanstack/react-query';
import { CategoriesApiError } from '../../errors/errors';



export const useGetGroupsCategories = () => {
    return useQuery({
        queryKey: ['groupsCategories'],
        queryFn: async () => {
            const {data, error} = await supabase.from('group_categories').select('*')
            if (error){
                throw new CategoriesApiError(error.message)
            }
            return data
        }
    })
}