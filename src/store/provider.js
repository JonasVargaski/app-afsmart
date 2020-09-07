import React, { useReducer, useCallback } from "react";
import PropTypes from "prop-types";
import AppContext from "./context";
import * as types from "./types";
import api from "../services/api";
import socket from "../services/socket";

import { reducer, INITIAL_STATE } from "./reducer";

function Action(type, data) {
  return { type, payload: data };
}

export default function Provider({ children }) {
  const [store, dispatch] = useReducer(reducer, INITIAL_STATE);

  const signIn = useCallback(async (email, password) => {
    const { data } = await api.post("session", { email, password });
    dispatch(new Action(types.SIGNIN_SUCCESS, data.user));
    socket.connect(data.user);
  });

  const signOut = useCallback(async () => {
    dispatch(new Action(types.SIGNOUT_SUCCESS));
  });

  return (
    <AppContext.Provider value={{ store, signIn, signOut, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
};
