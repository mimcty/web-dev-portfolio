import React, { useState } from 'react';
import { AiOutlineTeam } from "react-icons/ai";


function StaffPage(){
    const [results, setResults] = useState([]);

    const fetchResults = () => {
        fetch("https://randomuser.me/api/?results=10")
        .then(response => response.json())
            .then(data => setResults(data.results))
            .catch(error => alert("Could not fetch staff data at this time. Please try again later."));
    }

    return (
        <>
           <h2>Our Staff</h2>
            <p>Here is the information of the team behind our company!</p>

            <div id="staffButton">
            <button onClick={fetchResults}><AiOutlineTeam /> View Staff</button>
            </div>

            <div className="container">
                <table>
                    <caption>Staff Data</caption>
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Location</th>
                            <th>Timezone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((user, i) => (
                            <tr key={i}>
                                <td>
                                    <img src={user.picture.thumbnail} alt={`${user.name.first} ${user.name.last} Thumbnail`} />
                                </td>
                                <td>
                                    <a href={`mailto:${user.email}`}>{user.name.first} {user.name.last}</a>
                                </td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.location.city}, {user.location.country}</td>
                                <td>{user.location.timezone.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
};

export default StaffPage;