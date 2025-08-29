import { CardPlan } from '@/components/Cards/CardPlan';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header/Header';
import { PromoBanner } from '@/components/PromoBanner';

export default function Subcriptions() {
  return (
    <div>
      <div className="px-40">
        <Header />

        <section className="mt-37.5 mb-37.5">
          <div className="flex flex-row justify-between gap-6">
            <div className="flex flex-col gap-3.5">
              <h1 className="font-Manrope font-bold text-4xl text-white">
                Choose the plan that's right for you
              </h1>
              <p className="font-Manrope text-Custom-Gray-60">
                Join StreamVibe and select from our flexible subcription options
                tailored to suit your viewing preferences. Get ready for
                non-stop entertainment!
              </p>
            </div>

            <div className="mt-6 mb-20 flex flex-row rounded-xl border border-Custom-Black-15 bg-Custom-Black-06 p-2.5">
              <span className="rounded-xl bg-Custom-Black-12 px-6 py-3.5 font-Manrope text-white">
                Monthly
              </span>
              <span className="px-6 py-3.5 font-Manrope text-Custom-Gray-60">
                Yearly
              </span>
            </div>
          </div>

          <div className="mb-37.5 grid grid-cols-3 grid-rows-1 gap-7.5">
            <CardPlan
              description="The basic plan for those who want to watch TV and movies."
              price={9.99}
              title="Basic Plan"
            />
            <CardPlan
              description="The premium plan for those who want to watch TV and movies."
              price={19.99}
              title="Premium Plan"
            />
            <CardPlan
              description="The deluxe plan for those who want to watch TV and movies."
              price={29.99}
              title="Deluxe Plan"
            />
          </div>

          <div className="space-y-10">
            <div>
              <h1 className="font-Manrope font-bold text-4xl text-white">
                Compare our plans and find the right one for you
              </h1>
              <p className="font-Manrope text-Custom-Gray-60">
                StreamVibe offers three different plans to fit your needs:
                Basic, Standard, and Premium. Compare the features of each plan
                and choose the one that's right for you.
              </p>
            </div>

            <table className="mb-36.5 flex table-auto border-collapse flex-col rounded-xl border border-Custom-Black-15">
              <thead className="flex-1 rounded-t-xl bg-Custom-Black-06">
                <tr className="flex items-center border-Custom-Black-15 border-b">
                  <th className="h-full w-full border-Custom-Black-15 border-r py-5 pl-7.5 text-start font-Manrope font-medium text-white">
                    Features
                  </th>
                  <th className="w-full border-Custom-Black-15 border-r py-5 pl-7.5 text-start font-Manrope font-medium text-white">
                    Basic
                  </th>
                  <th className="flex w-full items-center gap-2 space-x-20 border-Custom-Black-15 border-r py-5 pl-7.5 text-start font-Manrope font-medium text-white">
                    Standard
                    <span className="rounded-md bg-Custom-Red-45 p-1 text-xs">
                      Popular
                    </span>
                  </th>
                  <th className="w-full border-Custom-Black-15 py-5 pl-7.5 text-start font-Manrope font-medium text-white">
                    Premium
                  </th>
                </tr>
              </thead>

              <tbody className="flex-1 bg-transparent">
                <tr className="flex border-Custom-Black-15 border-b">
                  <td className="w-full border-Custom-Black-15 border-r py-5 pl-7.5 font-medium text-Custom-Gray-60">
                    Price
                  </td>
                  <td className="w-full border-Custom-Black-15 border-r py-5 pl-7.5 font-medium text-Custom-Gray-60">
                    $9.99/Month
                  </td>
                  <td className="w-full border-Custom-Black-15 border-r py-5 pl-7.5 font-medium text-Custom-Gray-60">
                    $12.99/Month
                  </td>
                  <td className="w-full border-Custom-Black-15 py-5 pl-7.5 font-medium text-Custom-Gray-60">
                    $14.99/Month
                  </td>
                </tr>

                <tr className="flex border-Custom-Black-15 border-b ">
                  <td className="flex w-full items-center border-Custom-Black-15 border-r py-5 pl-7.5 font-medium text-Custom-Gray-60">
                    Content
                  </td>
                  <td className="w-full border-Custom-Black-15 border-r py-5 pl-7.5 font-medium text-Custom-Gray-60">
                    Access to a wide selection of movies and shows, including
                    some new releases.
                  </td>
                  <td className="w-full border-Custom-Black-15 border-r py-5 pl-7.5 font-medium text-Custom-Gray-60">
                    Access to a wider selection of movies and shows, including
                    most new releases and exclusive content
                  </td>
                  <td className="w-full border-Custom-Black-15 py-5 pl-7.5 font-medium text-Custom-Gray-60">
                    Access to a widest selection of movies and shows, including
                    all new releases and Offline Viewing
                  </td>
                </tr>

                <tr className="flex border-Custom-Black-15 border-b">
                  <td className="w-full border-Custom-Black-15 border-r py-5 pl-7.5 font-medium text-Custom-Gray-60">
                    Devices
                  </td>
                  <td className="w-full border-Custom-Black-15 border-r py-5 pl-7.5 font-medium text-Custom-Gray-60">
                    Watch on one device simultaneously
                  </td>
                  <td className="w-full border-Custom-Black-15 border-r py-5 pl-7.5 font-medium text-Custom-Gray-60">
                    Watch on Two device simultaneously
                  </td>
                  <td className="w-full border-Custom-Black-15 py-5 pl-7.5 font-medium text-Custom-Gray-60">
                    Watch on Four device simultaneously
                  </td>
                </tr>

                <tr className="flex border-Custom-Black-15 border-b">
                  <td className="w-full border-Custom-Black-15 border-r py-5 pl-7.5 font-medium text-Custom-Gray-60">
                    Free Trail
                  </td>
                  <td className="w-full border-Custom-Black-15 border-r py-5 pl-7.5 font-medium text-Custom-Gray-60">
                    7 Days
                  </td>
                  <td className="w-full border-Custom-Black-15 border-r py-5 pl-7.5 font-medium text-Custom-Gray-60">
                    7 Days
                  </td>
                  <td className="w-full border-Custom-Black-15 py-5 pl-7.5 font-medium text-Custom-Gray-60">
                    7 Days
                  </td>
                </tr>

                <tr className="flex border-Custom-Black-15 border-b">
                  <td className="w-full border-Custom-Black-15 border-r py-5 pl-7.5 font-medium text-Custom-Gray-60">
                    Cancel Anytime
                  </td>
                  <td className="w-full border-Custom-Black-15 border-r py-5 pl-7.5 font-medium text-Custom-Gray-60">
                    Yes
                  </td>
                  <td className="w-full border-Custom-Black-15 border-r py-5 pl-7.5 font-medium text-Custom-Gray-60">
                    Yes
                  </td>
                  <td className="w-full border-Custom-Black-15 py-5 pl-7.5 font-medium text-Custom-Gray-60">
                    Yes
                  </td>
                </tr>

                <tr className="flex border-Custom-Black-15 border-b">
                  <td className="w-full border-Custom-Black-15 border-r py-5 pl-7.5 font-medium text-Custom-Gray-60">
                    HDR
                  </td>
                  <td className="w-full border-Custom-Black-15 border-r py-5 pl-7.5 font-medium text-Custom-Gray-60">
                    No
                  </td>
                  <td className="w-full border-Custom-Black-15 border-r py-5 pl-7.5 font-medium text-Custom-Gray-60">
                    Yes
                  </td>
                  <td className="w-full border-Custom-Black-15 py-5 pl-7.5 font-medium text-Custom-Gray-60">
                    Yes
                  </td>
                </tr>

                <tr className="flex border-Custom-Black-15 border-b">
                  <td className="w-full border-Custom-Black-15 border-r py-5 pl-7.5 font-medium text-Custom-Gray-60">
                    Dolby Atmos
                  </td>
                  <td className="w-full border-Custom-Black-15 border-r py-5 pl-7.5 font-medium text-Custom-Gray-60">
                    No
                  </td>
                  <td className="w-full border-Custom-Black-15 border-r py-5 pl-7.5 font-medium text-Custom-Gray-60">
                    Yes
                  </td>
                  <td className="w-full border-Custom-Black-15 py-5 pl-7.5 font-medium text-Custom-Gray-60">
                    Yes
                  </td>
                </tr>

                <tr className="flex border-Custom-Black-15 border-b">
                  <td className="w-full border-Custom-Black-15 border-r py-5 pl-7.5 font-medium text-Custom-Gray-60">
                    Ad - Free
                  </td>
                  <td className="w-full border-Custom-Black-15 border-r py-5 pl-7.5 font-medium text-Custom-Gray-60">
                    No
                  </td>
                  <td className="w-full border-Custom-Black-15 border-r py-5 pl-7.5 font-medium text-Custom-Gray-60">
                    Yes
                  </td>
                  <td className="w-full border-Custom-Black-15 py-5 pl-7.5 font-medium text-Custom-Gray-60">
                    Yes
                  </td>
                </tr>

                <tr className="flex border-Custom-Black-15 border-b">
                  <td className="w-full border-Custom-Black-15 border-r py-5 pl-7.5 font-medium text-Custom-Gray-60">
                    Offline Viewing
                  </td>
                  <td className="w-full border-Custom-Black-15 border-r py-5 pl-7.5 font-medium text-Custom-Gray-60">
                    No
                  </td>
                  <td className="w-full border-Custom-Black-15 border-r py-5 pl-7.5 font-medium text-Custom-Gray-60">
                    Yes, for select titles.
                  </td>
                  <td className="w-full border-Custom-Black-15 py-5 pl-7.5 font-medium text-Custom-Gray-60">
                    Yes, for all titles.
                  </td>
                </tr>

                <tr className="flex border-Custom-Black-15 border-b">
                  <td className="w-full border-Custom-Black-15 border-r py-5 pl-7.5 font-medium text-Custom-Gray-60">
                    Family Sharing
                  </td>
                  <td className="w-full border-Custom-Black-15 border-r py-5 pl-7.5 font-medium text-Custom-Gray-60">
                    No
                  </td>
                  <td className="w-full border-Custom-Black-15 border-r py-5 pl-7.5 font-medium text-Custom-Gray-60">
                    Yes, up to 5 family members.
                  </td>
                  <td className="w-full border-Custom-Black-15 py-5 pl-7.5 font-medium text-Custom-Gray-60">
                    Yes, up to 6 family members.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <PromoBanner />
      </div>

      <Footer />
    </div>
  );
}
