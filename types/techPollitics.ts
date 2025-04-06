export interface Profession {
    name: string;
    democrat: number;
    republican: number;
  }
  
  export interface TechPoliticsData {
    professions: Profession[];
  }