
function Navbar(props){
    return(
        <>
        <div className="grid sticky z-5 top-0 text-shadow-lg items-center text-white w-full text-center p-3 bg-[#1F363D]">
            <p className="mt-1 block">EcoHarmony Park</p>
            <p> {props.site}</p>
        </div>
        </>
    );
}

export default Navbar;