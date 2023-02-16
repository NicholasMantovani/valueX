
export interface Event {
    id: number;
    date: string;
    title: string;
    duration: number;
    description: string;
    tags: string[];
}

export interface Review {
    id: number;
    utility: number;
    speech_fluidity: number;
    interesting: number;
    text_review: string;
}


export interface EventWithReviews extends Event {
    reviews: Review[];
}
