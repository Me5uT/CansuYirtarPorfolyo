export interface IServicesContents {
  title: string;
  description: string;
  iconName: string;
}

export const servicesContents: IServicesContents[] = [
  {
    title: "Online Terapi",
    description: `Online terapi, kişilerin konforlu bir ortamda terapi
        almalarını sağlar ve bazı insanlar için geleneksel terapi
        seanslarına gitmek zor olabilirken, online terapi daha erişilebilir
        bir seçenek sunar.`,
    iconName: "VideoChatIcon",
  },
  {
    title: "Yüz yüze terapi",
    description: `Yüz yüze terapi, kişiler için güvenli bir ortam sağlar ve
    terapist, kişinin gizliliğini ve güvenliğini korur. Ayrıca, kişinin
    yüz ifadeleri, beden dili, tonlama ve jestler gibi görsel ipuçları,
    terapistin kişinin duygularını ve düşüncelerini daha iyi anlamasına
    sağlar.`,
    iconName: "QuestionAnswerIcon",
  },
  {
    title: "Oyun terapisi",
    description: `Çocukların duygusal, sosyal ve zihinsel gelişimlerine yardımcı
    olmak, travma sonrası stres bozukluğu, kaygı ve depresyon gibi
    psikolojik sorunlarla başa çıkmalarına yardımcı olmak gibi amaçlar
    için kullanılabilir.`,
    iconName: "ExtensionIcon",
  },
  {
    title: "Filial Terapi",
    description: `Filial terapi, genellikle 3-8 yaş arası çocuklarla çalışmak
    için kullanılır ve çocukların duygusal durumları, aile içi
    ilişkileri ve davranış problemleri ile ilgilenir. Terapist, çocuğun
    yaşına uygun oyunlar ve etkinlikler kullanarak çocukla çalışır ve
    ailelerin terapi sürecine dahil olmalarını sağlar.`,
    iconName: "ChildCareIcon",
  },
];
