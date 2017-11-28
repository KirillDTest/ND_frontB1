var school = {
    first:{
        classA:{
            teacher:"Elena Ssanovna",
            child1:"Ivan",
            child2:"Maksim",
            child3:"Igor"
        },
        classB:{
            teacher:"Larisa Valentinovna",
            child1:"Dima",
            child2:"Alina",
            child3:"Dasha"
        }
    },
    second:{
        classC:{
            teacher:"Olga Sergeevna",
            child1:"Nastya",
            child2:"Maksim",
            child3:"Andrey"
        },
        classD:{
            teacher:"Alla Borisovna",
            child1:"Olga",
            child2:"Dima",
            child3:"Vlad"
        }
    }
};

console.log(school["second"]["classD"]["child2"]);//Dima
console.log(school["first"]["classA"]["teacher"]);//Elena Ssanovna
console.log(school["first"]["classB"]);//classB