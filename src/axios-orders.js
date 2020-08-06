import  axios  from 'axios' 

const instance =axios.create({
    baseURL: 'https://my-react-app-e8d42.firebaseio.com/'
})


export default  instance 