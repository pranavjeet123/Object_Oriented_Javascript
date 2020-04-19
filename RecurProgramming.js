/**
 * recursilvely calculate the total marks of students
 * Leverage the function calculating the marks classWise
 * Leverage the function calculating marks Section wise
 */


let school = {
    class1: [{name: 'John', marks: 800},
             {name: 'Alice', marks: 480 }],
    class2: {
      sectionA: [{name: 'Peter', marks: 200}, {name: 'Alex', marks: 800 }],
      sectionB: [{name: 'Jack', marks: 300}]
    }
  };


  function sumMarks(result){
      if(Array.isArray(result)){
          //below reduce is an accumulator , it sums the marks of array taking 
          //each individual item.
          return result.reduce((prev,current)=>prev+current.marks,0);

      }

      else{

        let sum=0;
        for(let section of Object.values(result)){

            sum += sumMarks(section);

        }

        return sum;
      }
  }

//Printing all marks obtained in all classes
  console.log(sumMarks(school));




  /**
 *
 * Leverage the function calculating the marks classWise
 * 
 */




  function sumCLassMarks(result){
      if(Array.isArray(result)){
          //below reduce is an accumulator , it sums the marks of array taking 
          //each individual item.
          let classMarks= result.reduce((prev,current)=>prev+current.marks,0);

          console.log(classMarks);

      }

      else{
        for(let section of Object.values(result)){

             sumCLassMarks(section);

        }
      }
  }

//Printing all marks obtained in all classes
  console.log(sumCLassMarks(school));