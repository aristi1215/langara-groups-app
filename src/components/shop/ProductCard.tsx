import { View, Image } from "react-native";
import { ThemedText } from "../ThemedText";
import { Link } from "expo-router";
import { RemotePublicImage } from "../images/RemoteImage";

export const ProductCard = ({
  title,
  price,
  productId,
  bucketName,
  path,
}: {
  title: string;
  price: number;
  productId: number;
  bucketName: string;
  path: string;
}) => {
  return title && price ? (
    <Link href={`/shop/(id)/${productId}`}>
      <View className="rounded-2xl bg-gray-100 items-center shadow-[0px_6px_2px_0px_rgba(0,0,0,1)] h-[23rem] w-[16rem] p-2">
        <RemotePublicImage path={path} className="m-2 w-full h-[70%]" bucketName={bucketName} resizeMethod="auto" resizeMode="contain" />
        <ThemedText className="self-start" type="h2" >{title}</ThemedText>
        <ThemedText className="self-start font-bold text-lg">
          ${price}
        </ThemedText>
      </View>
    </Link>
  ) : (
    <Link href={`/shop/(id)/1`}>
      <View className="rounded-2xl bg-gray-100 items-center p-1 shadow-[0px_6px_2px_0px_rgba(0,0,0,1)] h-[23rem]">
        <Image
          source={require("@/assets/images/products/product-2.png")}
          className="m-2"
        />
        <ThemedText className="self-start">Men's harringtong jacket</ThemedText>
        <ThemedText className="self-start font-bold text-lg">
          $148.00
        </ThemedText>
      </View>
    </Link>
  );
};
