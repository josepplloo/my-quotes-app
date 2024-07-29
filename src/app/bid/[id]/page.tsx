import React from "react";
import { SecureText } from "@/components/secureText";
import { PrintButton } from "@/components/form/PrintButton";

const AUX_STATE = {
  STEP_NUMBER: 2,
  form: {
    name: "Foo Bar",
    email: "foobar@gmail.com",
    tel: "4389002323",
    contact: "Bar Taz",
    computers: "10",
    servers: "5",
    cameras: "6",
    laserPrinters: "2",
    inkPrinters: "1",
    posPrinters: "0",
    netDevices: "8",
    maintenance: "preventive",
    support: "level1",
    sla: "tier1",
    documentation: true,
  },
  quote: {
    maintenance: 2704000,
    support: 169000,
    sla: 169000,
    documentation: 169000,
    report: 0,
    branches: 0,
    budget: -11830000,
    invested: 3211000,
    total: 3211000,
    net: 3821090,
  },
};

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export default function page({ params }: { params: { id: string } }) {
  const { form, quote } = AUX_STATE;
  const itemList = Object.entries(AUX_STATE.quote)
    .filter((item) => item[1] > 0)
    .slice(0, -3);

  const numberFormat = new Intl.NumberFormat("co-CO", {
    style: "currency",
    currency: "COP",
  });
  const formatCOP = (value: number) => numberFormat.format(value);

  const myDate = new Date().toDateString();

  return (
    <main>
      <PrintButton />

      <article>
        <h1 className="flex justify-between text-5xl font-extrabold dark:text-white">
          Bid Proposal
          <small className="ms-2 font-semibold text-gray-500 dark:text-gray-400">
            Id: {params.id}-<SecureText>{AUX_STATE.quote.total}</SecureText>
          </small>
        </h1>

        <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            Name: {form.name}
          </li>
          <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
            Phone: {form.tel}
          </li>
          <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
            Email: {form.email}
          </li>
          <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
            Date: {myDate}
          </li>
        </ul>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {itemList.map(([item, price]) => (
                <tr
                  key={item}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="uppercase px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item}
                  </th>
                  <td className="px-6 py-4">{formatCOP(price)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end">
          <ul className="w-48 text-lg font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <li className="px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              Sub Total: {formatCOP(quote.total)}
            </li>
            <li className="px-4 py-2 border-b border-gray-200 dark:border-gray-600">
              Taxes: {formatCOP(quote.net - quote.total)}
            </li>
            <li className="px-4 py-2 border-b border-gray-200 dark:border-gray-600">
              Total: {formatCOP(quote.net)}
            </li>
          </ul>
        </div>
      </article>
    </main>
  );
}
