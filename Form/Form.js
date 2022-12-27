import './Form.css';
import TextField from '@mui/material/TextField';

function Form() {
  return (
    <div className="form-component">
      <div className='form-title'>
        <p>Form</p>
      </div>
      <div className="form">   
        <form>
          <div>
            <TextField className="input-box" label="Name" defaultValue="Hello World"/>
            <TextField className="input-box" label="FirstName" defaultValue="Hello World"/>
            <TextField className="input-box" label="LastName" defaultValue="Hello World"/>
            <TextField className="input-box" label="Email" defaultValue="Hello World"/>
          </div>
          <button type="button" class="btn btn-primary">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
