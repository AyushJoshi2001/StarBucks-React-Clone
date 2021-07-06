import RoundedLink from "./RoundedLink";

function Header() {
  return (
    <div className="sticky top-0 md:top-20 md:z-10 bg-primary-400 ">
      <div className="flex items-center justify-between px-4 py-1 text-white md:max-w-1440 md:mx-auto ">
        <p className="font-bold text-md md:my-3 md:ml-24">STARBUCKS® REWARDS</p>
        <RoundedLink
          text="Join in the app"
          className="border border-white md:hidden bg-primary-400"
        />
      </div>
    </div>
  );
}

export default Header;
