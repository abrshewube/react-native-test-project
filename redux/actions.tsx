export const setUsers = (users: any) => ({
  type: 'SET_USERS',
  payload: users,
});

export const fetchUsers = () => ({
  type: 'FETCH_USERS',
});
