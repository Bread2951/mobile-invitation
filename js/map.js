function copyText(text){
  navigator.clipboard.writeText(text).then(function(){
    alert("복사되었습니다.");
  });
}