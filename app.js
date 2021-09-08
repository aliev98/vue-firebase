const app = Vue.createApp({
   data() {
       return {
           showBooks: true, // bool
           url: 'http://redcapes.se', // string 
           books: [
               {title: 'name of the wind', author: 'Patrick Jones', img: 'assets/icon1.jpg', isFav: true},
               {title: 'the way of kings', author: 'Brandon Sanderson', img: 'assets/icon2.jpg', isFav: false},
               {title: 'the final empire', author: 'Steven Lang', img: 'assets/icon3.jpg', isFav: false}
           ]
       }
   },

   methods: {
       toggleShowBooks(){
           this.showBooks = !this.showBooks
       },
       toggleFav(i){
             this.books[i].isFav = !this.books[i].isFav;
            // console.log(this.books[i].isFav)
       }
       //    handleEvent(e, data){
           //        console.log(e, e.type)
           //        if(data){
               //            console.log(data)
               //        }
               //    },
               //    handleMousemove(e) {
                   //        this.x = e.offsetX
                   //        this.y = e.offsetY
                   //    }
    },
     computed: {
      filteredBooks(){
        return this.books.filter((book) => book.isFav)
        }
      }
})


app.mount('#app')