export interface Device {
  id: string,
  title: string,
  headers: Label[],
  rows: string[][]
}

export interface Label {
  label: string,
  full_label: string
}

