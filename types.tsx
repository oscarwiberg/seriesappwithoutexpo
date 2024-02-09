export interface Series {
    show: {
      id: number;
      name: string;
      language: string;
      genres: string[];
      rating?: {
        average: number;
      };
      image?: {
        medium: string;
      };
      summary: string;
    };
  }
  