export const throttle = <T extends (...args: any)>(fn: T, delay: number) => {
    let lastFn: ReturnType<typeof setTimeout>;
    let lastRan: number;
    return (...args: Parameters<T>) => {
        const context = this;
        if (!lastRan) {
            fn.call(context, ...args);
            lastRan = Date.now();
        } else {
            if (lastFn) clearTimeout(lastFn) ;
            lastFn = setTimeout( () => {
                if ( (Date.now() - lastRan) >=delay ) {
                    fn.call(context, ...args);
                    lastRan = Date.now()
                }
            }, delay - (Date.now() -lastRan))
        }
    }
}

const checkPosition = ()=> {
    const offset = 500;
    const currentScrollPosition = window.scrollY
    const pageBottomPosition =document.body.offsetHeight - window.innerHeight - offset;
    if (currentScrollPosition >= pageBottomPosition) {
        console.log('다음 페이지 로딩')
    }
}

// const infiniteScroll = throttle(checkposition, 300);
// window.addEventListenr('scroll', infiniteScroll)