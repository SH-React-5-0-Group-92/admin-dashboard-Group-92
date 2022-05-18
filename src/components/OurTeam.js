import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card'


const OurTeam = () => {
    const [post, setPost] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        contactCall()
      }, [])

      const contactCall =async ()=>{
          try{
              const res = await  axios.get(`https://fakerapi.it/api/v1/persons?_quantity=12`)
              .then(res =>{
                setPost(res.data.data)
                setLoading(true)
                console.log(res.data.data)
              })

          } catch (err){
            alert(err.message)
          }
      }



  return (
    <div className="container">
        <div className="container1">
            <h1 style={{fontWeight: '900'}}>Our Team</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum </p>
            <div className="card1">
                <div className="card-con">
                    {loading && post.map((details) =>(
                    <div key={details.id}>
                        <Card details={details}/>
                    </div>
                    ))}

                </div>
            </div>
        </div>
    </div>
  )
}

export default OurTeam