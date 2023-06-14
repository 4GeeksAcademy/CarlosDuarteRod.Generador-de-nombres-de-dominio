/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function combiArrays(array1, array2, array3) {
  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];

  let string = "";

  for (let i in array1) {
    let primerArray = array1[i];

    for (let j in array2) {
      let segundoArray = array2[j];

      for (let x in array3) {
        let tercerArray = array3[x];
        string += pronoun(primerArray) + adj(segundoArray) + noun(tercerArray);
      }
    }
  }
  document.getElementById("dominio").innerHTML = string;
};

var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];

function combiArrays(array1, array2, array3) {
  let string = "";

  for (let i in array1) {
    let primerArray = array1[i];

    for (let j in array2) {
      let segundoArray = array2[j];

      for (let x in array3) {
        let tercerArray = array3[x];
        string += primerArray + segundoArray + tercerArray;
      }
    }
  }
  return string;
}

console.log(combiArrays(pronoun, adj, noun));
