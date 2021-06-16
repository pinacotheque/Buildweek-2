const fetchData = async (fetchProps) => {
    let result = { error: false, data: [] }
    try {
        const response = await fetch(...fetchProps)
        if (response.ok) {
            const data = await response.json()
            result.data = data
        } else {
            result.error = true
        }
    } catch (error) {
        result.error = true
    }
    return result
}

const fetchProfile = (endpoint='', method = "GET", body = null) => {
    const url = "https://striveschool-api.herokuapp.com/api/profile/"
    const finalUrl = url + endpoint
  
    const options = {
      method: method,
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem('token'),
      },
      body: body ? JSON.stringify(body) : null,
    }
    return [finalUrl, options]
}

const fetchExperience = (endpoint='', method = "GET", body = null) => {
    const url = `https://striveschool-api.herokuapp.com/api/profile/${localStorage.getItem('myId')}/experiences/`
    const finalUrl = url + endpoint
  
    const options = {
      method: method,
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem('token'),
      },
      body: body ? JSON.stringify(body) : null,
    }
    return [finalUrl, options]
}

export const getProfile = async () => {
    const result = await fetchData(fetchProfile('me'))
    return result
}

export const getProfiles = async () => {
    const result = await fetchData(fetchProfile())
    return result
}

export const putProfile = async (profile) => {
    const result = await fetchData(fetchProfile('', 'PUT', profile))
    return result
}

export const postExp = async (exp) => {
    const result = await fetchData(fetchExperience('', 'POST', exp))
    return result
}

export const putExp = async (id, exp) => {
    const result = await fetchData(fetchExperience(id, 'PUT', exp))
    return result
}

export const getExp = async () => {
    const result = await fetchData(fetchExperience())
    return result
}

export const delExp = async (id) => {
    const result = await fetchData(fetchExperience(id, 'DELETE'))
    return result
}