import { QuoteProvider } from '@/contexts/QuoteContext/Provider';
import {UserInfoForm} from './UserInfo';

export const UserInfoFormContainer = () => {
  return(
    <div className="mb-32 mt-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-2 lg:text-left">
        <QuoteProvider>
          <UserInfoForm />
        </QuoteProvider>
      </div>
  )
}
