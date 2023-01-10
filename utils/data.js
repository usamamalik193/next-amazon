import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Usama",
      email: "usama.malik@gmail.com",
      password: bcrypt.hashSync("12345"),
      isAdmin: true,
    },
    {
      name: "User",
      email: "user.use@gmail.com",
      password: bcrypt.hashSync("12345"),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Free Shirt",
      slug: "free-shirt",
      category: "Shirts",
      image: "/images/shirt1.jpg",
      price: 70,
      brand: "Nike",
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: "A popular shirt",
    },
    {
      name: "Fit Shirt",
      slug: "fit-shirt",
      category: "Shirts",
      image: "/images/shirt2.jpg",
      price: 80,
      brand: "Adidas",
      rating: 3.5,
      numReviews: 12,
      countInStock: 20,
      description: "A popular shirt",
    },
    {
      name: "Slim Shirt",
      slug: "slim-shirt",
      category: "Shirts",
      image: "/images/shirt3.jpg",
      price: 90,
      brand: "Raymond",
      rating: 3.1,
      numReviews: 6,
      countInStock: 15,
      description: "A popular shirt",
    },
    {
      name: "Golf Pants",
      slug: "golf-Pants",
      category: "Pants",
      image: "/images/pants1.jpg",
      price: 100,
      brand: "Oliver",
      rating: 4.2,
      numReviews: 16,
      countInStock: 20,
      description: "Smart Looking Pants",
    },
    {
      name: "Fit Pants",
      slug: "fit-Pants",
      category: "Pants",
      image: "/images/pants2.jpg",
      price: 130,
      brand: "Zara",
      rating: 3.5,
      numReviews: 17,
      countInStock: 20,
      description: "A popular Pants",
    },
    {
      name: "Classis Pants",
      slug: "classis-pants",
      category: "pants",
      image: "/images/pants1.jpg",
      price: 150,
      brand: "Casely",
      rating: 4.5,
      numReviews: 14,
      countInStock: 20,
      description: "A popular Pants",
    },
  ],
};
export default data;
