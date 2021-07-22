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
    
    const optionsPicture = {
        method: method,
        headers: {
        Authorization: "Bearer " + localStorage.getItem('token'),
      },
      body: body !== null ? body : null,
    }

    const optionsRegular = {
      method: method,
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem('token'),
      },
      body: body !== null ? JSON.stringify(body) : null,
    }
    return [finalUrl, endpoint.includes('picture') ? optionsPicture : optionsRegular]
}



const fetchExperience = (endpoint='', method = "GET", body = null, id="", picture=false) => {
    const url = `https://striveschool-api.herokuapp.com/api/profile/${id ? id : localStorage.getItem('myId')}/experiences/`
    const finalUrl = url + endpoint
  
    const options = {
      method: method,
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem('token'),
      },
      body: body ? JSON.stringify(body) : null,
    }

    const optionsPicture = {
        method: method,
        headers: {
            Authorization: "Bearer " + localStorage.getItem('token'),
        },
        body: body ? body : null,
    }

    return [finalUrl, picture ? optionsPicture : options]
}

const fetchPost = (endpoint='', method='GET', body=null, picture=false) => {
    const url = `https://striveschool-api.herokuapp.com/api/posts/`
    const finalUrl = url + endpoint
  
    const options = {
      method: method,
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem('token'),
      },
      body: body ? JSON.stringify(body) : null,
    }

    const optionsPicture = {
        method: method,
        headers: {
            Authorization: "Bearer " + localStorage.getItem('token'),
        },
        body: body ? body : null,
    }
    return [finalUrl, picture ? optionsPicture : options]
}
// ********************************************************
const newFetchPost = (endpoint='', method='GET', body=null, picture=false) => {
    const url = `https://localhost:3001/api/posts`
    const finalUrl = url + endpoint
  
    const options = {
      method: method,
      headers: {
        "Content-type": "application/json"
      },
      body: body ? JSON.stringify(body) : null,
    }

    const optionsPicture = {
        method: method,
        body: body ? body : null,
    }
    return [finalUrl, picture ? optionsPicture : options]
}
// ********************************************************


export const getProfile = async (id='me') => {
    const result = await fetchData(fetchProfile(id))
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

export const postProfilePicture = async (picture) => {
    const result = await fetchData(fetchProfile('me/picture', "POST", picture))
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

export const getExp = async (id='') => {
    const result = await fetchData(fetchExperience('', 'GET', null, id))
    return result
}

export const addExpImage = async (expId, image) => {
    const result = await fetchData(fetchExperience(`${expId}/picture`, 'POST', image, '', true))
    return result
}

export const delExp = async (id) => {
    const result = await fetchData(fetchExperience(id, 'DELETE'))
    return result
}

export const getPosts = async () => {
    const result = await fetchData(fetchPost())
    return result
}

//***************************/
//***************************/

export const addPostImage = async (postId, image) => {
    const result = await fetchData(newFetchPost(postId, 'POST', image, true))
    return result
}

export const postPost = async (post) => {
    const result = await fetch('http://localhost:3001/api/posts/', {
        headers: {
            method: 'POST'
        }
    }) 
    return result
}

export const putPost = async (id, post) => {
    const result = await fetchData(newFetchPost(id, 'PUT', post))
    return result
}

export const delPost = async (id) => {
    const result = await fetchData(fetchPost(id, 'DELETE'))
    return result
}
