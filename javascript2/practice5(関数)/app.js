let alertString = addString('WebCamp');

alert(alertString);

function addString(strA){
  let addStr = 'Hello' + strA;
  return addStr;
}

let promptStr = prompt('何か文字を入力して下さい');
alert(promptStr);