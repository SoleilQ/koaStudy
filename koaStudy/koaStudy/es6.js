/* function getData(callbak) {
  setTimeout(() => {
    var name = 'aa';
    callbak(name);
  }, 1000);
}

getData((data) => {
  console.log(data);
}) */

/* promise处理异步 */
/* var p = new Promise((resolve, reject) => {
  setTimeout(() => {
    var name = 'aa';
    resolve(name);
  }, 1000);
});

p.then((data) => {
  console.log(data);
}) */


/* async function testAsync() {
  return '这是一个数据';
}

console.log(testAsync()); //Promise { '这是一个数据' } */

/* async function getData() {
  return '这是一个数据';
}

console.log(getData()); //Promise { '这是一个数据' } */

//await 是等待异步方法执行完成,可以获取异步方法里面的数据,但是必须用在异步方法里面
/* async function getData() {
  return '这是一个数据';
}

async function test() {
  var d = await getData();
  console.log(d);
}

test(); */

//await 阻塞的功能,把异步改成一个同步
/* async function getData() {
  return '这是一个数据';
}

async function test() {
  var d = await getData();
  console.log(d);
} */

//async 定义的方法返回的是Promise对象
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      var username = 'xx';
      resolve(username);
    }, 1000);
  })
}

async function test() {
  var data = await getData();
  console.log(data);
}

test();