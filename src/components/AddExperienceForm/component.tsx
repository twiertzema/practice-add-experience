import { Button, DialogTitle } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import type { JobExperience } from "../../types";
import TextField from "../TextField";

interface AddExperienceFormProps {
  onCancel: () => void;
  onSubmit: (newExperience: JobExperience) => void;
}

export default function AddExperienceForm({
  onCancel,
  onSubmit,
  ...props
}: AddExperienceFormProps) {
  return (
    <form {...props}>
      <div className="flex justify-between p-4 border-b-1 border-gray-300">
        <DialogTitle className="text-lg font-bold">Add Experience</DialogTitle>

        <Button className="cursor-pointer" onClick={onCancel}>
          <XMarkIcon className="size-6" />
        </Button>
      </div>

      <div className="flex flex-col gap-4 p-4 text-gray-600">
        <p className="text-sm">* Indicates required</p>

        <TextField label="Title" name="title" required />

        {/* TODO: SelectField */}

        <TextField label="Company or Organization" name="company" required />
      </div>

      <div className="p-4 border-t-1 border-gray-300">TODO: Actions</div>
    </form>
  );
}
