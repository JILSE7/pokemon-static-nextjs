const getPokemonLS = ():number[] => JSON.parse(localStorage.getItem('favorites') ?? '[]') 

const toggleFavorites = (id:number) => {

    console.log('toggle favorites called');
    let favorites:number[] = getPokemonLS();

   favorites.includes(id) ? 
                           favorites = favorites.filter(idFavorites => idFavorites !== id) 
                             :
                           favorites.push(id);
                           

    console.log(favorites);                           
    localStorage.setItem('favorites', JSON.stringify(favorites));
}


const verifyFavorites = (id:number):boolean  => {
    
    if(typeof window === 'undefined') return false;

    const favorites:number[] = getPokemonLS();
       
    return favorites.includes(id);
} 





export default {
    toggleFavorites,
    getPokemonLS,
    verifyFavorites,
    hello: () => console.log("ddjdj")
}