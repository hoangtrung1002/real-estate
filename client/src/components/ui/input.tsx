import { cn } from "@/utils/helper";
import * as React from "react";
import {
  Control,
  Controller,
  ControllerRenderProps,
  FieldError,
  FieldPath,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError;
  name?: string;
  customstyle?: string;
  field?: ControllerRenderProps<FieldValues, FieldPath<FieldValues>>;
}

interface InputController {
  name?: string;
  rules?: RegisterOptions;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<FieldValues> | any;
  props?: Omit<InputProps, "error" | "field">;
}

const InputController: React.FC<InputController> = ({
  control,
  name = "",
  rules,
  props,
}) => {
  return (
    <Controller
      control={control}
      rules={rules}
      name={name}
      defaultValue=""
      render={({ field, fieldState: { error } }) => (
        <Input error={error} {...field} name={field.name} {...props} />
      )}
    />
  );
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, name, error, field, ...props }, ref) => {
    return (
      <div className={cn("flex flex-col gap-2 w-full")}>
        {name && (
          <label
            className={cn("font-medium capitalize text-primary-700", {
              "text-red-500": error,
            })}
            htmlFor={name}
          >
            {name}
          </label>
        )}
        <input
          className={cn(props.customstyle, "placeholder:text-sm", className)}
          name={name}
          {...field}
          {...props}
          ref={ref}
        />
        {error?.message && (
          <>
            <span className="text-sm text-red-500">{error?.message}</span>
          </>
        )}
      </div>
    );
  }
);

export { Input, InputController };
