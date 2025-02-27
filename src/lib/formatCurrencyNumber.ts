export const convertToCurrencyNumber = (
    number: number,
    currency?: string
): string => {
    let formatedNumber: string;

    try {
        formatedNumber = new Intl.NumberFormat(
            "en-US",
            { style: "currency", currency: "USD" }
        ).format(number);
        if (currency) formatedNumber.replace('$', currency);

    } catch { formatedNumber = ''; }

    return formatedNumber;
};