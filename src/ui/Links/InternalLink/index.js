import styled from "styled-components";

import { Link as LinkUtility } from "react-router-dom";
import anchorStyles from "../styles";

const InternalLink = styled(LinkUtility)`
  ${anchorStyles}
`;

export { InternalLink };
