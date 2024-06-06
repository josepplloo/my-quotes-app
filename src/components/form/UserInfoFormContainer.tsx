import { QuoteProvider } from '@/contexts/QuoteContext/Provider';
import {UserInfoForm} from './UserInfo';
import { BillStats } from '../transactions/BillStats';
import { ContractInfoForm } from './ContractInfo';
import { BudgetInput } from '../transactions/Budget';
import { Stepper, StepAccordion } from '../stepper';
import { StepperButtons } from '../stepper/StepperButtons';
import { InfrastructureForm } from './InfrastructureForm';

export const UserInfoFormContainer = () => {
  return(
    <div className="mb-32 mt-32 text-center lg:mb-0 lg:text-left">
        <QuoteProvider>
          <section className="grid lg:grid-cols-3 place-content-center">
            <Stepper key="step-0" index={0} />
            <Stepper key="step-1" index={1} />
            <Stepper key="step-2" index={2} />
          </section>
          <section>
            <StepAccordion key="step-0" index={0}>
              <UserInfoForm />
            </StepAccordion>
            <StepAccordion key="step-1" index={1}>
              <InfrastructureForm />
            </StepAccordion>
            <StepAccordion key="step-2" index={2}>
              <section className="lg:grid-cols-3">
                <ContractInfoForm />
                <BudgetInput />
                <BillStats />
              </section>
            </StepAccordion>
          </section>
          <StepperButtons />
        </QuoteProvider>
      </div>
  )
}
