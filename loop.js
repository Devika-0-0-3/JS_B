for(var i=0;i<=100;i+=2){
    process.stdout.write(i +" ");
}

console.log("\n");
for(i=0;i<5;i++){
    let row="";
    for(j=0;j<=i;j++){
        row+='*';
    }
    console.log(row);
}