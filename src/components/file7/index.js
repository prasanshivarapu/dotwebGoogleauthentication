import React, { useState, useEffect } from 'react';
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import Passwordlist from "../file6";
import './index.css';

function Passwordtext() {
  const navigate = useNavigate();
  
  const [passlist, setPasslist] = useState([]);
  const [inputtext1, setInputtext1] = useState('');
  const [inputtext2, setInputtext2] = useState('');
  const [inputtext3, setInputtext3] = useState('');
  const [isrun, setIsRun] = useState(false);
  const [inputtext4, setInputtext4] = useState('');

  useEffect(() => {
    // Retrieve password data from local storage and update the state
    try {
      const storedPasswords = localStorage.getItem('passwords');
      if (storedPasswords) {
        setPasslist(JSON.parse(storedPasswords));
      }
    } catch (error) {
      console.error('Error retrieving data from local storage:', error);
    }
  }, []);

  const input1 = event => {
    setInputtext1(event.target.value);
  }

  const input2 = event => {
    setInputtext2(event.target.value);
  }

  const input3 = event => {
    setInputtext3(event.target.value);
  }

  const submit = event => {
    event.preventDefault();

    if (inputtext1 !== '' && inputtext2 !== '' && inputtext3 !== '') {
      const passlists = {
        id: uuidv4(),
        name: inputtext1,
        pass: inputtext2,
        word: inputtext3,
      }

      try {
        localStorage.setItem(
          'passwords',
          JSON.stringify([...passlist, passlists]),
        );
      } catch (error) {
        console.error('Error saving data to local storage:', error);
      }

      setPasslist([...passlist, passlists]);
      setInputtext1('');
      setInputtext2('');
      setInputtext3('');
    } else {
      alert('Please fill all details');
    }
  }

  const checkboxing = () => {
    setIsRun(!isrun);
  }

  const search = event => {
    setInputtext4(event.target.value);
  }

  const type = () => {
    const hap = passlist.filter(each => each.name.includes(inputtext4));
    return hap;
  }

  const todo = id => {
    const filterd = passlist.filter(each => each.id !== id);
    localStorage.setItem('passwords', JSON.stringify(filterd));
    setPasslist(filterd);
  }

  const btn1 = () => {
    Cookies.remove("token");
    Cookies.remove("Token");
    navigate("/");
  }

  const typ = type();
  const pwlength = typ.length;

  return (
    <div className="greet1">
      <div className='btn'>
        <h1>
          My password <br /> saver
        </h1>
        <div>
          <button onClick={btn1} className='primary'> Logout</button>
        </div>
      </div>
      <div className="greet22">
        <img
          className="imagesmall"
          alt="avatar"
          src="https://res.cloudinary.com/dzleppv07/image/upload/v1693721044/997cead789f16653fe977c85b333e40a_nwklg9.gif"
        />
        <form className="greet2" onSubmit={submit}>
          <h1 className="heading">Add new password</h1>
          <input
            type="text"
            value={inputtext1}
            className="input1"
            placeholder="website"
            onChange={input1}
          />
          <input
            type="text"
            value={inputtext2}
            className="input2"
            placeholder="name"
            onChange={input2}
          />
          <input
            type="password"
            className="input3"
            placeholder="password"
            value={inputtext3}
            onChange={input3}
          />
          <button type="submit" className="adding">
            add
          </button>
        </form>
        <img
          className="image1"
          alt="avatar"
          src="https://res.cloudinary.com/dzleppv07/image/upload/v1693721044/997cead789f16653fe977c85b333e40a_nwklg9.gif"
        />
      </div>
      <div className="greet8">
        <div className="preet2">
          <p className="para">Your Password {pwlength}</p>
          <input
            type="search"
            placeholder="search"
            onChange={search}
            className="search"
          />
        </div>
        <hr />
        <div className="checkbox">
          <label htmlFor="pass" className="show">
            {' '}
            show password
          </label>
          <input
            id="pass"
            type="checkbox"
            className="checkboxw"
            onChange={checkboxing}
          />
        </div>
        {pwlength === 0 ? (
          <div className="center">
            <img
              alt="avatar"
              className="nopw"
              src="https://res.cloudinary.com/dzleppv07/image/upload/v1693721576/How-to-see-my-Facebook-password-saved-by-Android-phone_dyxpy5.gif"
            />
            <div className="emoji">
              <h1 className="noo">No Password</h1>
              <img
                alt="avatar"
                className="pocket"
                src="https://res.cloudinary.com/dmsyxfq2h/image/upload/v1685084375/pensive-face_1f614_ei88gr.gif"
              />
            </div>
          </div>
        ) : (
          <ul className="preet1">
            {typ.map(each => (
              <Passwordlist
                happy={each}
                todo={todo}
                run={isrun}
                pwlength1={pwlength}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Passwordtext;
