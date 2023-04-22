import { useParams, Form, redirect} from "react-router-dom"
import Axios from "axios"
import { useState } from "react"

export default function PostReply(){
    const [isSubmmited,setIsSubmmited] = useState(false);
    const {id} = useParams()
    const action = `/alumnus/replies/${id}`
    return(
        
       <Form method="post" action={action}>
        <div className="form-group">
        <label htmlFor="replyText"><p className="fs-2">Reply:</p></label>
        <textarea
          id="replyText"
          className="form-control"
          rows="3"
          name = "description"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
       </Form>
    )
}


export const PostReplyAction = async ({params,request})=>{

    try {

        const data = await request.formData();
        const {id} = params
        const description = data.get('description')

        await Axios.post(`https://alumni-track-system-kr9h.onrender.com/api/v1/alumni/forum/reply/${id}`,{
            description
        })
        console.log("Success")
        return redirect(`/alumnus/forum/${id}`)
        
    } catch (error) {
        console.log(error.response)
    }
}