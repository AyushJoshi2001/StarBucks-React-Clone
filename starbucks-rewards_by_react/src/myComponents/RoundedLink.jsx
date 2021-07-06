function RoundedLink(props){
    return(
        <div className="flex">
            <a className={"flex items-center md:text-md flex-shrink-0 px-4 py-1 my-2 font-bold md:mx-0 rounded-full text-md " + props.className} href="http://google.com">{props.text}</a>
        </div>
    );
}

export default RoundedLink;