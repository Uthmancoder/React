import React from 'react'
import Button from './Button'

const Services = () => {
  const clickMe = ()=>{
    alert("Button Clicked")
  }
  return (
    <div>

      <h1 className='text-primary text-center my-2'>
        Services
      </h1>

      <div className='container shadow  p-3 '>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quis doloribus, voluptates architecto illo sapiente eligendi mollitia, suscipit ipsa numquam nulla eos nihil alias consectetur similique ab fugit magni natus.
          Blanditiis ipsa assumenda est totam, laborum obcaecati illo iusto nobis sequi voluptatum distinctio. Voluptatum consequuntur id aspernatur minus iste suscipit beatae atque, quas quos repudiandae dolor praesentium sapiente laudantium quisquam.
          Repudiandae ab eius odit quasi dolore praesentium necessitatibus harum illum at delectus. Officia, esse voluptate? Illo id sint nesciunt accusamus repellat alias sunt quaerat ullam reiciendis est, sit, inventore dicta!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quis doloribus, voluptates architecto illo sapiente eligendi mollitia, suscipit ipsa numquam nulla eos nihil alias consectetur similique ab fugit magni natus.
          Blanditiis ipsa assumenda est totam, laborum obcaecati illo iusto nobis sequi voluptatum distinctio. Voluptatum consequuntur id aspernatur minus iste suscipit beatae atque, quas quos repudiandae dolor praesentium sapiente laudantium quisquam.
          Repudiandae ab eius odit quasi dolore praesentium necessitatibus harum illum at delectus. Officia, esse voluptate? Illo id sint nesciunt accusamus repellat alias sunt quaerat ullam reiciendis est, sit, inventore dicta!</p>
          <Button handleClick={clickMe} className="btn btn-secondary" content="Click Me"/>
          <Button handleClick={clickMe} className="btn btn-secondary" content="Click Me"/>
          <Button handleClick={clickMe} className="btn btn-secondary" content="Click Me"/>
      </div>
    </div>

  )
}

export default Services