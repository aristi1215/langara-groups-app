import { supabase } from "@/client/supabase";
import { ComponentProps, useEffect, useState } from "react";
import { Image } from "react-native";

type Props = {
  path: string;
} & Omit<ComponentProps<typeof Image>, "source">;

export const RemotePublicImage = ({ path, ...props }: Props) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    if (!path) {
      return;
    }

    (async () => {
      const { data } = await supabase.storage
        .from("product-categories")
        .getPublicUrl(path);
      setImage(data.publicUrl);
    })();
  }, [path]);

  return <Image {...props} source={{ uri: image }} />;
};
