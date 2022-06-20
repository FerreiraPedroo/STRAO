import api from '../api';

export const loginService = async (_user, _password) => {
  try {
    const { data } = await api({
      url: '/login',
      method: 'POST',
      data: {
        user: _user,
        password: _password,
      },
      withCredentials: true,
    })
    return data
    
  } catch (err) {
    console.log(err.response.data)
    return (err.response.data)
  }
}
