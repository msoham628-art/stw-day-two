//4.
//Program to create a right angle triangle.
let n = 5
for(let i=1;i<=n;i++){
    let line = " ";
    for(let j=1;j<=i;j++){
        line = line + ("*")
    }
    console.log(line)
}
//Program to create a centered triangle
for(let i=1;i<=n;i++){
    let line = " ";
    for(let k = 1; k <= (n-i); k++){
        line = line + (" ")
    }
    for(let j=1;j<=2*i-1;j++){
        line = line + ("*")
    }
    console.log(line)
}
