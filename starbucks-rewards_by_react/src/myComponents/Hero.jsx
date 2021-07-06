import Link from "./Link";
import RoundedLink from "./RoundedLink";

function Hero() {
  return (
    <div className="h-0 bg-cover md:relative md:bg-center md:flex bg-mobile-background pb-400/3 md:bg-desktop-background md:pb-4/7 bg-primary-200">
      <div className="bottom-0 px-4 py-8 space-y-4 text-center md:px-6 md:text-left md:absolute md:top-0 md:justify-center md:flex md:flex-col ">
        <h1 className="text-2xl font-bold md:text-5xl sm:text-4xl sm:font-semibold">
          FREE COFFEE <br /> IS A TAP AWAY
        </h1>
        <h4 className="text-lg">Join now to start earning Rewards.</h4>

        <RoundedLink
          text="Join in the app"
          className="mx-auto text-white bg-primary-300 hover:bg-primary-400 "
        />
        <div>
          <Link text="Or join online" className="text-lg" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
