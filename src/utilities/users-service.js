import axios from "axios"

const BASE_URL = 'http://localhost:8080/api/v1/users'
export const login = async credentials => {
    try {
        console.log('We are in user-serviced', credentials)
        const token = await axios.post(`${BASE_URL}/login`, credentials)

        console.log(token.data)
        //Persist then token using the Window local storage 
        //setItem() first arguement is the property name and the second argument is the value
        localStorage.setItem('token', token.data)
        getToken()

    } catch(e) {
        console.log(e)
    }
}

export const getToken = () =>{
    //use property/key/field name to grab our token
    const token =localStorage.getItem('token')
    //getItem() retrun null if there is no key
    if(!token) return null
    //console.log('grabing', token)

    //Parse our token, split using the "." to isolate our payload and use logic to handle our exp date
    //After we decode our token using atob() which decodes encryted base64 string into a JS object
    //JWT is en=cryted in base64   
 const payload = JSON.parse(atob(token.split('.')[1]))


//JWT's expiration is in seconds, not milliseconds
//
if(payload.exp < Date.now() / 1000){
    localStorage.removeItem('token')
    return null
}
return token
}
