const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Eğlence ve Kullanıcı Komutları:**", `bf!banned = Dene ve Gör! \nbf!parti = Parti İle İlgili Gif Gösterir! \nbf!avatarım = Avatarınınızı Gösterir. \nbf!yaz = Bota İstediğiniz Birşeyi Yazdırır. \nbf!herkesebendençay = Herkese Çay Alırsınız. \nbf!koş = Koşarsınız.\nbf!çayiç = Çay İçersiniz. \nbf!çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \nbf!saat = Saati Gösterir. \nbf!çayaşekerat = Çaya Şeker Atarsınız. \nbf!yumruh-at = Yumruk Atarsınız. \nbf!yaz = Bota İstediğiniz Şeyi Yazdırırsınız. \nbf!sunucuresmi = BOT Sunucunun Resmini Atar. \nbf!sunucubilgi = BOT Sunucu Hakkında Bilgi Verir. \nbf!kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. `)
  .addField("**Yetkilisi Komutlar**", `bf!ban = İstediğiniz Kişiyi Sunucudan Banlar. \nbf!temizle = Komutu Yazdığınız Chatteki Mesajları Siler. \nbf!reklamtaraması = Sunucudaki Kişilerin Oynuyor Yerinde Reklam Olup Olmadığını Tespit Eder! \nbf!kick  = İstediğiniz Kişiyi Sunucudan Atar. \nbf!unban = İstediğiniz Kişinin Yasağını Açar. \nbf!sustur = İstediğiniz Kişiyi Susturur. \nbf!oylama = Oylama Açar. \nbf!duyuru = Güzel Bir Duyuru Görünümü Sağlar.`)
  .addField("**Ana Komutlar**", "bf!yardım = BOT Komutlarını Atar. \nbf!bilgi = BOT Kendisi Hakkında Bilgi Verir. \nbf!ping = BOT Gecikme Süresini Söyler. \nbf!davet = BOT Davet Linkini Atar. \nbf!istatistik = BOT İstatistiklerini Atar.")
  .addField("**Yapımcı**", " **Recep | Fides#9190 ve ! NEON ✯ Alysha :crescent_moon: :black_heart: A :black_heart:#8661 ** ")
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bf', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
