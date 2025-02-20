import jalaali from "jalaali-js";

export function getJalaliDate(date: Date) {
    return jalaali.toJalaali(date.getFullYear(), date.getMonth() + 1, date.getDate());
}

export function getGregorianDate(jYear: number, jMonth: number, jDay: number) {
    return jalaali.toGregorian(jYear, jMonth, jDay);
}

export function getJalaliMonthName(month: number) {
    const months = [
        "فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور",
        "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"
    ];
    return months[month - 1];
}

export function getJalaliMonthDays(year: number, month: number) {
    return jalaali.jalaaliMonthLength(year, month);
}
