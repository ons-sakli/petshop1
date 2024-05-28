export const formatPrice = (number) => {
    return new Intl.NumberFormat('fr-TN', { // Utilisation du code de langue pour la Tunisie (TN) pour le format dinar
        style: 'currency',
        currency: 'TND', // Code de devise pour le dinar tunisien
    }).format(number);
};
