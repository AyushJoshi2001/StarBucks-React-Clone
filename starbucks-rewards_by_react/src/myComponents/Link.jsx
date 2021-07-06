function Link(props){
    return(
        <a className={"underline hover:no-underline " + props.className } href="http://google.com" target="_blank">{props.text}</a>
    )
}

export default Link;