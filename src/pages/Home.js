import React from 'react'

const Home = () => {
  return <>
  <section className="home py-5 my-1">
  <div className="container-fluid">
    <div className="row d-flex align-items-center justify-content-center">
      <div className="col-6">
        <h2 className='display-2'>Hello</h2>
        <p className='desc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam dicta perspiciatis sit quaerat minima placeat error ab officia maiores quasi? Vel molestias expedita nihil dolorem quae corrupti modi nobis repellendus!</p>
        <a href="FirstPage">
        <button className='btn btn-lg btn-dark'> Login </button>
        </a>
      </div>
      <div className="col-6">
        <img src="images/mrt.jpg" className='img-fluid' alt="" />
      </div>
    </div>
  </div>
  </section>
  </>
}

export default Home
