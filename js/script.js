function seach_pokemon() {
  let pokemon = document.getElementsByClassName('pokemon')
  let input = document.getElementById('filter-name').value
  input = input.toLowerCase();
  let x = document.getElementsByClassName('pokemon-name');


  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      pokemon[i].style.display = "none";
    }
    else {
      pokemon[i].style.display = "inline"
    }
  }

}

function option_pokemon() {

  let pokemon = document.getElementsByClassName('pokemon')
  let input = document.getElementById('selection').value
  input = input.toLowerCase();
  let x = document.getElementsByClassName('pokemon-types');


  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      pokemon[i].style.display = "none";
    }
    else {
      pokemon[i].style.display = "inline"
    }
  }

}
































