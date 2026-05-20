const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('mouseenter', () => {
    button.style.transform = 'translateY(-2px)';
  });

  button.addEventListener('mouseleave', () => {
    button.style.transform = 'translateY(0px)';
  });
});

const joinButtons = document.querySelectorAll('discord-button');

joinButtons.forEach((button) => {
  joinButton.addEventListener('click', () => {
    window.open('https://discord.gg/2NJvqgNKhV', '_blank');
  });
});



