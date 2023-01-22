import { useState } from "react";
function Edit(props){
  //props has user, portfolio,  getUser, getPortfolio, updateUser,
  // updatePortfolio, and deletePortfolio
  
  console.log('user is:',props.user, 'portfolio is',props.portfolio)
  const formFieldsUser = {
    name:'',
    occupation:'',
    bio:'',
    skills: '',
    linkedin:'',
    github:''
  }
  const formFieldsPortfolio = {
    projectName:'',
    summary:'',
    technology: '',
    screenShots:'',
    projectGithub:''
  }
  const [newFormUser, setNewFormUser] = useState(formFieldsUser)
  const [newFormPortfolio, setNewFormPortfolio] = useState(formFieldsPortfolio)

  const handleChangeUser = (e) => {
    setNewFormUser({
      ...newFormUser,
      [e.target.name]:e.target.value
    })
  }
  const handleChangePortfolio = (e) => {
    setNewFormPortfolio({
      ...newFormPortfolio,
      [e.target.name]:e.target.value
    })
  }
  const handleSubmitUser = (e) => {
    e.preventDefault()
    props.updateUser(newFormUser)
    formFieldsUser = {
      name:'',
      occupation:'',
      bio:'',
      skills: '',
      linkedin:'',
      github:''
    }
  }
  const handleSubmitPortfolio = (e) => {
    e.preventDefault()
    props.updatePortfolio(newFormPortfolio)
    formFieldsPortfolio = {
      projectName:'',
      summary:'',
      technology: '',
      screenShots:'',
      projectGithub:'',
    }
  }

  return(
    <div>
      <form onSubmit={handleSubmitUser} className='form-container'>
        <label>
          Name
          <input type="text" name='name' onChange={handleChangeUser} value={newFormUser.name}/>
        </label><br />
        <label>
          Occupation
          <input type="text" name='occupation' onChange={handleChangeUser} value={newFormUser.occupation}/>
        </label><br />
        <label>
          Bio
          <input type="text" name='bio' onChange={handleChangeUser} value={newFormUser.bio}/>
        </label><br />
        <label>
          Skills
          <input type="text" name='skills' onChange={handleChangeUser} value={newFormUser.skills}/>
        </label><br />
        <label>
          Linkedin
          <input type="text" name='linkedin' onChange={handleChangeUser} value={newFormUser.linkedin}/>
        </label><br />
        <label>
          Github
          <input type="text" name='github' onChange={handleChangeUser} value={newFormUser.github}/>
        </label><br />
        <br />
        <button type="submit">Update User</button>
      </form>
    
      <form onSubmit={handleSubmitPortfolio} className='form-container'>
        <label>
          Project Name
          <input type="text" name='projectName' onChange={handleChangePortfolio} value={newFormPortfolio.projectName}/>
        </label><br />
        <label>
          Summary
          <input type="text" name='summary' onChange={handleChangePortfolio} value={newFormPortfolio.summary}/>
        </label><br />
        <label>
          Technology
          <input type="text" name='technology' onChange={handleChangePortfolio} value={newFormPortfolio.technology}/>
        </label><br />
        <label>
          Screenshots URL
          <input type="text" name='screenShots' onChange={handleChangePortfolio} value={newFormPortfolio.screenShots}/>
        </label><br />
        <label>
          Project's Github URL
          <input type="text" name='projectGithub' onChange={handleChangePortfolio} value={newFormPortfolio.projectGithub}/>
        </label><br />
        <br />
        <button type="submit">Update Portfolio</button>
      </form>

      {/* <button onClick={props.deletePortfolio()}>DELETE PORTFOLIO</button> */}

    </div>

  )
  } 
  
  export default Edit;