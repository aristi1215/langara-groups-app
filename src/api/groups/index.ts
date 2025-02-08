import { supabase } from "@/client/supabase";
import { GroupsApiError } from "../../errors/errors";
import { GroupsIdsType } from "@/types/supabase/modifiedDatabase.types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Tables } from "@/types/supabase/database.types";

export const useUserGroupsIds = (userId: string) => {
  return useQuery({
    queryKey: ["userGroupsIds", userId],
    queryFn: async (): Promise<GroupsIdsType[]> => {
      const { data, error } = await supabase
        .from("group_members")
        .select("group_id")
        .eq("user_id", userId);
      if (error) {
        console.error(error)
        throw new GroupsApiError("error");
      }
      return data;
    },
  });
};

export const useUserGroups = (userId: string) => {
  return useQuery({
    queryKey: ["userGroups", userId],
    queryFn: async (): Promise<Tables<"groups">[]> => {
      const { data, error } = await supabase
        .from("group_members")
        .select("groups(*)")
        .eq("user_id", userId);
      if (error) {
        console.error(error)
        throw new GroupsApiError(error.message);
      }

      const userGroups = data.map((group) => {
        const { groups } = group;
        return groups;
      });

      return userGroups;
    },
  });
};

export const useGroups = () => {
  return useQuery({
    queryKey: ["groups"],
    queryFn: async (): Promise<Tables<"groups">[]> => {
      const { data, error } = await supabase.from("groups").select("*");
      if (error) {
        console.error(error)
        throw new GroupsApiError(error.message);
      }
      return data;
    },
  });
};

export const useJoinGroups = () => {
  
  const queryClient = useQueryClient()

  return useMutation({
    async mutationFn (data: {userId: string, groupId: number}) {
      const { data: joinedGroup, error } = await supabase
        .from("group_members")
        .insert({ user_id: data.userId, group_id: data.groupId });
      if (error) {
        console.error(error);
        throw new GroupsApiError(error.message);
      }
    },
    async onSuccess(_,data) {
      await queryClient.invalidateQueries({queryKey: ['userGroups', data.userId]})
    }
  });
};
