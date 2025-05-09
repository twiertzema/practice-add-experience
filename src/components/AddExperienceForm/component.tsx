import type { JobExperience } from "../../types";

interface AddExperienceFormProps {
  onCancel: () => void;
  onSubmit: (newExperience: JobExperience) => void;
}

export default function AddExperienceForm({
  onCancel,
  onSubmit,
  ...props
}: AddExperienceFormProps) {
  return <form>TODO</form>;
}
