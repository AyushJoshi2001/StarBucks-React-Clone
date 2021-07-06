import Link from "./Link";

function Restrictions(props) {
  return (
    <div className="bg-gray-100">
      <div className="px-5 py-8 m-auto space-y-8 md:px-10 md:py-12 max-w-1440 ">
        {/* heading */}
        <h1>At participating stores. Restrictions apply.</h1>

        <div className="flex flex-col space-y-8 md:flex-row md:space-x-8 md:space-y-0">
          {/* inner-1 */}
          <div className="space-y-8 md:w-1/2">
            <div className="space-y-4">
              <h1 className="font-medium text-gray-600">EARNING STARS</h1>
              <p>
                Stars cannot be earned on purchases of alcohol, Starbucks Cards
                or Starbucks Card reloads.
              </p>
              <p>
                Earn 1 Star per $1 spent when you scan your member barcode in
                the app, then pay with cash, credit/debit cards or mobile
                wallets at participating stores. You can also earn 1 Star per $1
                spent when you link a payment method and pay directly through
                the app.
              </p>
              <p>
                Earn 2 Stars per $1 spent when you load funds and pay with your
                digital Starbucks Card in the app. You can also earn 2 Stars per
                $1 spent when you pay in-person at a participating store with
                your registered physical Starbucks Card or scan your member
                barcode in the app, and then use any physical Starbucks Card
                (regardless of whether it is registered) to complete the
                purchase
              </p>
            </div>
            <div className="space-y-4">
              <h1 className="font-medium text-gray-600">BENEFITS</h1>
              <p>
                Free refills available during same in-store visit only. To
                qualify for the Birthday Reward, you must have made at least one
                Star-earning transaction.
              </p>
            </div>
          </div>

          {/* inner-2 */}
          <div className="space-y-8 md:w-1/2">
            <div className="space-y-4">
              <h1 className="font-medium text-gray-600">TERMS OF USE</h1>
              <p>
                For full program details visit <Link text="starbucks.com/rewards/terms" className="text-primary-300"/>
                .
              </p>
              <p>
                * Earn 1 Star per $1 when digitally loading your Starbucks Card
                with your Starbucks® Rewards Visa® Card: See your Card Rewards
                Program Agreement for more details.
              </p>
              <p>
                Starbucks® Rewards benefits are available at participating
                Starbucks stores. Not all stores have the ability to honor
                Rewards at this time. Visit the <Link text="Starbucks Store Locator" className="text-primary-300"/> and search for locations honoring “Redeem Rewards”.
              </p>
              <p>
                Deposit and credit card products provided by JPMorgan Chase
                Bank, N.A. Member FDIC
              </p>
            </div>

            <div className="space-y-4">
              <h1 className="font-medium text-gray-600">REDEEMING REWARDS</h1>
              <p>
                Rewards cannot be redeemed for alcoholic beverages or
                multi-serve items. Not all stores honor tiered Rewards. Select
                stores redeem 150 Stars for free food or drink items only.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Restrictions;
