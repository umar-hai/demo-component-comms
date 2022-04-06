import { BiasAssessment } from './bias-assessment';

export interface BiasProgress {
  biasConsidered: number;
}

export function createBiasProgress(assessment: BiasAssessment): BiasProgress {
  return {
    biasConsidered: assessment.biasConsidered ? 100 : 0,
  };
}
