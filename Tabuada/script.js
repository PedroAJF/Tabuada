function tabuada() {
  let ini = document.getElementById('num1');
  let res = document.getElementById('settab');

  if (ini.value.length == 0) {
    window.alert('ERRO! Preencha corretamente!');
  } else {
    let i = Number(ini.value);
    let c = 1;
    res.innerHTML = '';

    while (c <= 10) {
      let item = document.createElement('option');
      item.text = `${i} x ${c} = ${i * c}`;
      res.appendChild(item);
      c++;
    }
  }
}
