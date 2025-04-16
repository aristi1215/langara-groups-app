import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/client/supabase";

export const useGetUnregisteredEvents = (userId: string) => {
  return useQuery({
    queryKey: ["all-events"],
    queryFn: async () => {
      const { data: registeredEvents, error } = await supabase
        .from("event_attendees")
        .select("event_id")
        .eq("user_id", userId);

      const registeredIds = registeredEvents?.map((e) => e.event_id) || [];

      const { data: availableEvents, error: availableEventsError } =
        await supabase
          .from("events")
          .select("*")
          .not("id", "in", `(${registeredIds.join(",")})`);

      return availableEvents;
    },
  });
};
