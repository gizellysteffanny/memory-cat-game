document.addEventListener('DOMContentLoaded', () => {

   const cards = [
      {
         name: 'cat-1',
         img: 'images/cat-1.png'
      },
      {
         name: 'cat-1',
         img: 'images/cat-1.png'
      },
      {
         name: 'cat-2',
         img: 'images/cat-2.png'
      },
      {
         name: 'cat-2',
         img: 'images/cat-2.png'
      },
      {
         name: 'cat-3',
         img: 'images/cat-3.png'
      },
      {
         name: 'cat-3',
         img: 'images/cat-3.png'
      },
      {
         name: 'cat-4',
         img: 'images/cat-4.png'
      },
      {
         name: 'cat-4',
         img: 'images/cat-4.png'
      },
      {
         name: 'cat-5',
         img: 'images/cat-5.png'
      },
      {
         name: 'cat-5',
         img: 'images/cat-5.png'
      },
      {
         name: 'cat-6',
         img: 'images/cat-6.png'
      },
      {
         name: 'cat-6',
         img: 'images/cat-6.png'
      },
   ];

   cards.sort(() => 0.5 - Math.random());

   const game = document.getElementById('game');
   const scoreDisplay = document.getElementById('score');
   const gameWonDisplay = document.getElementById('gameWon');
   let cardsChosen = [];
   let cardsChosenId = [];
   let cardsWon = [];

   function createBoard() {
      for(let i = 0; i < cards.length; i++) {
         const card = document.createElement('img');
         card.setAttribute('src', 'images/card-back.png');
         card.setAttribute('data-id', i);

         card.addEventListener('click', flipCard);

         game.appendChild(card);
      }
   }

   function cardsIsMatch() {
      let cardList = document.querySelectorAll('img');
      const optionOneId = cardsChosenId[0];
      const optionTwoId = cardsChosenId[1];

      console.log(cardsChosen);
      console.log(cardsChosenId);

      if (cardsChosen[0] === cardsChosen[1] && optionOneId !== optionTwoId) {
         console.log('Woow... The cards are match!');
         cardList[optionOneId].setAttribute('src', 'images/white.jpg');
         cardList[optionTwoId].setAttribute('src', 'images/white.jpg');
         cardsWon.push(cardsChosen);
      } else {
         cardList[optionOneId].setAttribute('src', 'images/card-back.png');
         cardList[optionTwoId].setAttribute('src', 'images/card-back.png');
         console.log('Ooooh no... The cards aren`t match!')
      }

      cardsChosen = [];
      cardsChosenId = [];
      scoreDisplay.textContent = cardsWon.length;

      if (cardsWon.length === cards.length / 2) {
         gameWonDisplay.textContent = 'Parabéns 🥳, você ganhou!!!';

         setTimeout(() => {
            let tryAgain = confirm('Você quer jogar novamente?');

            if (tryAgain) {
               window.location.reload();
            }
         }, 1000);
      }
   }

   function flipCard() {
      const cardId = this.getAttribute('data-id');
      cardsChosen.push(cards[cardId].name);
      cardsChosenId.push(cardId);

      this.setAttribute('src', cards[cardId].img);

      if (cardsChosen.length === 2) {
         setTimeout(cardsIsMatch, 300);
      }
   }

   createBoard();
});