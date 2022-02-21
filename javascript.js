let values = [];

const add = function(listOfitems){
    return listOfitems[1]+listOfitems[0];
};

const subtract = function(listOfitems){
    return listOfitems[1]-listOfitems[0];
    };

const multiply = function(listOfitems){
    return listOfitems[1]*listOfitems[0];
};

const divide = function(listOfitems){
    return listOfitems[1]/listOfitems[0];
};

const operate = function(listOfitems){
console.log(listOfitems);
return 0;
};

const finalDisplay = function(e){
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.addEventListener('click',function(e){
        const button = document.querySelector(`buttons[id=${e.id}]`);
        console.log(e.target.id);
        const display = document.querySelector('.display');
        if (e.target.className === "clears"){
            display.textContent = '';
            values = [];
        }
        else if(e.target.className === "equals" || e.target.className === "adds" 
        || e.target.className === "minuses"|| e.target.className === "multiplies"
        || e.target.className === "divides"){
            display.textContent += e.target.id;
            values.push(e.target.id);
            operate(values);
        }
        else{
            display.textContent += e.target.id;
            values.push(e.target.id);
        }
    }))
};

finalDisplay();