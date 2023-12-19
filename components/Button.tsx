import clsx from "clsx";
import ClipLoader from "react-spinners/ClipLoader";

type Variant = "solid" | "outline";
type ColorSchema = "blue" | "red" | "green" | "dark" | "teal";

interface ButtonProps {
  title?: string;
  font?: any;
  isDisabled?: boolean;
  variant?: Variant;
  colorSchema: ColorSchema;
  width?: string;
  height?: string;
  isLoading?: boolean;
}

const Button: React.FC<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  title,
  font,
  isDisabled = false,
  variant = "solid",
  colorSchema,
  width = "full",
  height = "md",
  isLoading = false,
  ...props
}) => {
  return (
    <button
      {...props}
      disabled={isDisabled}
      className={clsx(`rounded w-24 capitalize`, {
        "bg-blue-500 text-white": colorSchema === "blue" && variant === "solid",
        "border-blue-500 border text-blue-500":
          colorSchema === "blue" && variant === "outline",
        "bg-red-500 text-white": colorSchema === "red" && variant === "solid",
        "bg-slate-900 text-white":
          colorSchema === "dark" && variant === "solid",
          "border-slate-900 border":
          colorSchema === "dark" && variant === "outline",
        "bg-teal-500 text-white": colorSchema === "teal" && variant === "solid",
        "border-red-500 text-red-500 ":
          colorSchema === "red" && variant === "outline",
        "bg-green-500 text-white":
          colorSchema === "green" && variant === "solid",
        "border-green-500 text-green-500":
          colorSchema === "green" && variant === "outline",
        "opacity-25": isDisabled,
        "w-24": width === "md",
        "w-8": width === "sm",
        "w-[34px] h-[34px]": width === "icon",
        "w-full py-[0.45rem] rounded-full": width === "lg",
        "w-full py-[0.45rem] rounded-lg": width === "lg1",
        "w-full": width === "full",
        "h-8": width === "sm",
        "w-24 py-1 rounded-full": width === "gap",
        "w-32 py-2 rounded-lg h-10": width === "filter",
        "h-12": width === "md",
      })}
    >
      {font}
      {title}
    </button>
  );
};

export default Button;
