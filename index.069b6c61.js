document.querySelector("#task-form").addEventListener("submit",(function(e){e.preventDefault();const t=e.target.elements.taskName.value.trim(),a=e.target.elements.taskText.value.trim(),n={taskName:t,taskText:a,id:Date.now()};console.log(n)}));
//# sourceMappingURL=index.069b6c61.js.map
