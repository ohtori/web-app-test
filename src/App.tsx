import { useEffect } from "react";

function App() {

  // @ts-ignore:next-line
  useEffect(() => console.log(window.Telegram.WebApp));
  useEffect(() => {
    fetch('https://api.telegram.org/bot5705683065:AAEKv_FvBf83a9m4JmwAJM_qwEvRXcJ6rf4/getUpdates')
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(e => e.message)
  });

  return (
    <>
      <header className="header">
        <div className='container'>
          <h1>Telegram WebApp test</h1>
        </div>
      </header>
      <main className='main'>
        <div className='container'>
          <h2>Messages List</h2>
          <ul className='messages-list'>
            <li>Hello!</li>
            <li>Hi</li>
            <li>Isabella, Princess of Asturias (2 October 1470 – 23 August 1498) was the eldest daughter and heir presumptive of King Ferdinand II of Aragon and Queen Isabella I of Castile. She was Queen of Portugal as the wife of King Manuel I from 30 September 1497 until her death the following year. </li>
            <li>William Samoei Arap Ruto (born 21 December 1966) is a Kenyan politician who is the president-elect of Kenya.[1] He has served as the deputy president of Kenya since 2013.[2][3][4] In the 2013 presidential election, he was elected the Deputy President alongside President Uhuru Kenyatta under the Jubilee Alliance ticket.</li>
          </ul>
        </div>
      </main>
    </>
  );
}

export default App;
