
function execute(){
    const terminal = document.querySelector('#terminal');
    terminal.innerHTML="";
    const messages = [
        ">>>Executing your code...",
        ">>>Studying.",
        ">>>Playing UNO.",
        ">>>2024: Completed 12th.",
        ">>>Success: Qualified JEE Mains And Advanced.",
        ">>>Learning Data Structures And Algorithms.",
        ">>>Trying to figure out things.",
        ">>>"
    ];
    let i=0;
    const interval=setInterval(()=>{
       if(i<messages.length){
        const line = document.createElement("div");
        line.innerHTML = messages[i++];
        terminal.appendChild(line);  
        terminal.scrollTop = terminal.scrollHeight;
       }
       else{
        clearInterval(interval);
       }
    },1000);
}
function clearconsole(){
    const terminal=document.querySelector('#terminal');
    terminal.innerHTML=">>>";
}