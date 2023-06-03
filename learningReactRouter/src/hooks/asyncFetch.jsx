import axios from "axios";
async function fetchData(){
    const res = await axios.get("https://645c8a84250a246ae30744d5.mockapi.io/vans/")
    const data = await res.data
    return data
}