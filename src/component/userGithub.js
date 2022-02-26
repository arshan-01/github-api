import { useState ,useEffect} from 'react'
import axios from 'axios'
import { endPoint } from '../config/endpoint'
function UserGitHub() {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(false)
    const [followers, setFollower] = useState()
    
const fetchfollower = async () => {
try {
    setLoading(true)
    // let user = await axios.get(`https://api.github.com/users/${param}`)
    let res = await axios.get(`${endPoint}/users/arshan-01/followers`)
    // console.log("user", res);
    setFollower(res.data);
} catch (error) {
    console.log("erorr",error.message);
}
finally{
    setLoading(false)           
}}

const FetchGithubUser = async () => {
try {
    setLoading(true)
    // let user = await axios.get(`https://api.github.com/users/${param}`)
    let res = await axios.get(`${endPoint}/users/arshan-01`)
    // console.log("user", res);
    setUser(res.data);
} catch (error) {
    console.log("erorr",error.message);
}
finally{
    setLoading(false)           
}}
    useEffect(() => {
        FetchGithubUser();
    },[])  
  return (
    [user ,followers, fetchfollower,loading]
  ) }
export default UserGitHub