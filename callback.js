function prepare(ingredients, func) {
  console.log("preparing ingredients" + ingredients);
  func();
}

function chop() {
  console.log("chopping");
}

function cook() {
  console.log("cooking");
}
prepare("onion and garlic", chop);
prepare("onion and garlic", cook);
