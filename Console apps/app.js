class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }
    get title() {
        return this._title;
    }
    get isCheckedOut() {
        if (this._isCheckedOut) {
            return `Not available, ${this._title} is checked out at the moment.`;
        } else {
            return `${this._title} is in at the moment, you can check it out.`;
        };
    }
    get ratings() {
        return `The ratings for ${this._title} are: ${this._ratings}.`;
    }
    set isCheckedOut(value) {
        this._isCheckedOut = value;
    }
    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut
    }
    getAverageRating() {
        let ratingsSum = this._ratings.reduce((currentSum, rating) =>
            currentSum + rating, 0);
        const ratingsLength = this._ratings.length;
        return `The average rating for ${this._title} is ${ratingsSum / ratingsLength}.`;
    }
    addRating(input) {
        this._ratings.push(input)
    }

}

class Book extends Media {
    constructor(author, title, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }
    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }

}

class Movie extends Media {
    constructor(director, title, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }
    get director() {
        return this._director;
    }
    get runTime() {
        return this._runTime;
    }

}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4, 3, 5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Jan de Bont', 'Speed', 116);

//speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

speed.addRating(4, 3, 5);
console.log(speed.getAverageRating());