export function isWithinSevenDays(postedDate: string) {
    const posted = new Date(postedDate);
    const now = new Date();
    const diffInMs = now - posted;
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
    return diffInDays < 7;
}

export function formatDate(date: string) {
    const dateObj = new Date(date);
    const day = String(dateObj.getUTCDate()).padStart(2, '0');
    const month = String(dateObj.getUTCMonth() + 1).padStart(2, '0'); 
    const year = dateObj.getUTCFullYear();
    return `${day}.${month}.${year}`;
}