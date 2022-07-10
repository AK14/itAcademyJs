
class TodList {
    constructor () {
        this.todos = [];
        this.sortDirection = 'DESC'
    }

    /**
     * ADD ELEMENT BY ID
     * @param text
     * @param id
     */
    addToList (text, id = this.generateId()) {
        this.todos.push({ text:text, date:Date.now(), id:id })
    }

    /**
     * REMOVE ELEMENT BY ID
     * @param id
     */
    removeFromList(id) {
        this.todos = this.todos.filter((item) => {
            return String(item.id) !== String(id)
        })
    }

    /**
     * SORTED ARRAY BY DATE
     */
    sort ( ){
        if(this.sortDirection === 'ASC'){
            this.todos = this.todos.sort((a, b) => {
                return a.date < b.date ? 1 : -1
            });
        }
        if(this.sortDirection === 'DESC'){
            this.todos = this.todos.sort((a, b) => {
                return a.date > b.date ? 1 : -1
            });
        }
    }

    /**
     * GENERATE ID
     * @returns {number}
     */
    generateId(){
        return Date.now() + Math.floor(Math.random() * 100)
    }

    /**
     * CLEAR RESULT
     */
    clear () {
        this.todos = [];
    }

    /**
     * RETURN RESULT
     * @returns {[]}
     */
    render () {
        const list = document.getElementById('task-list');
        list.innerHTML = '';

        this.todos.map((item) =>{
            const element = document.createElement('li');
            // добавляем название
            element.innerHTML = `<li class='list-group-item d-flex justify-content-between align-items-start'> 
                <div class="ms-2 me-auto mt-2" > 
                     ${item.text} 
                </div> 
                <div class="badge rounded-pill">
                    <button class="btn btn-sm btn-outline-danger text-end remove-item" 
                    title="Remove element" 
                    type="submit"
                    data-element = "${item.id}"
                    >
                        X
                    </button>
                </div>
            </li>`
            list.appendChild(element);
        });
    }

    /**
     * Set elements sort direction
     * @param direction
     */
    setSortDirection(direction){
        this.sortDirection = direction;
    }
}


/*const test = new TodList();
test.addToList('fooo', 1);
test.addToList('bar');
test.addToList('baZ');


console.log(' init ',test.render());
test.removeFromList(1);
console.log('remove-by-id', test.render() ) ;


setTimeout(()=>{
    test.sort();
    console.log('sorted', test.render() );
}, 2000)

setTimeout(()=>{
    test.clear();
    console.log( 'clear', test.render() );
}, 2000)*/


const tasks = new TodList();
// элементы для отслеживания
const addNewTaskBtn = document.getElementById('btnNewTask');
const sortBtn = document.getElementById('sortBtn');
const clearBtn = document.getElementById('clearBtn');
const newTaskForm = document.querySelector('form[name=newTaskForm]')


// события
addNewTaskBtn.addEventListener('click', (e) =>{
    $('#newTask').modal('toggle');
})

newTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = newTaskForm.querySelector('input').value;

    tasks.addToList(data)
    $('#newTask').modal('toggle');
    tasks.render()

    // clear form
    newTaskForm.querySelector('input').value = '';
})

// событие на сортировку
sortBtn.addEventListener('click', () => {
    let direction = tasks.sortDirection;
    if(direction === 'ASC'){
        tasks.setSortDirection('DESC');
    }else if(direction === 'DESC'){
        tasks.setSortDirection('ASC')
    }
    tasks.sort();
    tasks.render();
})

clearBtn.addEventListener('click', () => {
    tasks.clear();
    tasks.render();
})

// слушатель на кнопку удалить ( получаем ID для удаления )
document.addEventListener('click', function(e){

    if( e.target.matches('.remove-item') ) {
        let elementId = e.target.dataset.element
        tasks.removeFromList(elementId);
        tasks.render()
    }
})

