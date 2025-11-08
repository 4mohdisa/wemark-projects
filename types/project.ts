export interface Project {
  id: number;
  title: string;
  location: string;
  status: string;
  category: string;
  image: string;
  gallery?: string[];
  floorPlan?: string;
  investmentAmount: string;
  expectedReturn: string;
  timeline: string;
  description: string;
  longDescription?: string;
  beds: number;
  baths: number;
  parking: number;
  landSize: string;
  houseSize?: string;
  yearBuilt?: string;
  propertyFeatures?: Array<{
    name: string;
    icon: string;
    description: string;
  }>;
  locationFeatures?: string[];
  investmentHighlights?: string[];
  features?: string[];
  investmentDetails?: {
    minimumInvestment: string;
    maximumInvestment: string;
    expectedReturn: string;
    projectDuration: string;
    totalProjectValue: string;
    unitsAvailable: number;
    soldUnits: number;
  };
}
