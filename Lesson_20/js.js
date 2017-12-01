var bmi = function(weight, height){
    
var BMI= weight/(height*height);
{
if (BMI<18.5)
	{console.log("Underweight");
	 return BMI}
    
	else if (BMI>=18.5 && BMI<25)
		 {console.log("Normal weight");
		  return BMI}
    
    else if (BMI>=25 && BMI<30)
		     {console.log("Overweight");
		      return BMI}
    
    else if (BMI>=30)
		     {console.log("Obesity");
		      return BMI}
		  }}

console.log(bmi(79,1.82));