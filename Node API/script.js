const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};
const url = 'http://apiadvisor.climatempo.com.br/api/v1/weather/locale/5136/current?token=86dedd986d055c10792a3c93e75e1fc4';
fetch (url, requestOptions,{mode: 'no-cors'})
  .then(response => response.json())
  .then(result => {
    const cidade = result.name
    const estado = result.state

    const main = document.querySelector("main")
    main.insertAdjacentHTML('afterbegin', `
      <h3>Tempo agora em</h3>
      <h3>${cidade}, ${estado}</h3>
    `)

    const temperation = result.data.temperature
    const sensation = result.data.sensation
    const condition = result.data.condition
    const icon = result.data.icon

    const temperatura = document.querySelector("#temperatura-div")
    temperatura.insertAdjacentHTML('afterbegin', `
      <img src="https://www.climatempo.com.br/dist/images/v2/svg/${icon}.svg" alt="temperatura" id="img-temp">
      <h2>${temperation}°</h2>
    `)

    const sensacao = document.querySelector("#sensacao-div")
    sensacao.insertAdjacentHTML('afterbegin', `
      <img src="https://www.climatempo.com.br/dist/images/sensation-icon.png" alt="fire">
      <p>Sensação ${sensation}°</p>
    `)

    const clima = document.querySelector("#condicao-div")
    clima.insertAdjacentHTML('afterbegin', `
      <img src="https://www.climatempo.com.br/dist/images/v2/svg/ic-cloud.svg" alt="cloud">
      <p>${condition}</p>
    `)

    const wind = result.data.wind_velocity
    const humidity = result.data.humidity

    const umidade = document.querySelector('#humidade-div')
    umidade.insertAdjacentHTML('afterbegin', `
      <h3>UMIDADE</h3>
    `)
    const umidade2 = document.querySelector('#humidade-div1')
    umidade2.insertAdjacentHTML('afterbegin', `
      <img src="https://www.climatempo.com.br/dist/images/v2/svg/ic-humidity-max.svg" alt="humidity">
      <p>${humidity}%</p>
    `)
    const vento = document.querySelector('#vento-div')
    vento.insertAdjacentHTML('afterbegin', `
      <h3>VENTO</h3>
    `)
    const vento1 = document.querySelector('#vento-div1')
    vento1.insertAdjacentHTML('afterbegin', `
      <p>${wind} km/h</p>
    `)

  })


