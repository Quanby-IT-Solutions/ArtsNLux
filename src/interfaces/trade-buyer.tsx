// src/interfaces/trade-buyer.tsx

export interface BuyerInfo {
  allowDataSharing: boolean;
  salutation: string;
  firstName: string;
  lastName: string;
  country: string;
  emailAddress: string;
  confirmEmailAddress: string;
  password: string;
  confirmPassword: string;
  companyName: string;
  designation: string;
  website: string;
  attendingFame: string;
  agreeToTerms: boolean;
  receiveNewsletters: boolean;
}

export interface BusinessInfo {
  officeAddress: string;
  contactNumber: string;
  purchasingRole: string;
  natureOfBusiness: string;
  businessNature: string;
  marketSegment: string[];
  annualSalesVolume: string;
  supplierName: string;
  salesVolume: string;
  suppliers: string[];
}

export interface ParticipationDetails {
  reasonsForRegistering: string[];
  howDidYouLearn: string[];
  socialMedia: string[];
  attendedPreviousEditions: string;
}

export interface FormData {
  buyerInfo: BuyerInfo;
  businessInfo: BusinessInfo;
  productCategories: string[];
  participationDetails: ParticipationDetails;
}
