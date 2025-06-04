import {
  Field as HeadlessField,
  type FieldProps as HeadlessFieldProps,
  Label,
} from "@headlessui/react";
import clsx from "clsx";
import type { PropsWithChildren } from "react";

export interface FieldProps extends HeadlessFieldProps {
  label: string;
  required?: boolean;
}

export default function Field({
  children,
  className,
  label,
  required,
}: PropsWithChildren<FieldProps>) {
  return (
    <HeadlessField className={clsx("w-full", className)}>
      <Label>
        {label}
        {required ? "*" : ""}
      </Label>
      {children}
    </HeadlessField>
  );
}
