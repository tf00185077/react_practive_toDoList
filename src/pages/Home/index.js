import { useState, useEffect, useRef } from "react";
import { API_GET_DATA} from '../../global/constants'
import Edit from "./components/Edit";
import List from "./components/List";
import "./index.css";

async function fetchData(setData){
    const res = await fetch(API_GET_DATA)
    const {data} = await res.json()
    setData(data)
}

async function fetchSetData(data){
    await fetch(API_GET_DATA,{
        method:"PUT",
        headers:{
            'Content-type':"application/json"
        },
        body:JSON.stringify({data})
    })
}
const Home = () => {
  // let a= 100;
  const [data, setData] = useState([]);
  const submitingStatus = useRef(false);
    useEffect(() =>{
        if(!submitingStatus.current){
            return
        }
        fetchSetData(data)
        .then(data=>submitingStatus.current=false)
    },[data])

    useEffect(() => {
        fetchData(setData)
    },[])
  return (
    <div className="app">
      <Edit add={setData} submitingStatus={submitingStatus} />
      <List listData={data} deleteData={setData} submitingStatus={submitingStatus} />
    </div>
  );
};
export default Home;
