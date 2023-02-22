import React from "react";
import "./index.css"
import profile from "./img/a.png"
import email from "./img/email.jpg"
import pass from "./img/pass.png"

export default class TugasForm extends React.Component {
    state = {
        field: {
            email: '',
            password: ''
        },
        errors: {
            email: '',
            password: ''
        }
    }

    handleFormOnValidate = (name, value) => {
        if(!value){
            return 'Mohon isi form terlebih dahulu'
        }
        if(name === 'name' && value.length <= 3){
            return 'Nama minimal 3 karakter'
        }    
        if(name === 'email' && !value.includes('@')){
            return 'Format email tidak sesuai'
        }
        if(name === 'password' && value.length < 8){
            return 'Password berisi 8 karakter'
        }       
        return false
    }

    handleFormOnChange = (event) => {
        const { field, errors } = this.state
        const { value, name } = event.target
        const error = this.handleFormOnValidate(name, value)
        this.setState({
            field: {
                ...field,
                [name]: value
            },
            errors: {
                ...errors,
                [name]: error
            }
        })
        // console.log(error)
        this.setState({[name]: value})
    }

    handleFormOnSubmitValidation = () => {
        const{ field } = this.state
        const names = Object.keys(field)
        const errors = {}
        names.forEach((name) => {
            const value = field[name]
            const error = this.handleFormOnValidate(name, value)
            errors[name] = error
        })
        return errors
    }

    handleFormOnSubmit = (event) => {
        event.preventDefault()
        const validation = this.handleFormOnSubmitValidation()
        const { password, email } = this.state
        const hasError = Object.values(validation).some((item) => item !== false)
        if(hasError){
            this.setState({errors: validation})
            return
        }
        alert(`
            Email : ${email}
            Password : ${password}
        `)
    }

    render(){
        const { field, errors } = this.state
        return(
        <div className="main">
            <div className="sub-main">
                <div>
                    <div className="img">
                        <div className="container-image">
                            <img src={profile} alt="profile" className="profile"/>
                        </div>
                    </div>
                    <div>
                        <h1>Login Page</h1>
                        <form onSubmit={this.handleFormOnSubmit}>
                            <div className="input-satu">
                                <img src={email} alt="email" className="email"/>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="name"
                                    id="email"
                                    value={field.email}
                                    onChange={this.handleFormOnChange}
                                />
                                <p>{errors.email}</p>
                            </div>
                            <div>
                                <img src={pass} alt="password" className="pass"/>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    className="name"
                                    id="password"
                                    value={field.password}
                                    onChange={this.handleFormOnChange}
                                />
                                <p>{errors.password}</p>
                            </div>
                            <div className="login-button">
                                <button type="submit" className="submit">
                                Login.
                                </button>
                            </div>
                            <div>
                                <p className="link">
                                    <a href = "#">Forgot Password ?</a> 
                                        Or 
                                    <a href = "#">Sign Up</a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}