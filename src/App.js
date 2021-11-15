import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import General from './components/General';
import DisplayGeneral from './components/DisplayGeneral';
import Education from './components/Education';
import Experience from './components/Experience';
import DisplayEdu from './components/DisplayEdu';
import DisplayExp from './components/DisplayExp';
function App() {
  const [generalProp,setgeneralProp]=useState({
    fname:'nitin',
    lname:'sharma',
    email:'abc@gmail.com',
    phone:'935XXXXX18',
    desc:'Student'
  });
  const [education,seteducation]=useState([]);
  const [experience,setexperience]=useState([]);
  const changegeneralProp=({fname,lname,email,phone,desc})=>{
      setgeneralProp(
        {
          fname:fname,
          lname:lname,
          email:email,
          phone:phone,
          desc:desc
        }
      )
      
  }

  const addEducation=(obj)=>{
    seteducation((education)=>{
      let eduid;
      if(education.length==0)
      {
        eduid=1;
      }
      else{
        eduid=education[education.length-1].eduid+1;
      }
      obj['eduid']=eduid;
      return [...education,obj];
    }
    )
  }

  const addExperience=(obj)=>{
    setexperience((experience)=>{
      let expid;
      if(experience.length==0)
      {
        expid=1;
      }
      else{
        expid=experience[experience.length-1].expid+1;
      }
      obj['expid']=expid;
      return [...experience,obj];
    })
  }

  const changeExperience=(id)=>{
    
      setexperience(()=>{
        return experience.filter((e)=>e.expid!=id);
      })
  }
  const changeEducation=(id)=>{
    
      seteducation(()=>{
        return education.filter((e)=>e.eduid!=id);
      })

  }

  useEffect(() => {
    
    
  }, []);
  console.log(generalProp);
  return (
    <div className="App">
      <div className="cv_template">
        <General changegeneralProp={changegeneralProp}/>
        
        <Education  addEducation={addEducation}/>
        <Experience addExperience={addExperience}/>
      </div>
      <div className="display">
        <DisplayGeneral generalProp={generalProp}/>
        <h1>Education</h1>
        <DisplayEdu edu={education} changeEducation={changeEducation}/>
        <h1>Experience</h1>
        <DisplayExp exp={experience} changeExperience={changeExperience}/>
      </div>
    </div>
  );
}

export default App;
