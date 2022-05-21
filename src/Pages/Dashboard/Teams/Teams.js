import React, { useState, useEffect} from 'react';
import '../Teams/Teams.css'



function Teams() {
    // Fetching api from here
    const [ourTeamMembers, setOurTeamMembers] = useState([])

    useEffect(() => {
        fetch('https://fakerapi.it/api/v1/persons?_quantity=5')
        .then(feedBack => feedBack.json())
        .then(data => setOurTeamMembers(data.data))
    },[])

    // API fetching ends here
    return (
        <div className='teamsMemberContainer'>
        <div className='teamsMember'>
            <h1 className='teamH3'>Our Teams</h1>
            <p className='teamP'>We belive in Unity, we Archieve more</p>
                <div className='under1 teamTr'>
                    <h3>IMAGE</h3>
                    <h3>NAME</h3>
                    <h3>GENDER</h3>
                    <h3>PHONE</h3>
                    <h3>EMAIL</h3>
                </div>
            { ourTeamMembers ? ourTeamMembers?.map((ourTeamMember, idx) =>(
                <div className='teamTr' key={idx} >
                    <img className='teamImage' src={ourTeamMember.image} alt='' />
                    <p className='teamName'>{ourTeamMember.firstname} {ourTeamMember.lastname}</p>
                    <p className='teamGender'>{ourTeamMember.gender}</p>
                    <p className='teamPhone'>{ourTeamMember.phone}</p>
                    <p className='teamEmail'>{ourTeamMember.email}</p>
                </div>                
            ) ) : null }
        </div>
        </div>
    );
}
export default Teams;