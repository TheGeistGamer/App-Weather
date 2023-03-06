
export function addCardToPage(data, id) {
  
  const [main, time]= data;

  const {aurora, city, temperatura, ...val} = main;
  const {current, ...secVal} = time;

  const weather = document.createElement('div');
  weather.classList.add('styCard');

  weather.innerHTML = `
  <button type="button" id="card" class="card ${id}">
    <div class="tituloYtem">
      <span class="pais">
        <h3>${city.name}</h3>
          <h4>${current}</h4>
      </span>
      <span class="temperatura"><h3>${temperatura.temp}</h3></span>
    </div>
    <div class="info">
      <span class="clima"><h4>${city.estado}</h4></span>
      <span class="minYmax"><h4>Max: ${temperatura.temp_max} Min: ${temperatura.temp_min}</h4></span>
    </div>
  </button>
    `;
    
  document.querySelector('#historial').insertAdjacentElement("afterbegin", weather);
  }


