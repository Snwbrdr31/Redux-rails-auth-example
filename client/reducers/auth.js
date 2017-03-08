const auth = (state = {}, action) => {
  switch(action.type) {
    case 'LOGIN':
      return {
        isAuthenticated: true,
        id: action.id
      }
    case 'LOGOUT':
      return {}
    default:
     return state;
  }
}

export default auth;


// REDUX STORE BIG JSON OBJECT
// {
//   auth: {}
// }