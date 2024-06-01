import { QuoteProvider } from '@/contexts/QuoteContext/Provider';
import {UserInfoForm} from './UserInfo';
import { BillStats } from '../transactions/BillStats';
import { ContractInfoForm } from './ContractInfo';
import { BudgetInput } from '../transactions/Budget';
import { Stepper } from '../stepper';
import { StepperButtons } from '../stepper/StepperButtons';
import { InfrastructureForm } from './InfrastructureForm';

export const UserInfoFormContainer = () => {
  return(
    <div className="mb-32 mt-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
        <QuoteProvider>
          <Stepper key="0" index={0}>
            <UserInfoForm />
          </Stepper>
          <Stepper key="1" index={1}>
            <InfrastructureForm />
          </Stepper>
          <Stepper key="2" index={2}>
            <section className="lg:grid-cols-3">
              <ContractInfoForm />
              <BudgetInput />
              <BillStats />
            </section>
          </Stepper>
          <StepperButtons />
        </QuoteProvider>
      </div>
  )
}
