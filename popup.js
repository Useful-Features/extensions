var formdata = localStorage.getItem("username");

// id属性で要素を取得
var textbox_element = document.getElementById('settings');

// 新しいHTML要素を作成
var new_element = document.createElement('p');
new_element.textContent = `現在の設定ユーザー:${formdata}`;

// 指定した要素の中の末尾に挿入
textbox_element.appendChild(new_element);

function setvalue(){
	var value = document.getElementById('username');
        var value = value.value;
	localStorage.removeItem("username");
	localStorage.setItem("username", value); //ローカルストレージに保存
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.Setbutton').addEventListener('click', setvalue);
});