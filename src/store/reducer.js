import * as types from "./types";
import uuid from "../util/uniqueID";

export const INITIAL_STATE = {
  signed: false,
  user: {
    email: "",
    password: "",
  },
  relays: [],
};

export function reducer(state, action) {
  switch (action.type) {
    case types.PERSIST_HAYDRATE: {
      const data = action.payload;
      return { ...state, ...data };
    }

    case types.SIGNIN_SUCCESS: {
      const user = action.payload;
      return { ...state, user, signed: true };
    }

    case types.SIGNOUT_SUCCESS: {
      return INITIAL_STATE;
    }

    case "CHANGE_RELAY": {
      const relay = action.payload;
      const index = state.relays.findIndex((r) => r.id == relay.id);
      const newRelays = state.relays;
      newRelays.splice(index, 1, relay);
      return { ...state, relays: newRelays };
    }

    case "ADD_RELAY": {
      return {
        ...state,
        relays: [
          ...state.relays,
          { id: uuid(), pin: "", description: "", time: "", active: false },
        ],
      };
    }

    case "REMOVE_RELAY": {
      const id = action.payload;
      return { ...state, relays: state.relays.filter((r) => r.id !== id) };
    }

    default:
      throw new Error("No reducer found for action : " + action.type);
  }
}
