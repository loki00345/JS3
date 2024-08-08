// const car = {
//     manufacturer: "BMW",
//     model: "X5",
//     year: 2022,
//     averageSpeed: 100, // km/h

//     displayInfo: function () {
//         console.log(`Car: ${this.manufacturer} ${this.model}`);
//         console.log(`Year of manufacture: ${this.year}`);
//         console.log(`Average speed: ${this.averageSpeed} km/h`);
//     },

//     calculateTravelTime: function (distance) {
//         const timeWithoutBreaks = distance / this.averageSpeed;
//         const numberOfBreaks = Math.floor(timeWithoutBreaks / 4);
//         const totalTime = timeWithoutBreaks + numberOfBreaks;
//         return totalTime;
//     }
// };

// car.displayInfo();

// const distance = 500;
// const travelTime = car.calculateTravelTime(distance);
// console.log(`Travel time for a distance of ${distance} km: ${travelTime} hours`);



// class Fraction {
//     constructor(numerator, denominator) {
//       this.numerator = numerator;
//       this.denominator = denominator;
//     }
  
//     // Функція для додавання двох дробів
//     add(fraction) {
//       const numerator = this.numerator * fraction.denominator + fraction.numerator * this.denominator;
//       const denominator = this.denominator * fraction.denominator;
//       return new Fraction(numerator, denominator).reduce();
//     }
  
//     // Функція для віднімання двох дробів
//     subtract(fraction) {
//       const numerator = this.numerator * fraction.denominator - fraction.numerator * this.denominator;
//       const denominator = this.denominator * fraction.denominator;
//       return new Fraction(numerator, denominator).reduce();
//     }
  
//     // Функція для множення двох дробів
//     multiply(fraction) {
//       const numerator = this.numerator * fraction.numerator;
//       const denominator = this.denominator * fraction.denominator;
//       return new Fraction(numerator, denominator).reduce();
//     }
  
//     // Функція для ділення двох дробів
//     divide(fraction) {
//       const numerator = this.numerator * fraction.denominator;
//       const denominator = this.denominator * fraction.numerator;
//       return new Fraction(numerator, denominator).reduce();
//     }
  
//     // Функція для скорочення дробу
//     reduce() {
//       const gcd = this.gcd(this.numerator, this.denominator);
//       return new Fraction(this.numerator / gcd, this.denominator / gcd);
//     }
  
//     // Функція для знаходження найбільшого спільного дільника (НСД)
//     gcd(a, b) {
//       if (!b) {
//         return a;
//       }
//       return this.gcd(b, a % b);
//     }
  
//     toString() {
//       return `${this.numerator}/${this.denominator}`;
//     }
//   }
  
//   // Приклади використання:
  
//   const fraction1 = new Fraction(1, 2);
//   const fraction2 = new Fraction(1, 3);
  
//   console.log('Додавання:', fraction1.add(fraction2).toString());
//   console.log('Віднімання:', fraction1.subtract(fraction2).toString());
//   console.log('Множення:', fraction1.multiply(fraction2).toString());
//   console.log('Ділення:', fraction1.divide(fraction2).toString());
  

const Time = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    displayTime: function () {
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    },

    changeBySeconds: function (seconds) {
        this.seconds += seconds;
        this.updateTime();
    },
    changeByMinutes: function (minutes) {
        this.minutes += minutes;
        this.updateTime();
    },
    changeByHours: function (hours) {
        this.hours += hours;
        this.updateTime();
    },
    updateTime: function () {
        while (this.seconds >= 60) {
            this.seconds -= 60;
            this.minutes++;
        }
        while (this.minutes >= 60) {
            this.minutes -= 60;
            this.hours++;
        }
        while (this.seconds < 0) {
            this.seconds += 60;
            this.minutes--;
        }
        while (this.minutes < 0) {
            this.minutes += 60;
            this.hours--;
        }
        while (this.hours >= 24) {
            this.hours -= 24;
        }
        while (this.hours < 0) {
            this.hours += 24;
        }
    }
};
const time = Object.create(Time);
time.hours = 20;
time.minutes = 30;
time.seconds = 45;
console.log("Initial Time:");
time.displayTime();
time.changeBySeconds(30);
console.log("Time after adding 30 seconds:");
time.displayTime();
time.changeBySeconds(-45);
console.log("Time after subtracting 45 seconds:");
time.displayTime();
time.changeByMinutes(15);
console.log("Time after adding 15 minutes:");
time.displayTime();
time.changeByHours(2);
console.log("Time after adding 2 hours:");
time.displayTime();