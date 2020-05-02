// This calculation is fictitious, within retirement there are many other factors to be taken into account :)

// Premises:
// - The minimum contribution time for men is 35 years and, for women, 30 years;
// - Using rule 85-95, the sum of the age and the contribution time of the man must be at least 95 years old, 
//   while the woman must be at least 85 years old in the sum;

const name = 'Ana'
const sex = 'female'
const age = 29
const contribuitonYears = 4

function canRetire(){
    if (sex == 'male'){
        if(contribuitonYears == 35 || contribuitonYears+age == 95 ){
            console.log(`${name}, you can retire!`)
        } else{
            console.log(`${name}, you still can't retire!`)
        }
    } else if(sex == 'female') {
        if(contribuitonYears == 30 || contribuitonYears+age == 85 ){
            console.log(`${name}, you can retire!`)
        } else{
            console.log(`${name}, you still can't retire!`)
        }
    }
}

canRetire()