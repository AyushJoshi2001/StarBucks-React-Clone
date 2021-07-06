import H3 from "./H3";

function Cash(props) {
  return (
    <div className="flex pb-10 space-x-4 md:flex-1 md:mt-10 md:pr-8 md:max-w-md ">
      <img className="flex-shrink-0 h-40 w-28" src={props.source} alt="Payment-Images" />
      <div className="space-y-5">
        <H3>{props.heading}</H3>
        <p>{props.children}</p>
      </div>
    </div>
  );
}

export default Cash;
