function Show({user}) {
  console.log(user)
  const Loaded = () => {
    return user.map((data)=> (
  <div key={data._id} className="data">
                <h2>{data.name}</h2>
                <h3>{data.occupation}</h3>
                <h3>{data.bio}</h3>
                { data.headshot &&
                    <img src={data.headshot} alt={data.name} />
                }
    <h3>Skills: {data.skills}</h3>
       </div>
    ))
  }
  return user ? Loaded() : <h1>Loading...</h1>
}
export default Show;