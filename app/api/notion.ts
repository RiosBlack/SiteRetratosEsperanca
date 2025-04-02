"use server";
import { Client } from "@notionhq/client";
import { DataNotion, NotionGet } from "@/app/_lib/notionTypes";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DATABASE_ID;

export async function getData(): Promise<DataNotion[]> {
  const response = await notion.databases.query({
    database_id: databaseId || "",
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return response.results.map((item: any) => ({
    Image: (item as NotionGet).properties.Image.rich_text[0]?.plain_text,
    Title: (item as NotionGet).properties.Title.title[0]?.text?.content,
  }));
}
