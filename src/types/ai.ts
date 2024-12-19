export interface aisoilT {
  crop: string
  soilProperties: soilPropertyConfigT[]
  summary: string
  fertilizer_recommendation: FertilizerRecommendation
}



export interface soilPropertyConfigT {
  status: string
  name: string
  importance: string
  recommendation: string
}

export interface FertilizerRecommendation {
  ideal_type_of_fertilizer: string
  suggested_nutrient_ratios: string
  application_rate: string
  application_method: string
  supplementary_practices: string
  importance_of_recommended: string
}