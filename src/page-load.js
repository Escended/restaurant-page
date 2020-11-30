const createListItem = (title, description, dueDate, priority, project) => {
    // this.id++;
    // this.completionStatus = "incomplete";
    const markComplete = function() {
        if (this.completionStatus == "complete") {
            console.log("This is running a!")
            this.completionStatus = "incomplete"}
        else if (this.completionStatus == "incomplete") {
            console.log("This is running!")
            this.completionStatus = "complete"}
        console.log(this.completionStatus);
        
    };


    return {
        // id, 
        title, 
        description, 
        dueDate, 
        priority, 
        project, 
        completionStatus: completionStatus, 
        markComplete
    }
}

let a = createListItem("a", "b", "c", "d"," e");

a.markComplete();

console.log(a.completionStatus);