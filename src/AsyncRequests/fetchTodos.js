import axios from "axios";

export const fetchTodos = async (url, setSpinner) => {
  if (typeof url !== 'string') throw new Error('Error string')

  setSpinner(true)

  try {
    const rawRequest = await axios.get(url)
    return rawRequest.data
  } catch (err) {
    console.log(err)
    throw new Error('Ошибка ', err)
  } finally {
    setSpinner(false)
  }
}
