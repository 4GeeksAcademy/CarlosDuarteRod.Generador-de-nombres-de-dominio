/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];
  var extension = [".com", ".net"];

  function combiArrays(array1, array2, array3, array4) {
    let string = "";

    for (let i in array1) {
      let primerArray = array1[i];

      for (let j in array2) {
        let segundoArray = array2[j];

        for (let x in array3) {
          let tercerArray = array3[x];

          for (let k in array4) {
            let cuartoArray = array4[k];

            string += primerArray + segundoArray + tercerArray + cuartoArray;
            string += "<br>";
          }
        }
      }
    }
    return string;
  }

  let totalstring = combiArrays(pronoun, adj, noun, extension);

  let dominio1 = document.querySelector("#dominio");

  dominio1.innerHTML = totalstring;
};
