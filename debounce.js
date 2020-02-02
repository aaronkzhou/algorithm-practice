function debounce(fn, delay) {
    let timer = null;
    return function () {
        let context = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn.apply(context, args);
        }, delay);
    }
}

function debounce(fn, delay) {
    let timer = null;
    return function () {
        let context = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn.apply(context, args);
        }, delay);
    }
}

// doubleClick

function debounce(fn, delay) {
    let timer = null
    let count = 0

    return function () {
        let context = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            count = count + 1
            if (count === 1) fn.apply(context, args);
            count = 0
        }, delay);
    }
}

const handleOnClick = debounce(doubleClickFn, 100)
