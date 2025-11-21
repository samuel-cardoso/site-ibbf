import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { contact, numberOfPeople, names } = body;

    // Validação básica
    if (!contact || !numberOfPeople || !names || !Array.isArray(names)) {
      return NextResponse.json(
        { error: "Dados inválidos" },
        { status: 400 }
      );
    }

    // Prepara o conteúdo do email
    const namesList = names.map((name: string, index: number) => 
      `${index + 1}. ${name}`
    ).join("\n");

    const emailBody = `
Nova confirmação de presença recebida!

Contato: ${contact}
Número de pessoas: ${numberOfPeople}

Lista de nomes:
${namesList}

---
Este email foi enviado automaticamente pelo formulário de convite da Igreja Batista Fundamental.
    `.trim();

    const recipientEmail = process.env.CONFIRMATION_EMAIL;
    
    if (!recipientEmail) {
      console.error("CONFIRMATION_EMAIL não configurado nas variáveis de ambiente");
      // Ainda retorna sucesso para não quebrar a UX, mas loga o erro
      console.log("=== NOVA CONFIRMAÇÃO (não enviada - email não configurado) ===");
      console.log("Para:", recipientEmail || "NÃO CONFIGURADO");
      console.log("Assunto: Nova confirmação de presença");
      console.log("Corpo:", emailBody);
      console.log("========================");
      
      return NextResponse.json(
        { message: "Confirmação processada (email não configurado)" },
        { status: 200 }
      );
    }

    // Tenta usar Resend se estiver configurado e instalado
    const resendApiKey = process.env.RESEND_API_KEY;
    
    if (resendApiKey) {
      try {
        const { Resend } = await import("resend");
        const resend = new Resend(resendApiKey);
        
        // Tenta usar o domínio configurado, se falhar usa o domínio de teste do Resend
        let fromEmail = process.env.RESEND_FROM_EMAIL;
        
        // Se não tiver configurado ou se o domínio não estiver verificado, usa o de teste
        if (!fromEmail || !fromEmail.includes("@resend.dev")) {
          // Verifica se o domínio configurado é diferente do de teste
          // Se for um domínio próprio, tenta usar, mas tem fallback
          fromEmail = fromEmail || "Igreja Batista Fundamental <onboarding@resend.dev>";
        }
        
        console.log("Tentando enviar email via Resend...");
        console.log("De:", fromEmail);
        console.log("Para:", recipientEmail);
        console.log("API Key configurada:", resendApiKey ? "Sim" : "Não");
        
        const { data, error } = await resend.emails.send({
          from: fromEmail,
          to: [recipientEmail],
          subject: "Nova confirmação de presença - 1ª Igreja Batista Bíblica Fundamentalista de Canoas",
          text: emailBody,
        });

        if (error) {
          console.error("Erro do Resend:", error);
          console.error("Tipo do erro:", typeof error);
          console.error("Mensagem:", error.message);
          console.error("Código:", (error as any)?.statusCode);
          
          // Se o erro for de domínio não verificado, tenta com o domínio de teste
          if ((error as any)?.message?.includes("domain") || (error as any)?.statusCode === 422) {
            console.log("Tentando novamente com domínio de teste do Resend...");
            const { data: testData, error: testError } = await resend.emails.send({
              from: "Igreja Batista Fundamental <onboarding@resend.dev>",
              to: [recipientEmail],
              subject: "Nova confirmação de presença - 1ª Igreja Batista Bíblica Fundamentalista de Canoas",
              text: emailBody,
            });

            if (testError) {
              console.error("Erro mesmo com domínio de teste:", testError);
              return NextResponse.json(
                { error: `Erro ao enviar email: ${testError.message || JSON.stringify(testError)}` },
                { status: 500 }
              );
            }

            console.log("Email enviado com sucesso usando domínio de teste! ID:", testData?.id);
            return NextResponse.json(
              { message: "Confirmação enviada com sucesso (usando domínio de teste)", emailId: testData?.id },
              { status: 200 }
            );
          }
          
          return NextResponse.json(
            { error: `Erro ao enviar email: ${error.message || JSON.stringify(error)}` },
            { status: 500 }
          );
        }

        console.log("Email enviado com sucesso! ID:", data?.id);
        return NextResponse.json(
          { message: "Confirmação enviada com sucesso", emailId: data?.id },
          { status: 200 }
        );
      } catch (resendError: any) {
        console.error("Erro ao enviar email via Resend:", resendError);
        console.error("Detalhes do erro:", JSON.stringify(resendError, null, 2));
        return NextResponse.json(
          { error: `Erro ao processar envio: ${resendError.message || "Erro desconhecido"}` },
          { status: 500 }
        );
      }
    }

    // Método alternativo: usar fetch para enviar via serviço de email
    // Você pode usar EmailJS, SendGrid API, ou outro serviço aqui
    // Por enquanto, apenas loga
    console.log("=== NOVA CONFIRMAÇÃO ===");
    console.log("Para:", recipientEmail);
    console.log("Assunto: Nova confirmação de presença");
    console.log("Corpo:", emailBody);
    console.log("========================");
    console.log("NOTA: Configure RESEND_API_KEY e RESEND_FROM_EMAIL para envio automático");

    return NextResponse.json(
      { message: "Confirmação processada (verifique os logs)" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao processar confirmação:", error);
    return NextResponse.json(
      { error: "Erro ao processar confirmação" },
      { status: 500 }
    );
  }
}

