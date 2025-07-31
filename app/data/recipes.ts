export type Recipe = {
  slug: string;
  title: string;
  imageUrl: string;
  ingredients: string[];
  instructions: string[];
};

export const recipes: Recipe[] = [
  {
    slug: "butter-chicken",
    title: "Butter Chicken",
    imageUrl: "/images/butter-chicken.jpeg",
    ingredients: [
      "500g chicken",
      "1 cup yogurt",
      "2 tbsp butter",
      "1 onion",
      "2 tomatoes",
      "Spices: garam masala, cumin, chili"
    ],
    instructions: [
      "Marinate chicken in yogurt and spices for 1 hour.",
      "Cook onions in butter until golden.",
      "Add tomatoes and cook into a paste.",
      "Add chicken and simmer until done.",
      "Serve hot with naan or rice."
    ]
  },
  {
    slug: "spaghetti-carbonara",
    title: "Spaghetti Carbonara",
    imageUrl: "/images/spaghetti-carbonara.jpeg",
    ingredients: [
      "200g spaghetti",
      "100g pancetta",
      "2 eggs",
      "50g parmesan",
      "Black pepper"
    ],
    instructions: [
      "Cook spaghetti in salted water.",
      "Fry pancetta until crisp.",
      "Whisk eggs with parmesan and pepper.",
      "Drain pasta and mix with pancetta and egg mixture.",
      "Serve immediately."
    ]
  },
 {
    slug: "chicken-biryani",
    title: "Chicken Biryani",
    imageUrl: "/images/chicken-biryani.jpeg",
    ingredients: [
      "500g chicken",
      "2 cups basmati rice",
      "1 cup yogurt",
      "1 onion",
      "Spices: biryani masala, cumin, cardamom"
    ],
    instructions: [
      "Marinate chicken in yogurt and spices for 1 hour.",
      "Fry onions until golden.",
      "Parboil rice separately.",
      "Layer chicken and rice, cook on low heat (dum).",
      "Garnish with fried onions and serve."
    ]
  },
  {
    slug: "margherita-pizza",
    title: "Margherita Pizza",
    imageUrl: "/images/pizza-margherita.jpg",
    ingredients: [
      "Pizza dough",
      "Tomato sauce",
      "Fresh mozzarella",
      "Fresh basil",
      "Olive oil"
    ],
    instructions: [
      "Spread tomato sauce over rolled dough.",
      "Add mozzarella slices and fresh basil leaves.",
      "Drizzle with olive oil.",
      "Bake in hot oven until crust is golden.",
      "Slice and serve."
    ]
  },
  {
    slug: "pad-thai",
    title: "Pad Thai",
    imageUrl: "/images/pad-thai.jpeg",
    ingredients: [
      "200g rice noodles",
      "2 eggs",
      "100g shrimp or chicken",
      "Bean sprouts",
      "Peanuts",
      "Tamarind paste, fish sauce, sugar"
    ],
    instructions: [
      "Soak noodles in warm water.",
      "Stir-fry protein and set aside.",
      "Scramble eggs in wok, add noodles and sauce.",
      "Mix in sprouts and peanuts.",
      "Serve with lime wedge."
    ]
  },
  {
    slug: "beef-burger",
    title: "Classic Beef Burger",
    imageUrl: "/images/beef-burger.jpeg",
    ingredients: [
      "2 burger buns",
      "2 beef patties",
      "Cheddar cheese",
      "Lettuce, tomato, onion",
      "Ketchup, mustard, mayo"
    ],
    instructions: [
      "Grill beef patties until done.",
      "Toast buns slightly.",
      "Assemble with cheese, veggies, and sauces.",
      "Serve with fries or coleslaw."
    ]
  },
  {
    slug: "sushi-rolls",
    title: "Sushi Rolls",
    imageUrl: "/images/sushi-rolls.jpeg",
    ingredients: [
      "Sushi rice",
      "Nori (seaweed)",
      "Raw salmon or cucumber",
      "Avocado",
      "Soy sauce, wasabi, pickled ginger"
    ],
    instructions: [
      "Spread sushi rice on nori sheet.",
      "Add filling (fish or veggies) in center.",
      "Roll tightly with bamboo mat.",
      "Slice into pieces and serve with soy sauce.",
      "Optional: top with sesame seeds."
    ]
  },
  {
  slug: "lasagna",
  title: "Classic Lasagna",
  imageUrl: "/images/lasagna.jpeg",
  ingredients: [
    "Lasagna noodles",
    "Ground beef",
    "Tomato sauce",
    "Ricotta cheese",
    "Mozzarella cheese",
    "Parmesan cheese",
    "Garlic, onion, basil"
  ],
  instructions: [
    "Cook lasagna noodles.",
    "Brown beef with garlic and onion, add tomato sauce.",
    "Layer noodles, ricotta, meat sauce, and mozzarella.",
    "Repeat layers and top with parmesan.",
    "Bake at 180°C for 45 minutes."
  ]
},
{
  slug: "chow-mein",
  title: "Chicken Chow Mein",
  imageUrl: "/images/chow-mein.jpeg",
  ingredients: [
    "Egg noodles",
    "Chicken breast",
    "Cabbage, carrot, bell pepper",
    "Soy sauce, oyster sauce, sesame oil",
    "Garlic, ginger"
  ],
  instructions: [
    "Boil noodles and set aside.",
    "Stir-fry chicken until cooked.",
    "Add vegetables and cook briefly.",
    "Mix in noodles and sauces.",
    "Toss well and serve hot."
  ]
},
{
  slug: "tacos",
  title: "Beef Tacos",
  imageUrl: "/images/tacos.jpeg",
  ingredients: [
    "Taco shells",
    "Ground beef",
    "Lettuce, tomato, onion",
    "Cheddar cheese",
    "Sour cream, salsa"
  ],
  instructions: [
    "Cook beef with taco seasoning.",
    "Warm taco shells.",
    "Fill with beef, veggies, and cheese.",
    "Top with sour cream and salsa.",
    "Serve with lime wedges."
  ]
},
{
  slug: "chocolate-cake",
  title: "Chocolate Cake",
  imageUrl: "/images/chocolate-cake.jpeg",
  ingredients: [
    "Flour",
    "Cocoa powder",
    "Sugar",
    "Eggs",
    "Butter",
    "Baking powder",
    "Vanilla extract"
  ],
  instructions: [
    "Mix dry ingredients.",
    "Whisk eggs, butter, and vanilla.",
    "Combine and pour into a baking tin.",
    "Bake at 180°C for 30–35 minutes.",
    "Cool and frost as desired."
  ]
},
{
  slug: "shawarma",
  title: "Chicken Shawarma",
  imageUrl: "/images/shawarma.jpeg",
  ingredients: [
    "Chicken thighs",
    "Yogurt",
    "Garlic, cumin, paprika, turmeric",
    "Pita bread",
    "Tahini sauce, lettuce, tomato, onion"
  ],
  instructions: [
    "Marinate chicken in yogurt and spices for 4 hours.",
    "Grill or pan-fry until done.",
    "Slice and serve in pita with veggies and tahini.",
    "Wrap and serve warm."
  ]
},
{
  slug: "fried-rice",
  title: "Vegetable Fried Rice",
  imageUrl: "/images/fried-rice.jpeg",
  ingredients: [
    "Cooked rice (cold)",
    "Carrot, peas, bell pepper, corn",
    "Soy sauce",
    "Garlic, spring onions",
    "Eggs"
  ],
  instructions: [
    "Scramble eggs and set aside.",
    "Stir-fry vegetables with garlic.",
    "Add rice and soy sauce.",
    "Mix in eggs and spring onions.",
    "Serve hot."
  ]
},
{
  slug: "pancakes",
  title: "Fluffy Pancakes",
  imageUrl: "/images/pancakes.jpeg",
  ingredients: [
    "Flour",
    "Milk",
    "Eggs",
    "Sugar",
    "Baking powder",
    "Butter",
    "Vanilla"
  ],
  instructions: [
    "Mix dry ingredients together.",
    "Whisk in milk, eggs, and melted butter.",
    "Pour batter onto hot skillet.",
    "Flip when bubbles form and cook other side.",
    "Serve with syrup or fruit."
  ]
} 


];
