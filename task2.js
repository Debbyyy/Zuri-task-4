let words = '';

const checkYuGiOh = integer => {

  let output_array =[];

  for(let i= 1; i<= integer; i++){
       
    if((i % 2 == 0) && (i % 3 == 0) && (i % 5 == 0)){
        words = 'yu-gi-oh';      
    }

    else if ((i % 2 == 0) && (i % 3 == 0)){
        words = 'yu-gi';
    }

    else if((i % 2 == 0) && (i % 5 == 0)){
        words = 'yu-oh';
    }

    else if((i % 3 == 0) && (i % 5 == 0)){    
        words = 'gi-oh';
    }

    else if(i % 2 == 0){ 
        words = 'yu';
    
    }

    else if(i % 3== 0){
        words = 'gi';
    }

    else if(i % 5 == 0){
        words = 'oh';
    }

    else {
        words = i;    
    }

    output_array.push(words);
}
console.log(output_array);
return output_array;
}
checkYuGiOh(10)