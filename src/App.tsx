import { useEffect } from "react";

interface CheckDataStorage {
  userID: string
  colorScheme: string
  backgroundColor: string
}

// @ts-ignore:next-line
const tg: any = window.Telegram.WebApp;

const checkDataStorage: CheckDataStorage = {} as CheckDataStorage;
Object.defineProperty(checkDataStorage, 'userID', {
  configurable: false, writable: false, enumerable: false, value: tg.initDataUnsafe?.user?.id
});
Object.defineProperty(checkDataStorage, 'colorScheme', {
  configurable: false, writable: false, enumerable: false, value: tg.initDataUnsafe?.hash
});
Object.defineProperty(checkDataStorage, 'backgroundColor', {
  configurable: false, writable: false, enumerable: false, value: tg.backgroundColor
});

function App() {
  return (
    (checkDataStorage.userID && checkDataStorage.colorScheme && checkDataStorage.backgroundColor) ? 
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
                  <pre>{JSON.stringify(tg, null, '\t')}</pre>
                }
              </li>
            </ul>
          </div>
        </main>
      </>
    : null
  );
}

export default App;
