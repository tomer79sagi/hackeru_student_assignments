class Task {
   title
   index
   constructor(index, title) {
      this.title = title;
      this.index = index;
   }
}



function edit(input) {
   input.value = "";
   addEventListener('input',function(){
   input.style.borderColor="orange";
});
  }

  function inpchanging(inp){
   addEventListener('input',function(){
      inp.style.borderColor="orange";
  });
  }
function add() {
   let x = document.querySelectorAll("input");
   let l = x.length;

   let newrow = document.getElementById("table");
   let html_obj = document.createElement("div");

   let task_html = `

   <div class='flex' id='row${l}'>
       <span id='rowi${l}' >  <input onclick="inpchanging(document.getElementById('${l}'));" id='${l}' type="text" placeholder="write your task"></span>
      
      <span style=" padding-left: 60px;"> 
       <label for='${l}'>  <img  onclick="edit(document.getElementById('${l}'));"class="img-with-text" src="https://www.pdfzorro.com/Images/IconsFunktionen/pdf-edit.webp" alt="edit">
         <div  onclick="edit(document.getElementById('${l}'));" class="texting">  edit</div> </label>
      </span>
      <span>
         <img onclick="deleted(document.getElementById('row${l}'),document.getElementById('${l}'));
          "class="img-with-text"
           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS75ld4G1_fDEe1LBmzOZtHMcbQABnikVJlig&usqp=CAU" alt="delete">
         <div onclick="deleted(document.getElementById('row${l}'),document.getElementById('${l}'));"class="texting"> delete</div>
         </span>
     
      <span>
         <img onclick="accomplished(document.getElementById('rowi${l}'),document.getElementById('${l}'),document.getElementById('${l}'))" class="img-with-text" src="https://previews.123rf.com/images/iqoncept/iqoncept1602/iqoncept160200039/52820003-goal-achieved-words-on-a-sign-to-illustrate-a-mission-accomplished-or-successful-project.jpg" alt="edit">
         <div onclick="accomplished(document.getElementById('rowi${l}'),document.getElementById('${l}'),document.getElementById('${l}'))" class="texting"> accomplished</div>
         </span>

   </div>`

   html_obj.innerHTML = task_html;
   document.body.appendChild(html_obj);




}

function deleted(task_element, input) {
   localStorage.removeItem(input.id, input.value);
   task_element.remove();
}
function accomplished(span, input) {
   let task = new Task(input.id, input.value);
   console.log(input.value);
   console.log(input.id);

   if (typeof (Storage) !== undefined) {
      localStorage.setItem(input.id, input.value);
   }

   if (input.value !== undefined)
      span.innerHTML = "<span id=" + input.id + "><p> <b>" + input.value + "<b> </p>";
}

function loadata() {
   if (typeof (Storage) !== undefined) {
      let index = localStorage.length;
      for (let i = 0; i < index; ++i) {

         add()
      }
      Object.keys(localStorage).forEach(key => {
         console.log(key);
         let value = localStorage.getItem(key);
         let input = document.getElementById(key);
         input.value = value;
         console.log(value);


      })
   }
}