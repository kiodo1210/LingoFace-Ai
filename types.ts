
export type ViewState = 'home' | 'session' | 'expertise' | 'progress' | 'payment';

export interface Tutor {
  id: string;
  name: string;
  role: string;
  image: string;
  rating: number;
  tags: string[];
}

export interface CoachingFeedback {
  emotionSync: string;
  original: string;
  correction: string;
  explanation: string;
  coachingPoint: string;
}

export interface PaymentPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  isPremium: boolean;
}
