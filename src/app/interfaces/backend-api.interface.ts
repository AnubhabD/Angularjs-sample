export interface ListingData {
  _id: string;
  fullName: string;
  emailId: string;
  contactNumber: string;
  password: string;
  usertype: string;
  is_verified: boolean;
  is_Available: boolean;
  is_Active: boolean;
  is_deleted: boolean;
  // address: Partial<{
  //   street: string;
  //   city: string;
  //   zip: string;
  // }>;
}

export interface BackendApiData {
  data: {
    list: ListingData[];
  };
}