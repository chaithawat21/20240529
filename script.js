const buttons = [
    document.querySelector('.box02-question'),
    document.querySelector('.box03-question'),
    document.querySelector('.box04-question'),
    document.querySelector('.box05-question')
  ];
  
  const plusIcons = [
    document.querySelector('.box02-plus'),
    document.querySelector('.box03-plus'),
    document.querySelector('.box04-plus'),
    document.querySelector('.box05-plus')
  ];
  
  const minusIcons = [
    document.querySelector('.box02-minus'),
    document.querySelector('.box03-minus'),
    document.querySelector('.box04-minus'),
    document.querySelector('.box05-minus')
  ];
  
  const answers = [
    document.querySelector('.box02-answer'),
    document.querySelector('.box03-answer'),
    document.querySelector('.box04-answer'),
    document.querySelector('.box05-answer')
  ];
  
  // Function to toggle display
  const toggleDisplay = (plusIcon, minusIcon, answer) => {
    if (answer.style.display === 'none' || answer.style.display === '') {
      plusIcon.style.display = 'none';
      minusIcon.style.display = 'inline-block';
      answer.style.display = 'inline-block';
    } else {
      plusIcon.style.display = 'inline-block';
      minusIcon.style.display = 'none';
      answer.style.display = 'none';
    }
  };
  
  // Adding event listeners to each button
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      toggleDisplay(plusIcons[index], minusIcons[index], answers[index]);
    });
  });

// const btn01 = document.querySelector('.box02-question')
// const btn02 = document.querySelector('.box03-question')
// const btn03 = document.querySelector('.box04-question')
// const btn04 = document.querySelector('.box05-question')

// const plus01 = document.querySelector('.box02-plus')
// const plus02 = document.querySelector('.box03-plus')
// const plus03 = document.querySelector('.box04-plus')
// const plus04 = document.querySelector('.box05-plus')

// const minus01 = document.querySelector('.box02-minus')
// const minus02 = document.querySelector('.box03-minus')
// const minus03 = document.querySelector('.box04-minus')
// const minus04 = document.querySelector('.box05-minus')

// const ans01 = document.querySelector('.box02-answer')
// const ans02 = document.querySelector('.box03-answer')
// const ans03 = document.querySelector('.box04-answer')
// const ans04 = document.querySelector('.box05-answer')



// btn01.addEventListener('click', () => {

//     if (ans01.style.display === 'none') {
//     plus01.style.display = 'none'
//     minus01.style.display = 'inline-block'
//     ans01.style.display = 'inline-block'
//     } else {
//         plus01.style.display = 'inline-block'
//         minus01.style.display = 'none'
//         ans01.style.display = 'none'
//     }
// })
// btn02.addEventListener('click', () => {

//     if (plus02.style.display === 'inline-block') {
//     plus02.style.display = 'none'
//     minus02.style.display = 'inline-block'
//     ans02.style.display = 'inline-block'
//     } else {
//         plus02.style.display = 'inline-block'
//         minus02.style.display = 'none'
//         ans02.style.display = 'none'
//     }
// })
// btn03.addEventListener('click', () => {

//     if (plus03.style.display === 'inline-block') {
//     plus03.style.display = 'none'
//     minus03.style.display = 'inline-block'
//     ans03.style.display = 'inline-block'
//     } else {
//         plus03.style.display = 'inline-block'
//         minus03.style.display = 'none'
//         ans03.style.display = 'none'
//     }
// })
// btn04.addEventListener('click', () => {

//     if (plus04.style.display === 'inline-block') {
//         plus04.style.display = 'none'
//         minus04.style.display = 'inline-block'
//         ans04.style.display = 'inline-block'
//         } else {
//             plus04.style.display = 'inline-block'
//             minus04.style.display = 'none'
//             ans04.style.display = 'none'
//         }
    
// })
// Querying all required elements
