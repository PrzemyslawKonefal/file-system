import { v4 as uuidv4 } from "uuid";

export default file => ({
  id: uuidv4(),
  fileName: file.name,
  isFolder: false,
  url: URL.createObjectURL(file),
  updatedAt: new Date().toISOString(),
  createdAt: new Date().toISOString(),
  children: [],
});
