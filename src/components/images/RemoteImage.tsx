import { supabase } from "@/client/supabase";
import { isLoading } from "expo-font";
import { ComponentProps, useEffect, useState } from "react";
import { Image } from "react-native";

type Props = {
  path: string;
  bucketName: string
} & Omit<ComponentProps<typeof Image>, "source">;

export const RemotePublicImage = ({ path, bucketName, ...props }: Props) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    if (!path) {
      return;
    }

    (async () => {
      const { data } = await supabase.storage
        .from(bucketName)
        .getPublicUrl(path);
      setImage(data.publicUrl);
    })();
  }, [path]);

  return <Image {...props} source={{ uri: image }} />;
};
