import { FC } from 'react';
import './FlowList.css';
import Flow from '../Flow/Flow';
import { DisplayFlow } from '../../types/Flow.types';

interface IFlowList {
  flows: DisplayFlow[];
}

const FlowList:FC<IFlowList> = ({flows}) => {
  return (
    <ul className="list">
      {flows.map((item: any) => {
        return (<li key={item.id} className="list-item">
          <Flow flow={item}></Flow>
        </li>
        )
      })}
    </ul>
  );
}

export default FlowList;
