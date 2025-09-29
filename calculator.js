
      let calculation = "";
      inputelement();

      function updatedcalculation(value) {
        calculation += value;
        inputelement();
      }

      function inputelement() {
        document.querySelector(".inputelement").innerHTML = `${calculation}`;
      }