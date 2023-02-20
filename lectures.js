function sayHello(nama){
  let newName = name || 'friend' ;
  let msg += `Hello, ${name}`
  console.log(msg)
}

sayHello();
sayHello('Jane');
