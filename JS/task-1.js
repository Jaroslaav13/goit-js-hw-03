// ______________Task 1. Slug generator__________
//  перший варіант.(простіший)

function slugify(title) {
    const slug = title.toLowerCase().split(' ').join('-'); 
    return slug;
}
console.log(slugify("Arrays for begginers"))
console.log(slugify("English for developer")); 
console.log(slugify("Ten secrets of JavaScript")); 
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

// другий варіант

// function slugify(title) {
//   const titleArray = title.split(' ');
//   const lowerCaseArray = [];
//   for (const word of titleArray) {
//     const lowerCaseWord = word.toLowerCase();
//     lowerCaseArray.push(lowerCaseWord);
//   }
//   const slugDash = lowerCaseArray.join('-');
//   return slugDash;
// }

// console.log(slugify("Arrays for beginners"));
// console.log(slugify("English for developer")); 
// console.log(slugify("Ten secrets of JavaScript")); 
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));
