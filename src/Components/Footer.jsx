import React from 'react'
import Button from './Button'

const Footer = () => {
    const clickMe = () => {
        alert('Hello Im a props')
    }
  return (
    <div className='mt-5'>
        <h1 className='text-warning text-center mt-5'>Footer</h1>

        <p className='shadow my-5 container p-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptates, nisi quo minus laboriosam cum nihil eveniet, vel deleniti quis maiores dolorem eaque quisquam expedita animi eum, unde doloremque aliquid.
        Porro, illo numquam. Accusamus similique dignissimos cumque nostrum voluptatibus mollitia harum. Quod magni cumque autem, omnis doloribus quibusdam, iure neque aliquam modi quae porro ullam veritatis cum explicabo placeat sunt.
        Harum autem aperiam ad aut, voluptatibus sequi officia, accusantium sit pariatur nisi incidunt cumque libero doloribus aliquam quis perferendis vero laborum odit expedita provident iste quia laboriosam. Eligendi, doloremque voluptatibus.
        <Button handleClick={clickMe} className="btn btn-danger" content="Hello Im Received from a props"/>
        </p>

    </div>
  )
}

export default Footer