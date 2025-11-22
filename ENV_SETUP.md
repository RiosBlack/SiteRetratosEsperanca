# Configuração de Variáveis de Ambiente

## Formulário de Contato - Resend

Para que o formulário de contato funcione corretamente, você precisa configurar as seguintes variáveis de ambiente no arquivo `.env.local`:

### Variáveis Obrigatórias

```env
# Resend API Key
# Obtenha sua API key gratuita em: https://resend.com
# Crie uma conta gratuita (3.000 e-mails/mês)
RESEND_API_KEY=re_xxxxxxxxxxxxx

# E-mail de destino para receber os formulários de contato
CONTACT_EMAIL=douglaspmv@hotmail.com
```

### Variáveis Opcionais

```env
# E-mail remetente (opcional)
# Use o domínio de teste do Resend para desenvolvimento: onboarding@resend.dev
# Para produção, configure um domínio verificado no Resend
RESEND_FROM_EMAIL=onboarding@resend.dev
```

## Como Obter a API Key do Resend

1. Acesse [https://resend.com](https://resend.com)
2. Crie uma conta gratuita
3. Acesse o dashboard e vá em "API Keys"
4. Crie uma nova API key
5. Copie a chave e adicione no arquivo `.env.local` como `RESEND_API_KEY`

## Notas Importantes

- O plano gratuito do Resend permite 3.000 e-mails por mês
- Para desenvolvimento, você pode usar o domínio de teste: `onboarding@resend.dev`
- Para produção, você precisará verificar um domínio no Resend
- O e-mail será enviado para o endereço configurado em `CONTACT_EMAIL`

