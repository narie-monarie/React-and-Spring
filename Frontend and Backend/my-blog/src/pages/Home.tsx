import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Home: React.FC = () => {

  const [users, setUsers] = useState<any[]>([])

  useEffect(() => {
    loadUsers()
  }, [])
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users")
    setUsers(result.data)
  }
  return (
    <div className='constainer'>
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Country</th>
              <th scope="col">NickName</th>
              <th scope="col">Age</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, key) => {
              return (<tr key={user.id}>
                <th scope="row" key={key}>{key + 1}</th>
                <td key={user.id}>{user.name}</td>
                <td>{user.nickname}</td>
                <td>{user.password}</td>
                <td>{user.age}</td>
                <td>
                  <button
                    className='btn btn-outline-primary mx-2'>View</button>
                  <button
                    className='btn btn-outline-success mx-2'>Edit</button>
                  <button
                    className='btn btn-outline-danger mx-2'>Delete</button>
                </td>
              </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
