

import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Estate = ({ dataItem }) => {
 
    const { id, segment_name, status, image, estate_title, location, description, area, price, } = dataItem;
    
    return (
        <div >
            <div data-aos="fade-up" data-aos-duration="8000" className="max-w-lg p-4 shadow-md dark:bg-gray-50 border dark:text-gray-800 my-8">
                <div className="flex justify-between pb-4 border-bottom">
                    <div className="flex items-center">
                        <a rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-gray-800">{segment_name}</a>
                    </div>
                    <p>{status}</p>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <img src={image} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <a rel="noopener noreferrer" href="#" className="block">
                                <h3 className="text-xl font-semibold dark:text-violet-600">{estate_title}</h3>
                            </a>
                            <div className="flex items-center">
                                <span className="mr-2"><FaLocationDot /></span>
                                <p>{location}</p>
                            </div>
                        </div>
                        <p className="leading-snug dark:text-gray-600">{description}</p>
                        <div className="flex justify-between">
                            <p>{price}</p>
                            <p>{area}</p>
                        </div>
                        <Link to={`estate/${id}`}>
                            <button className="btn bg-green-600">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Estate;