import { QuoteProvider } from '@/contexts/QuoteContext/Provider';
import {UserInfoForm} from './UserInfo';
import { BillStats } from '../transactions/BillStats';
import { ContractInfoForm } from './ContractInfo';
import { BudgetInput } from '../transactions/Budget';

export const UserInfoFormContainer = () => {
  return(
    <div className="mb-32 mt-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
        <QuoteProvider>
          <UserInfoForm />
          <ContractInfoForm />
          <section>
            <BudgetInput />
            <BillStats />
          </section>
        </QuoteProvider>
      </div>
  )
}
