import React from 'react'

// these packages are not installed in this project, but are required
import { useDispatch } from 'react-redux'
import { login } from '../store/auth/actions'


export default function App() {
    // use of redux setup in a component
    const dispatch = useDispatch()
    const [inputValues, setInputValues] = React.useState({
        email: 'test@gmail.com',
        password: 'password'
    })

    const handleLogin = async () => {
        const { error } = await dispatch(login({ ...inputValues }))
        if (error) {
            Toast.success(error.message) // show error message
        } 
    }

    return (
        <div>
            <h1>Hello there</h1>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}
