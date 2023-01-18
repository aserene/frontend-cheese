import { Link, useLoaderData, Form } from "react-router-dom"

function Index(props) {
  const cheese = useLoaderData()

  return (
    <div className="index">
        <div className="form">
            <h2>Add a Cheese:</h2>
            <Form action="/create" method="post">
                <label for="name">Name of Cheese</label>
            <input type="input" name="name"/><br/>
            <label for="origin">Country of Origin</label>
            <input type="input" name="countryOfOrigin"/><br/>
            <label for="picture">Picture of Cheese</label>
            <input type="input" name="image"/>
            <br/>
            <input type="submit" value="Add Cheese" />
            </Form>
        </div>
      <br/>
      <h1>Cheese</h1>
        <div key={cheese._id} className="container">
        {cheese.map(cheese => (
            <div className="card">
                <Link to={`/${cheese._id}`}>
                    <h2>{cheese.name}</h2>
                </Link>
                <img src={cheese.image} alt={cheese.name} />
                <h3>Origin: {cheese.countryOfOrigin}</h3>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Index