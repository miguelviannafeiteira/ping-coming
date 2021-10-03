import './App.css';
import Input from './Input.js';
import useForm from './useForm';
import dashboard from './images/illustration-dashboard.png';

function App() {
  const email = useForm('email');

  return (
    <>
      <div className="container">
        <div className="title">
          <h1 className="ponto">PING</h1>
          <h2>
            We are launching <b>soon!</b>{' '}
          </h2>
          <p>Subscribe and get notified</p>
        </div>
        <form className="form" onSubmit={(event) => event.preventDefault()}>
          <Input name="E-mail" type="text" {...email} />
          <button>Notify Me</button>
        </form>
        <div className="img">
          <img src={dashboard} alt="" />
        </div>
      </div>
    </>
  );
}

export default App;
