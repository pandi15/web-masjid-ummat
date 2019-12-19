const getUserToken = () => {
  let data = localStorage.getItem('userToken')
  const parsed = data || null
  return parsed
}

const get = async (key) => {
  let data = []
  try {
    data = localStorage.getItem(key)
    return data
  } catch (error) {
    console.log('Storage Failed:', error)
  }
}

const set = async (key, data) => {
  try {
    localStorage.setItem(key, data)
  } catch (error) {
    console.log('Storage Failed:', error)
  }
}

const remove = async (key) => {
  try {
    const removeProgress = localStorage.removeItem(key)
    return removeProgress
  } catch (error) {
    console.log('Storage Failed:', error)
  }
}
export {
  getUserToken,
  get,
  set,
  remove
}
