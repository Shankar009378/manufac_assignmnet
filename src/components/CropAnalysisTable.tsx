import { Table } from '@mantine/core';
import { CropAnalysis } from '../types/agriculture';

interface Props {
  data: CropAnalysis[];
}

export function CropAnalysisTable({ data }: Props) {
  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Crop</Table.Th>
          <Table.Th>Average Yield (1950-2020)</Table.Th>
          <Table.Th>Average Cultivation Area (1950-2020)</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {data.map((row) => (
          <Table.Tr key={row.crop}>
            <Table.Td>{row.crop}</Table.Td>
            <Table.Td>{row.averageYield}</Table.Td>
            <Table.Td>{row.averageCultivationArea}</Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
}