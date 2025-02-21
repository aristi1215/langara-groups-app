import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

interface Props {
  className?: string;
  size?: number;
  color?: string;
}

export const LeftArrow = ({ className, size = 40, color }: Props) => (
  <FontAwesome6
    name="angle-left"
    size={size}
    className={className}
    color={color}
  />
);

export const SearchIcon = ({ size = 30, className, color }: Props) => (
  <FontAwesome name="search" size={size} className={className} color={color} />
);

export const UserIcon = ({ size = 30, className, color }: Props) => (
  <FontAwesome6
    name="user-circle"
    size={size}
    className={className}
    color={color}
  />
);

export const ThreeDots = ({ size = 30, className, color }: Props) => (
  <FontAwesome5
    name="ellipsis-v"
    size={size}
    className={className}
    color={color}
  />
);

export const Picture = ({ size = 30, className, color }: Props) => (
  <FontAwesome
    name="picture-o"
    size={size}
    className={className}
    color={color}
  />
);

export const Clip = ({ size = 30, className, color }: Props) => (
  <FontAwesome6
    name="clipboard"
    size={size}
    className={className}
    color={color}
  />
);

export const Face = ({ size = 30, className, color }: Props) => (
  <FontAwesome6
    name="face-smile"
    size={size}
    className={className}
    color={color}
  />
);

export const SendMessage = ({ size = 30, className, color }: Props) => (
  <FontAwesome name="send-o" size={size} className={className} color={color} />
);

export const ShopBag = ({ size = 30, className, color }: Props) => (
  <FontAwesome
    name="shopping-cart"
    size={size}
    className={className}
    color={color}
  />
);

export const Star = ({ size = 30, className, color }: Props) => (
  <FontAwesome
    name="star"
    size={size}
    className={className}
    color={color}
  />
);
