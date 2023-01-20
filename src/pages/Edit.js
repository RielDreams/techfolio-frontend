function Edit(props){
  //props has props.getUser, props.updateUser, props.getPortfolio, and props.updatePortfolio
  const handleSubmitUser = () => {

  }
  const handleSubmitPortfolio = () => {

  }
  return(
    <div>
      <form onSubmit={handleSubmitUser}>
        <label>
          Name
          <input type="text"/>
        </label>
        <label>
          Occupation
          <input type="text"/>
        </label>
        <label>
          Bio
          <input type="text"/>
        </label>
        <label>
          Skills(match format: css,html,js)
          <input type="text"/>
        </label>
        <label>
          Email
          <input type="text"/>
        </label>
        <label>
          linkedin
          <input type="text"/>
        </label>
        <label>
          github
          <input type="text"/>
        </label>
        
        <button type="submit" value="Change User Data"></button>
      </form>

      <form onSubmit={handleSubmitPortfolio}>
      <label>
          Name
          <input type="text"/>
        </label>
        <label>
          Email
          <input type="text"/>
        </label>
        <label>
          Password
          <input type="text"/>
        </label>
        <button type="submit" value="Change User Data"></button>
      </form>

    </div>

  )
  } 
  
  export default Edit;