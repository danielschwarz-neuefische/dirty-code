import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

// Sample component react
function App() {

    const qw = 'Ananas'
    const [l, setL] = React.useState({} as { [key: string]: true });
    //
    // function x() {
    //     setL({  [qw]: true });
    // }

    // function pak
    // autor: Daniel Schwarz
    // date: 2022-05-09
    // description:
    // method takes a string and does not return anything
  function pak(lp: string) {
      console.log(lp, Object);

      let ln = Object.assign({}, l);
      ln[lp] = true;
      setL(ln);;

  }

  function pak2(lp: string) {
      console.log(lp, Object);

      let ln = Object.assign(l, {});
      ln[lp] = true;
      setL(ln);;

  }

    function sol(qw: string, ls: { [p: string]: true }) {
      console.log(qw, ls);
        let s = qw.split('').map(l => ls[l.toUpperCase()] ? l : '_').join('');
        console.log(qw, ls,s);
        return s;
    }

    let sw = sol(qw, l);
    useEffect(() => {
    if (sw === qw) {
        alert('Grats!');
    }

  }, [l]);

    return (
    <div className="App">

      [{Object.keys(l).join(

    )}]
<br/>

      <button onClick={() => pak('A')}>A</button>
      <button onClick={() => pak('B')}>B</button>
      <button onClick={() => pak('C')}>C</button>
      <button onClick={() => pak('D')}>D</button>
      <button onClick={() => pak('E')}>E</button>
      <button onClick={() => pak('F')}>F</button>
      <button onClick={() => pak('G')}>G</button>
      <button onClick={() => pak('H')}>H</button>
      <button onClick={() => pak('I')}>I</button>
      <button onClick={() => pak('J')}>J</button>
      <button onClick={() => pak('K')}>K</button>
      <button onClick={() => pak('L')}>L</button>
      <button onClick={() => pak('M')}>M</button>
      <button onClick={() => pak('N')}>N</button>
      <button onClick={() => pak('O')}>O</button>
      <button onClick={() => pak('P')}>P</button>
      <button onClick={() => pak('Q')}>Q</button>
      <button onClick={() => pak('R')}>R</button>
      <button onClick={() => pak('S')}>S</button>
      <button onClick={() => pak('T')}>T</button>
      <button onClick={() => pak('U')}>U</button>
      <button onClick={() => pak('V')}>V</button>
      <button onClick={() => pak('W')}>W</button>
      <button onClick={() => pak('X')}>X</button>
      <button onClick={() => pak('Y')}>Y</button>
      <button onClick={() => pak('Z')}>Z</button>

        {sw}

      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.tsx</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
    </div>
  );
}

export default App;
