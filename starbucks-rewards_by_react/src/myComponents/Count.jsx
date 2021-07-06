import H3 from "./H3";

function Count(props) {
  return (
    <div className="flex flex-1 space-x-4 md:space-y-8 pb-9 md:flex-col ">
      <div className="flex-shrink-0 md:w-full md:flex md:justify-center">
        <img className="flex-shrink-0 w-12 h-12" src={props.source} alt="one" />
      </div>
      <div className="flex flex-col space-y-4 md:text-center">
        <H3>{props.heading}</H3>
        <p>{props.children}</p>
      </div>
    </div>
  );
}

export default Count;
