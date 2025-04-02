import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { nome, email, telefone, mensagem } = await req.json();

    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(process.env.GOOGLE_CREDENTIALS!),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = process.env.SPREADSHEET_ID!;

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "A:D", // Define as colunas a preencher
      valueInputOption: "RAW",
      requestBody: { values: [[nome, email, telefone, mensagem]] },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erro ao enviar para a planilha:", error);
    return NextResponse.json({ success: false, error: "Erro interno" });
  }
}
