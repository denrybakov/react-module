import axios from "axios";
import { GET_ALL_POSTS_JSONPLACEHOLDER } from '../constans'

export const fetchAllPosts = async (url, setSpinner) => {
  if (typeof url !== 'string') throw new Error('Error string')

  setSpinner(true)

  try {
    const rawRequests = await axios.get(url)
    return rawRequests.data
  } catch (err) {
    throw new Error('Ошибка', err)
  } finally {
    setSpinner(false)
  }
}
