# 🛡️ SuperGrep v1.0.0 - SkillForge

O **SuperGrep** é um motor de análise estática e deofuscação em tempo real desenvolvido para identificar vetores de ataque em arquivos HTML e JavaScript.

Com foco em segurança ofensiva e análise preventiva, o sistema detecta comportamentos suspeitos antes da execução do código.

---

## 🚀 Funcionalidades Principais

* **Deofuscação Multicamada:** Identifica e traduz automaticamente strings em `\xXX`, `\uXXXX` e `Base64`.
* **Análise de Atributos DOM:** Detecta eventos perigosos como `onmouseover`, `onclick` e `onerror`.
* **Detecção de Funções Críticas:** Identifica chamadas a funções sensíveis como `eval()`, `document.cookie` e `child_process`.
* **Whitelist Security (Zero Trust):** Código desconhecido ou não traduzido é tratado como potencial risco.
* **Compatibilidade Ampla:** Funciona em qualquer ambiente com Node.js, incluindo Termux.

---

## 🧠 Filosofia

Diferente de ferramentas tradicionais como Semgrep, o SuperGrep segue o princípio:

> ❗ "Não conheço? Então é suspeito."

Isso permite detectar:
- Código ofuscado
- Payloads desconhecidos
- Técnicas de bypass simples e intermediárias

---

## 📂 Estrutura do Projeto

* `motor.js` → Núcleo do sistema
* `deobfuscator.js` → Tradução e limpeza de código
* `7.json` → Dicionário de assinaturas
* `rules.json` → Regras de detecção

---

## 🛠️ Como Usar

1. Instale o Node.js:
```bash
pkg install nodejs
   

2. Clone o repositório:
    ```bash
    git clone https://github.com/pitocoofc/SuperGrep.git



3. Abra a pasta "SuperGrep"


4. altere o input.html para o codigo html ou javascript que deseja verificar


5. rode o "motor.js"


🔍 Uso em Projetos
O SuperGrep pode ser integrado em sistemas maiores, como:
Verificação de downloads
Análise de arquivos suspeitos
Auditoria de aplicações híbridas (Electron, Cordova, Capacitor)
Recomendação:
Mantenha os arquivos na mesma estrutura
Evite remover módulos de segurança



⚠️ Aviso
Este projeto é uma ferramenta de análise e não garante detecção completa de todas as ameaças



⚖️ Licença
Distribuído sob a licença GNU Affero General Public License v3.0 (AGPL-3.0).
Qualquer modificação ou uso em serviços acessíveis via rede deve disponibilizar o código-fonte.
Desenvolvido por Ghost | SkillForge.pp 🇧🇷
