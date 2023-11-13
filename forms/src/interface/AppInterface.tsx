
import FormSelector from '../components/FormSelector/FormSelector';
import { ContextProvider } from './Context/FormContext';
export default function AppInterface() {


  return (
    <ContextProvider>
      <FormSelector />
    </ContextProvider>
  );
}