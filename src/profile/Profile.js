import React from 'react'
import PropTypes from 'prop-types';
import '../App.css'
function Profile (props) {
  
 Profile.propTypes={stringProp: PropTypes.string,};
  return (
    <div>
        <div>Full Name: {props.fullName}</div>
        <div>BIO: {props.bio}</div>
        <div>Profession: {props.profession}</div>
        <div> {props.children}</div>
        <div>
            <button className='button' onClick={()=> props.alertName('My name is '+ props.fullName)}>User </button>
        </div>
    </div>
  )
}
Profile.defaultProps ={
  fullName:"Unrecognized",
  bio:"New user",
  profession:"Unknown"
}

export default Profile