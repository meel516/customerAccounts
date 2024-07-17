export default function Account() {
  return (
    <>
      <section className="col-span-2 mb-6">
        <div className="bg-card p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-muted-foreground">Santander</p>
              <p className="text-muted-foreground">88 **** 9448</p>
            </div>
            <img src="https://placehold.co/24x24" alt="Santander Logo" />
          </div>
          <p className="text-xl font-bold mt-4">12.220,65 $</p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-muted-foreground">CityBank</p>
              <p className="text-muted-foreground">45 **** 0756</p>
            </div>
            <img src="https://placehold.co/24x24" alt="CityBank Logo" />
          </div>
          <p className="text-xl font-bold mt-4">25.070,65 $</p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-muted-foreground">Deutsche Bank</p>
              <p className="text-muted-foreground">44 **** 8854</p>
            </div>
            <img src="https://placehold.co/24x24" alt="Deutsche Bank Logo" />
          </div>
          <p className="text-xl font-bold mt-4">570,00 $</p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-muted-foreground">Credit Agricole</p>
              <p className="text-muted-foreground">55 **** 2364</p>
            </div>
            <img src="https://placehold.co/24x24" alt="Credit Agricole Logo" />
          </div>
          <p className="text-xl font-bold mt-4">2.680,50 $</p>
        </div>
      </section>
    </>
  );
}
