export type Language = "en" | "it";

export type PageKey =
  | "bio"
  | "animation"
  | "storyboard"
  | "personalprojects"
  | "curriculum"
  | "contacts";

export interface StoryboardProject {
  id: string;
  title: string;
  imageCount: number;
  thumbnail: string;
}

export interface AnimationProject {
  id: string;
  title: string;
  year: string;
  distributor: string;
  thumbnail: string;
  vimeoEmbed: string;
}

export interface VideoProject {
  id: string;
  title: string;
  vimeoId: string;
  padding: string;
  thumbnail: string;
}
