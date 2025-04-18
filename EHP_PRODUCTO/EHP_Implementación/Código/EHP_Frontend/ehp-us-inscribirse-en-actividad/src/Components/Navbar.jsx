import { Button } from "antd";
import { useNavigate } from "react-router";

function Navbar(props){
    const navigate = useNavigate();
    return(
        <>
        <div className="grid sticky z-5 top-0 text-shadow-lg items-center text-white w-full text-center p-3 bg-[#1F363D]">
            <p className="mt-1 block">EcoHarmony Park</p>
            <p> {props.site}</p>
            <div className="absolute right-10">
                {props.back &&
                    <Button type="primary" onClick={() => navigate(-1)}>Volver</Button>
                }
            </div>
        </div>
        </>
    );
}

export default Navbar;