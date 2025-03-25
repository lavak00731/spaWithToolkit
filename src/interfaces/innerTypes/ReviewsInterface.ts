type Email = `${string}@${string}`;
export default interface ReviewsInterface {
    rating: number,
    comment: string,
    date: string,
    reviewerName: string,
    reviewerEmail: Email
}