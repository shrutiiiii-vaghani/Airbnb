import React from 'react';

const properties = [
  {
    id: 1,
    title: 'Cozy Apartment',
    description: 'A beautiful cozy apartment in the heart of the city.',
    price: 120,
    image: 'https://media.istockphoto.com/id/1212170511/photo/scandinavian-style-living-room-interior.jpg?s=612x612&w=0&k=20&c=3iI_6kD95u4mDx8wBx8gktvFpvA1rceZfAsC0WCO82c=',
  },
  {
    id: 2,
    title: 'Luxury Villa',
    description: 'A stunning luxury villa with a pool and garden.',
    price: 350,
    image: 'https://images.pexels.com/photos/5178060/pexels-photo-5178060.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  },
  {
    id: 3,
    title: 'Cozy Villa',
    description: 'A beautiful cozy villa in the heart of the city.',
    price: 180,
    image: 'https://images.pexels.com/photos/5361754/pexels-photo-5361754.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  },
  {
    id: 4,
    title: 'Golden House',
    description: 'A stunning golden house with a pool and garden.',
    price: 250,
    image: 'https://img.freepik.com/premium-photo/modern-house-exterior-ai-generated_1116642-261.jpg?size=626&ext=jpg&ga=GA1.1.1088399729.1706413748&semt=ais_hybrid',
  },
  {
    id: 5,
    title: 'Oceanfront Paradise',
    description: 'A beautiful beachside home with a breathtaking ocean view.',
    price: 420,
    image: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 6,
    title: 'Modern City Loft',
    description: 'A sleek, modern loft in the heart of downtown with cityscape views.',
    price: 200,
    image: 'https://images.pexels.com/photos/259950/pexels-photo-259950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 7,
    title: 'Rustic Cabin Retreat',
    description: 'A peaceful, rustic cabin nestled in the woods.',
    price: 150,
    image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 8,
    title: 'Mountain Chalet',
    description: 'A charming chalet with stunning mountain views.',
    price: 300,
    image: 'https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 9,
    title: 'Urban Penthouse',
    description: 'A luxurious penthouse apartment with a private rooftop terrace.',
    price: 500,
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 10,
    title: 'Country Farmhouse',
    description: 'A charming farmhouse with expansive countryside views.',
    price: 160,
    image: 'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2016/10/18/2/ACM-Design_Rustic-Modern-Carriage-House_10.jpg.rend.hgtvcom.1280.853.suffix/1495033477508.jpeg',
  },
  {
    id: 11,
    title: 'Seaside Cottage',
    description: 'A quaint seaside cottage perfect for a relaxing getaway.',
    price: 140,
    image: 'https://images.pexels.com/photos/706140/pexels-photo-706140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 12,
    title: 'Historic Manor',
    description: 'A grand historic manor with vintage charm and modern amenities.',
    price: 320,
    image: 'https://images.pexels.com/photos/707915/pexels-photo-707915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 13,
    title: 'Desert Oasis',
    description: 'A luxurious desert home with a pool and panoramic views.',
    price: 290,
    image: 'https://images.pexels.com/photos/70441/pexels-photo-70441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 14,
    title: 'Ski Lodge',
    description: 'A cozy ski lodge located near the best slopes in town.',
    price: 270,
    image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 15,
    title: 'Tropical Villa',
    description: 'A beautiful tropical villa with a private garden and pool.',
    price: 370,
    image: 'https://images.pexels.com/photos/1140913/pexels-photo-1140913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 16,
    title: 'Countryside Bungalow',
    description: 'A cozy countryside bungalow surrounded by nature.',
    price: 130,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/George_L._Burlingame_House%2C_1238_Harvard_St%2C_Houston_%28HDR%29.jpg/1200px-George_L._Burlingame_House%2C_1238_Harvard_St%2C_Houston_%28HDR%29.jpg',
  },
  
];


const PropertyList = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Property Listings</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4"> {/* Change to grid-cols-4 */}
        {properties.map(property => (
          <div key={property.id} className="border rounded-lg overflow-hidden shadow-lg">
            <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-xl">{property.title}</h3>
              <p className="text-gray-700">{property.description}</p>
              <p className="text-indigo-600 font-bold">${property.price}/night</p>
              <button className="mt-2 bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default PropertyList;
