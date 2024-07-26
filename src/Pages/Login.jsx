import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { AuthCotext } from '../Provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';

const Login = () => {
    const navigate = useNavigate()
    const [loginError, setLoginError] = useState(null);
    const { signInUser, singInWithGoogle, githubLogin } = useContext(AuthCotext);
    const [showPass, setShowPass] = useState(null);
    const handlelogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);


        signInUser(email, password)
            .then(result => {
                console.log(result);
                navigate('/')
            })
            .catch(() => {
                setLoginError(toast("Invalid email or password"));
            })
    }

    const handleSingInGoogle = () => {
        singInWithGoogle()
            .then(result => {
                console.log(result.user)

            })
            .catch(error => {
                console.error(error)
            })
        console.log("succss")
    }

    const handleGithubLogin = () => {
        githubLogin()
            .then((result) => {
                console.log(result.user);
                toast.success("Login successfully")
            })
            .then(error => {
                console.log(error);
                toast.error(error.message);
            })
    }

    return (
        <div>
            <Helmet><title>Login</title></Helmet>
            <div className="hero">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>

                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handlelogin} className="card-body w-96">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="input input-bordered flex items-center gap-2">
                                    <input
                                        type={showPass ? "text" : "password"}
                                        name='password'
                                        id='2'
                                        className="grow"
                                        placeholder="Password"
                                        required />
                                    <span className='hover:cursor-pointer' onClick={() => setShowPass(!showPass)}>
                                        {
                                            showPass ? <FaRegEyeSlash /> : <FaRegEye />
                                        }
                                    </span>
                                </label>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-secondary">Login</button>
                            </div>


                            <div>
                            </div>
                        </form>
                        <div>
                            <h3 className='text-center mt-4 text-xl font-bold'>or</h3>
                            <hr />
                            <div className="flex">  <button
                                onClick={handleSingInGoogle}
                                className='btn btn-ghost bg-green-300 hover:bg-white ml-3'>Login with Google</button>

                                <button
                                    onClick={handleGithubLogin}
                                    className='btn btn-ghost bg-green-300 hover:bg-white ml-3'>Login with Github</button>
                            </div>
                            <p className='text-center'>
                                New here? Please <Link to='/register'>
                                    <button className='btn btn-link'>Register</button>
                                </Link>
                            </p>
                        </div>
                        <Toaster
                            toastOptions={{
                                duration: 2000
                            }}
                        />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;