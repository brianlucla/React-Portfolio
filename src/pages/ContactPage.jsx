import { useState } from 'react'

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    const { inputName, value } = event.target;

    if (inputName === 'formName') {
      return setName(value);
    } else if (inputName === 'formEmail'){
      return setEmail(value);
    } else {
      return setMessage(value);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="w-screen h-[650px] px-[20px] py-[50px] bg-[#3F2E56]">
      <div className="">
        <h1 className="text-white font-bold text-2xl py-5">Contact</h1>
        <form className="form pb-5" onSubmit={handleFormSubmit}>
          <input
            value={name}
            name="formName"
            onChange={handleInputChange}
            type="text"
            placeholder="John Doe"
            className="w-[300px]"
          />
        </form>
        <form className="form pb-5" onSubmit={handleFormSubmit}>
          <input
            value={email}
            name="formEmail"
            onChange={handleInputChange}
            type="text"
            placeholder="JohnDoe@email.com"
            className="w-[300px]"
          />
        </form>
        <form className="form pb-5 text" onSubmit={handleFormSubmit}>
          <input
            value={message}
            name="formMessage"
            onChange={handleInputChange}
            type="text"
            placeholder="Message"
            className="h-[150px] w-[300px]"
          />
        </form>
        <button type="submit" className="bg-[#759AAB] rounded-lg p-2">
          Submit
        </button>
        {}
      </div>
    </div>
  );
}

export default Form
