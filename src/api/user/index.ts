import { supabase } from "@/client/supabase";
import { useQuery } from "@tanstack/react-query";
import { UserProfileError } from '../../errors/errors';



export const useUserInfo = (userId: string) => {
    return useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const {data, error} = await supabase.from('profiles').select('*').eq('id', userId).single()
            if(error) {
                console.error(error)
                throw new UserProfileError(error.message)
            }
            return data
        }
    })
}

export const useUserName = (userId: string) => {
    return useQuery({
        queryKey: ['user', userId],
        queryFn: async () => {
            const {data, error} = await supabase.from('profiles').select('full_name').eq('id', userId).single()
            if(error) {
                console.error(error)
                throw new UserProfileError(error.message)
            }
            return data
        }
    })
}