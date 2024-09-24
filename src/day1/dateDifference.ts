export function getDateDifference(date1: string, date2: string): number {
    const firstDate = new Date(date1);
    const secondDate = new Date(date2);

    const differenceInTime = secondDate.getTime() - firstDate.getTime();
    
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    
    return Math.abs(differenceInDays); 
}