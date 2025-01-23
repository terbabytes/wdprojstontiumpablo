document.addEventListener('DOMContentLoaded', () => {
  const notepad = document.getElementById('notepad-btn');
  const normalImage = document.getElementById('notepad-img');
  const hoverImage = document.getElementById('notepad-hover-img');
  
  console.log({ notepad, normalImage, hoverImage });

  notepad.addEventListener('mouseenter', () => {
    normalImage.style.display = 'none';
    hoverImage.style.display = 'block';
  });

  notepad.addEventListener('mouseleave', () => {
    normalImage.style.display = 'block';
    hoverImage.style.display = 'none';
  });
});
