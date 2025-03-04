import { supabase } from "@/client/supabase";
import { ProductCategoriesApiError } from "@/errors/errors";
import { useQuery } from "@tanstack/react-query";

export const useProductCategories = () => {
  return useQuery({
    queryKey: ["product_categories"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("product_categories")
        .select("*");
      if (error) throw new ProductCategoriesApiError(error.message);

      return data;
    },
  });
};
