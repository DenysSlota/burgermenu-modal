
import { useState } from 'react';
import './App.css';
import Menu from "./menu/Menu";
import Modal from './Modal/Modal';

function App() {
  const [menuActive, setMenuActive] = useState(false)
  const [modalActive, setModalActive] = useState(true)
  const items = [{value:"Main", href: '/main'}, {value:"Price", href: '/price'}, {value:"Contacts", href: '/contacts'}, {value:"About", href: '/about'}]
  return (
    <div className="App">
      <nav>
        <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}></div>
      </nav>
      <main>
        <button className="open-btn" onClick={() => setModalActive(true)}>Open modal</button>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolorum repellendus ipsam magni possimus iusto quas provident aspernatur nobis fuga excepturi vitae eveniet, dolores iste, quidem distinctio eius, voluptate ad?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolorum repellendus ipsam magni possimus iusto quas provident aspernatur nobis fuga excepturi vitae eveniet, dolores iste, quidem distinctio eius, voluptate ad?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolorum repellendus ipsam magni possimus iusto quas provident aspernatur nobis fuga excepturi vitae eveniet, dolores iste, quidem distinctio eius, voluptate ad?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolorum repellendus ipsam magni possimus iusto quas provident aspernatur nobis fuga excepturi vitae eveniet, dolores iste, quidem distinctio eius, voluptate ad?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolorum repellendus ipsam magni possimus iusto quas provident aspernatur nobis fuga excepturi vitae eveniet, dolores iste, quidem distinctio eius, voluptate ad?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolorum repellendus ipsam magni possimus iusto quas provident aspernatur nobis fuga excepturi vitae eveniet, dolores iste, quidem distinctio eius, voluptate ad?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolorum repellendus ipsam magni possimus iusto quas provident aspernatur nobis fuga excepturi vitae eveniet, dolores iste, quidem distinctio eius, voluptate ad?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolorum repellendus ipsam magni possimus iusto quas provident aspernatur nobis fuga excepturi vitae eveniet, dolores iste, quidem distinctio eius, voluptate ad?</p>
      </main>
      <Menu active={menuActive} setActive={setMenuActive} header={"Menu"} items={items}/>
      <Modal >
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus culpa mollitia, perferendis architecto fugiat repudiandae enim quas temporibus, error perspiciatis animi delectus corporis nihil. Earum sed ut eius maiores similique.</p>
      </Modal>
      <Modal active={modalActive} setActive={setModalActive}>
        <form action="">
          <input type="text" placeholder='name' />
          <input type="text" placeholder='login' />
          <input type="text" placeholder='password' />
          <button className='modal-btn'>Send</button>
        </form>
      </Modal>
    </div>
  );
}

export default App;
