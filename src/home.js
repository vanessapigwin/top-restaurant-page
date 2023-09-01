const makeHome = () => {
    const homeDiv = document.createElement('div');
    homeDiv.classList.add('home-content');
    homeDiv.textContent = 'HELLO FROM HOME';

    return homeDiv;
};

export { makeHome }