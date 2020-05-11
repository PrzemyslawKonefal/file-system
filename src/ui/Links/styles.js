import { css } from "styled-components";

import styles from "../../config/styles";

export default css`
  color: ${styles.colors.brand};
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;
