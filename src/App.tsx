import { useEffect } from "react";

interface CheckDataStorage {
  userID: string
}

const botID = '5705683065';

const urlBotID = new URL(window.location.href).searchParams.get('bot');

const sendData = (data: string) => tg.sendData(data);

// @ts-ignore:next-line
const tg: any = window.Telegram.WebApp;

const checkDataStorage: CheckDataStorage = {} as CheckDataStorage;
Object.defineProperty(checkDataStorage, 'userID', {
  configurable: false, writable: false, enumerable: false, value: tg.initDataUnsafe?.user?.id
});

function App() {
  return (
    (botID === urlBotID && checkDataStorage.userID) ? 
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
                {/* <pre>{urlBotToken}</pre>
                <pre>{botToken}</pre> */}
                <pre>{JSON.stringify(tg, null, '\t')}</pre>
              </li>
              <button className="btn" onClick={() => sendData('Some data')}></button>
            </ul>
          </div>
        </main>
      </>
    : null
  );
}

export default App;
