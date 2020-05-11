import { v4 as uuidv4 } from "uuid";

export default () => ({
  id: uuidv4(),
  fileName: "",
  isFolder: true,
  updatedAt: new Date().toISOString(),
  createdAt: new Date().toISOString(),
  children: [],
});
