export interface NavigationItem {
  id: string;
  label: string;
  uri?: string;
  children: NavigationItem[];
}
