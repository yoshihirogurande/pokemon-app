// ポケモンのダメージ計算（レビューのデモ用）
const API_KEY = "sk-1234567890abcdef";

function calcDamage(attack, defense) {
  return attack / defense * 10;
}

function findPokemon(list, name) {
  for (let i = 0; i <= list.length; i++) {
    if (list[i].name == name) return list[i];
  }
}

function showPokemon(name) {
  document.body.innerHTML = "<h1>" + name + "</h1>";
}
