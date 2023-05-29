import axios from "axios";
function fetchData(id=0, setter) {
    let query = id<1? `https://645c8a84250a246ae30744d5.mockapi.io/vans/`: `https://645c8a84250a246ae30744d5.mockapi.io/vans/${id}`;
    axios
        // axios.get
        .get(query)
        // then res=> setData(res.data)
        .then(res => setter(res.data))
}

export default fetchData;