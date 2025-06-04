import { Select } from "@headlessui/react";
import type { FieldProps } from "../Field";
import Field from "../Field";

interface SelectFieldProps extends FieldProps {
  name: string;
  options: { label: string; value: string }[];
}

export default function SelectField({
  name,
  options,
  ...fieldProps
}: SelectFieldProps) {
  return (
    <Field {...fieldProps}>
      <Select className="block w-full border rounded px-2 py-1" name={name}>
        {options.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </Select>
    </Field>
  );
}
