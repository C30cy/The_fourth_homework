//创建一个空数组
let arr = [];
//创建一个空的字符串
let str = "";
//获取元素
let bottomNum = document.getElementById("bottom");
let text = document.getElementById("text");
let timer = null;

function change() {
    let bt1 = document.getElementById("bt1");
    let bt2 = document.getElementById("bt2");
    let bt3 = document.getElementById("bt3");
    let bt4 = document.getElementById("bt4");
    let bt5 = document.getElementById("bt5");
    let bt6 = document.getElementById("bt6");
    let bt7 = document.getElementById("bt7");
    bt1.addEventListener('click', function () {
        inputRule();
        if (text.value >= 10 && text.value <= 100) {
            arr.unshift(text.value);
        }
        arrChange();
    }, false);
    bt2.addEventListener('click', function () {
        inputRule();
        arr.push(text.value);
        arrChange();
    }, false);
    bt3.addEventListener('click', function () {
        arr.shift(text.value);
        arrChange();
    }, false);
    bt4.addEventListener('click', function () {
        arr.pop(text.value);
        arrChange();
    }, false);
    bt5.addEventListener('click', function () {
        console.log(arr);
        resort();
    }, false);
    bt6.addEventListener('click', function () {
        clear();
    }, false);
    bt7.addEventListener('click', function () {
        randomArr();
        arrChange();
    }, false);
}
//确定input规则
function inputRule() {
    let flag = 0;
    if (text.value < 10 || text.value > 100) {
        alert("请输入10-100的数字");
    }
}
//清空数组
function clear() {
    arr = [];
    bottomNum.innerHTML = "";

}
//随机生成20个[10-100]的数
function randomArr() {
    //在生成随机数之前清空数组，调用clear()函数
    clear();
    for (let i = 0; i < 20; i++) {
        arr.push(Math.round(Math.random() * 90 + 10));
    }
}
//渲染数组
function arrChange() {
    //如果数组长度不为0，则创建div，并将它添加进str中，再添加进bottomNum中，对其进行渲染
    if (arr.length != 0) {
        str = "";
        arr.map((item) => {
            str += '<div class="bottomDiv" style="height: ' + item * 6 + 'px; background-color: pink;"><p>' + item + '</p></div>';
        });
        bottomNum.innerHTML = str;
    } else {
        bottomNum.innerHTML = "";
    }
}
//冒泡排序
function resort() {
    //要像得到一个一个排序的动画效果，需要用到定时器，
    let temp;
    let i = arr.length -1;
    timer = setInterval(function () {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[i]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        arrChange();
        i--;
        if (i == arr.length - 1) {
            clearInterval(timer);
        }
    }, 300);
}

function start() {
    change();
}
start();