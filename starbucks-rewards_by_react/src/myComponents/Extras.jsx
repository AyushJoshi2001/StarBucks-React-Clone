import Link from "./Link";
import H3 from "./H3";

function Extra(props) {
  return (
    <div className="flex py-5 space-x-4 md:space-x-10 md:flex-1 md:flex-col md:space-y-8 ">
      <img
        className="flex-shrink-0 w-28 h-28 md:mx-auto"
        src={props.source}
        alt="promotional_image"
      />
      <div className="space-y-5 md:text-center ">
        <H3>{props.heading}</H3>
        <p>{props.children}</p>
        <div>
          <Link className="text-primary-300" text="Learn more" />
        </div>
      </div>
    </div>
  );
}

export default Extra;
