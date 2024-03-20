import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import NavBar from './NavBar'
import About from "./About";

const Home = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
        }, 5000);
    }, []);
    return (
        <div>
            {!loading ? (
                <div className="w-100 h-100 d-flex align-items-center justify-content-center ">
                    {" "}
                    <p className="text-center my-5">Loading....</p>{" "}
                </div>
            ) : (
                <>
                    <NavBar />
                    <div>
                        <h1 className="text-center my-5 text-primary">Home Page</h1>
                        <p className="col-10 col-md-8 col-lg-8 mx-auto p-3 shadow rounded-3 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem necessitatibus voluptatem sit ab repellat commodi ipsum assumenda in! Consectetur possimus accusantium commodi laudantium amet eligendi ex, perferendis velit officiis et!
                            Consectetur amet, impedit ipsam doloremque pariatur ad consequuntur quis autem error facere tenetur repudiandae, dolorum id, eos reprehenderit eum eius magni ex officiis? Rerum tempore nobis dolores blanditiis in sint.
                            Nostrum reiciendis fugit quae, quaerat dolores nam commodi numquam dolorum sunt officiis ut ducimus labore laudantium eius, nulla delectus esse iusto unde nobis? Rem veniam, officia vero voluptate est excepturi.
                            Autem, atque? Quis quae ipsa optio. Maiores doloribus voluptates laudantium quidem cupiditate enim dolor! Asperiores amet architecto odit dignissimos eveniet, dolore sapiente quam cumque cum odio velit perspiciatis pariatur fugiat.
                            Officia reprehenderit earum quibusdam incidunt quae expedita enim odit qui in dolorem, labore nostrum ea! Amet facilis distinctio fugiat molestias ipsa dicta aliquid facere voluptates, voluptate ipsum quam praesentium perferendis.</p>
                    </div>
                    <Footer />
                </>
            )}
        </div>
    )
}

export default Home