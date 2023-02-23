export interface DisplayFlow {
  id: string,
  amountUSD: string,
  sourceName: string,
  destinationName: string,
  destinationYear: string,
}

export interface Flow {
  id: string,
  amountUSD: string,
  sourceObjects: SourceObject[],
  destinationObjects: SourceObject[],
}

export interface FlowListResponse {
  data: {
    data: {
      flows: Flow[]
    }
  }
}

export interface SourceObject {
  type: SourceObjectType,
  name: string,
}

export enum SourceObjectType {
  Organization ='Organization',
  UsageYear = 'UsageYear'
}

export const DetailMode = 'Detail';
