let lastProductId = 0; // This holds the last used product ID

export function addDonation(donation) {
  lastProductId++; // Increment the ID for each new product
  donation.id = lastProductId + ""; // Assign the incremented ID to the new product
  AllDonations.push(donation);
  console.log(donation);
  // Return the product with ID for further use if necessary
}

export const AllDonations = [];
