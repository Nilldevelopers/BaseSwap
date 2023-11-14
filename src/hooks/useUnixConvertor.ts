interface IReturnType {
    year: number
    month: number
    day: number
    hour: number
    minutes: number
    seconds: number
}

// Unix timestamp in seconds
const useUnixConvertor = (unixTime: number): IReturnType => {

    // Convert Unix timestamp to milliseconds
    let timestampInMillis: number = unixTime * 1000;

    // Create a new Date object with the timestamp
    let date: Date = new Date(timestampInMillis);

    // Get the day, month, and year from the date object
    const day: number = date.getDate();
    const month: number = date.getMonth() + 1; // Adding 1 because months are zero-based (0 = January)
    const year: number = date.getFullYear();
    const hour: number = date.getHours()
    const minutes: number = date.getMinutes()
    const seconds: number = date.getSeconds()

    return {
        year,
        month,
        day,
        hour,
        minutes,
        seconds
    }
}
export default useUnixConvertor