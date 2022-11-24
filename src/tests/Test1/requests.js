import axios from 'axios'

export const getData = async () => {
  try {
    const res = await axios.get('https://mockyard.herokuapp.com/users/30')

    console.log('res', res)
    return res.data
  } catch (error) {
    console.log('error', error)
  }
}
