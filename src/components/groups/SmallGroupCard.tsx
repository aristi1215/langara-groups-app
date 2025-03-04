import { View} from "react-native";
import { ThemedText } from "../ThemedText";
import { RemotePublicBackgroundImage } from "../images/RemoteBackgroundImage";
import { CustomButton } from "../CustomButton";

interface Props {
  name: string;
  banner: string,
  bucketName: string
  description: string
}

export const SmallGroupCard = ({
  name = "random group",
  banner,
}: Props) => {
  return (
    <RemotePublicBackgroundImage path={banner} bucketName="groups-banners" className="mb-10">
      <View className="p-4 justify-between h-full">
      <ThemedText type="h1" className="ml-2" color="white">
        {name}
      </ThemedText>

      <CustomButton type="orange">
        View Community
      </CustomButton>
      </View>
    </RemotePublicBackgroundImage>
  );
};
