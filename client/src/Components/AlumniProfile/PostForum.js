import { Form, redirect } from "react-router-dom";
import Axios from 'axios'

export default function PostForum(){

    return (
        <div className="container">
        <h2>Create a Post</h2>
        <Form method="post" action='/alumnus/forum/create'>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Enter title"
              required
              name = "title"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="description"
              rows="3"
              placeholder="Enter description"
              required
              name = "description"
            ></textarea>
          </div>
          <button className="btn btn-primary">
            Submit
          </button>
        </Form>
      </div>
    );
}

export const PostForumAction = async({request})=>{
    try {
        const data = await request.formData();
        const title = data.get('title')
        const description = data.get('description')
        await Axios.post('https://alumni-track-system-kr9h.onrender.com/api/v1/alumni/forum',{
            title,
            description
        })
        return redirect(`/alumnus/forum`)
    } catch (error) {
        console.log(error)
    }
}