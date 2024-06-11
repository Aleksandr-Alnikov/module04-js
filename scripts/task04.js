export const calculateAverage = () => {
    const one = +prompt('Введите первое число', '');
    const two = +prompt('Введите второе число', '');
    const three = +prompt('Введите третье число', '');
    let res = (one + two + three) / 3;
    return alert(`среднее= ${res}`);
};