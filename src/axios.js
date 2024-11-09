import axios from 'axios';
const instance = axios.create({ baseURL: 'http://localhost:5000' });
instance.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
instance.defaults.params = {
    // 'user_id' : localStorage.getItem("star_uId"),
    // 'user_id' : localStorage.getItem("star_upass"),
}
export default instance