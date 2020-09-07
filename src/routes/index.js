import React from "react";
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

import useAppContext from "../store";

export default function Routes() {
  const {
    store: { signed },
  } = useAppContext();

  return signed ? <AppRoutes /> : <AuthRoutes />;
}
