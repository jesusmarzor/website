import { useTranslation } from "react-i18next";
import { minDaysNewLabel } from "utils/constants";

export const useDate = () => {
    const {i18n} = useTranslation()

    const getDateFromString = (dateString: string): Date => new Date(Date.parse(String(dateString)))

    const secondsBetweenDates = (startDate: Date, endDate: Date) => endDate.getTime() - startDate.getTime()

    const getDateString = (dateString: string): string => {
        const options: Intl.DateTimeFormatOptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
        return getDateFromString(dateString).toLocaleDateString(i18n.language, options)
    }

    const isShowedNew = (dateString: string): boolean => {
        let secondsBetween = secondsBetweenDates(getDateFromString(dateString), new Date())
        let daysBetween = secondsBetween / (1000 * 3600 * 24)
        return minDaysNewLabel > daysBetween
    }

    const isShowedPost = (dateString: string): boolean => getDateFromString(dateString).getTime() <= new Date().getTime()

    return {getDateString, isShowedNew, isShowedPost}
}

export default useDate