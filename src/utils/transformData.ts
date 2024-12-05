import { CropData } from '../types/agriculture';

interface RawDataEntry {
  Country: string;
  Year: string;
  "Crop Name": string;
  "Crop Production (UOM:t(Tonnes))": string | number;
  "Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))": string | number;
  "Area Under Cultivation (UOM:Ha(Hectares))": string | number;
}

export const transformData = (rawData: RawDataEntry[]): CropData[] => {
  return rawData.map(entry => {
    // Extract year from "Financial Year (Apr - Mar), YYYY" format
    const year = parseInt(entry.Year.match(/\d{4}/)?.[0] || '0');
    
    // Convert empty strings to 0 and handle string/number values
    const production = entry["Crop Production (UOM:t(Tonnes))"] === "" ? 
      0 : Number(entry["Crop Production (UOM:t(Tonnes))"]);
    const yield_ = entry["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"] === "" ? 
      0 : Number(entry["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"]);
    const area = entry["Area Under Cultivation (UOM:Ha(Hectares))"] === "" ? 
      0 : Number(entry["Area Under Cultivation (UOM:Ha(Hectares))"]);

    return {
      year,
      crop: entry["Crop Name"],
      production,
      yield: yield_,
      cultivationArea: area
    };
  });
};