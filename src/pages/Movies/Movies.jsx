import {useState, useEffect } from 'react'
import { getMovies } from '../../utilities/movies-service'

const Movies = () => {

    const [bool, setBool] = useState(false)

    //useEffect below will invoke after every render, will only run once if the dependency array is empty
    //second arg of useEffect is the dependency array
    //dependency array can have multiple dependencies. useEffect will listen to changes and will trigger again when a change happens
    useEffect(()=>{
        console.log("hello")
        getMovies()
    }, [])

    //Why we are using useEffect?
    //To make HTTP request the moment the component loads
    //Use case: We want to use an empty dependecy array to prevent multiple requests to the server

  return (
    <div>This is the Movies
        <button onClick={() => setBool(true)}></button>
    </div>
  )
}

export default Movies