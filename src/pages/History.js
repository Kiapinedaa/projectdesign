import React from 'react'

const History = () => {
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
      <h2 className='ms-5 mt-2'>History</h2>
      <div className="table">
      <table class="table ms-5 me-5">
        <thead class="thead">
          <tr>
            <th scope="col-3">Date/Time</th>
            <th scope="col-3">Image</th>
            <th scope="col-3">Result</th>
            <th scope="col-3">Location</th>
            <th scope="col-3">Delete</th>
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

export default History
