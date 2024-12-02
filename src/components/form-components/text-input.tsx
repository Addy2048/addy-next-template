import React, { FormEvent, FocusEvent, Key } from "react";
import { Control, Controller } from "react-hook-form";

export interface IInputField {
  key?: Key;
  id?: string;
  name: string;
  component?: any;
  control: Control<any>;
  defaultValue?: any;
  showError?: boolean;
  disabled?: boolean;
  rules: Object;
  onFocus?: () => void;
  error?: string;
  minLength?: number;
  value?: string;
  inputStyle?: React.CSSProperties;
  className?: string;
  type?: string;
  autoComplete?: string;
  placeholder?: string;
  onValueChange?: (
    event: FormEvent<any>,
    onChange?: (...event: any[]) => void
  ) => void;
  rows?: number;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  parentStyles?: string;
}

const InputField = ({
  key,
  id,
  name,
  defaultValue = "",
  value,
  component: Component,
  control,
  showError = true,
  disabled = false,
  rules,
  onFocus,
  error,
  minLength,
  inputStyle,
  className,
  type,
  autoComplete = "off",
  placeholder,
  onValueChange,
  rows,
  onBlur,
  parentStyles,
  ...inputProps
}: IInputField) => {
  return (
    <Controller
      name={name}
      control={control}
      key={key}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field: { onChange, value, name } }) => (
        <div className={parentStyles}>
          <input
            {...inputProps}
            onChange={(event: FormEvent<any>) => {
              onChange(event);
              onValueChange && onValueChange(event, onChange);
            }}
            onBlur={onBlur}
            autoComplete={autoComplete}
            placeholder={placeholder}
            value={value}
            name={name}
            type={type}
            minLength={minLength}
            style={{ minHeight: "40px", minWidth: "50%", ...inputStyle }}
            className={className}
            disabled={disabled}
          />
          <p className="text-error">{error}</p>
        </div>
      )}
    />
  );
};

export default InputField;
