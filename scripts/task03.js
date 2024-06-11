export const calculateFallDistance = () => {
    const t = +prompt('Введите время падения', '');
    const fallingSpeed = 9.8;
    let dropDistance = (1 / 2) * fallingSpeed * (t ** 2);
    return alert(`Дистанция= ${dropDistance}`);
};