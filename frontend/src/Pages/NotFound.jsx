import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Navbar from "../Components/Navbar"
import { fetch } from '../Redux/photo/action';



const NotFound = () => {
  const [query, setQuery] = useState({
    query: "animals",
    page: 1,
    per_page: 30,
  });
  const dispatch = useDispatch();
  const data = useSelector((store) => store.photos.data);


  useEffect(() => {
    dispatch(fetch(query));
  }, [query.query]);

  return (
    <div>
    <Navbar searchquery={(e)=>setQuery({...query,query:e.target.value })}/>
     Page Not Found
      
      </div>
  )
}

export default NotFound