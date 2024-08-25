import dayjs from "dayjs";

export function dateFormat(date: string) {
    return dayjs(date).format("DD/MM/YYYY h:mm:ss A")
}