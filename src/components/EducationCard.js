import React from 'react';
const EducationCard = ({ item }) => {
    return (
        <div className="card educationCard" >
            <div className='educationCardHeader'>
                <div>
                    <h3>{item.name}</h3>
                    <div>{`${item.degree} in ${item.major}`}</div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "flex-end" }}>
                    <div>{item.date}</div>
                    <div>{`GPA: ${item.gpa}/4.0`}</div>
                </div>
            </div>
            <p>{item.content} </p>
        </div>
    )
}
export default EducationCard