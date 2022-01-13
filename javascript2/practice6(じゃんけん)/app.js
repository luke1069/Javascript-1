let user_hand = prompt('じゃんけんのグー・チョキ・パーを選択して下さい');
let js_hand = getJShand();
let judge = winLose(user_hand, js_hand);

alert('あなたの手は' + user_hand + 'です。\nJavascriptの手は' + js_hand + 'です。\n結果は' + judge + 'です。');

function getJShand(){
  let js_hand_num = Math.floor(Math.random()*3);
  let hand_name;
  if(js_hand_num == 0){
    hand_name = 'グー';
  } else if(js_hand_num == 1){
    hand_name = 'チョキ';
  } else if(js_hand_num == 2){
    hand_name = 'パー';
  }
  return hand_name;
}

function winLose(user, js){
  let winLoseStr;

  if(user == 'グー'){
    if(js == 'グー'){
      winLoseStr = 'あいこ';
    } else if(js == 'チョキ'){
      winLoseStr = 'あなたの勝ち';
    } else if(js == 'パー'){
      winLoseStr = 'あなたの負け';
    }
  } else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "あなたの負け";
    } else if(js == "チョキ"){
      winLoseStr = "あいこ";
    } else if(js == "パー"){
      winLoseStr = "あなたの勝ち";
    }
  } else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "あなたの勝ち";
    } else if(js == "チョキ"){
      winLoseStr = "あなたの負け";
    } else if(js == "パー"){
      winLoseStr = "あいこ";
    }
  }

  return winLoseStr;

}