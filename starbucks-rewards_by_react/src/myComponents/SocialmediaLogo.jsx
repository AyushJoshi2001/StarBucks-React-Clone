function SocialmediaLogo(props) {
  return (
    <a href={props.link} className="flex-shrink-0 inline-block w-11 h-11">
       {props.children}
    </a>
  );
}

export default SocialmediaLogo;
