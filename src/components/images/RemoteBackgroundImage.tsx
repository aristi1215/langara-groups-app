import { supabase } from "@/client/supabase";
import { ComponentProps, useEffect, useState } from "react";
import { Image, ImageBackground, View } from "react-native";
import { ImageBackgroundProps } from "react-native";

interface Props extends ImageBackgroundProps {
  path: string;
  children: React.ReactNode
  bucketName: string
}

export const RemotePublicBackgroundImage = ({ path, bucketName, children, className }: Props) => {
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

  return <ImageBackground className={`rounded-full h-[13rem] ${className}`} source={{ uri: image }} resizeMode="cover" imageStyle={{borderRadius: 24}} >
    <View className="h-full w-full bg-black/70 absolute top-0 left-0 rounded-3xl"></View>
    {children}
  </ImageBackground>
};
