export interface CropData {
  year: number;
  crop: string;
  production: number;
  yield: number;
  cultivationArea: number;
}

export interface YearlyAnalysis {
  year: number;
  maxProductionCrop: string;
  minProductionCrop: string;
}

export interface CropAnalysis {
  crop: string;
  averageYield: number;
  averageCultivationArea: number;
}