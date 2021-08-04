import axios from 'axios'

export const sendQuery = (query: any, variables?: any): Promise<any> => {
  console.log(query)

  return axios.post('http://localhost:4000/graphql?', {
    query,
  })
}

export const sendMutation = (mutation: any, variables?: any): Promise<any> => {
  console.log(mutation)

  return axios.post('http://localhost:4000/graphql?', {
    mutation,
  })
}

export const getAdsQuery = () => {
  return `{
          ads{title, createdAt, id, username,comments{body, id, username}}
      }`
}

export const registerMutation = (
  username: string,
  password: string,
  email: string,
  confirmPassword: string,
  role: string
) => {
  return `{register(registerInput:{username:"noe", password:"000000000", confirmPassword:"000000000",email:"ja@me.com", role:"seller"}){id,createdAt,email,username, token}}`
  // return `{register(registerInput:{username:"${username}", password:"${password}", confirmPassword:"${confirmPassword}",email:"${email}", role:"${role}"}){id,createdAt,email,username, token}}`
}

// mutation{register(registerInput:{username:"noe", password:"000000000", confirmPassword:"000000000",email:"ja@me.com", role:"seller"}){id,createdAt,email,username, token}}
