// Write a program which determines the largest prime palindrome less than 1000.
console.log(palin());

function palin() {
    for (var x = 999; x > 0; x--) {
        var pal = JSON.stringify(x).split('').reverse().join('');
        var not_prime = true;
        var is_palindrome = false;

        if (pal === x.toString()) {
            is_palindrome = true;
        }

        for (var i = 2, j = Math.floor(Math.sqrt(x)); i < j; i++) {
            if (x % i === 0) {
                not_prime = false;
            }
        }

        if (not_prime && is_palindrome) {
            return x;
        }
    }
}
