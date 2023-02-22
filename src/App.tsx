import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Data from './components/FlowList/FlowList';
import FlowPage from './components/pages/FlowPage/FlowPage';
import { DisplayFlow, Flow, FlowListResponse, TypeOrganization, TypeYear } from './types/Flow.types';

const apiLink = 'https://api.hpc.tools/v1/public/fts/flow?limit=10&planId=1079';

function App() {
  let [flows, setFlows] = useState<DisplayFlow[] | []>([]);

  useEffect(() => {
    axios.get(apiLink).then((response: FlowListResponse) => {
      let sourceName = '';
      let destinationName = '';
      let destinationYear = '';

      const flows = response.data.data.flows.reduce((acc: DisplayFlow[], item: Flow): any => {
        item.sourceObjects.map((source: any) => {
          if (source.type === TypeOrganization) {
            sourceName = source.name;
          }
          return source;
        })
        item.destinationObjects.map((destination: any) => {
          if (destination.type === TypeOrganization) {
            destinationName = destination.name;
          }
          if (destination.type === TypeYear) {
            destinationYear = destination.name;
          }
          return destination;
        })

        if (!sourceName || !destinationName) return false;
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
      }, [])
      setFlows(flows);
    })
  }, [])

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
