import { Converter, IConverterItem } from './components/converter/Converter';
import {axiocurrencyRequest} from 'components/header/axios/axios'
import {useState, useEffect} from 'react';
import { Header } from 'components/header/Header';


function App() {

  const [renderList, setRenderList] = useState<IConverterItem[]>([{
    exchangedate: `{${new Date().toLocaleDateString()}}`,
    txt: 'Гривні',
    r030: 860,
    cc: 'UAH',
    rate: 1,
  }]);

  useEffect(() => {
    axiocurrencyRequest(renderList, setRenderList);
  }, [])

  return (
    <div className="App">
      <Header renderList={renderList}/>
      <Converter renderList={renderList}/>
    </div>
  );
}

export default App;
