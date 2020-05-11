import React from "react";
import Proptypes from "prop-types";

import { NavigationContainer } from "./styles";
import { Breadcrumbs } from "./Breadcrumbs";
import { Actions } from "./Actions";

const Navigation = ({ onNodeAdd }) => {
  return (
    <NavigationContainer>
      <Breadcrumbs />
      <Actions onNodeAdd={onNodeAdd} />
    </NavigationContainer>
  );
};

Navigation.propTypes = {
  onNodeAdd: Proptypes.func.isRequired,
};

export { Navigation };
