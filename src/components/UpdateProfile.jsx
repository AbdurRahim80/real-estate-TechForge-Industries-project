import  { useContext, useState } from 'react';
import { AuthCotext } from '../Provider/AuthProvider';
import auth from '../firebase/firebase.config';
import { updateProfile } from 'firebase/auth';

const UpdateProfile = () => {
    const { user } = useContext(AuthCotext);

    // const [name, setName] = useState(user?.displayName);
    // const [photo, setPhoto] = useState(user?.photoURL); 

    const handleUpdate = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;

    // update profile

    // updateProfile(auth.currentUser, {
    //      displayName: `${setName(name)}`, photoURL: `${setPhoto(photo)}`
    // })

    updateProfile(auth.currentUser, {
         displayName: `${name}`, photoURL: `${(photo)}`
    })
}

    return (
        <div>
            <div className=" p-8  border  my-6 lg:mt-40 sm:flex sm:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                    <img src={user?.photoURL} alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
                </div>
                <div className="flex flex-col space-y-4">
                    <div>
                        <h2 className="text-2xl font-semibold">{user?.displayName}</h2>
                    </div>
                    <div className="space-y-1">
                        <span className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" className="w-4 h-4">
                                <path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
                            </svg>
                            <span className="dark:text-gray-600">{user.email}</span>
                        </span>
                        <span className="flex items-center space-x-2">

                            {/* <span className="w-60 dark:text-gray-600">{user.photoURL}</span> */}
                        </span>
                    </div>
                </div>
            </div>
            <form action="" onSubmit={handleUpdate}>
                <div className="p-8 grid grid-cols-1 gap-3  border  my-6 dark:bg-gray-50 dark:text-gray-800">
                    <label className="input w-full input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                        </svg>
                        <input type="text" name='name' className="grow" placeholder="name" />
                    </label>
                    <label className="input w-full input-bordered flex items-center gap-2">
                        <input type="text" name='photo' className="grow" placeholder="photoURL" />
                    </label>
                    <button className="btn btn-success text-xl text-white font-bold">Success</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateProfile;