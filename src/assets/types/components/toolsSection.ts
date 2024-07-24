export interface ToolsSectionText {
  title: Title;
  free: string;
  toolsCard: ToolsCard[];
}

export interface Title {
  text1: string;
  blueText: string;
  text2: string;
}

export interface ToolsCard {
  title: string;
  cta: string;
  pathname: string;
}
