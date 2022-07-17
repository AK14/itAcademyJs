class Review {
    reviews = [];
    sortDirection = 'DESC';

    addToList(data){
        this.reviews.push(data);
        this.render();
        this.getRoundReviews();
    }

    render () {
        let reviews = this.reviews;
        let ul = document.getElementById('list');
        ul.innerHTML = '';

        reviews.map((data)=>{
            let arData = Object.values(data);

            let li = document.createElement("li");
            li.className = 'row';
            arData.forEach((item) => {
                let div = document.createElement('div');
                div.className = 'col-4'
                div.appendChild(document.createTextNode(item))
                li.appendChild(div) ;
            })
            ul.appendChild(li);
        })
    }

    sortByReview ( ){
        if(this.sortDirection === 'ASC'){
            this.reviews = this.reviews.sort((a, b) => {
                return Number(a.review) < Number(b.review) ? 1 : -1
            });
        }
        if(this.sortDirection === 'DESC'){
            this.reviews = this.reviews.sort((a, b) => {
                return Number(a.review) > Number(b.review) ? 1 : -1
            });
        }

        this.render();
    }

    setSortDirection(direction){
        this.sortDirection = direction;
    }

    getRoundReviews(){
        let arReviews = this.reviews.map((i)=>{
            return i.review
        })

        let result = 0;
        if(arReviews.length){
            result= arReviews.reduce((a, b) => (Number(a) + Number(b))) /  arReviews.length;
        }

        return result;

        /*
        let sum = 0;
        arReviews.forEach((i) =>{
           sum = sum + Number(i);
        });

        let result  = sum / arReviews.length;
        console.log(sum, arReviews.length ,result);
        */
    }

    static validate(data){
        let result = true;
        if(!data.from) result = false;
        if(!data.text) result = false;
        if(!data.review || data.review < 1 || data.review > 5  ) result = false;

        return result
    }
}


const review = new Review();
const formReview = document.getElementById('reviewForm');
if(formReview){
    formReview.addEventListener('submit', (e)=>{
        e.preventDefault();
        let data = new FormData(e.target);

        // получаем данные из formData
        const formData = data.entries();
        const result = Object.fromEntries(formData)

        if(Review.validate(result)){
            review.addToList(result);
            formReview.reset();
        }
    });
}

window.onload = () => {
    const yearElement = document.getElementById('year');
    const reviewsSort = document.getElementById('sortReview');

    if(reviewsSort){
        reviewsSort.addEventListener('click', () => {
            let direction = review.sortDirection;
            if(direction === 'ASC'){
                review.setSortDirection('DESC');
                reviewsSort.innerHTML = '&#8595;'
            }else if(direction === 'DESC'){
                review.setSortDirection('ASC')
                reviewsSort.innerHTML = '&#8593;'
            }
            review.sortByReview();
        })
    }
    yearElement.innerText = new Date().getFullYear();

    setInterval(()=> {
        const today = document.querySelector('.date');

        if(today){
            let d = new Date();
            let result  = `${d.getDate()}-${d.getMonth()}-${d.getFullYear()} ${d.getHours()} : ${d.getMinutes()}`;
            today.innerText = d.toLocaleString();
        }

        const average = document.getElementById('average');
        if(average){
            average.innerHTML = review.getRoundReviews();
        }

    }, 1000 )

}