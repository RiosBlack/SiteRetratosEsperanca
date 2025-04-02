export interface DataNotion {
  Title?: string;
  Image?: string;
}

export interface NotionGet {
  properties: {
    Title: { title: { text: { content: string } }[] };
    Image: { rich_text: { plain_text: string }[] };
  };
}
