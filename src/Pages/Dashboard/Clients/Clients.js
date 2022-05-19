import React, { useState, useEffect} from 'react';
import '../Clients/Clients.css'



function Clients() {
    // Fetching api from here
    const [ourClients, setOurClients] = useState([])

    useEffect(() => {
        fetch('https://fakerapi.it/api/v1/companies?_quantity=2.5')
        .then(feedBack => feedBack.json())
        .then(data => setOurClients(data.data))
    },[])

    console.log(ourClients)

    // API fetching ends here
    return (
        <div className='clients'>
            <h1 className='h3'>Our Clients</h1>
            <p className='p'>Thanks for believing in us.</p>
                <div className='under1 tr'>
                    <h3>IMAGE</h3>
                    <h3>NAME</h3>
                    <h3>GENDER</h3>
                    <h3>PHONE</h3>
                    <h3>EMAIL</h3>
                </div>
            { ourClients ? ourClients?.map((setClient, ids) =>(
                <div className='tr' key={ids} >
                    <img className='image' src={setClient.image} alt='' />
                    <p className='name'>{setClient.name}</p>
                    <p className='gender'>{setClient.contact.gender}</p>
                    <p className='phone'>{setClient.phone}</p>
                    <p className='email'>{setClient.email}</p>
                </div>                
            ) ) : null }
        </div>
    );
}
export default Clients;