import z from "zod";

export const TaskDTO = z.object({
  id: z.uuidv7(),
  name: z.string(),
  completed: z.boolean()
});
