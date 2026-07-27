import './style.css'

const units = {
  celsius: { label: 'Celsius', symbol: '°C' },
  fahrenheit: { label: 'Fahrenheit', symbol: '°F' },
  kelvin: { label: 'Kelvin', symbol: 'K' },
}

const toCelsius = (value, unit) => {
  if (unit === 'fahrenheit') return (value - 32) * 5 / 9
  if (unit === 'kelvin') return value - 273.15
  return value
}

const fromCelsius = (value, unit) => {
  if (unit === 'fahrenheit') return (value * 9 / 5) + 32
  if (unit === 'kelvin') return value + 273.15
  return value
}

const app = document.querySelector('#app')

app.innerHTML = `
  <main class="page-shell">
    <section class="converter-card" aria-labelledby="page-title">
      <div class="heading">
        <div class="thermometer" aria-hidden="true">♨</div>
        <div>
          <p class="eyebrow">QUICK & ACCURATE</p>
          <h1 id="page-title">Temperature Converter</h1>
          <p class="subtitle">Convert temperatures between Celsius, Fahrenheit and Kelvin.</p>
        </div>
      </div>

      <div class="converter-grid">
        <label class="field">
          <span>Temperature</span>
          <input id="temperature" type="number" value="25" step="any" inputmode="decimal" aria-label="Temperature value">
        </label>
        <label class="field">
          <span>From</span>
          <select id="from-unit" aria-label="Convert from">
            <option value="celsius">Celsius (°C)</option>
            <option value="fahrenheit">Fahrenheit (°F)</option>
            <option value="kelvin">Kelvin (K)</option>
          </select>
        </label>
        <button id="swap" class="swap-button" type="button" aria-label="Swap temperature units">⇄</button>
        <label class="field">
          <span>To</span>
          <select id="to-unit" aria-label="Convert to">
            <option value="celsius">Celsius (°C)</option>
            <option value="fahrenheit" selected>Fahrenheit (°F)</option>
            <option value="kelvin">Kelvin (K)</option>
          </select>
        </label>
      </div>

      <div class="result" aria-live="polite">
        <p>RESULT</p>
        <output id="result-value">77 °F</output>
        <span id="equation">25 °C = 77 °F</span>
      </div>

      <div class="reference">
        <span>Water freezes <b>0 °C</b></span>
        <span>Water boils <b>100 °C</b></span>
      </div>
    </section>
  </main>
`

const input = document.querySelector('#temperature')
const fromUnit = document.querySelector('#from-unit')
const toUnit = document.querySelector('#to-unit')
const result = document.querySelector('#result-value')
const equation = document.querySelector('#equation')

const format = (number) => Number(number.toFixed(2)).toLocaleString(undefined, { maximumFractionDigits: 2 })

function convert() {
  const value = Number(input.value)
  if (input.value === '' || Number.isNaN(value)) {
    result.textContent = '—'
    equation.textContent = 'Enter a temperature to convert'
    return
  }

  const converted = fromCelsius(toCelsius(value, fromUnit.value), toUnit.value)
  const source = `${format(value)} ${units[fromUnit.value].symbol}`
  const target = `${format(converted)} ${units[toUnit.value].symbol}`
  result.textContent = target
  equation.textContent = `${source} = ${target}`
}

input.addEventListener('input', convert)
fromUnit.addEventListener('change', convert)
toUnit.addEventListener('change', convert)

document.querySelector('#swap').addEventListener('click', () => {
  const previousFrom = fromUnit.value
  fromUnit.value = toUnit.value
  toUnit.value = previousFrom
  convert()
})

convert()
