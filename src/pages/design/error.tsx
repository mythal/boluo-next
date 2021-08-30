import { p } from '../../styles/utility/spacing';
import { Page } from '../../helper/layout';
import { getLayout } from '../../components/DesignLayout';

const Error: Page = () => {
  return <p>hello, world</p>;
};

Error.getLayout = getLayout;
Error.title = 'Error Handing';

export default Error;
