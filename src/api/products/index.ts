import { supabase } from "@/client/supabase";
import { ProductsApiError } from "@/errors/errors";
import { useQuery } from "@tanstack/react-query";

export const useGetProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data, error } = await supabase.from("products").select("*");
      if (error) throw new ProductsApiError(error.message);
      return data;
    },
  });
};

export const useGetProductByCategory = (categoryId: number) => {
  return useQuery({
    queryKey: ["products", categoryId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products_by_category")
        .select(
          `
          products(
          *
          )
        `
        )
        .eq("category_id", categoryId);
      if (error) throw new ProductsApiError(error.message);
      return data;
    },
  });
};

export const useGetProductById = (id: number) => {
  return useQuery({
    queryKey: ["products", id],
    queryFn: async () => {
      const { error, data } = await supabase
        .from("products")
        .select("*")
        .eq("id", id)
        .single();
      if (error) throw new ProductsApiError(error.message);
      return data;
    },
  });
};
