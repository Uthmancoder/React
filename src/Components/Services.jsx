import React, { useState, useEffect } from 'react'
import Button from './Button'
import { AiOutlineSearch } from "react-icons/ai"
import { IoMdSend } from "react-icons/io";
import NavBar from './NavBar';

const Services = () => {
  const [isTyping, setIsTyping] = useState(false)
  const [inputVal, setInpVal] = useState("")

  useEffect(() => {
    if (inputVal === "") {
      setIsTyping(false)
    } else {
      setIsTyping(true)
    }
  }, [inputVal])

  const clickMe = () => {
    alert("Button Clicked")
  }
  const handleChange = (ev) => {
    console.log(ev.target.value)
    setInpVal(ev.target.value)
  }

  return (
    <div>
      <h1 className='text-primary text-center my-2'>
        Services
      </h1>

      <div className='col-12 col-md-8 col-lg-5 mx-auto inpdiv'>
        {/* Whenever It's not typing show search */}
        {!isTyping ? (<p className='searchIcon'><AiOutlineSearch size={20} /></p>) : null}
        <input onChange={handleChange} className={`form-control  ${!isTyping ? "inp" : ""}`} type="text" placeholder='Enter Search Value' name="" id="" />
        {/* Whenever It's typing show send */}
        {isTyping ? (<p className='sendchIcon'><IoMdSend size={20} /></p>) : null}
      </div>

      <div className='container shadow  p-3 '>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quis doloribus, voluptates architecto illo sapiente eligendi mollitia, suscipit ipsa numquam nulla eos nihil alias consectetur similique ab fugit magni natus.
          Blanditiis ipsa assumenda est totam, laborum obcaecati illo iusto nobis sequi voluptatum distinctio. Voluptatum consequuntur id aspernatur minus iste suscipit beatae atque, quas quos repudiandae dolor praesentium sapiente laudantium quisquam.
          Repudiandae ab eius odit quasi dolore praesentium necessitatibus harum illum at delectus. Officia, esse voluptate? Illo id sint nesciunt accusamus repellat alias sunt quaerat ullam reiciendis est, sit, inventore dicta!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quis doloribus, voluptates architecto illo sapiente eligendi mollitia, suscipit ipsa numquam nulla eos nihil alias consectetur similique ab fugit magni natus.
          Blanditiis ipsa assumenda est totam, laborum obcaecati illo iusto nobis sequi voluptatum distinctio. Voluptatum consequuntur id aspernatur minus iste suscipit beatae atque, quas quos repudiandae dolor praesentium sapiente laudantium quisquam.
          Repudiandae ab eius odit quasi dolore praesentium necessitatibus harum illum at delectus. Officia, esse voluptate? Illo id sint nesciunt accusamus repellat alias sunt quaerat ullam reiciendis est, sit, inventore dicta!</p>
        <Button handleClick={clickMe} className="btn btn-secondary" content="Click Me" />
        <Button handleClick={clickMe} className="btn btn-secondary" content="Click Me" />
        <Button handleClick={clickMe} className="btn btn-secondary" content="Click Me" />
      </div>
    </div>

  )
}

export default Services