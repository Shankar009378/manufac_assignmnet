import { CropData, YearlyAnalysis, CropAnalysis } from '../types/agriculture';

export const calculateYearlyAnalysis = (data: CropData[]): YearlyAnalysis[] => {
  const yearlyData = new Map<number, CropData[]>();
  
  // Group data by year
  data.forEach(entry => {
    if (!yearlyData.has(entry.year)) {
      yearlyData.set(entry.year, []);
    }
    yearlyData.get(entry.year)?.push(entry);
  });

  return Array.from(yearlyData.entries()).map(([year, crops]) => {
    const maxProduction = crops.reduce((max, curr) => 
      curr.production > max.production ? curr : max, crops[0]);
    const minProduction = crops.reduce((min, curr) => 
      curr.production < min.production ? curr : min, crops[0]);

    return {
      year,
      maxProductionCrop: maxProduction.crop,
      minProductionCrop: minProduction.crop
    };
  }).sort((a, b) => a.year - b.year);
};

export const calculateCropAnalysis = (data: CropData[]): CropAnalysis[] => {
  const cropData = new Map<string, { yields: number[], areas: number[] }>();
  
  // Group data by crop
  data.forEach(entry => {
    if (!cropData.has(entry.crop)) {
      cropData.set(entry.crop, { yields: [], areas: [] });
    }
    const cropStats = cropData.get(entry.crop)!;
    cropStats.yields.push(entry.yield);
    cropStats.areas.push(entry.cultivationArea);
  });

  return Array.from(cropData.entries()).map(([crop, stats]) => ({
    crop,
    averageYield: Number((stats.yields.reduce((a, b) => a + b, 0) / stats.yields.length).toFixed(3)),
    averageCultivationArea: Number((stats.areas.reduce((a, b) => a + b, 0) / stats.areas.length).toFixed(3))
  })).sort((a, b) => a.crop.localeCompare(b.crop));
};