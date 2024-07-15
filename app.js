const app = Vue.createApp({
    // data, functions
    //template: `<h2>I am the template!</h2>`
    data() {
        return {
            url: 'http://www.thenetninja.co.uk',
            showBooks: true,
            books: [
                {title: 'Name of the Wind', author: 'Patrick Rothfuss',img: 'assets/1.jpg',isFav: true},
                {title: 'The Final Empire', author: 'Brandon Sanderson',img: 'assets/3.jpg',isFav: true},
                {title: 'The Way of Kings', author: 'Brandon Sanderson',img: 'assets/2.jpg',isFav: false}
            ]
        }        
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e,data) {

            console.log(e,e.type)
            if(data) {
                console.log(data)
            }
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleFav(book) {
            book.isFav = !book.isFav            
            console.log('You clicked me!')
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)            
        }
    }
})

app.mount('#app')