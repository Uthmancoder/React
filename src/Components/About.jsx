import React, { useState } from 'react'
import Button from './Button'
import logo from "../Images/logo192.png"
import NavBar from './NavBar'

const About = () => {
    // Scenerio1
    const [username, setuserName] = useState("Anuoluwapo")
    // Scenerio2
    const [studentsArr, setStudentsArr] = useState([{
        fullName: "Anuoluwapo",
        age: 1111,
        studentId: 23046
    },
    {
        fullName: "Top",
        age: 1511,
        studentId: 23047
    },
    {
        fullName: "Oma",
        age: 1411,
        studentId: 23048
    },
    {
        fullName: "Nichole",
        age: 1211,
        studentId: 23049
    }])


    const bttnClicked = () => {
        alert("Hello There!")
    }



    const handleBttnClick = () => {
        if (username === "Anuoluwapo") {
            setuserName("Nichole")
        } else if (username === "Nichole") {
            setuserName("Tope")
        } else if (username === "Tope") {
            setuserName("Oma")
        } else {
            setuserName("Anuoluwapo")
        }
    }

    const handleDelete = (i)=>{
     let arr1 = studentsArr.filter((student, index)=> index !== i)
     setStudentsArr(arr1)
    }
    return (
        <div className='mt-5'>
            <NavBar/>
            <h2 className='text-secondary text-center'>About Section</h2>
            <img src={logo} alt='Logo' />
            <h1>{username}</h1>
            <h2>Availabe Students For React</h2>
            <table className=''>
                <tr>
                    <th className='w-fit'>S/N</th>
                    <th>FullName</th>
                    <th>Student Age</th>
                    <th>Student Id</th>
                </tr>

                {studentsArr.map((stutent, index) => (
                    <tr key={index} className='d-flex align-items-center just-content-between gap-4'>
                        <td>{index + 1}</td>
                        <td>{stutent.fullName}</td>
                        <td>{stutent.age}</td>
                        <td>{stutent.studentId}</td>
                        <td><button onClick={()=>handleDelete(index)} className='btn btn-danger'>DEl</button></td>

                    </tr>
                    
                ))}
            </table>
            <div className='bg-secondary p-2 rounded-3 my-3 container'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat consequuntur amet mollitia accusantium minima distinctio, illo ea id asperiores deleniti consequatur necessitatibus hic aspernatur provident ex unde et eum! Nulla?
                    Nesciunt itaque ratione facilis ad eaque nihil, saepe minima rerum recusandae blanditiis. Non recusandae cum labore et nesciunt dolorem, eveniet earum quos illo officiis ducimus voluptates nobis impedit soluta culpa!
                    Temporibus maxime incidunt optio ducimus reiciendis expedita ea suscipit quas iure. Adipisci autem quaerat recusandae odit ex at vero cumque dolorem. Amet nulla explicabo, deserunt ipsa saepe dolore inventore quod!
                    Rerum voluptatibus quos quod quae accusamus reprehenderit quo quibusdam iste molestiae dolorem officiis sed eveniet suscipit, quaerat vero alias magnam cumque obcaecati dicta quidem provident ratione, hic id aperiam. Atque.
                    Cupiditate, voluptatem! Nostrum facilis ducimus enim cumque repudiandae alias, voluptates voluptas, distinctio excepturi nesciunt, error dignissimos. Dolorum, aliquam tempora ab numquam expedita ratione, aliquid sit unde harum, adipisci provident repellat.
                    Rerum fuga sunt, quos iure sapiente nihil, cumque maiores officiis aperiam fugiat accusantium inventore adipisci dicta porro deserunt autem ad incidunt, veritatis neque. Recusandae, minima. Molestias quod magnam excepturi dolorum!
                    Adipisci repellendus quaerat eaque quam, eveniet quis odit amet, ad incidunt voluptatem velit labore architecto. Nam repellendus pariatur praesentium eveniet maiores laborum repudiandae eligendi iure? Est, odit! Rem, impedit eaque.
                    Explicabo mollitia optio ut officiis, vitae enim culpa odio consectetur itaque aliquam autem! Est minima ad cupiditate reprehenderit expedita in facilis! Provident facilis possimus ducimus veritatis. Vel beatae eos voluptates!
                    Magnam porro voluptates minima quisquam assumenda libero, voluptatum asperiores pariatur est exercitationem id. Illum asperiores suscipit veniam corrupti incidunt, perspiciatis fugit sapiente ut totam quibusdam facere ducimus minus explicabo cumque.
                    Incidunt, deserunt! Ad laudantium incidunt fugit saepe ipsa voluptatum eos repudiandae fuga reprehenderit molestiae! Sapiente molestias rerum quia necessitatibus est deleniti sunt consectetur autem quas ipsa. Sit enim autem voluptatum?</p>
                <div className='d-flex align-items-center gap-5'>
                    <Button handleClick={bttnClicked} className="btn btn-light" content="Hello There!" />
                    <button onClick={handleBttnClick} className='btn btn-dark'>Click ME</button>
                </div>
            </div>

        </div>
    )
}

export default About