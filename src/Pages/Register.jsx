import  { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthCotext } from '../Provider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import toast, { Toaster } from 'react-hot-toast';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

const Register = () => {
    const { createUser } = useContext(AuthCotext);
    const [showPass, setShowPass] = useState(null);
    const handleRegister = e => {
        e.preventDefault()


        const name = e.target.name.value;
        const email = e.target.email.value;
        const PhotoURL = e.target.PhotoURL.value;
        const password = e.target.password.value;
        console.log(typeof password)

        if (password.length < 6) {
            toast.error("Length must be at least 6 character");
            return
        }
        if (!/[A-Z]/.test(password)) {
            toast.error("Must have a Uppercase letter in the password");
            return;
        }
        if (!/[a-z]/.test(password)) {
            toast.error("Must have a Lowercase letter in the password");
            return;
        }

        console.log("success", name, email, PhotoURL, password);


        createUser(email, password)
            .then(() => {
                toast.success("Successful register");
            })
            .catch(error => {
                toast.error(error.message);
            })
    }

    return (
        <div>
            <Helmet><title>Register</title></Helmet>
            <div className="hero  bg-base-100">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card  shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body w-96">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User name</span>
                                </label>
                                <input type="text" name='name' placeholder="User name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />

                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input
                                    type='text'
                                    name='PhotoURL' placeholder="PhotoURL" className="input input-bordered" required />
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
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
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <p>
                                Already have an account? Please <Link to='/login'>
                                    <button className='btn btn-link'>Login</button>
                                </Link>
                            </p>
                        </form>
                        <Toaster
                            toastOptions={{
                                duration: 2000
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
       <h1>NPM Packages Used</h1>
      
    );
};

export default Register;