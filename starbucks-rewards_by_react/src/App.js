import Header from "./myComponents/Header";
import Hero from "./myComponents/Hero";
import Nav from "./myComponents/Nav";
import Count from "./myComponents/Count";
import one from "./img/one.webp";
import two from "./img/two.webp";
import three from "./img/three.webp";
import Link from "./myComponents/Link";
import Starbutton from "./myComponents/Starbutton";
import Drink from "./myComponents/Drink";
import drink from "./img/drink.webp";
import Extra from "./myComponents/Extras";
import freebie_1 from "./img/freebies-1.webp";
import freebie_2 from "./img/freebies-2.webp";
import freebie_3 from "./img/freebies-3.webp";
import cash_1 from "./img/cash-1.png";
import cash_2 from "./img/cash-2.png";
import cash_3 from "./img/cash-3.png";
import cash_4 from "./img/cash-4.png";
import cash_5 from "./img/cash-5.png";
import Cash from "./myComponents/Cash";
import H2 from "./myComponents/H2";
import Button from "./myComponents/Button";
import Restrictions from "./myComponents/Restrictions";
import Footer from "./myComponents/Footer";

function App() {
  return (
    <div className="font-sans">
      <Nav />
      <Header />

      {/* hero-section */}
      <Hero />

      {/* section-2 */}
      <section>
        <div className="px-4 mx-auto mt-16 mb-8 max-w-1220 ">
          <div className="pb-12 space-y-5 text-center">
            <H2>Getting started is easy</H2>
            <p>Earn Stars and get rewarded in a few easy steps.</p>
          </div>
          <div className="flex flex-col md:flex-row md:flex-shrink-0 md:space-x-3">
            <Count source={one} heading="Download the Starbucks® app">
              <Link text="Join in the app" className="text-primary-300" />
              to get access to the full range of Starbucks® Rewards benefits.
              You can also{" "}
              <Link text="join online" className="text-primary-300" />.
            </Count>

            <Count source={two} heading="Order and pay how you’d like">
              Use cash, credit/debit card or save some time and pay right
              through the app. You’ll collect Stars all ways.{" "}
              <Link text="Learn how" className="text-primary-300" />
            </Count>

            <Count source={three} heading="Earn Stars, get Rewards">
              As you earn Stars, you can redeem them for Rewards—like free food,
              drinks, and more. Start redeeming with as little as 25 Stars!
            </Count>
          </div>
        </div>
      </section>

      {/* third section */}
      <section>
        {/* part-1 */}
        <div className="py-5 text-center bg-primary-100 ">
          <H2 className="py-10">Get your favorites for free</H2>
          <div className="flex justify-around md:max-w-lg md:mx-auto ">
            <Starbutton text="25" />
            <Starbutton text="50" />
            <Starbutton text="150" />
            <Starbutton text="200" />
            <Starbutton text="400" />
          </div>
        </div>

        {/* part-2 */}
        <Drink source={drink} heading="Customize your drink">
          Make your drink just right with an extra espresso shot, dairy
          substitute or a dash of your favorite syrup.
        </Drink>
      </section>

      {/* section-4 */}
      <section>
        <div className="px-4 py-20 mx-auto space-y-5 md:py-28 max-w-1440 ">
          <H2 className="text-center md:max-w-xl md:mx-auto">Endless Extras</H2>
          <p className="text-center md:max-w-xl md:mx-auto">
            Joining Starbucks® Rewards means unlocking access to exclusive
            benefits. Say hello to easy ordering, tasty Rewards and—yes, free
            coffee.
          </p>

          <div className="space-y-5 md:flex md:space-y-0">
          <Extra source={freebie_1} heading="Fun freebies">
            Not only can you earn free coffee, look forward to a birthday treat
            plus coffee and tea refills.
          </Extra>

          <Extra source={freebie_2} heading="Order & pay ahead">
            Enjoy the convenience of in-store, curbside or drive-thru pickup at
            select stores.
          </Extra>
          <Extra source={freebie_3} heading="Get to free faster">
            Earn Stars even quicker with Bonus Star challenges, Double Star Days
            and exciting games.
          </Extra>
          </div>
        </div>
      </section>

      {/* section-5 */}
      <section>
        <div className="bg-secondary">
        <div className="px-4 py-20 md:max-w-1440 md:mx-auto ">
          <div className="pb-6 text-center md:max-w-3xl md:mx-auto ">
            <H2>Cash or card, you earn Stars</H2>
            <p>
              No matter how you pay, you can earn Stars with your morning
              coffee. Those Stars add up to (really delicious) Rewards.
            </p>
          </div>

          <div className="pb-16 md:pb-0 md:flex ">
            <div className="py-10 md:pr-28 ">
              <p className="text-xl font-semibold md:text-2xl">1★ per dollar</p>
              <p>Pay as you go</p>
            </div>

            <Cash source={cash_1} heading="Scan and pay separately">
              Use cash or credit/debit card at the register.
            </Cash>

            <Cash source={cash_2} heading="Save payment in the app">
              Check-out faster by saving a credit/debit card or PayPal to your
              account. You’ll be able to order ahead or scan and pay at the
              register in one step.
            </Cash>
          </div>

          <hr class="bg-gray-300 border" />

          <div className="pb-20 md:pb-0 md:flex">
            <div className="py-10 md:pr-28 ">
              <p className="text-xl font-semibold md:text-2xl">2★ per dollar</p>
              <p>Add funds in the app</p>
            </div>

            <Cash source={cash_3} heading="Preload">
              To save time and earn Stars twice as fast, add money to your
              digital Starbucks Card using any payment option. Scan and pay in
              one step or order ahead in the app.
            </Cash>

            <Cash source={cash_4} heading="Register your gift card">
              Then use it to pay through the app. You can even consolidate
              balances from multiple cards in one place.
            </Cash>
          </div>

          <hr class="bg-gray-300 border" />

          <div className="md:pb-0 md:flex">
            <div className="py-10 md:pr-10 md:max-w-260 ">
              <p className="text-xl font-semibold md:text-2xl">Up to 3★ per dollar</p>
              <p>With Starbucks® Rewards Visa® Card</p>
            </div>

            <Cash
              source={cash_5}
              heading="
Earn Stars even faster"
            >
              Earn Stars on all purchases you make with our{" "}
              <Link className="text-primary-300" text="credit card" /> in and outside of Starbucks. Earn 1 Star per $1 when
              you digitally preload your Starbucks Card with your Starbucks®
              Rewards Visa® Card, and earn 2 Stars per $1 when you pay with that
              preloaded Starbucks Card.
            </Cash>
          </div>
          </div>
        </div>
      </section>

      {/* section-6 */}
      <section>
        <div className="p-4 py-20 md:max-w-2xl md:mx-auto md:py-28 ">
          <H2 className="pb-5">Star Codes</H2>
          <p className="pb-8">
            Yesssss. You’ve got Stars in your hand. Enter your code here and
            we’ll add Stars to your account.
          </p>

          <input
            type="text"
            className="w-full p-3 text-lg placeholder-black border border-gray-500 rounded-lg"
            placeholder="Enter your Star Code"
          />

          <div className="flex justify-end pt-4">
            <Button className="border border-black hover:bg-primary-100">Submit</Button>
          </div>

          <div className="pt-5 text-sm">
            <p>Have a receipt but don't have a code?</p>
            <p>
              Go to{" "}
              <Link text="starbucks-stars.com" className="text-primary-300" />{" "}
              to upload your receipt and collect your Stars.
            </p>
          </div>

          <H2 className="pt-20">Questions?</H2>
          <p className="pt-5">
            We want to help in any way we can. You can ask your barista anytime
            or we’ve answered the most commonly asked questions{" "}
            <Link text="right over here" className="text-primary-300" />.
          </p>
        </div>
      </section>

      <Restrictions />
      <Footer />
      
    </div>
  );
}

export default App;
