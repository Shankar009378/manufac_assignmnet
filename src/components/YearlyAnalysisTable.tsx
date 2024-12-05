import { Table } from '@mantine/core';
import { YearlyAnalysis } from '../types/agriculture';

interface Props {
  data: YearlyAnalysis[];
}

export function YearlyAnalysisTable({ data }: Props) {
  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Year</Table.Th>
          <Table.Th>Crop with Maximum Production</Table.Th>
          <Table.Th>Crop with Minimum Production</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {data.map((row) => (
          <Table.Tr key={row.year}>
            <Table.Td>{row.year}</Table.Td>
            <Table.Td>{row.maxProductionCrop}</Table.Td>
            <Table.Td>{row.minProductionCrop}</Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
}