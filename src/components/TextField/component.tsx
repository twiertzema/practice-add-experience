import { Input } from "@headlessui/react";
import Field, { type FieldProps } from "../Field";

interface TextFieldsProps extends FieldProps {
  name: string;
  placeholder?: string;
}

export default function TextField({
  name,
  placeholder,
  ...fieldProps
}: TextFieldsProps) {
  return (
    <Field {...fieldProps}>
      <Input
        className="block w-full border rounded px-2 py-1"
        name={name}
        placeholder={placeholder}
      />
    </Field>
  );
}
