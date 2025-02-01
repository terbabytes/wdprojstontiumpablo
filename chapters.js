document.addEventListener('DOMContentLoaded', () => {
  const notepad = document.getElementById('notepad-btn');
  const normalImage = document.getElementById('notepad-img');
  const hoverImage = document.getElementById('notepad-hover-img');

  const chapter1 = document.getElementById('ch1-btn');
  const normalImage2 = document.getElementById('ch1png');
  const hoverImage2 = document.getElementById('ch1png-hover');

  const chapter2 = document.getElementById('ch2-btn');
  const normalImage3 = document.getElementById('ch2png');
  const hoverImage3 = document.getElementById('ch2png-hover');
  
  console.log({ notepad, normalImage, hoverImage });

  notepad.addEventListener('mouseenter', () => {
    normalImage.style.display = 'none';
    hoverImage.style.display = 'block';
  });

  notepad.addEventListener('mouseleave', () => {
    normalImage.style.display = 'block';
    hoverImage.style.display = 'none';
  });

  //chapter 1

  notepad.addEventListener('mouseenter', () => {
    normalImage2.style.display = 'none';
    hoverImage2.style.display = 'block';
  });

  notepad.addEventListener('mouseleave', () => {
    normalImage2.style.display = 'block';
    hoverImage2.style.display = 'none';
  });

//chapter 2

  notepad.addEventListener('mouseenter', () => {
    normalImage3.style.display = 'none';
    hoverImage3.style.display = 'block';
  });

  notepad.addEventListener('mouseleave', () => {
    normalImage3.style.display = 'block';
    hoverImage3.style.display = 'none';
  });
});
