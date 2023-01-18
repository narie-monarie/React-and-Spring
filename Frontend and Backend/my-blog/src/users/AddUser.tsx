import axios from 'axios'
import React, { ChangeEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const AddUser: React.FC = () => {
  let naviagate = useNavigate()

  const [user, setUser] = useState<any>({
    name: "",
    countryname: "",
    nickname: "",
    age: 0,
  })

  const { name, nickname, password, age } = user

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e: any) => {
    e.preventDefault()
    await axios.post("http://localhost:8080/user", user)
    naviagate("/")
  }
  return (
    <div className='container'>
      <div className="row">
        <div
          className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">REGISTER</h2>
          <form onSubmit={e => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input type="text" className="form-control"
                placeholder="Enter Name"
                name="name"
                value={name}
                onChange={e => onInputChange(e)} />
            </div>

            <div className="mb-3">
              <label htmlFor="NickName" className="form-label">
                Country Name
              </label>
              <input type="text" className="form-control"
                placeholder="Enter Country Name"
                name="nickname" value={nickname}
                onChange={(e) => onInputChange(e)} />
            </div>

            <div className="mb-3">
              <label htmlFor="Password" className="form-label">
                NickName
              </label>
              <input type="text" className="form-control"
                placeholder="Enter NickName"
                name="password" value={password}
                onChange={e => onInputChange(e)} />
            </div>

            <div className="mb-3">
              <label htmlFor="Age" className="form-label">
                Enter Age
              </label>
              <input type="text" className="form-control"
                placeholder="e.g 26"
                name="age" value={age}
                onChange={e => onInputChange(e)} />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              SUBMIT
            </button>
            <Link to="/" type="submit" className="btn btn-outline-danger mx-3">
              CANCEL
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}
