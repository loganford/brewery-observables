// beer.ts

export interface IBeer {
  id: number; // Primary key, generated on creation
  name: string; // e.g. "Hopadillo"
  style: string; // e.g. "India Pale Ale"
  abv: number; // Alcohol by Volume
  ibu: number; // International Bitterness Units (0-100)
  imageUrl?: string; // Optional URL for an image of the beer
}
