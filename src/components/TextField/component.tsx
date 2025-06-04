import { Field, Input, Label } from "@headlessui/react";

interface TextFieldsProps {
  label: string;
  name: string;
  required?: boolean;
}

export default function TextField({ label, name, required }: TextFieldsProps) {
  return (
    <Field className="w-full">
      <Label>
        {label}
        {required ? "*" : ""}
      </Label>
      <Input
        className="block w-full border rounded px-2 py-1"
        name={name}
        placeholder="Ex: Retail Sales Manager"
      />
    </Field>
  );
}
