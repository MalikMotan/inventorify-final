//  Les catégories GENRE et BASE font une recherche dans les produits
//  Les catégories TAILLE et COULEUR vont chercher les variantes de produits

export const GENRE = [
    { label: "Tous", value: "" },
    { label: "Hommes", value: "gender:homme" },
    { label: "Femmes", value: "gender:femme" },
    { label: "Enfants", value: "gender:enfant" },
    { label: "Bébés", value: "gender:bébé" },
    { label: "Accessoires", value: "gender:accessoires" }
]

export const BASE = [
    { label: "Tous", value: "" },
    { label: "T-shirt à poche", value: "T-shirt à poche" },
    { label: "V-neck à poche", value: "V-neck à poche" },
    { label: "T-shirt à manches longues à poche", value: "T-shirt à manches longues à poche" },
    { label: "Camisole à poche", value: "Camisole à poche" },
    { label: "Chemise à manches longues", value: "Chemise à manches longues" },
    { label: "Chemise à manches courtes", value: "Chemise à manches courtes" },
    { label: "Boxer", value: "Boxers" },
    { label: "Bas", value: "Bas" },
    { label: "Casquette", value: "Casquette" },
    { label: "Tuque", value: "Tuque" },
    { label: "Étui de téléphone", value: "Étui de téléphone" }

]

export const TAILLE = [
    { label: "Tous", value: "" },
    { label: "XS", value: "XS" },
    { label: "S", value: "S" },
    { label: "M", value: "M" },
    { label: "L", value: "L" },
    { label: "XL", value: "XL" },
    { label: "XXL", value: "XXL" },
    { label: "6m", value: "6m" },
    { label: "12m", value: "12m" },
    { label: "18m", value: "18m" },
    { label: "2T", value: "2T" },
    { label: "3T", value: "3T" },
    { label: "4T", value: "4T" },
    { label: "5-6T", value: "5-6T" }
]

export const COULEUR = [
    { label: "Tous", value: "" },
    { label: "Noir", value: "noir" },
    { label: "Blanc", value: "blanc" },
    { label: "Charbon", value: "charbon" },
    { label: "Gris", value: "gris" }

]


