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


/* define the pathnode if it exist or not */
var pathnode;
    if(process.argv[2]){
         pathnode = process.argv[2];
    }
    else{
         pathnode = 'database.json';
    }

var fs=require('fs');
// task = JSON.parse(loading('database.json'));
  


function startApp(name){
    if(!fs.existsSync(pathnode)){
        storeData(array1,pathnode);
        }
   array1= JSON.parse(loading(pathnode));
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")

  
   
   
}
 //  load data from  database.json
 const loading = (pathnode) => {
    try {
      return fs.readFileSync(pathnode, 'utf8')
    }
     catch (err) {
      console.error(err)
      return false
    }
  }

//  save data in database.json when i type exit or quit.
const storeData = (data, pathnode) => {
    try {
      fs.writeFileSync(pathnode, JSON.stringify(data))
    } catch (err) {
      console.error(err)
    }
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
 * 'This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */

  //var array1 =['task1','task2','task3']
  var array1 =[{task:'task1',done:'no'},
                {task:'task2',done:'no'},
                {task:'task3',done:'no'},] 
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
    else if (array[0]=== 'remove'){
      remove(text)
    }
    else if (array[0]=== 'edit'){
      edit(text,array);
    }
    else if (array[0]==='check'){
      check(text,array);
    }
    else if (array[0]==='uncheck'){
      uncheck(text,array);
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
    storeData(array1, pathnode) ;
    process.exit();
  }
  /**
   * function help display all coomand
   */
  function help(){
    console.log('quit\nexit\nhello\nadd\nremove\nlist')
  }
  function list(){
    for (var i = 0 ;i<array1.length;i++){
      //console.log(i+1+')'+array1[i])
      if(array1[i].done=='no'){
      console.log(i+1+')'+'[]'+array1[i].task)
    }
    else{
      console.log(i+1+')'+'[✓]'+array1[i].task)
    }
  }

  }
  function add (t1,arr){console.log(t1)

    if(t1=='add\n'){
      console.log('error')}
      else {
        //array1.push(arr.slice(1).join(" "))
        array1.push({task:arr.slice(1).join(" "),done:'no'})
      }

    
  }
  function remove (t1){
    if(t1.trim()=='remove'){
      array1.pop()
    }
    else if (t1.trim()=='remove 1'){
      array1.splice(0,1)

    }
    else if (t1.trim()=='remove 2'){
      array1.splice(1,1)
    }
else{
  console.log("enter the right number")
}
  }
  function edit(t1,arr){
    if(t1=='edit\n'){
      console.log('error')
    }
    else if(isNaN(arr[1])){
      //array1.splice(array1.length-1,1,arr.slice(1).join(' '))
      array1.splice(array1.length-1,1,{task:arr.slice(1).join(' '),done:'no'})
    }
    else if(arr[1]<=array1.length){
      //array1.splice(arr[1]-1,1,arr.slice(2).join(' '))
      array1.splice(array1.length-1,1,{task:arr.slice(2).join(' '),done:'no'})
    }
    else{
      console.log('enter the right number of task')
    }
  }
  function check(t1,arr){
    if (t1== 'check\n'){
      console.log('error')
    }
    else if(arr[1]<=array1.length){
      array1[arr[1]-1].done='yes'
      //console.log(array1[arr[1]-1].done)
    }
    else{
      console.log('enter the right number of task')
    }
  }
  function uncheck(t1,arr){
    if (t1== 'uncheck\n'){
      console.log('error')
    }
    else if(arr[1]<=array1.length){
      array1[arr[1]-1].done='no'
      //console.log(array1[arr[1]-1].done)
    }
    else{
      console.log('enter the right number of task')
    }
  }
  // The following line starts the application
  startApp("zaher alnajjar")