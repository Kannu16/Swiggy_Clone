import { Link } from "react-router-dom"

// import { useRouteError } from "react-router-dom"
const Error = () => {
  //  const err = useRouteError();
  return (
    <div>
        {/* <h1>This is {err.data} {err.status}</h1>
        <p>SomeThing went wrong {err.statusText}</p> */}
        <div class="d-flex align-items-center justify-content-center vh-100">
            <div class="text-center row">
                <div class=" col-md-6">
                    <img src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg" alt=""
                        class="img-fluid" />
                </div>
                <div class=" col-md-6 mt-5">
                    <p class="fs-3"> <span class="text-danger">Opps!</span> Something went wrong </p>
                    <p class="lead">
                        The page you’re looking for doesn’t exist.
                    </p>
                    <Link to="/" class="btn btn-primary">Go Home</Link>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Error