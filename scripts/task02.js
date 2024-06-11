export const celsiusToFahrenheit = () => {
    const t = +prompt('введите значение по цельсию', '');
    let result = t * 9 / 5 + 32;
    return alert(`по ференгейту= ${result} градусов`);
};