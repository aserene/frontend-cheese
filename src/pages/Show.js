import { useLoaderData, Form } from "react-router-dom"

function Show(props) {
    const cheese = useLoaderData()
  
    return (
      <div className="cheese">
        <h1>{cheese.name}</h1>
        <h2>{cheese.countryOfOrigin}</h2>
        <img src={cheese.image} alt={cheese.name} />

        <h2>Update {cheese.name}</h2>
        <Form action={`/update/${cheese._id}`} method="post">
        <label for="name">Name of Cheese</label><br/>
        <input type="input" name="name" defaultValue={cheese.name}/><br/>
        <label for="origin">Country of Origin</label><br/>
        <input type="input" name="countryOfOrigin" defaultValue={cheese.countryOfOrigin} /><br/>
        <label for="image">Picture of Cheese</label><br/>
        <input type="input" name="image" defaultValue={cheese.image} /><br/>
        <input type="submit" value={`Update ${cheese.name}`} />
      </Form>
      <Form action={`/delete/${cheese._id}`} method="post">
      <input type="submit" value={`Delete ${cheese.name}`} />
      </Form>
      </div>
    )
  }
  
  export default Show