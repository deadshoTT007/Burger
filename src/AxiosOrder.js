import Axios from 'axios'
import axios from 'axios'

const instance= axios.create({
    baseURL:'https://myburger-f07d4.firebaseio.com/'
})

export default instance;