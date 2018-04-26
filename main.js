/****************************************************
*
*  MAIN: create list of <span>s and append to
*  fizzbuzzbox with proper css.
*
*****************************************************/
    function createSpan(j) {
        let span = document.createElement("span");
        span.textContent = j.toString();
        if ( isEven(j) ) span.classList.add("isEven");
        if ( isProd3(j) ) span.classList.add("isProd3");
        if ( isPrime(j) ) span.classList.add("isPrime");
        return span;
    }

    function main() {
        for ( let i = 0; i <= 1000; i++ ){
            document.getElementById("fizzbuzzbox").appendChild(createSpan(i));
        }
    }

    main();

/****************************************************
*
*  TESTS: Testing for even numbers, whether a number
*  is divisable by three, and the primacy of a number
*
*****************************************************/

    function isEven ( x ) {
        if ( x%2==0 ) return true;
        else return false;
    }

    function isProd3 ( y ) {
        if ( y%3==0 ) return true;
        else return false;
    }

    function isPrime ( z ) {

        if ( z <= 1 ) return false;
        else if ( z <= 3 ) return true;
        else if ( isEven(z) || isProd3(z) ) return false;

        if(z != 5 && z != 7 ){
          let i = 5;
          do {
              if ( z%i==0 || z%(i+2)==0){
                  return false;
              }

              i = i + 6;

          } while ( i * i <= z );
        }
        return true;
    }
