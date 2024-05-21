"use client";
import { useSelector } from "@/contexts/QuoteContext";

export const BillStats = () => {
  const state = useSelector((state) => state);
  const { invested, total, net } = state.quote;
  return (
    <section className="p-4">
      <article className="p-2 border-collapse border rounded-md border-slate-400">
        <p className="text-base bg-gradient-to-r from-black-500">
          Transaction details:
        </p>
        <dl>
          <dt className="text-lg border border-slate-300">{invested}</dt>
          <dd className="">Amount Invested.</dd>

          <dt className="border border-slate-300">{total}</dt>
          <dd className="">Grand Total</dd>

          <dt className="border border-slate-300">{net}</dt>
          <dd className="">Nett (before taxes)</dd>
        </dl>
      </article>
    </section>
  );
};
