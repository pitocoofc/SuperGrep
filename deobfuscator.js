module.exports = {
    clean(code) {
        // Simulação: Tenta converter Hex (\x41) para texto (A)
        try {
            return code.replace(/\\x([0-9a-fA-F]{2})/g, (match, hex) => {
                return String.fromCharCode(parseInt(hex, 16));
            });
        } catch (e) {
            return "[Erro na desofuscação]";
        }
    }
};
