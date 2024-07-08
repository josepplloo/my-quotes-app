"use client";
import { useSelector } from "@/contexts/QuoteContext";
import { Odometer } from "./Odometer";

export const BillStats = () => {
  const state = useSelector((state) => state);
  const { invested, total, net } = state.quote;

  return (
    <section className="relative p-4">
      <article className={`${state.STEP_NUMBER===2 && 'md:fixed sm:static' } w-60 p-2 border-collapse border rounded-md border-slate-400`}>
        <p className="text-base bg-gradient-to-r from-black-500">
          Transaction details:
        </p>
        <dl>
          <dt className="text-lg border border-slate-300 px-2">{invested}</dt>
          <dd className="">Amount Invested.</dd>

          <dt className="border border-slate-300 px-2">{total}</dt>
          <dd className="">Grand Total</dd>

          <dt className="border border-slate-300">
            <Odometer value={net} />
          </dt>
          <dd className="">Nett (before taxes)</dd>
        </dl>
      </article>
    </section>
  );
};
