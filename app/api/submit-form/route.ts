import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { nome, email, telefone, mensagem } = await req.json();

    // Validação básica
    if (!nome || !email || !telefone || !mensagem) {
      return NextResponse.json(
        { success: false, error: "Todos os campos são obrigatórios" },
        { status: 400 }
      );
    }

    const recipientEmail =
      process.env.CONTACT_EMAIL || "douglaspmv@hotmail.com";
    const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

    // Template HTML do e-mail
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background-color: #2563eb;
              color: white;
              padding: 20px;
              text-align: center;
              border-radius: 8px 8px 0 0;
            }
            .content {
              background-color: #f9fafb;
              padding: 30px;
              border: 1px solid #e5e7eb;
              border-top: none;
            }
            .field {
              margin-bottom: 20px;
            }
            .label {
              font-weight: bold;
              color: #1f2937;
              display: block;
              margin-bottom: 5px;
            }
            .value {
              color: #4b5563;
              padding: 10px;
              background-color: white;
              border-radius: 4px;
              border: 1px solid #d1d5db;
            }
            .footer {
              text-align: center;
              padding: 20px;
              color: #6b7280;
              font-size: 12px;
              border-top: 1px solid #e5e7eb;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Nova Mensagem de Contato</h1>
            <p>Retratos de Esperança</p>
          </div>
          <div class="content">
            <div class="field">
              <span class="label">Nome:</span>
              <div class="value">${nome}</div>
            </div>
            <div class="field">
              <span class="label">E-mail:</span>
              <div class="value">${email}</div>
            </div>
            <div class="field">
              <span class="label">Telefone:</span>
              <div class="value">${telefone}</div>
            </div>
            <div class="field">
              <span class="label">Mensagem:</span>
              <div class="value" style="white-space: pre-wrap;">${mensagem}</div>
            </div>
          </div>
          <div class="footer">
            <p>Enviado em ${new Date().toLocaleString("pt-BR", {
              dateStyle: "long",
              timeStyle: "medium",
            })}</p>
          </div>
        </body>
      </html>
    `;

    // Enviar e-mail
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: recipientEmail,
      subject: "Nova mensagem de contato - Retratos de Esperança",
      html: emailHtml,
      replyTo: email, // Permite responder diretamente ao remetente
    });

    if (error) {
      console.error("Erro ao enviar e-mail:", error);
      return NextResponse.json(
        { success: false, error: "Erro ao enviar e-mail" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Erro ao processar formulário:", error);
    return NextResponse.json(
      { success: false, error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
