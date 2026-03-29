const REstringer = require('restringer');

module.exports = {
    clean(code) {
        try {
            // O REstringer processa o código e tenta resolver as ofuscações
            const restringer = new REstringer(code);
            
            // Ele aplica várias técnicas de desobstrução automaticamente
            restringer.deobfuscate();
            
            return restringer.script; // Retorna o código "limpo"
        } catch (e) {
            // Se falhar (código malformado), retorna o original com aviso
            return `[Falha na Desofuscação Automática]: ${e.message}\nOriginal: ${code}`;
        }
    }
};
