function Drink(props){
    return(
        <div className="bg-primary-200 ">
            <div className="px-4 py-12 space-y-4 text-center md:py-8 md:flex md:flex-row md:max-w-3xl md:mx-auto ">
            <img className="md:h-52" src={props.source} alt="drink_image" />
            <div className="space-y-4 md:text-left md:justify-center md:flex md:flex-col">
            <h2 className="text-xl font-bold">{props.heading}</h2>
            <p>{props.children}</p>
            </div>
            </div>
        </div>
    );
}

export default Drink;