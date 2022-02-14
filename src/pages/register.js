import ApplicationLogo from '@/components/ApplicationLogo'
import AuthCard from '@/components/AuthCard'
import AuthValidationErrors from '@/components/AuthValidationErrors'
import Button from '@/components/Button'
import GuestLayout from '@/components/Layouts/Guest/Layout'
import Input from '@/components/Input'
import Label from '@/components/Label'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'

const Register = () => {
    const { register } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState([])

    const submitForm = event => {
        event.preventDefault()

        register({ name, email, password, password_confirmation, setErrors })
    }

    return (
        <>
            {/* Validation Errors */}
            <AuthValidationErrors className="mb-4" errors={errors} />

            <div className="hero min-h-screen bg-base-200">
                <div className="flex-col justify-center hero-content lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat
                            fugiat ut assumenda excepturi exercitationem quasi.
                            In deleniti eaque aut repudiandae et a id nissssi.
                        </p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={submitForm}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>

                                    <Input
                                        id="name"
                                        type="text"
                                        value={name}
                                        className="input input-bordered"
                                        onChange={event =>
                                            setName(event.target.value)
                                        }
                                        required
                                        autoFocus
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>

                                    <Input
                                        id="email"
                                        type="email"
                                        value={email}
                                        className="input input-bordered"
                                        onChange={event =>
                                            setEmail(event.target.value)
                                        }
                                        required
                                        autoFocus
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>

                                    <Input
                                        id="password"
                                        type="password"
                                        value={password}
                                        className="input input-bordered"
                                        onChange={event =>
                                            setPassword(event.target.value)
                                        }
                                        required
                                        autoComplete="current-password"
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">
                                            Confirm Password
                                        </span>
                                    </label>

                                    <Input
                                        id="password_confirmation"
                                        type="password"
                                        value={password_confirmation}
                                        className="input input-bordered"
                                        onChange={event =>
                                            setPasswordConfirmation(
                                                event.target.value,
                                            )
                                        }
                                        required
                                    />
                                </div>
                                <div className="form-control mt-6">
                                    <Link href="/login">
                                        <a className="underline label-text">
                                            Already registered?
                                        </a>
                                    </Link>
                                    <input
                                        type="button"
                                        value="Register"
                                        className="btn btn-primary"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
