// Update task list
var tasklist = $("#tasklist");
$.getJSON("https://hanumanum.github.io/tractatus/trello_tasklist_.json", function (tasks) {
    var taskListHTML = "";
    for (var tskl of tasks.checklists) {
        
        taskListHTML+="<h5>" + tskl.name + "</h5>";;
        taskListHTML+="<ul id='trello-list'>";
        for (var tsk of tskl.checkItems) {
            if (tsk.state === "complete") {
                taskListHTML+="<li><input type='checkbox' checked> " + tsk.name + "</li>";
            }
            else {
                taskListHTML+="<li><input type='checkbox'> " + tsk.name + "</li>";
            }

        }
        taskListHTML+="</ul>";
        taskListHTML+="<br>";
    }
    tasklist.append(taskListHTML);
});


$(document).ready(function() {
    $('#toc').toc({
        elementClass: 'toc',
        ulClass: 'list-group',
        indexingFormats: 'number',
        selector: "h2,h3,h4,h5,h6"
    });
});