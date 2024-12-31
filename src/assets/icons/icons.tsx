import { FontAwesome } from "@expo/vector-icons";

interface Props {
  className?: string;
  size?: number
}

export const LeftArrow = ({ className, size=40 }: Props) => (
  <FontAwesome name="angle-left" size={size} className={className} />
);
