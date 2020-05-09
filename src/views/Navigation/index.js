import React from "react";
import { NavigationContainer } from "./styles";
import { Breadcrumbs } from "./Breadcrumbs";
import { Actions } from "./Actions";

const Navigation = () => {
  return (
    <NavigationContainer>
      <Breadcrumbs />
      <Actions />
    </NavigationContainer>
  );
};

export { Navigation };
