import { Page } from '../../helper/layout';
import Oops from '../../components/Oops';
import { getLayout } from '../../components/DesignLayout';

const ErrorHandling: Page = () => {
  return (
    <div>
      <Oops error={'Something'} />
    </div>
  );
};

ErrorHandling.getLayout = getLayout;
ErrorHandling.title = 'Error Handing';
export default ErrorHandling;
