import { FontAwesome } from "@expo/vector-icons";

interface Props {
  className?: string;
  size?: number;
  color?: string;
}

export const LeftArrow = ({ className, size = 40, color }: Props) => (
  <FontAwesome
    name="angle-left"
    size={size}
    className={className}
    color={color}
  />
);

export const SearchIcon = ({ size, className, color }: Props) => (
  <FontAwesome name="search" size={size} className={className} color={color} />
);

export const UserIcon = ({ size, className, color }: Props) => (
  <FontAwesome
    name="user-circle"
    size={size}
    className={className}
    color={color}
  />
);
