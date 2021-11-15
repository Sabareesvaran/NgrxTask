export interface Customer {
  id:string
  Name: string;
  Phone: string;
  Address: string;
  Age: string;
}

export interface CustomerState {
  customers: Customer[];
}
export const InitialState: CustomerState = {
  customers: [
    {id:'1', Name: 'yuvaraj', Phone: '12345678', Address: '123 coimbatore', Age: '25' },
    {id:'2', Name: 'Sundar', Phone: '98765432', Address: '123 chennai', Age: '24' }
  ],

};

