export interface ToolsSectionText {
  title: Title;
  free: string;
  toolsCard: ToolsCard[];
}

interface Title {
  text1: string;
  blueText: string;
  text2: string;
}

interface ToolsCard {
  title: string;
  cta: string;
  pathname: string;
}
