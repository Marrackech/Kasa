import React from 'react'

function AppartmentTitle(props) {
    console.log("props", props)

    const flat = props.flat;
    const name = flat.host.name;
    const [firstName, lastName] = name.split(" ");
  return (
    <div>
          <div className="flex-container">
      <div className='AppartmentPage__title'>
<div className='desktop'>
        <h1>{flat.title}</h1>
</div>

        <h2>{flat.location}</h2>
        <div className="flexCards">
           {flat.tags.map((tag, index) => (
            <span key={index}>{tag}</span>
           ))}
        </div>
      </div>
    <div className="AppartmentPage__owner">
        <div className="flex-Responsive">
        <div className="owner">
        <h3>
            <span>{firstName}</span><br></br>
            <span>{lastName}</span>
            </h3>
        <div className='Badge'>
            <img src={flat.host.picture} alt="" />
        </div>
</div>
        <span className="starts">
            { [1, 2, 3, 4, 5].map((num) => <span key={num} className={props.flat.rating >= num ? "fa-full" : null}>★</span>)}
     
      
      
        </span>
        </div>
    </div>
    </div>
    </div>
  )
}

export default AppartmentTitle
