import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Data from './components/FlowList/FlowList';
import FlowPage from './components/pages/FlowPage/FlowPage';
import { DisplayFlow, Flow, FlowListResponse, SourceObject, SourceObjectType } from './types/Flow.types';

const apiLink = 'https://api.hpc.tools/v1/public/fts/flow?limit=10&planId=1079';

function App() {
  let [flows, setFlows] = useState<DisplayFlow[]>([]);

  useEffect(() => {
    axios.get(apiLink).then((response: FlowListResponse) => {
      console.log(response)
      let sourceName = '';
      let destinationName = '';
      let destinationYear = '';

      const displayFlows: DisplayFlow[] = response.data.data.flows.reduce((acc: DisplayFlow[], item: Flow): DisplayFlow[] => {
        sourceName = item.sourceObjects.find((source: SourceObject) => (source.type === SourceObjectType.Organization))?.name || '';
        if (!sourceName) return acc;
        destinationName = item.destinationObjects.find((destination: SourceObject) => destination.type === SourceObjectType.Organization)?.name || '';
        if (!destinationName) return acc;
        destinationYear = item.destinationObjects.find((destination: SourceObject) => destination.type === SourceObjectType.UsageYear)?.name || '';
        return [
          ...acc,
          {
            id: item.id,
            amountUSD: item.amountUSD,
            sourceName,
            destinationName,
            destinationYear,
          }
        ]
      }, []);

      setFlows(displayFlows);
    })
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Data flows={flows} />}></Route>
          <Route path="/flow/:flowId" element={<FlowPage flows={flows} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
