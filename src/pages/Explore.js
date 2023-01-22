import { Link } from "react-router-dom";
import 'bulma/css/bulma.min.css'
import {Card, Media, Content, Heading} from "react-bulma-components"

function Explore({portfolio, user}) {
  console.log(user)

	const Loaded = () => {
		return portfolio.map((port)=> (
      <Card key={port._id} className="portfolioCard">
        <Card.Image size='5by3'
      src={port.screenShots} alt="my project should be here" />
      <Card.Content>
      <Media>
        <Media.Item >
        <Link to={`/portfolio/${user.uid}`}>
        <Heading className="Card.Header">{port.projectName}</Heading>
      </Link>
      </Media.Item>
      <Media.Item>
      <section className="social-media">
      <h5><a href={port.projectGithub}>github</a></h5>
      <h5><a href={port.linkedin}>Linkedin</a></h5>
      </section>
      </Media.Item>
      </Media>
      <Content>
      <p>{port.summary}</p>
      <h4>Technology Used</h4>
      <p>{port.technology}</p>
      </Content>
     
      
      </Card.Content>
      </Card>
    ))
  }

	return portfolio ? Loaded() : <h1>Loading...</h1>
}

export default Explore;
