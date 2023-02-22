import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { DetailMode, DisplayFlow } from '../../../types/Flow.types';
import Flow from '../../Flow/Flow';

interface IFlow {
  flows: DisplayFlow[];
}

const FlowPage:FC<IFlow> = (props: any) => {
  const { flows } = props;
  const {flowId} = useParams();
  const flow = flows.find((item:DisplayFlow) => item.id === flowId);

  return (
    <>
      {flow ?
          <Flow flow={flow} mode={DetailMode}></Flow>
        : (
           `Flow with id ${flowId} is not found`
        )
      }
    </>
  );
}

export default FlowPage;
