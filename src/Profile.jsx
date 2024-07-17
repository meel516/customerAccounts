export default function Profile() {
  return (
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg shadow-lg max-w-screen-lg mx-auto col-span-12">
      <header className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-4">
          <img
            src="https://placehold.co/40x40"
            alt="NevBank Logo"
            className="rounded-full"
          />
          <h1 className="text-xl font-bold">NevBank</h1>
        </div>
        <nav className="flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-blue-500">
            My account
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-500">
            Transactions
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-500">
            Cards
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-500">
            Offers
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-500">
            Investments
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-blue-500">
            <img
              alt="notifications"
              src="https://openui.fly.dev/openui/24x24.svg?text=🔔"
            />
          </button>
          <button className="text-gray-600 hover:text-blue-500">
            <img
              alt="settings"
              src="https://openui.fly.dev/openui/24x24.svg?text=⚙️"
            />
          </button>
          <div className="flex items-center space-x-2">
            <img
              src="https://placehold.co/40x40"
              alt="User Avatar"
              className="rounded-full"
            />
            <span className="text-gray-600">Dorothy Watkins</span>
          </div>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="col-span-2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Main account</h2>
          <div className="flex justify-between items-center mt-4">
            <div>
              <p className="text-gray-600">NevBank Savings Account</p>
              <p className="text-gray-600">88 1240 7799 7364 3667 0002 9448</p>
            </div>
            <p className="text-2xl font-bold">68,789.56 $</p>
          </div>
          <div className="flex space-x-4 mt-4">
            <button class="bg-black text-white px-4 py-2 rounded-lg">
              Transfer money
            </button>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Define standing orders</h2>
          <p className="text-gray-600 mt-2">
            We help you remember about recurring payments for the fixed price.
            Define once standing order and bank will take care of your regular
            transfers.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg transition-transform transform hover:scale-105">
            Define standing order
          </button>
        </div>
      </section>
      <section class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div class="bg-card p-6 rounded-lg shadow-md">
          <div class="flex justify-between items-center">
            <div>
              <p class="text-muted-foreground">Santander</p>
              <p class="text-muted-foreground">88 **** 9448</p>
            </div>
            <img src="https://placehold.co/24x24" alt="Santander Logo" />
          </div>
          <p class="text-xl font-bold mt-4">12.220,65 $</p>
        </div>
        <div class="bg-card p-6 rounded-lg shadow-md">
          <div class="flex justify-between items-center">
            <div>
              <p class="text-muted-foreground">CityBank</p>
              <p class="text-muted-foreground">45 **** 0756</p>
            </div>
            <img src="https://placehold.co/24x24" alt="CityBank Logo" />
          </div>
          <p class="text-xl font-bold mt-4">25.070,65 $</p>
        </div>
        <div class="bg-card p-6 rounded-lg shadow-md">
          <div class="flex justify-between items-center">
            <div>
              <p class="text-muted-foreground">Deutsche Bank</p>
              <p class="text-muted-foreground">44 **** 8854</p>
            </div>
            <img src="https://placehold.co/24x24" alt="Deutsche Bank Logo" />
          </div>
          <p class="text-xl font-bold mt-4">570,00 $</p>
        </div>
        <div class="bg-card p-6 rounded-lg shadow-md">
          <div class="flex justify-between items-center">
            <div>
              <p class="text-muted-foreground">Credit Agricole</p>
              <p class="text-muted-foreground">55 **** 2364</p>
            </div>
            <img src="https://placehold.co/24x24" alt="Credit Agricole Logo" />
          </div>
          <p class="text-xl font-bold mt-4">2.680,50 $</p>
        </div>
        <div class="bg-card p-6 rounded-lg shadow-md">
          <div class="flex justify-between items-center">
            <div>
              <p class="text-muted-foreground">Credit Agricole</p>
              <p class="text-muted-foreground">55 **** 2364</p>
            </div>
            <img src="https://placehold.co/24x24" alt="Credit Agricole Logo" />
          </div>
          <p class="text-xl font-bold mt-4">2.680,50 $</p>
        </div>
        <div class="bg-card p-6 rounded-lg shadow-md">
          <div class="flex justify-between items-center">
            <div>
              <p class="text-muted-foreground">Credit Agricole</p>
              <p class="text-muted-foreground">55 **** 2364</p>
            </div>
            <img src="https://placehold.co/24x24" alt="Credit Agricole Logo" />
          </div>
          <p class="text-xl font-bold mt-4">2.680,50 $</p>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 p-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Latest Transactions</h2>
          <table className="w-full">
            <thead>
              <tr className="text-gray-600">
                <th className="text-left pb-2">Date</th>
                <th className="text-left pb-2">Description</th>
                <th className="text-left pb-2">Category</th>
                <th className="text-right pb-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="py-2">Today</td>
                <td className="py-2">Starbucks Cafe</td>
                <td className="py-2">Food</td>
                <td className="py-2 text-right">-15.00 $</td>
              </tr>
              <tr className="border-t">
                <td className="py-2">Today</td>
                <td className="py-2">Off White Oxford Street 41</td>
                <td className="py-2">Clothes</td>
                <td className="py-2 text-right">-260.40 $</td>
              </tr>
              <tr className="border-t">
                <td className="py-2">20.05</td>
                <td className="py-2">Spotify Premium</td>
                <td className="py-2">Entertainment</td>
                <td className="py-2 text-right">-10.00 $</td>
              </tr>
              <tr className="border-t">
                <td className="py-2">20.05</td>
                <td className="py-2">Google Inc.</td>
                <td className="py-2">Salary</td>
                <td className="py-2 text-right text-green-500">+9500.00 $</td>
              </tr>
              <tr className="border-t">
                <td className="py-2">19.05</td>
                <td className="py-2">Allegro.pl Sp.z.o.o</td>
                <td className="py-2">Clothes</td>
                <td className="py-2 text-right">-25.67 $</td>
              </tr>
              <tr className="border-t">
                <td className="py-2">19.05</td>
                <td className="py-2">Super-Pharm Warsaw</td>
                <td className="py-2">Pharmacy</td>
                <td className="py-2 text-right">-98.90 $</td>
              </tr>
              <tr className="border-t">
                <td className="py-2">18.05</td>
                <td className="py-2">Carrefour Express</td>
                <td className="py-2">Food</td>
                <td className="py-2 text-right">-45.78 $</td>
              </tr>
              {/* {showMore && (
                <>
                  <tr className="border-t">
                    <td className="py-2">17.05</td>
                    <td className="py-2">Amazon Purchase</td>
                    <td className="py-2">Shopping</td>
                    <td className="py-2 text-right">-120.00 $</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-2">16.05</td>
                    <td className="py-2">Uber Ride</td>
                    <td className="py-2">Transport</td>
                    <td className="py-2 text-right">-25.00 $</td>
                  </tr>
                </>
              )} */}
            </tbody>
          </table>
          <button className="text-blue-500 mt-4 hover:underline transition-transform transform hover:scale-105">
            {/* {showMore ? 'Show less' : 'See more'} */}
          </button>
        </div>
      </section>
    </div>
  );
}
