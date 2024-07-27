import { useLoaderData } from "react-router-dom";
import Estate from "./Estate";

const Estates = () => {
    const dataItems = useLoaderData();
    console.log(dataItems);
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-2">
                {
                    dataItems?.map(dataItem => <Estate key={dataItem.id} dataItem={dataItem} />)
                }
            </div>
        </div>
    );
};

export default Estates;