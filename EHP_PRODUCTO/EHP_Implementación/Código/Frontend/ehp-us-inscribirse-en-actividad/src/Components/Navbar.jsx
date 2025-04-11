
function Navbar(props){
    return(
        <>
        <div className="grid mb-5 text-shadow-lg items-center text-white w-full justify-center text-center p-3 rounded-sm bg-[#1F363D]">
            <p className="mt-1 block">EcoHarmony Park</p>
            <p> {props.site}</p>
        </div>
        </>
    );
}

export default Navbar;