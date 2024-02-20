import Button from './Button.js'
import { useState, useEffect } from 'react'


export default function Content() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
            .then((response) => response.json())
            .then(data => {
                console.log(data)
                setUsers(data)
            })
            .catch((err)=> console.log(err.message))
    })
    const userComp= users.map(user=>(
        <li keu={user.id}>
            {user.title}
        </li>
    ))
    return (
        <div className="content">
            <h1>this is content</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo quae temporibus rerum reiciendis labore
                voluptatem, incidunt adipisci expedita unde blanditiis voluptate quisquam dolorum numquam in deserunt
                laborum, doloremque similique nisi.
            </p>
            <div className="user-list">
                <ul>
                    {userComp}
                </ul>
            </div>
            <Button />
        </div>
    )
}