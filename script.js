    function convertTemp() {
      const temp = parseFloat(document.getElementById('tempInput').value);
      const unit = document.getElementById('unit').value;
      const result = document.getElementById('result');

      if (isNaN(temp)) {
        result.innerText = 'Please enter a valid number';
        return;
      }

      let celsius, fahrenheit, kelvin;

      if (unit === 'celsius') {
        celsius = temp;
        fahrenheit = (temp * 9/5) + 32;
        kelvin = temp + 273.15;
      } else if (unit === 'fahrenheit') {
        celsius = (temp - 32) * 5/9;
        fahrenheit = temp;
        kelvin = celsius + 273.15;
      } else {
        celsius = temp - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = temp;
      }

      result.innerHTML = `
        🌡️ Celsius: ${celsius.toFixed(2)} °C <br>
        🌡️ Fahrenheit: ${fahrenheit.toFixed(2)} °F <br>
        🌡️ Kelvin: ${kelvin.toFixed(2)} K
      `;
    }
