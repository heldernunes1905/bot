const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
    name: "book",
    category: "galatrixa",
    description: "Galatrixa Book",
    run: async (client, message, args, ops) => {
        let embed = new MessageEmbed()
            .setColor("#ff0000")
            .setTitle(`Frases de Vida by Galatrixa`)
            .addField(`**Frases de Pita:**`, stripIndents`
            - "Não há sonhos para os nossos limites"
            - "Às vezes as estradas mais estreitas são as menos acidentadas"
            - "Ainda não comi ninguém este mês - 02-07-2018"
            - "Fiz um investimento que apartir de Janeiro vou ter tanto dinheiro, que vou ter de trabalhar na mesma"
            - "Se eu dormisse não tinha vida"
            - "Pita no poder! Cona para todos foder!"
            - Nope - "Quando ficarmos famosos vamos querer ter privacidade"
­              SIIIIIIM - "Essa foi a coisa mais estúpida que já ouvi."
­              ZicroGOD - "O Rúben é inteligente, prontos agora é a segunda"`, true)
            .addField(`**Frases de Darhkmatti**`, stripIndents`
            - "Uma vez chamei-o de burro sem querer, as outras foi todas com vontade e sentimento"
            - "Lembra-te de ver se o cabo de net está ligado. Não te esqueças desta palavra"
            - "Tava a pensar nisso mas de forma completamente diferente"
            - "Trissoma? Não sabes fazer uma quanto mais três."
            - "Sabes isso o que é? A falta de chapada em casa."
            - "A melhor maneira de não te lembrares de nada é esqueceres-te de tudo."
            - "Não existe nada de mal na maneira como jogas CS, simplesmente não sabes jogar."
            - "É tão bonito como o pôr do sol de manhã."
            - "Um iPhone é bom quando pararem de produzir outros telemóveis, e mesmo assim arranjo um Nokia 3310."`, true)
            .addField(`**Frases de Nopearino**`, stripIndents`
            - "Mas tu ca és gajo de filho rico"`, true)
            .addField(`**Frases de SIIIIIIM**`, stripIndents`
            - "Meu carro comprou um cunhado novo"
            - SIIIIIIM- "Quando é que sai o Minecraft Earth?"
­              Nope- "Pó verão."
­              SIIIIIIM- "Bom, assim um gajo vai pa praia fazer castelos de areia."`, true)
            .addField(`**Frases de KARMA**`, stripIndents`
            - "Quando Deus abre uma janela, este gajo abre a porta com cheats"
            - "João Maria José Pedro Envagelista Baptista Jesus dos Santos de Deus Jr"
            - SIIIIIIM - "Ca pastilha!"
­              KARMA - "Tu é que és uma pastilha. Não, mentira, ninguém quer te comer."
            - "Aquele quaralho que foi atropelado por uma trotinete quando tava a prantar semilhas."`, true);

        message.channel.send(embed);
    }
}