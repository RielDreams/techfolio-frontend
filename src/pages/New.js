function New(props){
  const handleSubmitUser = (e) => {
    e.preventDefault()
  }
  const handleSubmitPortfolio = (e) => {
    e.preventDefault()

  }
  return(
      <div>
      <form onSubmit={handleSubmitUser}>
        
        <label>
          name
          <input type="text"/>
        </label><br />
        <label>
          Occupation
          <input type="text"/>
        </label><br />
        <label>
          Bio
          <input type="text"/>
        </label><br />
        <label>
          Skills(match format: css,html,js)
          <input type="text"/>
        </label><br />
        <label>
          Email
          <input type="text"/>
        </label><br />
        <label>
          linkedin
          <input type="text"/>
        </label><br />
        <label>
          github
          <input type="text"/>
        </label><br />
        
        <button type="submit">Change User Data</button>
      </form>

      <form onSubmit={handleSubmitPortfolio}>
      <label>
          Project Name
          <input type="text"/>
        </label><br />
        <label>
          Summary
          <input type="text"/>
        </label><br />
        <label>
          Technology
          <input type="text"/>
        </label><br />
        <label>
          Screenshot
          <input type="text"/>
        </label><br />
        <label>
          Github URL
          <input type="text"/>
        </label><br />
        <button type="submit">Change Portfolio Data</button>
      </form>

    </div>
    )
  } 
  
  export default New; 