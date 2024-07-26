import { Helmet } from 'react-helmet-async';
import { FaGlassMartini, FaWaze } from 'react-icons/fa';
import { FaLocationDot, FaPhone, FaRegMessage, FaVoicemail } from 'react-icons/fa6';

const Contact = () => {
    return (
        <div className='min-h-[calc(100vh-287.98px)]'>
            <Helmet><title>Contact</title></Helmet>
            <div className='my-4'>
                <div className='bg-green-200 py-6 rounded-md'>
                    <h1 className='text-center text-xl font-bold '>Today Contact Our TechForge Team</h1>
                </div>
                <hr />
                <div className='grid grid-cols-1  lg:grid-cols-3 md:grid-cols-2 lg:grid-rows-1 gap-4 mt-4 '>
                    <div className='lg:col-span-2 space-y-4'>
                        <label className="input input-bordered flex items-center gap-2">
                            Name
                            <input type="text" className="grow" placeholder="Your name" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            Email
                            <input type="text" className="grow" placeholder="Your email" />
                        </label>
                        <textarea
                            placeholder="Subject"
                            className="textarea textarea-bordered textarea-md w-full"></textarea>
                        <button className="btn btn-success w-full text-xl text-white font-bold">Send</button>
                    </div>

                    <div className='lg:col-start-3'>
                        <div className=' text-center text-lg px-7 my-2 py-7  rounded-md bg-gray-300 flex gap-2 items-center'>
                            <div>
                                <span><FaLocationDot /></span>
                            </div>
                            <h2>Dhaka, Bangladesh</h2>
                        </div>
                        <div className=' text-center text-lg px-7 my-2 py-7  rounded-md bg-gray-300 flex gap-2 items-center'>
                            <div>
                                <span><FaRegMessage /></span>
                            </div>
                            <h2>techforge@gamil.com</h2>
                        </div>
                        <div className=' text-center text-lg px-7 my-2 py-7  rounded-md bg-gray-300 flex gap-2 items-center'>
                            <div>
                                <span><FaPhone /></span>
                            </div>
                            <h2>+013 0468 6325</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;