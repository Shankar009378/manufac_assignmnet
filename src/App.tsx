import { Container, Title, Stack } from '@mantine/core';
import { YearlyAnalysisTable } from './components/YearlyAnalysisTable';
import { CropAnalysisTable } from './components/CropAnalysisTable';
import { calculateYearlyAnalysis, calculateCropAnalysis } from './utils/dataAnalysis';
import { transformData } from './utils/transformData';
import rawData from './data/agriculture.json';

export function App() {
  const data = transformData(rawData);
  const yearlyAnalysis = calculateYearlyAnalysis(data);
  const cropAnalysis = calculateCropAnalysis(data);

  return (
    <Container size="lg" py="xl">
      <Title order={1} mb="xl" ta="center">Indian Agriculture Data Analysis</Title>
      
      <Stack gap="xl">
        <div>
          <Title order={2} mb="md">Yearly Production Analysis</Title>
          <YearlyAnalysisTable data={yearlyAnalysis} />
        </div>
        
        <div>
          <Title order={2} mb="md">Crop Analysis (1950-2020)</Title>
          <CropAnalysisTable data={cropAnalysis} />
        </div>
      </Stack>
    </Container>
  );
}