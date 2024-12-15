export type soilT = {
  createdAt: string
  updatedAt: string
  readingDate: string
  crop: string
  id: string
  nitrogen: string
  phosphorous: string
  potassium: string
  conductivity: string
  moisture: string
  temperature: string
  deviceId: string
  ph: string
  shamba: shambaResT
};

export interface airT {
  createdAt: string
  updatedAt: string
  id: string
  readingDate: string
  humidity: string
  temperature: string
  crop: string
  deviceId: string
  shamba: shambaResT
}

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
  categories: String[]
  crops: String[]
};
export type air_chartsT = {
  temp: seriesT
  humidity: seriesT
  categories: String[]
  crops: String[]
};

export interface rangeT {
  start: string
  end: string
}

export interface loginT {
  email: string
  password: string
}
export interface form_validation_errorT {
  status: boolean
  message: string
}

export interface login_errorT {
  email: form_validation_errorT
  password: form_validation_errorT
}
export interface loggedInT {
  token: string
  id: string
  email: string
  f_name: string
  l_name: string
  fullName: string
  role: any
}
export interface registerT {
  email: string
  f_name: string
  l_name: string
  password: string
  password_confirm: string
  country: string
  phoneNumber: string
}
export interface register_errorT {
  email: form_validation_errorT
  f_name: form_validation_errorT
  l_name: form_validation_errorT
  password: form_validation_errorT
  password_confirm: form_validation_errorT
  phoneNumber: form_validation_errorT
}
export interface shambaT {
  name: string
  farmingType: string
  location: string
  crops: string[]
}
export interface shambaUpdateT {
  name: string
  farmingType: string
  location: string
  addedCrops: string[]
  removedCrops: string[]
}
export interface mimeaT {
  crop: CropT
}
export interface shambaResT {
  createdAt: string
  updatedAt: string
  id: string
  readingDate: string
  name: string
  farmingType: string
  location: string
  crop: CropT[]
  farmCrops: mimeaT[]
}
export interface shambaDropDownT {
  id: string
  name: string
}
export interface rangeDateT {
  start: string
  end: string
}
export interface DateT {
  date: string
}

export interface CropT {
  createdAt: string
  updatedAt: string
  id: string
  readingDate: string
  name: string
}
export interface Crop_payloadT {
  id: string
  readingDate: string
  name: string
}
export interface ContactUsT {
  readingDate: string
  email: string
  phoneNumber: string
  message: string
  fname: string
  lname: string
}