import { FC } from 'react';
import './Flow.css';
import { NavLink } from "react-router-dom";
import { DetailMode, DisplayFlow } from '../../types/Flow.types';

interface IFlow {
  flow: DisplayFlow;
  mode?: string
}

const Flow: FC<IFlow> = (props: any) => {
  const { flow, mode } = props;

  return (
    <div className="flow">
      <div>
          <dt><strong>ID</strong></dt>
          <dd>
            {mode === DetailMode
              ?
                flow.id
              :
              <NavLink to={`flow/${flow.id}`} className="link">{flow.id}</NavLink>
            }
          </dd>
      </div>
      <div><dt><strong>Amount USD</strong></dt><dd>{flow.amountUSD}</dd></div>
      <div><dt><strong>Source Name</strong></dt><dd>{flow.sourceName}</dd></div>
      <div><dt><strong>Destination Name</strong></dt><dd>{flow.destinationName}</dd></div>
      <div><dt><strong>Destination Year</strong></dt><dd>{flow.destinationYear}</dd></div>
    </div>
  );
}

export default Flow;
