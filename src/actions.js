import { redirect } from "react-router-dom"

const URL = "https://backend-cheese.onrender.com"

export const createAction = async ({ request }) => {
  // get data from form
  const formData = await request.formData()
  // set up our new person to match schema
  const newCheese = {
    name: formData.get("name"),
    countryOfOrigin: formData.get("countryOfOrigin"),
    image: formData.get("image"),
  }
  // Send new cheese to our API
  await fetch(URL + "/cheese", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newCheese),
  })
  // redirect to index
  return redirect("/")
}
export const updateAction = async ({request, params}) => {
    // get data from form
    const formData = await request.formData()
    // set up our new person to match schema
    const updatedCheese = {
        name: formData.get("name"),
        countryOfOrigin: formData.get("countryOfOrigin"),
        image: formData.get("image")
    }
    // Send new cheese to our API
    await fetch(URL + "/cheese/" + params.id, {
        method: "put",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(updatedCheese)
    })
    // redirect to index
    return redirect("/")
}
export const deleteAction = async ({params}) => {
    // delete cheese with our API
    await fetch(URL + "/cheese/" + params.id, {
        method: "delete"
    })
    // redirect to index
    return redirect("/")
}