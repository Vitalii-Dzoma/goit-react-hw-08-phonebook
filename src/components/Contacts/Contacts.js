import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { remove } from 'redux/itemsSlice';

export default function RenderContacts({ contacts, onDelete, stopRender }) {
  const contactItems = useSelector(state => state.items.contacts);
  console.log(contactItems);
  const dispatch = useDispatch();
  return (
    <>
      <h2>Contacts</h2>
      <p>Find contacts by name</p>
      <ul>
        {contactItems.map(({ name, number, id }) => (
          <li key={id}>
            {name} : {number}
            <button onClick={() => onDelete(id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

// class Contacts extends React.Component {
//   render() {
//     const { contacts } = this.props;
//     const { onDelete } = this.props;
//     const { stopRender } = this.props;
//     return (
//       <>
//         <h2>Contacts</h2>
//         <p>Find contacts by name</p>
//         <ul>
//           {contacts.map(({ name, number, id }) => (
//             <li key={id}>
//               {name} : {number}
//               <button onClick={() => onDelete(id)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       </>
//     );
//   }
// }

// export default Contacts;
