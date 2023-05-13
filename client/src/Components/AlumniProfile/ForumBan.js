import { Link, useRouteError } from "react-router-dom"

function ForumBan() {
    const error = useRouteError();
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="alert alert-danger text-center" role="alert">
              <h1 className="mb-3">You have been banned!</h1>
              <p>
                We're sorry, but your account has been banned from the discussion
                forum due to a violation
                of our community guidelines. Please contact our support team for
                more information.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default ForumBan;