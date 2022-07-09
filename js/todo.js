
class TodList {
    constructor () {
        this.todos = [];
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
            return item.id !== id
        })
    }

    /**
     * SORTED ARRAY BY DATE
     */
    sort ( ){
        this.todos = this.todos.sort((a, b) => {
            return a.date < b.date ? 1 : -1
        });
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
        return this.todos;
    }
}


const test = new TodList();
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
}, 2000)
