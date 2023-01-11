import { Link, useLoaderData, Form } from "react-router-dom"

function Index(props) {
  const cheese = useLoaderData()

  return (
    <div className="form">
        <h1>Add a Cheese:</h1>
        <Form action="/create" method="post">
        <input type="input" name="name" placeholder="name of cheeese" />
        <input type="input" name="countryOfOrigin" placeholder="originated from" />
        <input type="input" name="image" placeholder="picture of cheese" />
        <input type="submit" value="Add Cheese" />
      </Form>
      <br/>
      <h2>Cheese</h2>
      {cheese.map(cheese => (
        <div key={cheese._id} className="cheeses">
            <Link to={`/${cheese._id}`}>
                <h1>{cheese.name}</h1>
            </Link>
            <img src={cheese.image} alt={cheese.name} />
            <h3>Origin: {cheese.countryOfOrigin}</h3>
        </div>
        ))}
    </div>
  )
}

export default Index