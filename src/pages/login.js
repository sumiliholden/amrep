import ApplicationLogo from '@/components/ApplicationLogo'
import AuthCard from '@/components/AuthCard'
import AuthSessionStatus from '@/components/AuthSessionStatus'
import AuthValidationErrors from '@/components/AuthValidationErrors'
import Button from '@/components/Button'
import GuestLayout from '@/components/Layouts/Guest/Layout'
import Input from '@/components/Input'
import Label from '@/components/Label'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const Login = () => {
    const router = useRouter()

    const { login } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    useEffect(() => {
        if (router.query.reset?.length > 0 && errors.length == 0) {
            setStatus(atob(router.query.reset))
        } else {
            setStatus(null)
        }
    })

    const submitForm = async event => {
        event.preventDefault()

        login({ email, password, setErrors, setStatus })
    }

    return (
        <>
            {/* Session Status */}
            <AuthSessionStatus className="mb-4" status={status} />

            {/* Validation Errors */}
            <AuthValidationErrors className="mb-4" errors={errors} />

            <div className="hero min-h-screen bg-base-200">
                <div className="flex-col justify-center hero-content lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat
                            fugiat ut assumenda excepturi exercitationem quasi.
                            In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={submitForm}>
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
                                    <label className="label">
                                        <a href="#" className="label-text-alt">
                                            Forgot password?
                                        </a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input
                                        type="button"
                                        value="Login"
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

export default Login
