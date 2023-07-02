import React from 'react'

const FirstPage = () => {
    return <>
    <main className="d-flex flex-nowrap">
      <div className="d-flex flex-column  p-3 text-bg-dark div-1">
        <hr />
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <a href="#" className="nav-link text-white">
          Home
            </a>
          </li>
          <li>
            <a href="User" className="nav-link text-white">
          User
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
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
      <section className='main-content'>

        <div className="camera pt-2 d-flex align-content-center justify-content-center">
          <img src="images/mrt.jpg" alt="" />
        </div>
        <div className="buttons py-5 d-flex align-content-center justify-content-evenly">
          <div className="start">
            <button className='btn px-5 btn-lg btn-success'>Start</button>
          </div>
          <div className="capture">
            <button className='btn px-5 btn-lg btn-primary'>Capture</button>
          </div>
          <div className="stop">
            <button className='btn px-5 btn-lg btn-danger'>Stop</button>
          </div>
        </div>

      </section>
    </main>
  </>
}


export default FirstPage
