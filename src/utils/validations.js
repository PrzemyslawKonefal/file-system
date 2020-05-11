import { NODE_NAME_REGEX } from "../constants/regexes";

export const validateNodeName = name => NODE_NAME_REGEX.test(name);
