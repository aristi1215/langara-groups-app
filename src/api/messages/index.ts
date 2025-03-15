import { supabase } from "@/client/supabase";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { MessagesApiError } from "../../errors/errors";
import { useEffect } from "react";

///FOR THE MOMENT IN MISSING THE READING AND CREATION OF THE MESSAGE FILES
//  REMEMBER IT

export const useReadMessages = (groupId: number) => {
  return useQuery({
    queryKey: ["messages", groupId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("messages")
        .select("message, user_id")
        .eq("group_id", groupId);

      if (error) {
        console.error(error);
        throw new MessagesApiError(error.message);
      }


      return data;
    },
  });
};

export const useInsertMessage = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: {
      group_id: number;
      message: string;
      user_id: string;
    }) => {
      console.log('data received:', data)
      const { data: newMessage, error } = await supabase
        .from("messages")
        .insert({
          ...data,
        });

      if (error) {
        console.error(error);
        throw new MessagesApiError(error.message);
      }

      return newMessage;
    },
    onSuccess: async (_,data) => {
      queryClient.invalidateQueries({ queryKey: ["messages", data.group_id] });
    },
  });
};

export const useSubscribeToMessages = () => {
  const queryClient = useQueryClient();

  useEffect(() => {
    const channels = supabase
      .channel("custom-messages-channel")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "messages" },
        (payload) => {
          queryClient.invalidateQueries({ queryKey: ["messages"] });
        }
      )
      .subscribe();

    return () => {
      channels.unsubscribe();
    };
  }, []);
};
