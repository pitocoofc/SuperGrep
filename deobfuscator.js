const synchrony = require('synchrony');

module.exports = {
    clean(code) {
        try {
            // O Synchrony processa o código e remove a ofuscação de forma agressiva
            const deobfuscatedCode = synchrony.deobfuscate(code);
            
            return deobfuscatedCode;
        } catch (e) {
            // Se o código for muito bizarro e ele falhar, avisa o usuário
            return `[Erro Synchrony]: Não foi possível desofuscar este bloco.\nCausa: ${e.message}`;
        }
    }
};
