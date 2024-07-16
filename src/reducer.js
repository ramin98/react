export const initialState = { users: [] };

export function reducer(state, action) {
  switch (action.type) {
    case "ADD_USER":
      let obj = {name:action.payload}
      return { ...state, users: [...state.users, obj] };
    case "GET_USERS":
      return { ...state, users: [...action.payload] };
    default:
      return state;
  }
}
