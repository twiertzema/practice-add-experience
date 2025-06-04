import { Button, DialogTitle } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { type SyntheticEvent, useCallback } from "react";
import type { JobExperience } from "../../types";
import SelectField from "../SelectField";
import TextField from "../TextField";
import { EMPLOYMENT_TYPE_OPTIONS } from "./constants";

interface AddExperienceFormProps {
  onCancel: () => void;
  onSubmit: (newExperience: JobExperience) => void;
}

export default function AddExperienceForm({
  onCancel,
  onSubmit,
  ...props
}: AddExperienceFormProps) {
  const handleSubmit = useCallback((e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    console.log(formData);
  }, []);

  return (
    <form {...props} onSubmit={handleSubmit}>
      <div className="flex justify-between p-4 border-b-1 border-gray-300">
        <DialogTitle className="text-lg font-bold">Add Experience</DialogTitle>

        <Button className="cursor-pointer" onClick={onCancel}>
          <XMarkIcon className="size-6" />
        </Button>
      </div>

      <div className="flex flex-col gap-4 p-4 text-gray-600">
        <p className="text-sm">* Indicates required</p>

        <TextField
          label="Title"
          name="job_title"
          placeholder="Ex: Retail Sales Manager"
          required
        />

        <SelectField
          label="Employment type"
          name="exployment_type"
          options={EMPLOYMENT_TYPE_OPTIONS}
        />

        <TextField
          label="Company or Organization"
          name="company"
          placeholder="Ex: Microsoft"
          required
        />
      </div>

      <div className="flex justify-end p-4 border-t-1 border-gray-300">
        <Button
          className="w-18 p-1 rounded-full bg-blue-700 text-white font-semibold"
          type="submit"
        >
          Save
        </Button>
      </div>
    </form>
  );
}
