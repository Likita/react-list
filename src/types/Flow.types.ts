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
  sourceObjects: {
    type: string,
    name: string,
  }[],
  destinationObjects: {
    type: string,
    name: string,
  }[],
}

export interface FlowListResponse {
  data: {
    data: {
      flows: Flow[]
    }
  }
}

export const DetailMode = "Detail";
export const TypeOrganization = "Organization";
export const TypeYear = "UsageYear";
