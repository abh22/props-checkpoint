
import './App.css';
import Profile from './profile/Profile'
import pic from './profile/me.jpg'


function App() {
  const alertName= name =>alert(name);
  const styleProfile ={color:'yellowgreen', margin:200 , fontSize:25, fontWeight:600}
  return (
    <div className="App">
      <div className='App-header'>
     
       
      <div style={styleProfile}>
        <img style={{width:200, borderRadius:'15px'} } src={pic} alt='profile' />
<Profile  fullName="Farah Abdelhedi" bio="Front-end developping enthusiast" profession="College student" alertName={alertName}/>
</div> 
  
</div> 
    </div>
  );
}

export default App;
