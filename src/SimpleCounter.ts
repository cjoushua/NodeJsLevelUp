class SimpleCounter {
    public count() {
        let count = 5;
        for (count; count++; count <= 7) {
            console.log(count);
        }
        console.log("All doen!");
    }
}

let count = new SimpleCounter();
count.count();