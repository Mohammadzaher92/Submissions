
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */


var array=['what is node.js','how you can use it.','try it yourself and never give up'];

function onDataReceived(text) {
  console.log(text)
  var lenght = text.length;
  
  if (text === 'quit\n'){
    quit();
  }
  else if (text.trim().slice(0,4)  === 'help'){
    help();
  }
  else if(text === 'list\n') {
    list();
  }
  else if(text.trim().slice(0,3)=== 'add'){
    add(text,lenght);}
  
  else if (text === 'exit\n'){
    quit();
  }
  else if(text.trim().slice(0,5) === 'hello'){
    hello(text);
    
  }
  else{
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(t){
  console.log('hello'+t.trim().substring(5,t.length)+'!')
}


/**  var lenght = text.length;

 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}
/**
 * help list
 *
 * @returns {void}
 */

function help (){
  //console.log( 'UnkownCommand\n' + 'hello\n' + 'quit\n');
  console.log('You have seven commads:\n1-hello\n2-quit\n3-exit\n4-list\n5-add\n6-remove\n7-help')

}
/**
 * list function
 * Show all the tasks that you should be done!!!
 *
 * @returns {void}
 */
function list(text){
  for (var i=0 ;i<array.length;i++){
    console.log((i+1)*1+'-'+array[i])
  }}
  /**
 * add function
 *
 * @returns {void}
 */
  function add(x,l){
    if (l>5){
      array.push(x.trim().substring(4,l))
    }
    else{
      console.log('error')
    }
    
  }
  

  

// The following line starts the application
startApp("Mohammad Zaher Alnajjar")
