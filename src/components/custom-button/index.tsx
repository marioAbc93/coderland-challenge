import { StyledButton } from "./styled";
import Themes from "../../theme/theme";
import { ButtonProps } from "../../constants";

type ThemeType = typeof Themes.light;

const Button = ({
  color,
  onClick,
  icon,
  description,
  orientation = "row",
  theme = Themes.light,
  disabled = false,
}: ButtonProps & { theme?: ThemeType }) => {
  const { primary, secondary, warning, success, danger } = theme;

  let buttonColor;
  switch (color) {
    case "primary":
      buttonColor = primary;
      break;
    case "secondary":
      buttonColor = secondary;
      break;
    case "warning":
      buttonColor = warning;
      break;
    case "danger":
      buttonColor = danger;
      break;
    case "success":
      buttonColor = success;
      break;
    default:
      buttonColor = primary;
  }

  const buttonStyle = {
    backgroundColor: buttonColor,
  };

  return (
    <StyledButton
      orientation={orientation}
      style={buttonStyle}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
      <span>{description}</span>
    </StyledButton>
  );
};
export default Button;
