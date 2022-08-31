import { useEffect } from "react";

interface CheckDataStorage {
  userID: string
}

// const botID = '5705683065';

// const urlBotID = new URL(window.location.href).searchParams.get('bot');

const sendData = (data: string) => {
  console.log(data);
  
  tg.sendData(data)
};

// @ts-ignore:next-line
const tg: any = window.Telegram.WebApp;
tg.MainButton.enable();
tg.MainButton.show();
tg.onEvent('mainButtonClicked', function(){
	tg.sendData("some string that we need to send"); 
	//при клике на основную кнопку отправляем данные в строковом виде
});

// const checkDataStorage: CheckDataStorage = {} as CheckDataStorage;
// Object.defineProperty(checkDataStorage, 'userID', {
//   configurable: false, writable: false, enumerable: false, value: tg.initDataUnsafe?.user?.id
// });

function App() {
  return (
    // (botID === urlBotID && checkDataStorage.userID) ? 
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
            </ul>
            <button className="btn" onClick={() => tg.sendData('Data from html btn')}>Send data</button>
          </div>
        </main>
      </>
    // : null
  );
}

export default App;
