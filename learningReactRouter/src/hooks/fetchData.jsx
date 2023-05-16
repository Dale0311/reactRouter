import axios from "axios";
function fetchData(id, setter) {
    axios
        // axios.get
        .get(`https://645c8a84250a246ae30744d5.mockapi.io/vans/${id}`)
        // then res=> setData(res.data)
        .then(res => setter(res.data))
}

export default fetchData;