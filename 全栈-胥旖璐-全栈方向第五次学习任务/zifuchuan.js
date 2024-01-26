function count() {
    var stringInput = document.getElementById('stringInput').value;
    var substringInput = document.getElementById('substringInput').value;
    var theresult = document.getElementById('result');
    var count = stringInput.split(substringInput).length - 1; // 使用split方法分割字符串，并减去1得到子串出现的次数  
    theresult.innerHTML = '子串出现的次数为: ' + count;
}  