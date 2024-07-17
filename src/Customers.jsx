import { Outlet } from 'react-router-dom';

export default function Customers() {
  return (
    <>
      <div className="overflow-x-auto col-span-10">
        <table className="min-w-full bg-white dark:bg-zinc-800">
          <thead>
            <tr className="w-full bg-zinc-100 dark:bg-zinc-700">
              <th className="py-2 px-4 text-left text-sm font-medium text-zinc-500 dark:text-zinc-300">
                CUSTOMER NAME
              </th>
              <th className="py-2 px-4 text-left text-sm font-medium text-zinc-500 dark:text-zinc-300">
                EMAIL
              </th>
              <th className="py-2 px-4 text-left text-sm font-medium text-zinc-500 dark:text-zinc-300">
                ADDRESS
              </th>
            </tr>
          </thead>
          <tbody>
            {' '}
            <tr className="border-b border-zinc-200 dark:border-zinc-700">
              <td className="py-2 px-4 flex items-center">
                <img
                  className="w-8 h-8 rounded-full mr-3"
                  src="https://placehold.co/32x32"
                  alt="Danielle Lewis"
                />
                <span className="text-zinc-900 dark:text-zinc-100">
                  Danielle Lewis
                </span>
              </td>
              <td className="py-2 px-4 text-zinc-600 dark:text-zinc-400">
                danielle.lewis@mark.com
              </td>
              <td className="py-2 px-4 text-zinc-600 dark:text-zinc-400">
                02 Jan 2018 02 Jan 2018 02 Jan 2018 02 Jan 2018 02 Jan 2018 02
                Jan 2018
              </td>
              <td className="py-2 px-4">
                <span className="inline-block w-8 h-8 rounded-full bg-pink-500 text-white text-center leading-8">
                  SB
                </span>
              </td>
            </tr>{' '}
          </tbody>
        </table>
      </div>
      <Outlet />
    </>
  );
}
