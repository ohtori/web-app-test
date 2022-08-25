import { useEffect, useState } from "react";

function App() {
  const [serverData, setServerData] = useState({ok: null, result: []});
  // @ts-ignore:next-line
  useEffect(() => {
    fetch('https://shielded-springs-37865.herokuapp.com/secret-path/start')
      .then(res => res.json())
      .then(data => setServerData(data))
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
            {serverData.result.map((message: {message: any}) => <li>{JSON.stringify(message.message, null, 2)}</li>)}
          </ul>
        </div>
      </main>
    </>
  );
}

export default App;
