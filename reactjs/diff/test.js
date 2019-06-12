/*
         [1, 2, 3, 4, 5, 6] 

           |     |     |
           |     |     |
           |     |     |
          ---   ---   ---
           |     |     |
           |     |     |
          ---   ---   ---
          1,2   3,4   5,6
*/

const vet = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < vet.length; i++) {
  for (let j = 1; j < vet.length; j++) {
    if ((vet[j] - vet[i]) === 1) {
      console.log(vet[i] ,vet[j]);
    }
  }
}
