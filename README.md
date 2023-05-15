# reactRouter

## just finished the initial fetching of data 
i just finished creating a vans util for fetching the data
### steps:
 ##### import all the neccessary dependencies, eg. axios, useState...
 ##### create a initial [data, setData] state that i can store all of the data coming from the get request.
 ##### create fetchData fn that uses axios to fetch data from api
 ##### setData in to the res.data
 ##### create useEffect to call fetchData()
 ##### map over data and pass all the info to the < ToRender /> component
 ##### display < ToRender />

 ###### NOTE: dependencies array is empty array, so it load only once

### TODO:
 ##### 1. improve ui of the vans card
 ##### 2. create a nested route
 ##### 3. create a error handling on to the get request
 ##### 4. improve file structure