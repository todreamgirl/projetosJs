for (let i = 10; i > 0; i = i - 1) {
    if (i % 2 == 0) {
        console.log("Caiu no Continue");
        continue;
    }
    console.log(i);
}