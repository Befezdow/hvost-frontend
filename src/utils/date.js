export const calcAge = (minDate, maxDate) => {
    const currentDate = new Date();

    const minAge = (currentDate - maxDate) / 31536000000;
    const maxAge = (currentDate - minDate) / 31536000000;

    return Math.round((minAge + maxAge) / 2);
};