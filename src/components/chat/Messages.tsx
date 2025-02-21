import { ActivityIndicator, View } from "react-native";
import { ThemedText } from "../ThemedText";
import { useUserName } from "@/api/user";

interface Props {
  isMine: boolean;
  message: string;
  userId: string;
}

export const Messages = ({ isMine, message, userId }: Props) => {
  const { error, isLoading, data } = useUserName(userId);

  if (error) {
    console.error(error.message);
  }

  const messageStyle = isMine
    ? {
        alignment: "self-end",
        background: "bg-primary-default",
        textColor: "text-white",
      }
    : {
        alignment: "self-start",
        background: "bg-white",
        textColor: "text-black",
      };

  return (
    <View>
      <ThemedText type="small" className={`${messageStyle.alignment}`}>
        {isLoading ? <ActivityIndicator /> : data?.full_name + ' '}
        8:30
      </ThemedText>
      <ThemedText
        className={`${messageStyle.alignment} ${messageStyle.background} ${messageStyle.textColor} bg-primary-default rounded-3xl w-fit py-3 px-2`}
      >
        {message}
      </ThemedText>
    </View>
  );
};
