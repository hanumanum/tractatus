// Update task list
var tasklist = $("#tasklist");
$.getJSON("https://hanumanum.github.io/tractatus/trello_tasklist.json", function (tasks) {

    for (var tskl of tasks.checklists) {
        tasklist.append("<h5>" + tskl.name + "</h5>");
        tasklist.append("<ul>");
        for (var tsk of tskl.checkItems) {
            if (tsk.state === "complete") {
                tasklist.append("<li><del>" + tsk.name + "</del></li>");
            }
            else {
                tasklist.append("<li>" + tsk.name + "</li>");
            }

        }
        tasklist.append("</ul>");
        tasklist.append("<br>");
    }
});


$(document).ready(function() {
    $('#toc').toc({
        elementClass: 'toc',
        ulClass: 'list-group',
        indexingFormats: 'number',
        selector: "h2,h3,h4,h5,h6"
    });
});

/*
// Update TOC
$('#toc').initTOC({
    selector: 'h2, h3, h4',
    scope: 'body',
    overwrite: false,
    prefix: 'toc'
});
*/

