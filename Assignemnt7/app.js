class Course {
    title;
    length;
    price;

    constructor( title, length, price ) {
        this.title = title;
        this.length = length;
        this.price = price;
    }

    lengthOverPrice( ) {
        let result = this.length/this.#price;
        console.log( result )
    }

    summary( ) {
        console.log( `This course name is ${ this.title } 
        contain ${ this.length } courses
        and costs ${ this.#price }` )
    }

    setPrice( price ) {
        if ( price < 0 ) {
            
            alert( "price is too low. insert another price" );
        }
        else {
            this.price = price;
        }
    }

    getPrice( ) {
        console.log( `$${this.price} ` )
    }
}

class TheoreticalCourse extends Course {
    constructor( title, length, price ) {
        super( title, length, price );
    }
   
    publishSomething( ) {
        console.log( 'Theoretical course' );
    }
}

class PracticalCourse extends Course {
    number;
    constructor( title, length, price, number ) {
        super( title, length, price );
        this.number = number;
    }

    numberOfExercises( ) {
        console.log( this.number )
    }
}

const course1 = new Course( 'First Course', 10, 50 )
const course2 = new Course( 'Second Course', 5, 100 )
const course3 = new PracticalCourse( 'Third Course', 10, 30,2 )
const course4 = new TheoreticalCourse( 'Fourth course', 10, 80,8 )

//1
console.log( course1, course2 )
//2
console.log( "lenght over price for courses 1,2" );
course1.lengthOverPrice( )
course2.lengthOverPrice( )
//3
console.log( "Methods for courses 3,4" );
course3.numberOfExercises( )
course4.publishSomething( );
//4
console.log( "Setters, getters" )
course1.setPrice( 100 )
course1.getPrice( );
course4.setPrice( 20 );
course4.getPrice( );