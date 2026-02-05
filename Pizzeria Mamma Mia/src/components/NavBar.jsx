import { miles } from "../helpers/miles";

function NavBar() {
  const total = 25000;
  const token = false;

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Pizzeria Mamma Mia!
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <form className="container-fluid justify-content-start">
              <button className="btn btn-outline-light  me-2" type="button">
                Home
              </button>

              {token?(
                <>
                    <button className="btn btn-outline-light  me-2" type="button">
                        Profile
                    </button>

                    <button className="btn btn-outline-light  me-2" type="button">
                        Logout
                    </button>
                </>

              ):(

                <>
                    <button className="btn btn-outline-light  me-2" type="button">
                        Login
                    </button>

                    <button className="btn btn-outline-light  me-2" type="button">
                        Register
                    </button>
                </>
              )}
     
            </form>

            <form className="d-flex">
                <button className="btn btn-sm btn-outline-secondary" type="button">
                    Total : ${miles(total)}
                </button>
            </form>

          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
