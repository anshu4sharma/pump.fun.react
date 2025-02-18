declare module 'lightweight-charts-react' {
  import { ChartOptions } from 'lightweight-charts';
  import { FC, ReactNode } from 'react';

  export const LightweightCharts: FC<{ options: ChartOptions; children?: ReactNode }>;
  export const AreaSeries: FC<any>; // Adjust the props as needed
  // Add other exports as necessary
} 