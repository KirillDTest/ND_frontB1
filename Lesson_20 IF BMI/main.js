var BodyCalc = function(weight, height)
{
var BMI = weight/(height*height);
if (BMI<18.5)
	{console.log("недостаточная масса");
	 return BMI;}
	else if (BMI>=18.5 && BMI<25.0)
		 {console.log("норма");
		  return BMI;}
		else if (BMI>=25.0 && BMI<30.0)
		     {console.log("избыточная масса");
		      return BMI;}
		 	else if (BMI>=30.0)
		     {console.log("ожирение");
		      return BMI;}
		  }

console.log(BodyCalc(57,1.72));