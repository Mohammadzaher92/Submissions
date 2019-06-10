
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
  var array1 =['task1','task2','task3']
  function onDataReceived(text) {
    //console.log(text);
    var array =text.trim().split(" ")
    //console.log(array)
    if (text == 'quit\n' || text=="exit\n") {
      quit();
    }
    else if(array[0] === 'hello'){
      hello(array,text);
      
    }
    else if (array[0] === 'help'){
      help ();
    }
    else if (array[0]=== 'list'){
      list();
    }
    else if (array[0]=== 'add'){
      add(text,array);

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
  function hello(t,t1){
    if (t1=='hello\n'){
      console.log('hello!')
    }
    else{
    console.log('hello '+t.slice(1).join(' ')+'!')
  }}
  
  
  /**
   * Exits the application
   *
   * @returns {void}
   */
  function quit(){
    console.log('Quitting now, goodbye!')
    process.exit();
  }
  /**
   * function help display all coomand
   */
  function help(){
    console.log('quit\nexit\nhello')
  }
  function list(){
    for (var i = 0 ;i<array1.length;i++){
      console.log(i+1+')'+array1[i])
    }
  }
  function add (t1,arr){console.log(t1)

    if(t1=='add\n'){
      console.log('error')}
      else {
        array1.push(arr.slice(1).join(" "))
      }

    
  }
  
  // The following line starts the application
  startApp("zaher alnajjar")