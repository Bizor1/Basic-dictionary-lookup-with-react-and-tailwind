import { useEffect, useState } from "react"
import React from 'react';
import { useParams,useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"



export default function Definition() {
    const [word, setWord] =useState();
    const [error,setError]=useState()
    console.log(useParams())
    let {search}=useParams();
    const navigate=useNavigate();
    useEffect(()=>{
    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + search)
      .then((response) =>{
        if(response.status===404){navigate('/404')};
        if (!response.ok){setError(true);
          throw new Error('something went wrong');
        } return response.json()
      }) 
      .then((data) => {
        setWord(data[0].meanings);
        console.log(data[0].meanings);
      }
        )
        .catch((e)=>{console.log(e.message)})

    },[]);


    return( 
        <>
         {word?.map(meaning=>{
            return <p className="Uppercase font-bold pl-6">{meaning.partOfSpeech}:{meaning.definitions[0].definition}</p>

         })}

         <p className="pl-6">
       <Link to="/dictionary">Search another </Link></p>



        </>
    )
    
       
    
}