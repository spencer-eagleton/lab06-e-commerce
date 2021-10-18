/* <div class="chicken-card">
    <img src="./assets/whitechicken.png" alt="">
    <h2 class="leghorn-name">Leghorn</h2>
    <button id="1">Cluck it up!</button>
   </div> */

// {
//     id: '1',
//     breed: 'Leghorn',
//     color: 'white',
//     eggPerWeekAvg: '4',
//     demeanor: 'exciteable'}

export function renderChicken(chicken){
    const chickenCard = document.createElement('div');
    chickenCard.classList.add('chicken-card');

    const chickenHeader = document.createElement('h2');
    chickenHeader.textContent = chicken.breed;

    const img = document.createElement('img');
    img.src = chicken.img;

    
    const addButton = document.createElement('button');
    addButton.textContent = 'Cluck it up!';
    addButton.id = chicken.id;
    addButton.classList.add('add-button');
    

    chickenCard.append(img, chickenHeader, addButton);
    return chickenCard;

}