export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
}
export const MerkurBoxes: MenuItem[] = [
  {
    id: 'box-1',
    name: "Menü Lachs",
    description: "1 Nigiri Sake, 6 Maki Sake, 8 Inside Out Philadelphia ",
    price: "15.00€",
    image: ""
  },
  {
    id: 'box-2',
    name: "Menü Chicken",
    description: "1 Onigiri Chicken, 6 Maki Chicken, 8 Inside Out Strong",
    price: "18.50€",
    image: ""
  },
  {
    id: 'box-3',
    name: "Menü Garnelen",
    description: "1 Nigiri Ebi, 6 Maki Ebi, 8 Inside Out Naruto",
    price: "19.50€",
    image: ""
  },
  {
    id: 'box-4',
    name: "Menü Maki",
    description: "6 Maki Kappa, 6 Maki Sake, 6 Maki Ebi Avocado, 6 Maki California",
    price: "16.50€",
    image: ""
  },
  {
    id: 'box-5',
    name: "Menü Tempura",
    description: "4 Sushi Sandwich Ceasar, 8 Tempura Lachs ",
    price: "23.50€",
    image: ""
  },
  {
    id: 'box-6',
    name: "Menü Inside Out Roll",
    description: "8 Philadelphia Teriyaki, 8 Tokio, 8 Bonito",
    price: "34.00€",
    image: ""
  },
  {
    id: 'box-7',
    name: "Menü Vegetarisch ",
    description: "1 Nigiri Avocado, 1 Onigiri Wakame, 6 Maki Kappa, 6 Maki Kappa Avocado ",
    price: "15.00€",
    image: ""
  },
  {
    id: 'box-8',
    name: "Kids Menü Maki ",
    description: "Reis, Gurke, Möhren, Mais, 3 Maki Kappa, Saft, Süßigkeit und kleine Überraschung",
    price: "10.50€",
    image: ""
  },
  {
    id: 'box-9',
    name: "Kids Menü Frühlingsrolle",
    description: "Reis, Gurke, Möhren, Mais, 3 Frühlingsrolle, Saft, Süßigkeit und kleine Überraschung",
    price: "10.50€",
    image: ""
  },
  {
    id: 'box-10',
    name: "Menü Maki Tempura",
    description: "12 Maki Kappa Tempura, 12 Maki Sake Tempura, 6 Maki Sake Kappa Tempura, 6 Maki California Tempura",
    price: "30.00€",
    image: ""
  },
  {
    id: 'box-11',
    name: "Menü L",
    description: "6 Maki Kappa, 6 Maki Sake, 6 Maki California Tempura, 2 Gunkan Wakame, 8 Inside Out Philadelphia Terijaki, 8 Tempura Lachs",
    price: "37.00€",
    image: ""
  },
  
  {
    id: 'box-12',
    name: "Menü XL",
    description: "2 Nigiri Sake, 2 Gunkan Tobiko, 6 Maki Sake, 6 Maki Sake Kappa, 6 Maki California Tempura, 6 Maki Sake Kappa Tempura, 8 Philadelphia Surimi, 8 California Surimi, 8 Tempura Chicken",
    price: "60.00€",
    image: ""
  },
]
export const merkurSpecial: MenuItem[] = [
  {
    id: 'special-1',
    name: "Sushi Burger Lachs",
    description: "Reis, Nori, Lachs, Avocado, Teriyaki Sauce, Frischkäse, Spicy Sauce, Tobiko Kaviar",
    price: "15.00€",
    image: "/product_photos/burger lach.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'special-2',
    name: "Sushi Burger Chicken ",
    description: "Reis, Nori, Chicken BBQ, Cheddar, Frischkäse Röstzwiebeln, Avocado, Caesar-Sauce",
    price: "15.00€",
    image: "/product_photos/burger chicken.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'special-3',
    name: "Sushi Burger Garnele ",
    description: "Reis, Nori, Garnele, Avocado, Frischkäse,  Teriyaki Sauce, Tobiko Kaviar, Kimchi Sauce, Schnittlauch",
    price: "15.50€",
    image: "/product_photos/burger garnele.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'special-4',
    name: "Sushi Hot-Dog Chicken",
    description: "Reis, Nori, Frischkäse, Chicken Sweet Chili Sauce, Gurken, Avocado, Spicy Sauce, Teriyki Sauce, Röstzwiebeln",
    price: "15.00€",
    image: "/product_photos/hot dog.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'special-5',
    name: "Sushi Sandwich Ceasar",
    description: "Hähnchenbrust, Reis, Nori, Salat, Cheddarkäse, Tomaten, Ceasar-Sauce, Parmesan",
    price: "13.50€",
    image: "/product_photos/caesar sandwich.jpeg?auto=compress&cs=tinysrgb&w=800"
  },

];
export const aktionenItems: MenuItem[] = [
  {
    id: 'aktionen-1',
    name: "Salmon Nigiri Special",
    description: "2 pieces",
    price: "8.90€",
    image: "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'aktionen-2',
    name: "Mixed Sushi Platter",
    description: "12 pieces",
    price: "24.90€",
    image: "https://images.pexels.com/photos/248444/pexels-photo-248444.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'aktionen-3',
    name: "Sushi Bento Box",
    description: "350g",
    price: "16.90€",
    image: "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=800"
  },

];

export const salateSuppenItems: MenuItem[] = [
  {
    id: 'salat-1',
    name: "Wakame Salat",
    description: "mit Sesam-Sauce, 200g",
    price: "5.50€",
    image: "/product_photos/wakame salat.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'salat-2',
    name: "Tom Yam Suppe",
    description: "Gemüsebrühe, Kokosmilch, Hähnchen, Cherry, Champignon, Chilipasta",
    price: "8€",
    image: "/product_photos/Tom Yam Suppe.jpeg",
  },


];

export const nigiriOnigiriItems: MenuItem[] = [
  {
    id: 'nigiri-1',
    name: "Ebi",
    description: "Reis, Nori, gekochte Garnele",
    price: "4.50€",
    image: "product_photos/Ebi.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'nigiri-2',
    name: "Sake",
    description: "Reis, Nori, Lachs",
    price: "3.50€",
    image: "product_photos/sake.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'nigiri-3',
    name: "Kappa",
    description: "Reis, Nori, Gurke",
    price: "3.00€",
    image: "product_photos/kappa.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'nigiri-4',
    name: "Avokado",
    description: "Reis, Nori, Avocado",
    price: "3.50€",
    image: "/product_photos/avocado.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'nigiri-5',
    name: "Unagi",
    description: "Reis, Nori, Aal, Unagi-Sauce, Sesam",
    price: "4.50€",
    image: "/product_photos/unagi.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'nigiri-6',
    name: "Maguro",
    description: "Reis, Nori, Thunfisch, Sesam",
    price: "4.50€",
    image: "/product_photos/maguro.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'nigiri-7',
    name: "Surimi",
    description: "Reis, Nori, Surimi",
    price: "3.60€",
    image: "/product_photos/surimi.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'nigiri-8',
    name: "Tomago",
    description: "Reis, Nori, Omelett Tomago",
    price: "3.80€",
    image: "/product_photos/Tomago.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'nigiri-9',
    name: "Onigiri Wakame",
    description: "Reis, Nori, Salat-Wakame",
    price: "4.50€",
    image: "/product_photos/wakame_onigiri.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'nigiri-10',
    name: "Onigiri Surimi",
    description: "Reis, Nori, Surimi ",
    price: "4.60€",
    image: "/product_photos/surimi_onigiri.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'nigiri-11',
    name: ">Onigiri Chicken",
    description: "Reis, Nori, Chicken, Sweet Sauce",
    price: "4.80€",
    image: "/product_photos/chicken_onigiri.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
];

export const bowlsItems: MenuItem[] = [
  {
    id: 'bowls-1',
    name: "Bowl Sake",
    description: "große Reisbowl mit Lachs, Avocado, Mais, Salatmix, Edamamebohnen, Möhrenstreifen",
    price: "13.50€",
    image: "/product_photos/sake bowl.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'bowls-2',
    name: "Bowl Ebi",
    description: "große Reisbowl mit Garnele, Avocado, Mais, Salatmix, Edamamebohnen, Möhrenstreifen",
    price: "13.50€",
    image: "/product_photos/ebi bowl.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'bowls-3',
    name: "Bowl Chicken ",
    description: "große Reisbowl mit crispy Chicken, Avocado, Mais, Salatmix, Edamamebohnen, Möhrenstreifen",
    price: "13.00€",
    image: "/product_photos/chicken bowl.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'bowls-4',
    name: "Bowl Veggie",
    description: "große Reisbowl mit Avocado, Mais, Salatmix, Edamamebohnen, Sesam, Möhrenstreifen",
    price: "11.00€",
    image: "/product_photos/veggie bowl.jpeg?auto=compress&cs=tinysrgb&w=800"
  },

];

export const makiItems: MenuItem[] = [
  {
    id: 'maki-1',
    name: "Maki Avokado",
    description: "Reis, Nori, Avocado",
    price: "4.10€",
    image: "/product_photos/maki avocado.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'maki-2',
    name: "Maki Kappa",
    description: "Reis, Nori, Gurke, Sesam",
    price: "4.00€",
    image: "/product_photos/maki kappa.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'maki-3',
    name: "Maki Sake",
    description: "Reis, Nori, Lachs",
    price: "4.40€",
    image: "/product_photos/maki sake.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'maki-4',
    name: "Maki Sake Avokado",
    description: "Reis, Nori, Lachs, Avokado",
    price: "4.60€",
    image: "/product_photos/notReadyPhoto.png?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'maki-5',
    name: "Maki Sake Kappa",
    description: "Reis, Nori, Lachs, Gurke",
    price: "4.50€",
    image: "/product_photos/notReadyPhoto.png?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'maki-6',
    name: "Maki Ebi",
    description: "Reis, Nori, gekochte Garnele",
    price: "5.00€",
    image: "/product_photos/maki ebi .jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'maki-7',
    name: "Maki Ebi Avokado",
    description: "Reis, Nori, gekochte Garnele, Avokado",
    price: "5.40€",
    image: "/product_photos/notReadyPhoto.png?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'maki-8',
    name: "Maki Tekka",
    description: "Reis, Nori, Thunfisch",
    price: "5.50€",
    image: "/product_photos/maki tekka.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'maki-9',
    name: "Maki Tekka Avokado",
    description: "Reis, Nori, Thunfisch, Avokado",
    price: "5.90€",
    image: "/product_photos/notReadyPhoto.png?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'maki-10',
    name: "Maki California",
    description: "Reis, Nori, Surimi, Avocado",
    price: "4.70€",
    image: "/product_photos/notReadyPhoto.png?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'maki-11',
    name: "Maki Chicken",
    description: "Reis, Nori, Hähnchen BBQ",
    price: "4.70€",
    image: "/product_photos/notReadyPhoto.png?auto=compress&cs=tinysrgb&w=800"
  },
];
export const gunkansItems: MenuItem[] = [
  {
    id: 'gunkan-1',
    name: "Wakame Gunkan",
    description: "Reis, Nori, Salat-Wakame,Sesam",
    price: "3.00€",
    image: "/product_photos/wakame_gunkan.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'gunkan-2',
    name: "Ebi Gunkan",
    description: "Reis, Nori,gekochte Garnele, Avokado, Mayo",
    price: "5.00€",
    image: "/product_photos/Ebi Gunkan.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'gunkan-3',
    name: "Tobiko Gunkan",
    description: "Reis, Nori, Tobiko Kaviar",
    price: "4.00€",
    image: "/product_photos/Tobiko Gunkan.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'gunkan-4',
    name: "Lachs Gunkan",
    description: "Reis, Nori, Lachs, Frischkäse, Tobiko-Kaviar",
    price: "5.00€",
    image: "/product_photos/Lachs Gunkan.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];


export const insideOutRollsItems: MenuItem[] = [
  {
    id: 'insideout-1',
    name: "Philadelphia",
    description: "Reis, Nori, Lachs, Gurke, Frischkäse",
    price: "9.00€",
    image: "product_photos/phila.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'insideout-2',
    name: "Philadelphia Surimi",
    description: "Reis, Nori, Surimi, Frischkäse, Lachs",
    price: "9.20€",
    image: "product_photos/phila surimi.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'insideout-3',
    name: "Philadelphia Teriyaki",
    description: "Flambierter Lachs, Reis, Nori, Gurke, Frischkäse, Teriyaki-Sauce, Sesam",
    price: "9.00€",
    image: "product_photos/phila ter.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'insideout-4',
    name: "Caesar",
    description: "Reis, Nori, Garnelen-Tempura, Tomaten, Salat, Parmesankäse, Caesar-Sause",
    price: "13.50€",
    image: "product_photos/caesar.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'insideout-5',
    name: "Naruto",
    description: "Reis, Nori, Garnelen, geräucherter Schinken, Tomaten, Frischkäse, Tobiko-Kaviar, Sesam",
    price: "12.50€",
    image: "product_photos/naruto.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'insideout-6',
    name: "Strong",
    description: "Reis, Nori, Chicken BBQ, Salat-Wakame, Frischkäse, Sesam, Tobiko-Kaviar",
    price: "12.00€",
    image: "product_photos/strong.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'insideout-7',
    name: "Nakazu",
    description: "Reis, Nori, Garnelen-Tempura, Gurke, Lachs, Mayo",
    price: "14.00€",
    image: "product_photos/nakazu.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'insideout-8',
    name: "California Lachs",
    description: "Reis, Nori, Lachs, Avocado, Gurke, Frischkäse, Tobiko-Kaviar",
    price: "9.80€",
    image: "/product_photos/californ lachs.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'insideout-9',
    name: "California Surimi",
    description: "Reis, Nori, Surimi, Mayo, Gurke, Frischkäse, Tobiko-Kaviar",
    price: "9.00€",
    image: "/product_photos/california_surimi.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'insideout-10',
    name: "Akari",
    description: "Reis, Nori, Lachs, Aal, Gurke, Frischkäse, Tobiko-Kaviar, Omelett Tomago",
    price: "13.80€",
    image: " /product_photos/akari.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'insideout-11',
    name: "Tokio",
    description: "Reis, Nori, Lachs, Avocado, Gurke, Frischkäse, Omelett Tomago, Unagi-Sauce, Sesam, Tobiko-Kaviar",
    price: "14.50€",
    image: " /product_photos/tokio.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'insideout-12',
    name: "Space Hot",
    description: "Reis, Nori, Lachs, Tomaten, Avocado, geräucherter Schinken, Frischkäse, Käsehut mit Blauschimmelkäse",
    price: "10.00€",
    image: " /product_photos/space hot.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'insideout-13',
    name: "Tasai Hot",
    description: "Reis, Nori, Bacon, Salat, Teriyaki-Sauce, Sesam, Käsehut mit Tobiko-Kaviar",
    price: "8.60€",
    image: " /product_photos/tasai hot.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'insideout-14',
    name: "Bacon Hot",
    description: "Reis, Nori, Chicken BBQ, Bacon, Tomaten, Frischkäse, Käsehut mit Tobiko-Kaviar",
    price: "9.00€",
    image: " /product_photos/bacon hot.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'insideout-15',
    name: "Philadelphia Hot",
    description: "Reis, Nori, Lachs, Frischkäse, Käsehut mit Tobiko-Kaviar",
    price: "9.00€",
    image: " /product_photos/phila hot.jpeg?auto=compress&cs=tinysrgb&w=800"
  },

  {
    id: 'insideout-16',
    name: "Sake Hot",
    description: "Reis, Nori, Lachs, Mayo, Spicy-Sauce",
    price: "8.20€",
    image: " /product_photos/notReadyPhoto.png?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'insideout-17',
    name: "Garnelen spice",
    description: "Reis, Nori, Garnele, Frischkäse, Gurken, Flambierter Lachs, Tobiko-Kaviar, Spice-Sauce, Teriyaki-Sause, Schnittlauch",
    price: "14.50€",
    image: "/product_photos/garnelen_spice.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'insideout-18',
    name: "Philadelphia Avokado",
    description: "Reis, Nori, Lachs, Avokado, Frischkäse",
    price: "9.20€",
    image: "/product_photos/notReadyPhoto.png?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'insideout-19',
    name: "Bonito",
    description: "Reis, Nori, Thunfisch, Surimi, Gurke, Frischkäse, Thunfischflocken, Spicy-Sauce",
    price: "13.00€",
    image: "/product_photos/bonito.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'insideout-20',
    name: "Cheddar Roll",
    description: "Reis, Nori, Aal, Getrocknete Tomate, Gurke, Frischkäse, Cheddar, Unagi Sauce, Sesam",
    price: "12.00€",
    image: "/product_photos/Cheddar Roll.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'insideout-21',
    name: "California Avocado",
    description: "Reis, Nori, Avocado, Gurke, Frischkäse, Tobiko-Kaviar",
    price: "9.00€",
    image: "/product_photos/notReadyPhoto.png?auto=compress&cs=tinysrgb&w=800"
  },

];

export const springRollsItems: MenuItem[] = [
  {
    id: 'spring-1',
    name: "Vegetable Spring Rolls",
    description: "4 pieces",
    price: "€7.90",
    image: "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'spring-2',
    name: "Shrimp Spring Rolls",
    description: "4 pieces",
    price: "€9.90",
    image: "https://images.pexels.com/photos/248444/pexels-photo-248444.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'spring-3',
    name: "Duck Spring Rolls",
    description: "4 pieces",
    price: "€11.90",
    image: "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'spring-4',
    name: "Chicken Spring Rolls",
    description: "4 pieces",
    price: "€8.90",
    image: "https://images.pexels.com/photos/1148086/pexels-photo-1148086.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

export const tempuraItems: MenuItem[] = [
  {
    id: 'tempura-1',
    name: "Tempura Arischi",
    description: "Reis, Nori, Garnelen, Gurke, Frischkäse, Aal, Unagi-Sauce",
    price: "12.50€",
    image: " /product_photos/temura arichi.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'tempura-2',
    name: "Tempura Tekka",
    description: "Reis, Nori, Thunfisch, Salat, Mayo,Unagi-Sauce",
    price: "12.00€",
    image: " /product_photos/tempura tekka.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'tempura-3',
    name: "Tempura Chicken",
    description: "Reis, Nori, Chicken BBQ, geräucherter Schinken, Gurke, Frischkäse, Unagi-Sauce, Spicy-Sauce",
    price: "12.00€",
    image: " /product_photos/tempura chicken.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'tempura-4',
    name: "Tempura Vulkan",
    description: "Reis, Nori, Jalapeños, Gurke, Frischkäse, Omelett Tomago, Unagi-Sauce",
    price: "9.20€",
    image: " /product_photos/tempura vulkan.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'tempura-5',
    name: "Tempura Lachs",
    description: "Reis, Nori, Lachs, Salat, Frischkäse, Unagi-Sauce",
    price: "10.90€",
    image: " /product_photos/tempura lachs.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'tempura-6',
    name: "Nobu",
    description: "Reis, Nori, Räucherlachs, Avokado, Unagi-Sauce, Frischkäse",
    price: "10.00€",
    image: " /product_photos/nobu.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'tempura-7',
    name: "Panierte Frittierte Garnelen (5 St.)",
    description: "(5 St.) mit Sweet-Sauce",
    price: "7.00€",
    image: " /product_photos/panierte.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

export const saucenBeilagenItems: MenuItem[] = [
  {
    id: 'sause-1',
    name: "Wasabi ",
    description: "",
    price: "€0.50",
    image: ""
  },
  {
    id: 'sause-2',
    name: "Inger ",
    description: "",
    price: "€0.50",
    image: ""
  },
  {
    id: 'sause-3',
    name: "Sojasauce ",
    description: "",
    price: "€0.50",
    image: ""
  },
  {
    id: 'sause-4',
    name: "Sweet Chili Sauce ",
    description: "",
    price: "€2.50",
    image: ""
  },
  {
    id: 'sause-5',
    name: "Unagi Sauce ",
    description: "",
    price: "€2.50",
    image: ""
  },
  {
    id: 'sause-6',
    name: "Teriyaki Sauce ",
    description: "",
    price: "€2.50",
    image: ""
  },

  {
    id: 'sause-7',
    name: "Spicy Sauce ",
    description: "",
    price: "€2.50",
    image: ""
  },

];

export const dessertsItems: MenuItem[] = [
  {
    id: 'desert-1',
    name: "Bamboo House Double Fillings Mochi Blueberry ",
    description: "Milk 180g (6x30g)",
    price: "9.50€",
    image: "/product_photos/mochi blueberry.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'desert-2',
    name: "Bamboo House Double Fillings Mochi",
    description: "Cantaloupe Milk 180g (6x30g)",
    price: "9.50€",
    image: "/product_photos/mochi classic.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'desert-3',
    name: "Bamboo House Double Fillings Mochi Mango ",
    description: "Milk 180g (6x30g)",
    price: "9.50€",
    image: "/product_photos/mochi mango.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 'desert-4',
    name: "BAMBOO HOUSE Mochi",
    description: "rote Bohne 210g ( 6 Stück)",
    price: "9.50€",
    image: "/product_photos/mochi redBean.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

export const getrankeItems: MenuItem[] = [
  {
    id: "getranke-1",
    name: "Coca-Cola",
    description: "0,33l",
    price: "2.50€",
    image: ""
  },

  {
    id: "getranke-2",
    name: "Coca-Cola Zero",
    description: "0,33l",
    price: "2.50€",
    image: ""
  },

  {
    id: "getranke-3",
    name: "Fanta",
    description: "0,33l",
    price: "2.50€",
    image: ""
  },

  {
    id: "getranke-4",
    name: "Sprite",
    description: "0,33l",
    price: "2.50€",
    image: ""
  },

  {
    id: "getranke-5",
    name: "Red Bull",
    description: "0,25l",
    price: "3.00€",
    image: ""
  },

  {
    id: "getranke-6",
    name: "Stilles Wasser ",
    description: "0,5l",
    price: "2.50€",
    image: ""
  },

  {
    id: "getranke-7",
    name: "Medium Wasser ",
    description: "0,5l",
    price: "2.50€",
    image: ""
  },

];