import React from 'react'

const User = () => {
  return <>
  <main className="d-flex flex-nowrap">
    <div className="d-flex flex-column  p-3 text-bg-dark div-1">
      <hr />
      <ul className="nav nav-pills flex-column">
        <li className="nav-item">
          <a href="FirstPage" className="nav-link text-white">
        Home
          </a>
        </li>
        <li>
          <a href="User" className="nav-link text-white">
        User
          </a>
        </li>
        <li>
          <a href="History" className="nav-link text-white">
        History
          </a>
        </li>
      </ul>
      <ul className="nav nav-pills flex-column mt-auto">
        <li>
        <a href="#" className="nav-link text-white">
        Send a message
        </a>
        </li>
      </ul>
    <hr/>
    </div>
    <section className='main-content-2'>
      <div className="forms">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <form className='py-5'>
                <div class="form-group row py-2 align-items-center">
                  <label for="email" className="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                      <input type="email" class="form-control" id="inputEmail" placeholder="Email"/>
                    </div>
                </div> 
                <div class="form-group row align-items-center">
                  <label for="esername" class="col-sm-2 col-form-label">Username</label>
                    <div class="col-sm-10">
                      <input type="username" class="form-control" id="inputUsername" placeholder="Username"/>
                    </div>
                </div>    
              </form>
            </div>
            <div className="col-6">
            <form className='py-5'>
                <div class="form-group row py-2 align-items-center">
                  <label for="password" className="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                      <input type="password" class="form-control" id="inputPassword" placeholder="Password"/>
                    </div>
                </div> 
                <div class="form-group row align-items-center">
                  <label for="cPassword" class="col-sm-2  col-form-label">Confirm Password</label>
                    <div class="col-sm-10">
                      <input type="cPassword" class="form-control" id="inputcCpassword" placeholder="Confirm Password"/>
                    </div>
                </div>    
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="addbtn d-flex align-content-center justify-content-center">
        <button className='btn btn-lg btn-primary'>Add User</button>
      </div>
      <h3 className='ms-5'>User List</h3>
      <div className="table">
      <table class="table ms-5 me-5">
        <thead class="thead">
          <tr>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Edit User</th>
            <th scope="col">Delete User</th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
        </table>
      </div>
    </section>
  </main>
</>
}

export default User

