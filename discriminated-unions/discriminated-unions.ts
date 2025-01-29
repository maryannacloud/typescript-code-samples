type Owned = {
  kind: 'Owned'; 
  owner: string; 
}; 

type Mortgaged = {
  kind: 'Mortgaged'; 
  owner: string 
  bank: string; 
  balance: number; 
  interestRate: number; 
} 

type Rental = {
  kind: 'Rental'; 
  owner: string; 
  rent: number; 
  renter: string; 
} 

type Property = Owned | Mortgaged | Rental 

function getDescription(property: Property): string {
  switch (property.kind) {
    case 'Rental':
      return `This rents to ${property.renter} for ${property.rent} a month.`;
    case 'Mortgaged':
      return `This has a loan from ${property.bank} for ${property.balance}.`;
    case 'Owned':
      return `This is completely owned by ${property.owner}.`;
    default:
      return 'Unknown property type';
  }
  return 'A property owned by ' + property.owner; 
} 

// These log statements here are to test the getDescription() function
// Please do NOT remove
let rental: Rental = {
  kind: 'Rental',
  owner: 'Robert', 
  rent: 3500, 
  renter: 'Nik and Annie'};

  console.log(getDescription(rental)); 

let owned: Owned = {
  kind: 'Owned', 
  owner: 'Jenny'}; 
  console.log(getDescription(owned)); 

let mortgaged: Mortgaged = {
  kind: 'Mortgaged', 
  owner: 'Carlos', 
  bank: 'USA Bank', 
  balance: 350000, 
  interestRate: 3.5}; 

  console.log(getDescription(mortgaged)); 