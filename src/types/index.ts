export type soilT = {
  createdAt: string
  updatedAt: string
  id: string
  nitrogen: string
  phosphorous: string
  potassium: string
  conductivity: string
  moisture: string
  temperature: string
  deviceId: string
  ph: string
};

export type paginationT = {
  totalPages: number;
  totalElements: number;
  last: boolean;
  first: boolean;
  pageNumber: number;
  pageSize: number;
};
export type seriesT = {
  name: string;
  data: string[];
};
export type chartsT = {
  nitrogen: seriesT
  potassium: seriesT
  phosphorus: seriesT
  conductivity: seriesT
  moisture: seriesT
  temperature: seriesT
  ph: seriesT
};