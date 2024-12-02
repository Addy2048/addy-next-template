import { Control, Controller } from "react-hook-form";

interface Props {
  control: Control<any, any>;
  handleChange: Function;
  options: { name: string; value: string }[];
  name: string;
}

export default function SelectField({
  control,
  handleChange,
  options,
  name,
}: Props) {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: true }}
      defaultValue={undefined}
      render={({ field: { onChange, onBlur, value } }) => (
        <>
          <select
            className="select select-bordered w-full md:w-1/2 p-2 bg-white border border-black border-2 rounded"
            onChange={handleChange({ onChange })}
            onBlur={onBlur}
            value={value}
          >
            <option disabled selected>
              Select {name}
            </option>
            {options &&
              options.map((item, index) => (
                <option value={item.value} key={index}>
                  {item.name}
                </option>
              ))}
          </select>
        </>
      )}
    />
  );
}
