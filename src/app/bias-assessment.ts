export interface BiasAssessment {
  biasConsidered: boolean | null;
  datasource: string | null;
  biasType: string | null;
  metricCollected: boolean | null;
}

export function intialiseBiasAssessment(): BiasAssessment {
  return {
    biasConsidered: null,
    biasType: null,
    datasource: null,
    metricCollected: null,
  };
}
