import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/client/supabase";

export const useGetPastEvents = (userId: string) => {
  return useQuery({
    queryKey: ["pastEvents"],
    queryFn: async () => {
      const { data: registeredEvents, error } = await supabase
        .from("event_attendees")
        .select("event_id")
        .eq("user_id", userId);

      const registeredIds = registeredEvents?.map((e) => e.event_id) || [];
      const today = new Date().toISOString().split("T")[0];

      const { data: availableEvents, error: availableEventsError } =
        await supabase
          .from("events")
          .select("*")
          .gt('date', today)
          .not("id", "in", `(${registeredIds.join(",")})`)

      return availableEvents;
    },
  });
};

export const useGetUpcommingEvents = (userId: string) => {
  return useQuery({
    queryKey: ["upcommingEvents"],
    queryFn: async () => {
      const today = new Date().toISOString().split("T")[0];

      const { data: availableEvents, error: availableEventsError } =
        await supabase.from("events").select("*").lt("date", today);

      return availableEvents;
    },
  });
};
