const init = () => {
    const inputForm = document.querySelector('form');
    const apiUrl = 'http://localhost:3000/movies';
  
    inputForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const input = document.querySelector('input#searchByID');
  
      fetch(`${apiUrl}/${input.value}`)
        .then(response => response.json())
        .then(data => {
          const titleElement = document.querySelector('section#movieDetails h4');
          const summaryElement = document.querySelector('section#movieDetails p');
  
          titleElement.innerText = data.title;
          summaryElement.innerText = data.summary;
        });
    });
  }
  
  document.addEventListener('DOMContentLoaded', init);
  