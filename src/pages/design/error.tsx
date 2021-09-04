import { Page } from '../../helper/layout';
import { getLayout } from '../../components/DesignLayout';
import Oops from '../../components/Oops';

const Error: Page = () => {
  return (
    <div>
      <Oops error={'Something'} />
    </div>
  );
};

Error.getLayout = getLayout;
Error.title = 'Error Handing';

export default Error;
