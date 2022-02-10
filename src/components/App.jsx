import Form from "./Form/Form";
import { nanoid } from 'nanoid';
 const formId = nanoid(); 
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        textTransform: 'uppercase',
        color: '#010101',
      }}
    >

      <Form id={formId}/>
    </div>
  );
};
