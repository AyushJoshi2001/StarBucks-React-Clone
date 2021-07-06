function Starbutton(props){
    return(
        <button className="text-2xl font-semibold md:font-bold ">
            {props.text}<span className="text-sm text-yellow-400">★</span>
        </button>
    );
} 

export default Starbutton;