import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
      // @ts-ignore:next-line
      console.log(window.Telegram.WebApp);
      
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
            <li>
              {
                // @ts-ignore:next-line
                <pre>{JSON.stringify(window.Telegram.WebApp, null, '\t')}</pre>
              }
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}

export default App;
